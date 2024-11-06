import { NextResponse, type NextRequest } from "next/server";
import { ROOT_URL } from "./setupEnv";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host");
  const subdomain = host?.split(".")[0];

  if (
    subdomain === "www" ||
    subdomain === "landlordking" ||
    subdomain === ROOT_URL ||
    url.pathname.endsWith("/not-found")
  ) {
    return NextResponse.next();
  }

  console.log("url.pathname", url.pathname);

  if (url.pathname.endsWith("/admin")) {
    console.log("admin");
  } else {
    console.log("not admin");
  }
  // if (host?.includes("admin")) {
  //   const redirectUrl = new URL(`${ROOT_URL}`, request.url);
  //   return NextResponse.redirect(redirectUrl);
  // }

  const isValid = isValidSlug(subdomain);

  if (!isValid) {
    const redirectUrl = new URL(
      `${url.protocol}//${ROOT_URL}/not-found`,
      request.url
    );
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.rewrite(
    new URL(`/${subdomain}${url.pathname}${url.search}${url.hash}`, request.url)
  );

  function isValidSlug(slug: string | undefined) {
    if (!slug) return false;
    if (slug === "admin") return true;
    return false;
  }
}

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

import RootHeader from "@/components/main/RootHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" h-screen flex flex-col justify-between bg-black">
      <RootHeader />
      {children}
    </div>
  );
}

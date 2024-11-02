import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" h-screen flex flex-col justify-between bg-black">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

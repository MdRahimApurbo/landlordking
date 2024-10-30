import Board from "@/components/board/Board";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";

export default function Home() {
  return (
    <div className=" h-screen flex flex-col justify-between">
      <Header />
      <div className="p-4">
        <Board />
      </div>
      <Footer />
    </div>
  );
}

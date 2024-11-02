import HomeComponent from "@/components/main/HomeComponent";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="bg-[#3e1a58] p-8 flex flex-col gap-4 justify-center items-center">
          <h2>Land Lord King Game</h2>
          <h2 className="text-xl">All Room</h2>
          <Link href={"/room/dshd"} className="bg-blue-500 text-white p-4">Go to Room</Link>
          <HomeComponent />
        </div>
      </div>
    </div>
  );
}

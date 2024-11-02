import HomeComponent from "@/components/main/HomeComponent";

export default function Home() {
  return (
    <div className="h-screen bg-[url('/images/bg-1.png')]  bg-contain bg-no-repeat bg-bottom bg-[#140f1d]" >
      <div className="flex flex-col justify-center items-center h-full gap-5">
        <HomeComponent />
      </div>
    </div>
  );
}

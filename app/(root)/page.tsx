import HomeComponent from "@/components/main/HomeComponent";

export default function Home() {
  return (
    <div className="h-screen  bg-contain bg-no-repeat bg-bottom bg-background relative">
      <div className="cs_shape left-0 top-0"></div>
      <div className="cs_shape right-0 bottom-0"></div>
      <div className="flex flex-col justify-center items-center h-full gap-5">
        <HomeComponent />
      </div>
    </div>
  );
}
// bg-[url('/images/bg-1.png')]

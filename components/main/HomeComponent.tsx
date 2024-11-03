import Image from "next/image";
import StartingComponents from "./StartingComponents";

const HomeComponent = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <Image src={"/images/ludu.png"} alt="ludu" width={150} height={150} />
        <h2 className="text-white text-3xl font-bold">
          Land Lord <span className="text-primary-200">King</span>{" "}
          <span className="text-primary"> Game</span>
        </h2>
        <p className="text-purple-400">Fantasi Game Play</p>
      </div>
      <StartingComponents />
    </div>
  );
};

export default HomeComponent;

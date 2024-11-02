"use client";
import { Button } from "@nextui-org/react";

const HomeComponent = () => {
    return <div className="bg-[#6647e0] p-8 flex flex-col gap-4 justify-center items-center rounded-lg sahdow-sm border-none">
        <h2 className="text-white text-3xl font-bold">Land Lord King Game</h2>
        <h2 className="text-xl text-white">All Rooms</h2>
        <Button href={"/room/xdftgv"} className="bg-blue-500 text-white p-4 rounded-md">
            Go to Room
        </Button>
    </div>;
};

export default HomeComponent;

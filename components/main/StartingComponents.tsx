"use client";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const StartingComponents = () => {
  const router = useRouter();
  return (
    <div className="p-8 flex flex-col gap-4 justify-center items-center rounded-lg sahdow-sm border-none">
      <Input
        type="text"
        label="Username"
        placeholder="Enter your username"
        labelPlacement="outside"
      />
      <h2 className="text-xl text-white">All Rooms</h2>
      <Button
        color="primary"
        variant="solid"
        className="bg-primary text-white p-4 rounded-md"
        onPress={() => {
          router.push("/room/xdftgv");
        }}
      >
        Go to Room
      </Button>
    </div>
  );
};

export default StartingComponents;

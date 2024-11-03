"use client";
import { Button } from "@nextui-org/react";
import DiceComponent from "../main/DiceComponent";
const MiddleGameBoard = () => {
  return (
    <div className="p-8 text-center text-white">
      <DiceComponent />
      <div>ধনি হবার মজার খেলা</div>
      <div>
        <Button variant="flat" className="bg-white text-primary">
          খেলা শুরু কহ্রী
        </Button>
      </div>
    </div>
  );
};

export default MiddleGameBoard;

"use client";
import { MoveRight } from "lucide-react";
import MiddleGameBoard from "./middle-game-board";

const GameBoard = () => {
  return (
    <div className="col-span-3 flex justify-center items-center ">
      <div className="grid grid-cols-7 grid-rows-7 gap-1 max-h-[840px] fit-content max-w-[800px] ">
        {/* Start Box */}
        <div className="flex items-center justify-center rounded-lg shadow-sm bg-pink-600 col-start-1 row-start-1">
          <div className="p-2 text-center gap-2 space-y-1">
            <h2 className="text-[10px] font-bangla">
              যদি ইহাতে গুটি পোঁছায় বা অতিক্রম করে তবে ব্যাঙ্ক ২০০/= ভাতা দিবে
            </h2>
            <h1 className="text-sm">জাত্রা শুরু</h1>
            <MoveRight size="60" className="h-5 text-center w-full" />
          </div>
        </div>
        {/* Top Row */}
        <div className="flex items-center justify-center border-2 border-black col-span-5 col-start-2 row-start-1 overflow-hidden">
          <div className="flex flex-row flex-nowrap h-full justify-evenly items-center w-full gap-1">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className=" text-center bg-red-400 h-full rounded-lg shadow-sm flex-1 min-w-[55px]"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        {/* Prison Box */}
        <div className="flex items-center justify-center rounded-lg shadow-sm bg-pink-600 col-start-7 row-start-1">
          <div className=" text-center">জেল খানা</div>
        </div>
        {/* Left Row */}
        <div className="flex items-center justify-center border-2 border-black col-start-1 row-start-2 row-span-5">
          <div className="flex flex-col w-full h-full justify-evenly items-center gap-1">
            <div className=" text-center bg-green-600 h-full rounded-lg shadow-sm flex-1 min-h-[55px] w-full overflow-hidden ">
              <div className="rotate-90 select-none h-full w-full flex flex-col justify-between items-center">
                <h2 className="text-[12px] font-bold">গুলশান</h2>
                <div className="bg-red-600 h-full w-full">dsd</div>
              </div>
            </div>
            <div className=" text-center bg-blue-300 h-full rounded-lg shadow-sm flex-1 min-h-[55px] w-full">
              <div className="rotate-90 select-none">
                <h2 className="text-[12px] font-bold text-wrap">কর </h2>
                <h2 className="text-[12px] font-bold text-wrap">পরিশোধ</h2>
              </div>
            </div>
            <div className=" text-center bg-green-600 h-full rounded-lg shadow-sm flex-1 min-h-[55px] w-full">
              <div className="rotate-90 select-none">
                <h2 className="text-[12px] font-bold">বনানী</h2>
              </div>
            </div>
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className=" text-center bg-blue-600 h-full rounded-lg shadow-sm flex-1 min-h-[55px] w-full"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        {/* Center Box */}
        <div className="col-span-5 row-span-5 flex items-center justify-center place-items-center ">
          <MiddleGameBoard />
        </div>
        {/* Right Row */}
        <div className="flex items-center justify-center col-start-7 row-start-2 row-span-5">
          <div className="flex flex-col w-full h-full justify-evenly items-center gap-1">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className=" text-center bg-blue-600 h-full rounded-lg shadow-sm flex-1 min-h-[55px] w-full"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        {/* Go to Prison Box */}
        <div className="flex items-center justify-center rounded-lg shadow-sm bg-pink-600 col-start-1 row-start-7">
          <div className=" text-center">জেলখানায় যাও</div>
        </div>
        {/* Bottom Row */}
        <div className="flex items-center justify-center col-span-5 col-start-2 row-start-7">
          <div className="flex flex-row flex-nowrap h-full justify-evenly items-center w-full gap-1">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className=" text-center bg-red-400 h-full rounded-lg shadow-sm flex-1 min-w-[55px]"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        {/* Sleep Box */}
        <div className="flex items-center justify-center rounded-lg shadow-sm bg-pink-600 col-start-7 row-start-7">
          <div className=" text-center">
            <h2>বিশ্রামাগার</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;

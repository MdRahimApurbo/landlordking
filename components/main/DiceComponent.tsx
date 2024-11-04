"use client";
import "@/style/dicestyleone.css";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const DiceComponent = () => {
  const [firstDiceFace, setFirstDiceFace] = useState(1);
  const [secondDiceFace, setSecondDiceFace] = useState(1);
  const [total, setTotal] = useState(2);
  const [rolling, setRolling] = useState(false);

  const getRandomFace = () => {
    const biasSame = Math.random() < 0.2;
    if (biasSame) {
      const newFace = Math.floor(Math.random() * 6) + 1;
      return [newFace, newFace];
    } else {
      let newFirstFace, newSecondFace;
      do {
        newFirstFace = Math.floor(Math.random() * 6) + 1;
        newSecondFace = Math.floor(Math.random() * 6) + 1;
      } while (
        newFirstFace === firstDiceFace &&
        newSecondFace === secondDiceFace
      );
      return [newFirstFace, newSecondFace];
    }
  };

  const handleRollDice = () => {
    setRolling(true); // Start rolling animation
    setTimeout(() => {
      const [newFirstFace, newSecondFace] = getRandomFace();
      setFirstDiceFace(newFirstFace);
      setSecondDiceFace(newSecondFace);
      setTotal(newFirstFace + newSecondFace); // Calculate total
      setRolling(false); // Stop rolling animation
    }, 600); // Duration matches the CSS animation
  };

  return (
    <div>
      <div className="h-[240px] w-full ">
        <div className="flex flex-row gap-2 justify-center items-center  relative bg-transparent">
          <div className="dice-container ">
            <div
              className={`dice ${
                rolling ? "rolling " : ""
              } transition-all duration-300`}
              style={{
                marginBottom: rolling ? "60px" : "0px",
              }}
              data-face={firstDiceFace}
            >
              {["front", "top", "left", "right", "bottom", "back"].map(
                (direction, index) => (
                  <div key={direction} className={`face ${direction}`}>
                    {Array.from({ length: index + 1 }).map((_, i) => (
                      <span key={i}></span>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="dice-container ">
            <div
              className={`dice ${rolling ? "rolling" : ""}`}
              data-face={secondDiceFace}
              style={{
                marginBottom: rolling ? "60px" : "0px",
              }}
            >
              {["front", "top", "left", "right", "bottom", "back"].map(
                (direction, index) => (
                  <div key={direction} className={`face ${direction}`}>
                    {Array.from({ length: index + 1 }).map((_, i) => (
                      <span key={i}></span>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button
          onClick={handleRollDice}
          size="sm"
          color="primary"
          variant="bordered"
          className="text-white bg-[#2b0b2e]"
        >
          Roll The Dice
        </Button>
      </div>
      <div className="mt-4">
        <p>Total: {total}</p>
      </div>
    </div>
  );
};

export default DiceComponent;

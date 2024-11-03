"use client";
import "@/style/dicestyle.css";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const DiceComponent = () => {
  const [firstDiceFace, setFirstDiceFace] = useState(1);
  const [secondDiceFace, setSecondDiceFace] = useState(1);
  const [total, setTotal] = useState(2);

  // Function to generate a random face, sometimes the same for both dice
  const getRandomFace = () => {
    const biasSame = Math.random() < 0.2; // 20% chance for same value (like 6, 6 or 1, 1)
    if (biasSame) {
      const newFace = Math.floor(Math.random() * 6) + 1;
      return [newFace, newFace]; // Return same value for both dice
    } else {
      let newFirstFace, newSecondFace;
      do {
        newFirstFace = Math.floor(Math.random() * 6) + 1;
        newSecondFace = Math.floor(Math.random() * 6) + 1;
      } while (
        newFirstFace === firstDiceFace &&
        newSecondFace === secondDiceFace
      );
      return [newFirstFace, newSecondFace]; // Different values for dice
    }
  };

  const handleRollDice = () => {
    const [newFirstFace, newSecondFace] = getRandomFace();
    setFirstDiceFace(newFirstFace);
    setSecondDiceFace(newSecondFace);
    setTotal(newFirstFace + newSecondFace); // Calculate total
  };

  return (
    <div>
      <div className="flex flex-row gap-2">
        <div className="dice-container">
          <div className="dice" data-face={firstDiceFace}>
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
        <div className="dice-container">
          <div className="dice" data-face={secondDiceFace}>
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
      <div>
        <Button onClick={handleRollDice}>Roll The Dice</Button>
      </div>
      <div className="mt-4">
        <p>Total: {total}</p>
      </div>
    </div>
  );
};

export default DiceComponent;

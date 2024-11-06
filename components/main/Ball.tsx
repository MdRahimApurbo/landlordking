"use client";
import { Button } from "@nextui-org/react";

interface BallProps {
  color: string;
  w: number;
  h: number;
  onPress?: () => void;
  value?: string;
}

const Ball = ({ color, w, h, onPress, value }: BallProps) => {
  return (
    <Button
      className="px-0 py-0 min-w-fit rounded-full min-h-fit w-fit h-fit"
      onPress={onPress}
    >
      <div className={`w-${w} h-${h} ${color} rounded-full`}></div>
    </Button>
  );
};

export default Ball;

/* <span className="relative flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span> */

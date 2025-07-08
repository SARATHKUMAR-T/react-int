"use client";
import { useOnScreen } from "@/lib/Hooks/useOnScreen";
import { useRef } from "react";

const Element = ({ number }: { number: number }) => {
  const ref: React.Ref<HTMLDivElement> = useRef(null);
  const isVisible = useOnScreen(ref as any);

  return (
    <div
      ref={ref}
      className={`h-64 flex items-center justify-center w-2xl rounded-md ${
        isVisible ? "bg-green-400 h-72  duration-500 drop-shadow-2xl ease-in" : "bg-yellow-300 duration-700 ease-out "
      }`}
    >
      <h2>
      {number}
      {isVisible ? ` I am on screen` : ` I am invisible`}
      </h2>
    </div>
  );
};

const DummyComponent = () => {
  const arr = [];
  for (let i = 0; i < 40; i++) {
    arr.push(<Element key={i} number={i} />);
  }

  return arr;
};

export default DummyComponent;

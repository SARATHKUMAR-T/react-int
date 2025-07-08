"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);
  return (
    <main className="min-h-screen flex items-center justify-center relative ">
      <Button
        onClick={() => {
          setActive(true);
        }}
      >
        Open Modal
      </Button>
      {/* modal */}
      {active && (
        <div className="absolute">
          <div className="w-2xl h-72 rounded-md shadow-2xl bg-amber-300 relative flex items-center justify-center">
            <Button
              onClick={() => {
                setActive(false);
              }}
              className="absolute right-2 top-1 rounded-full"
              size="icon"
            >
              X
            </Button>
            <h1 className="text-2xl">Modal Is Open</h1>
          </div>
        </div>
      )}
    </main>
  );
}

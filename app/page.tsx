"use client";

import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);
  const modalAreaRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [active]);

  const handleClickOutSide = (event: MouseEvent) => {
    const path =
      (event as any).path || (event.composedPath && event.composedPath());

    if (!path.includes(modalAreaRef.current)) {
      setActive(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center relative ">
      <div className="gap-2 flex flex-col items-center justify-center">
        <Button
          onClick={() => {
            setActive(true);
          }}
        >
          Open Modal
        </Button>
        <Link href="/visible" className="text-center flex gap-2">
        <Link2/>
        Visible Page</Link>
      </div>
      {/* modal */}
      {active && (
        <div className="absolute" ref={modalAreaRef}>
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
            <h1 className="text-xl font-bold">Modal Is Open</h1>
          </div>
        </div>
      )}
    </main>
  );
}

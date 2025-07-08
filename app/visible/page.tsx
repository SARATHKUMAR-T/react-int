import DummyComponent from "@/components/dummyComponent";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen w-full bg-gray-200 flex items-center justify-center">
      <div className="flex flex-col gap-10">
      <DummyComponent/>
      </div>
    </div>
  );
}

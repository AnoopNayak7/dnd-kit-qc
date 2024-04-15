"use client";
import Image from "next/image";
import { DndContext } from "@dnd-kit/core";
import DNDCanvas from "@/@custom/components/dnd-space/canvas";
import DNDOptions from "@/@custom/components/dnd-space/options/DNDOptions";
import { useState } from "react";

export default function Home() {
  const [isDropped, setIsDropped] = useState(false);

  console.log("isDroppedisDroppedisDropped", isDropped);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className={`flex h-[87vh] gap-5 mt-5`}>
        <DNDCanvas />
        <DNDOptions />
      </div>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    console.log("handleDragEnd", event);
    if (event.over && event.over.id === "droppable") {
      console.log("event.over && event.over.id === 'droppable'", event.over.id);
      setIsDropped(true);
    }
  }
}

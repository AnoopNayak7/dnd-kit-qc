"use client";
import Image from "next/image";
import { DndContext } from '@dnd-kit/core'
import DNDCanvas from "@/@core/components/dnd-space/canvas";
import DNDOptions from "@/@core/components/dnd-space/options/DNDOptions";

export default function Home() {
  return (
    <DndContext>
      <div className={`flex h-[87vh] gap-5 mt-5`}>
        <DNDCanvas />
        <DNDOptions />
      </div>
    </DndContext>

  );
}

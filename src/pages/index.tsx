import React, { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import DNDCanvas from "@/@custom/components/dnd-space/canvas";
import DNDOptions from "@/@custom/components/dnd-space/options/DNDOptions";
import DNDCard from "@/@custom/components/dnd-space/card";

export default function Home() {
  const [droppedItems, setDroppedItems] = useState([]);

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
      <div className={`flex h-[87vh] gap-5 mt-5`}>
        <DNDCanvas items={droppedItems}/>
        <DNDOptions />
        {/* <DNDCard name="Air Condition" description="Jio Home living" items={droppedItems} /> */}
      </div>
    </DndContext>
  );

  function handleDragEnd(event: { over: { id: string; }; active: { id: any; data: { title: any; }; }; }) {
    if (event.over && event.over.id === "droppable") {
      const droppedItem = { name: event.active.id, compo: event.active.data.title };
      setDroppedItems((prevItems) => [...prevItems, droppedItem]);
    }
  }
}

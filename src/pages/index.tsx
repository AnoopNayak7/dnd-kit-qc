import React, { useCallback, useState } from "react";
import { DndContext, KeyboardSensor, PointerSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core";
import DNDCanvas from "@/@custom/components/dnd-space/canvas";
import DNDOptions from "@/@custom/components/dnd-space/options/DNDOptions";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

export default function Home() {
  const [droppedItems, setDroppedItems] = useState([]);

  console.log("I GUESS", droppedItems);

  const handleDragEnd = useCallback(({ over, active }:any) => {
    console.log("handleDraggable ali idu bandide????????????????????",over )
    if (over && over.id === "droppable") {
      const droppedItem = { name: active.id, compo: active.data.compo };
      setDroppedItems((prevItems) => [...prevItems, droppedItem]);
    }
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners} sensors={sensors}>
      <div className={`flex h-[87vh] gap-5 mt-5`}>
        <DNDCanvas items={droppedItems} />
        <DNDOptions />
      </div>
    </DndContext>
  );
}

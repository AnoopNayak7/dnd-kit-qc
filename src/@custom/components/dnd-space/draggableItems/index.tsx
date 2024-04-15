import { useDraggable } from "@dnd-kit/core";
import React, { FC, ReactNode } from "react";


interface DNDItemDraggableProps {
  key: number;
  name: string;
  compo: ReactNode
}
const DNDItemDraggable: FC<DNDItemDraggableProps> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
    data: {title: props.compo}
  });
  return (
    <div ref={setNodeRef} {...attributes} {...listeners}>
      <div>
        <div className="flex justify-between items-center border p-4 rounded-md">
          <div>{props.name}</div>
          <div>{props.compo}</div>
        </div>
      </div>
    </div>
  );
};

export default DNDItemDraggable;

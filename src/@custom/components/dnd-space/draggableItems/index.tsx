import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React, { FC, ReactNode } from "react";

interface DNDItemDraggableProps {
  name: string;
  showlabel?: boolean;
  compo: any;
}

const DNDItemDraggable: FC<DNDItemDraggableProps> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.name,
    data: { compo: props.compo },
  });

  const styles = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div {...listeners}>
      <div className="z-100" ref={setNodeRef} {...attributes} style={styles}>
        <div className="flex justify-between items-center border p-4 rounded-md">
          {props.showlabel ? <div>{props.name}</div> : null}
           {props.compo}
        </div>
      </div>
    </div>
  );
};

export default DNDItemDraggable;

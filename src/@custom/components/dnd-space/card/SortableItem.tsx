import React, { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: props.id,
  });

  const { transition } = useSortable({
    id: props.id,
    transition: {
      duration: 150,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <li key={props?.index}>
        <div className="flex justify-between items-center border p-4 rounded-md mt-2">
          <div>{props?.items?.name}</div>
          <div>{props?.items?.compo}</div>
        </div>
      </li>
    </div>
  );
}

export default SortableItem;

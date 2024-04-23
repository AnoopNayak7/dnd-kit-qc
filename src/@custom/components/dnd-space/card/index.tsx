import React, { FC, ReactNode } from "react";
import { KeyboardSensor, PointerSensor, useDroppable, useSensor, useSensors } from "@dnd-kit/core";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableItem from "./SortableItem";

interface CardProps {
  name: string | number;
  description: string;
  items: { id:number, name: string; compo: ReactNode }[];
}

const DNDCard: FC<CardProps> = (props) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "droppable"
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const style = {
    backgroundColor: isOver ? "lightblue" : "transparent",
  };

  return (
    <div className="min-w-[400px] bxsdw">
      <Card>
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent ref={setNodeRef} style={style}>
          <SortableContext items={props.items} strategy={verticalListSortingStrategy}>
          {props?.items?.length > 0 ? (
            <ul>
              {props.items.map((item, index) => (
                <SortableItem items={item} key={index} />
              ))}
            </ul>
          ) : (
            <div className="border-dashed border-2 p-4 border-violet-500 text-center bg-violet-100 rounded-sm text-gray-500">
              Please drop here
            </div>
          )}
          </SortableContext>
        </CardContent>
      </Card>
    </div>
  );
};

export default DNDCard;

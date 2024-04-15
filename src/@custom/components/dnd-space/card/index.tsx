// DNDCard.tsx
import React, { FC, ReactNode, useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  name: string;
  description: string;
  item: ReactNode[];
}

const DNDCard: FC<CardProps> = (props) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "droppable"
  });

  const style = {
    backgroundColor: isOver ? "lightblue" : "transparent",
  };

  return (
    <div
      className="min-w-[400px] bxsdw"
    >
      <Card>
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent ref={setNodeRef} style={style}>
          {props.item.length > 0 ? (
            <ul>
              {props?.item?.map((comp: ReactNode, index) => (
                <li key={index}>{comp}</li>
              ))}
            </ul>
          ) : (
            <div className="border-dashed border-2 p-4 border-violet-500 text-center bg-violet-100 rounded-sm text-gray-500">
              Please drop here
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DNDCard;

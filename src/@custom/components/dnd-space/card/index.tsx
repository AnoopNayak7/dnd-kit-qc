import React, { FC, ReactNode } from "react";
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
  items: { name: string; compo: ReactNode }[];
}

const DNDCard: FC<CardProps> = (props) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "droppable"
  });

  const style = {
    backgroundColor: isOver ? "lightblue" : "transparent",
  };

  console.log(props)

  return (
    <div className="min-w-[400px] bxsdw">
      <Card>
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent ref={setNodeRef} style={style}>
          {props?.items?.length > 0 ? (
            <ul>
              {props.items.map((item, index) => (
                <li key={index}>
                  <div className="flex justify-between items-center border p-4 rounded-md mt-2">
                    <div>{item.name}</div>
                    <div>{item.compo}</div>
                  </div>
                </li>
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

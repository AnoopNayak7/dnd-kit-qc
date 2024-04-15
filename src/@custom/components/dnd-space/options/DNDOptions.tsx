// DNDOptions.tsx
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useDraggable } from "@dnd-kit/core";
import DNDItemDraggable from "../draggableItems";

const DropOptions = {
  "on-off": [
    {
      name: "Switch",
      compo: <Switch />,
    },
    {
      name: "Door lock",
      compo: <Switch />,
    },
    {
      name: "Alarm",
      compo: <Switch />,
    },
  ],
  LevelControl: [
    {
      compo: <Slider defaultValue={[33]} max={100} step={1} />,
    },
    {
      compo: <Slider defaultValue={[33]} max={100} step={1} />,
    },
  ],
};

const DNDOptions = () => {

  return (
    <div className="w-[20%]">
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Layout</AccordionTrigger>
          <AccordionContent>
            <div className="mx-2 flex flex-col gap-3">
              <div>Rows</div>
              <Input type="number" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible defaultValue="item-2">
        <AccordionItem value="item-2">
          <AccordionTrigger>Service controls</AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-400">Drag and Drop components</div>
            <div className="mt-3 flex flex-col gap-3">
              <div>On/Off Control</div>
              {DropOptions["on-off"].map((item, index) => (
                <DNDItemDraggable key={index} name={item.name} compo={item.compo} />
              ))}

              <div>LevelControl</div>
              {DropOptions["LevelControl"].map((item, index) => (
                <div key={index}>
                  <div className="border p-4 rounded-md">
                    <div>{item.compo}</div>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default DNDOptions;

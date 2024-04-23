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
import DNDItemDraggable from "../draggableItems";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

const DropOptions = {
  "on-off": [
    {
      id: 1,
      name: "Switch",
      compo: <Switch />,
    },
    {
      id: 2,
      name: "Door lock",
      compo: <Switch />,
    },
    {
      id: 3,
      name: "Alarm",
      compo: <Switch />,
    },
  ],
  LevelControl: [
    {
      id: 1,
      name: "temp",
      compo: <Slider defaultValue={[33]} max={100} step={1} />,
    },
    {
      id: 2,
      name: "speed",
      compo: <Slider defaultValue={[33]} max={100} step={1} />,
    },
  ],
};

const DNDOptions = () => {
  const [color, setColor] = useColor("#561ecb");
  return (
    <div className="w-[20%] overflow-y-scroll">
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
                <DNDItemDraggable showlabel={true} key={index} name={item.name} compo={item.compo} />
              ))}

              <div>LevelControl</div>
              {DropOptions["LevelControl"].map((item, index) => (
                <DNDItemDraggable showlabel={false} key={index} name={item.name} compo={item.compo} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <ColorPicker color={color} onChange={setColor} />;
    </div>
  );
};

export default DNDOptions;

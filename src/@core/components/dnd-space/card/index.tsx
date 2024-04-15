// DNDCard.tsx
import React, { FC, ReactNode } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CardProps {
  name: string;
  description: string;
  item: ReactNode[];
}

const DNDCard: FC<CardProps> = (props) => {
  const { setNodeRef, isOver } = useDroppable({
    id: 'component-drop',
    data: { type: 'droppable' },
  });
  
  const style = {
    backgroundColor: isOver ? 'lightblue' : 'transparent',
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const type = event.dataTransfer.getData('type');
    const name = event.dataTransfer.getData('name');

    if (type === 'switch') {
      console.log('Switch dropped:', name);
    } else if (type === 'slider') {
      console.log('Slider dropped:', name);
    }
  };

  return (
    <div className='min-w-[400px]' onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      <Card>
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent ref={setNodeRef} style={style}>
          <ul>
            {props?.item?.map((comp: ReactNode, index) => (
              <li key={index}>
                {comp}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DNDCard;

import { Active, DataRef, DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { useState } from 'react';
import { TodoCardGrabbing } from './todoCard';
import { SortableData } from '@dnd-kit/sortable';
import { TodoItem } from '@/data';

const DragOverlayWrapper = () => {
  const [draggingComponent, setDraggingComponent] = useState<Active | null>(
    null
  );

  useDndMonitor({
    onDragStart: (event) => {
      setDraggingComponent(event.active);
    },
    onDragCancel: () => {
      setDraggingComponent(null);
    },
    onDragEnd: () => {
      setDraggingComponent(null);
    },
  });

  if (!draggingComponent) return null;

  if (draggingComponent) {
    const typedData = draggingComponent.data as DataRef<
      { cardData: TodoItem } & SortableData
    >;

    const cardData = typedData?.current?.cardData;

    if (cardData) {
      return (
        <DragOverlay>
          <TodoCardGrabbing cardData={cardData} />
        </DragOverlay>
      );
    }
  }
  return (
    <DragOverlay>
      <div>no overlay</div>;
    </DragOverlay>
  );
};

export default DragOverlayWrapper;

import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { useState } from 'react';
import { TodoCardGrabbing } from './todoCard';

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
    const typedData = draggingComponent.data;

    const data = typedData.current ?? { data: {} };

    if (data) {
      return (
        <DragOverlay>
          <TodoCardGrabbing cardData={data.cardData} />
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

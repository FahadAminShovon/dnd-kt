import { ThemeProvider } from '@/components/theme-provider';
import { TodoItem, todoList as todoListData } from './data';
import TodoCard from './components/ui/todoCard';
import Container from './components/ui/container';
import { useState } from 'react';
import {
  DataRef,
  DndContext,
  DragEndEvent,
  MouseSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  SortableData,
  arraySwap,
  rectSwappingStrategy,
} from '@dnd-kit/sortable';
import DragOverlayWrapper from './components/ui/dragOverlayWrapper';

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>(todoListData);

  const toggleCompleted = (id: string) => {
    const updatedList = todoList.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(updatedList);
  };

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });

  const sensors = useSensors(mouseSensor);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id && over.id) {
      if (active.id !== over.id) {
        const typedOverData = over.data as DataRef<
          { cardData: TodoItem } & SortableData
        >;
        if (!typedOverData.current?.cardData.isDraggable) return;

        setTodoList((items) => {
          const oldIndex = todoList.findIndex((todo) => todo.id === active.id);
          const newIndex = todoList.findIndex((todo) => todo.id === over.id);
          return arraySwap(items, oldIndex, newIndex);
        });
      }
    }
  }

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='h-full w-full flex justify-center items-center'>
        <Container alignment='flex'>
          <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
            <SortableContext
              items={todoList.filter((todo) => todo.isDraggable)}
              strategy={rectSwappingStrategy}
            >
              {todoList.map((todo) => (
                <TodoCard
                  cardData={todo}
                  key={todo.id}
                  toggleCompleted={toggleCompleted}
                />
              ))}
            </SortableContext>
            <DragOverlayWrapper />
          </DndContext>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

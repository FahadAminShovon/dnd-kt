import { ThemeProvider } from '@/components/theme-provider';
import { TodoItem, todoList as todoListData } from './data';
import TodoCard from './components/ui/todoCard';
import Container from './components/ui/container';
import { useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, arraySwap } from '@dnd-kit/sortable';

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
            <SortableContext items={todoList}>
              {todoList.map((todo) => (
                <TodoCard
                  cardData={todo}
                  key={todo.id}
                  toggleCompleted={toggleCompleted}
                />
              ))}
            </SortableContext>
          </DndContext>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

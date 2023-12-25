import { ThemeProvider } from '@/components/theme-provider';
import { TodoItem, todoList as todoListData } from './data';
import TodoCard from './components/ui/todoCard';
import Container from './components/ui/container';
import { useState } from 'react';

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
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='h-full w-full flex justify-center items-center'>
        <Container alignment='flex'>
          {todoList.map((todo) => (
            <TodoCard
              cardData={todo}
              key={todo.id}
              toggleCompleted={toggleCompleted}
            />
          ))}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

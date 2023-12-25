import { ThemeProvider } from '@/components/theme-provider';
import { todoList } from './data';
import TodoCard from './components/ui/todoCard';
import Container from './components/ui/container';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='h-full w-full flex justify-center items-center'>
        <Container alignment='flex'>
          {todoList.map((todo) => (
            <TodoCard cardData={todo} key={todo.id} />
          ))}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

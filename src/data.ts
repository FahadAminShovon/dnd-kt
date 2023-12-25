export interface TodoItem {
  id: string;
  title: string;
  description: string;
  isDraggable: boolean;
  isCompleted: boolean;
}

export const todoList: TodoItem[] = [
  {
    id: '1a2b3c',
    title: 'Task 1',
    description: 'Complete assignment',
    isDraggable: false,
    isCompleted: false,
  },
  {
    id: '4d5e6f',
    title: 'Task 2',
    description: 'Buy groceries',
    isDraggable: false,
    isCompleted: false,
  },
  {
    id: '7g8h9i',
    title: 'Task 3',
    description: 'Go for a run',
    isDraggable: true,
    isCompleted: false,
  },
  {
    id: 'j1k2l3',
    title: 'Task 4',
    description: 'Read a book',
    isDraggable: true,
    isCompleted: false,
  },
  {
    id: '4m5n6o',
    title: 'Task 5',
    description: 'Attend meeting',
    isDraggable: false,
    isCompleted: false,
  },
  {
    id: '7p8q9r',
    title: 'Task 6',
    description: 'Call a friend',
    isDraggable: true,
    isCompleted: false,
  },
  {
    id: 's1t2u3',
    title: 'Task 7',
    description: 'Write code',
    isDraggable: true,
    isCompleted: false,
  },
  {
    id: '4v5w6x',
    title: 'Task 8',
    description: 'Clean the house',
    isDraggable: false,
    isCompleted: false,
  },
  {
    id: '7y8z9a',
    title: 'Task 9',
    description: 'Watch a movie',
    isDraggable: true,
    isCompleted: false,
  },
  {
    id: 'b1c2d3',
    title: 'Task 10',
    description: 'Plan vacation',
    isDraggable: false,
    isCompleted: false,
  },
];

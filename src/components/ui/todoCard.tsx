import { TodoItem } from '@/data';
import { Card, CardDescription, CardTitle } from './card';
import { cn } from '@/lib/utils';

export const TodoCardPlaceholder = () => {
  return (
    <Card className={cn('px-4 py-2 bg-slate-500 w-[400px]')}>
      <CardTitle>&nbsp;</CardTitle>
      <CardDescription>&nbsp;</CardDescription>
    </Card>
  );
};

type PropType = {
  cardData: TodoItem;
};

const TodoCard = ({
  cardData: { title, description, isDraggable },
}: PropType) => {
  return (
    <Card
      className={cn('px-4 py-2  w-[400px]', {
        'cursor-grab hover:bg-slate-800': isDraggable,
        'bg-slate-700 ': !isDraggable,
      })}
    >
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

export default TodoCard;

export const TodoCardGrabbing = ({
  cardData: { title, description },
}: PropType) => {
  return (
    <Card className={cn('px-4 py-2  w-[400px] cursor-grabbing rotate-3')}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

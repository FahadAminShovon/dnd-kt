import { TodoItem } from '@/data';
import { Card, CardDescription, CardTitle } from './card';
import { cn } from '@/lib/utils';
import { Checkbox } from './checkbox';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const TodoCardPlaceholder = () => {
  return (
    <div>
      <CardTitle>&nbsp;</CardTitle>
      <CardDescription>&nbsp;</CardDescription>
    </div>
  );
};

type PropType = {
  cardData: TodoItem;
};

const TodoCard = ({
  cardData,
  toggleCompleted,
}: PropType & {
  toggleCompleted: (id: string) => void;
}) => {
  const { title, description, isDraggable, isCompleted, id } = cardData;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    disabled: !isDraggable,
    data: { cardData },
    animateLayoutChanges: () => false,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      className={cn('px-4 py-2  w-[400px]', {
        'cursor-grab hover:bg-slate-800': isDraggable,
        'bg-slate-700 ': !isDraggable,
      })}
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
    >
      {isDragging && <TodoCardPlaceholder />}
      {!isDragging && (
        <div className='flex justify-between items-center'>
          <div>
            <CardTitle className={cn({ 'line-through': isCompleted })}>
              {title}
            </CardTitle>
            <CardDescription className={cn({ 'line-through': isCompleted })}>
              {description}
            </CardDescription>
          </div>
          <Checkbox
            className='cursor-pointer'
            checked={isCompleted}
            onClick={() => {
              toggleCompleted(id);
            }}
          />
        </div>
      )}
    </Card>
  );
};

export default TodoCard;

export const TodoCardGrabbing = ({
  cardData: { title, description, isCompleted },
}: PropType) => {
  return (
    <Card
      className={cn('px-4 py-2  w-[400px] cursor-grabbing rotate-3 h-[20]')}
    >
      <CardTitle className={cn({ 'line-through': isCompleted })}>
        {title}
      </CardTitle>
      <CardDescription className={cn({ 'line-through': isCompleted })}>
        {description}
      </CardDescription>
    </Card>
  );
};

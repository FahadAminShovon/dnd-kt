import { cn } from '@/lib/utils';
import React from 'react';
import { Card } from './card';

type PropType = {
  children: React.ReactNode;
  alignment: 'flex' | 'grid';
};

const Container = ({ alignment, children }: PropType) => {
  return (
    <Card
      className={cn('gap-2 p-4 bg-slate-600', {
        'flex flex-col justify-center items-center': alignment === 'flex',
        'grid grid-cols-2': alignment === 'grid',
      })}
    >
      {children}
    </Card>
  );
};

export default Container;

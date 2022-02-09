import React, {ReactNode} from 'react';

const Col = (
  {
    children,
    col = 'col',
    className
  }: {children: ReactNode; col: string; className?: string;}) => {
  return (
    <div className={`${col} ${className ?? ''}`}>
      {children}
    </div>
  );
};

export default Col;;
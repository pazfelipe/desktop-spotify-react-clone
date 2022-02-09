import React, {ReactNode} from 'react';

const Row = ({children, className}: {children: ReactNode; className?: string;}) => {
  return (
    <div className={`row ${className ?? ''}`}>
      {children}
    </div>
  );
};

export default Row;
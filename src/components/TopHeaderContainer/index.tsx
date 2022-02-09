import React, {ReactNode} from 'react';
import {useSelector} from 'react-redux';

import {Button} from 'primereact/button';

const TopHeaderContainer = ({children}: {children: ReactNode;}) => {

  const solid = useSelector((state: {ui: Record<string, any>;}) => state.ui.solid);

  return (
    <div className={`main-top-bar px-3 ${solid}`}>
      <div>
        <Button
          className='p-button p-button-sm p-button-link text-white'
          icon='pi pi-chevron-left' />
        <Button
          className='p-button p-button-sm p-button-link text-white'
          icon='pi pi-chevron-right' />
      </div>
      {children}
      <div>
        menu
      </div>
    </div>
  );
};

export default TopHeaderContainer;
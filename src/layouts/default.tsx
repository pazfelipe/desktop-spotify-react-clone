import React, {ReactNode} from 'react';
import LeftMenu from '../components/LeftMenu';
import MainContainer from '../components/MainContainer';
import Player from '../components/Player';

const DefaultLayout = ({children}: {children: ReactNode;}) => {
  return (
    <div className='default-layout'>
      <LeftMenu />
      <MainContainer>
        {children}
      </MainContainer>
      <aside className='menu-asides'>
        right side
      </aside>
      <Player />
    </div>
  );
};

export default DefaultLayout;
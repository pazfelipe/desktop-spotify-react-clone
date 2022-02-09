import React, {ReactNode} from 'react';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

const MainContainer = ({children}: {children: ReactNode;}) => {

  const dispatch = useDispatch();

  const handleScroll = useCallback((event: React.UIEvent<HTMLElement, UIEvent>) => {
    const element = event.currentTarget as unknown as HTMLElement;

    dispatch({
      type: 'TOP_BAR_SOLID',
      payload: {
        solid: element.scrollTop > 70 ? 'solid' : ''
      }
    });
  }, [dispatch]);

  return (
    <main
      className='main-container'
      onScroll={event => handleScroll(event)}
    >

      {children}
    </main>
  );
};

export default MainContainer;
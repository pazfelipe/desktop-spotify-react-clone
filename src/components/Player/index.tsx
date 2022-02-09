import React, {useEffect} from 'react';
import Col from '../ui/Col';
import Row from '../ui/Row';

import {Button} from 'primereact/button';
import ButtonPlay from './ButtonPlay';

const Player = () => {

  const [progressBarVisible, setProgressBarVisible] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  const onHandleMouseUp = () => {
    setClicked(false);
  };

  useEffect(() => {
    if(!clicked) {
      setProgressBarVisible(false);
    }
  }, [clicked]);

  return (
    <section className='default-player px-3'>
      <Row className='d-flex align-center full-h'>
        <Col col={'col'}>Thumbnail</Col>
        <Col col={'col'} className='text-center'>
          <div className='player-container-actions'>
            <div className='player-container-actions--btns'>
              <Button
                className='p-button-rounded p-butto-xs p-button-text text-white'
                icon='pi pi-play'
                disabled
              />
              <Button
                className='p-button-rounded p-butto-xs p-button-text text-white'
                icon='pi pi-step-backward-alt'

              />
              <ButtonPlay />
              <Button
                className='p-button-rounded p-butto-xs p-button-text text-white'
                icon='pi pi-step-forward-alt'

              />
              <Button
                className='p-button-rounded p-butto-xs p-button-text text-white'
                icon='pi pi-replay'
                disabled
              />
            </div>
            <div className='player-progress-bar'
              onMouseOver={() => setProgressBarVisible(true)}
              onMouseLeave={() => setProgressBarVisible(clicked ? true : false)}
            >
              <span
                className={`range ${progressBarVisible ? 'visible' : ''}`}
              >
                <span
                  onMouseDown={() => setClicked(true)}
                  onMouseUp={onHandleMouseUp}
                ></span>
              </span>
            </div>
          </div>
        </Col>
        <Col col={'col'} className='text-right'>menu</Col>
      </Row>
    </section>
  );
};

export default Player;
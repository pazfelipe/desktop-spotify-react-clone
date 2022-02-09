import React from 'react';
import {useNavigate} from 'react-router-dom';
import ButtonPlaySong from '../ButtonPlaySong';

const image = 'https://previews.123rf.com/images/mamanamsai/mamanamsai1511/mamanamsai151100410/49124776-dise%C3%B1o-canci%C3%B3n-del-disco-en-el-fondo-de-papel-viejo-vector.jpg';

const CardSong = ({name, id}: {name: string, id: number;}) => {

  const navigate = useNavigate();
  const onNavigate = () => {
    navigate(`/playlist/${id}`);
  };

  return (
    <div className='card-song--smaller' >
      <div className='card-song--smaller-container' onClick={onNavigate}>
        <div className='card-song--smaller-thumbnail'>
          <img src={image} alt='Disk' />
        </div>
        <div className='card-song--smaller-body'>
          <span>
            {name}
          </span>
        </div>
      </div>
      <ButtonPlaySong
        songId={undefined}
        playlistId={id}
      />
    </div>
  );
};

export default CardSong;
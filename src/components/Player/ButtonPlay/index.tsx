import React from 'react';

import {Button} from 'primereact/button';
import {useDispatch, useSelector} from 'react-redux';

interface IPlayingSong {
  songs: {
    playing: Boolean;
    song: number;
    playlist: number;
  };
}

const ButtonPlay = () => {
  const {playing, song, playlist} = useSelector((state: IPlayingSong) => state.songs);

  const dispatch = useDispatch();

  const onPlaySong = () => {
    if(!song && !playlist) {
      return;
    }
    dispatch({type: 'SET_PLAYING', payload: {song, playlist, playing: !playing}});
  };

  return (
    <Button
      className='p-button-rounded px-3 py-3 bg-white text-black'
      icon={`pi pi-${playing ? 'pause' : 'play'}`}
      disabled={!song && !playlist}
      onClick={onPlaySong}
    />
  );
};

export default ButtonPlay;
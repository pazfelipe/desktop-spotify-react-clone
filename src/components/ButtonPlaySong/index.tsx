import React, {useEffect} from 'react';
import {Button} from 'primereact/button';
import {useDispatch, useSelector} from 'react-redux';

const ButtonPlaySong = ({songId, playlistId}: {songId?: number, playlistId?: number;}) => {

  const [play, setPlay] = React.useState(false);
  const dispatch = useDispatch();

  const currentPlaying = useSelector((state: {
    songs: {
      playing: boolean,
      song: number,
      playlist: number;
    };
  }
  ) => state.songs);

  const onHandleClick = () => {
    setPlay(!play);
  };

  useEffect(() => {
    dispatch({
      type: 'SET_PLAYING',
      payload: {
        playing: play,
        song: play ? songId : undefined,
        playlist: play ? playlistId : undefined
      }
    });

  }, [play, songId, playlistId, dispatch]);

  useEffect(() => {
    if(currentPlaying.playlist === undefined) return;
    if(currentPlaying.playlist !== playlistId || currentPlaying.song !== songId) {
      setPlay(false);
    }
  }, [currentPlaying, playlistId, songId]);


  return (
    <Button
      className={`p-button-rounded btn-action px-4 py-4 ${play ? 'btn-playing' : ''}`}
      icon={play ? 'pi pi-pause' : 'pi pi-play'}
      onClick={() => onHandleClick()}
    />
  );
};

export default ButtonPlaySong;
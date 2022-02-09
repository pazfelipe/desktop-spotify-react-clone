import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
// import Col from '../components/ui/col';
// import Row from '../components/ui/row';
import DefaultLayout from '../layouts/default';
import {IPlaylist} from '../types/Playlist';

const Playlist = () => {

  const {id} = useParams();
  const playlists = useSelector((state: {playlists: {playlists: IPlaylist[];};}) => state.playlists);
  let playlist: IPlaylist = {id: 0, name: ''};

  if(Number(id) === 999) {
    playlist = {
      name: 'Liked Songs',
      id: 999
    };
  } else {
    playlist = playlists.playlists.find((p: {id: number; name: string;}) => p.id === Number(id))!;
  }


  return (
    <DefaultLayout>
      <div className='container-home'>
        <h1>
          {playlist.name}
        </h1>
      </div>
    </DefaultLayout>
  );
};

export default Playlist;
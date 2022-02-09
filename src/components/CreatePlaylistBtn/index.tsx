import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import {IStorePlaylist} from '../../types/Playlist';

const CreatePlaylistButton = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const history = useLocation();
  const {playlists} = useSelector((state: {playlists: IStorePlaylist;}) => state.playlists);

  const handleClick = () => {

    if(/^(\/playlist\/\d{1,})(\/?)$/g.test(history.pathname)) {
      return;
    }

    const payload = {
      id: playlists.length + 1,
      name: 'My Playlist #' + (playlists.length + 1),
    };

    dispatch({
      type: 'CREATE_PLAYLIST',
      payload
    });

    navigate(`/playlist/${payload.id}`);
  };

  return (
    <div>
      <button
        className='btn btn-create-playlist'
        onClick={handleClick}
      >
        <i className='pi pi-plus'></i>
        Create Playlist
      </button>
    </div>
  );
};

export default CreatePlaylistButton;
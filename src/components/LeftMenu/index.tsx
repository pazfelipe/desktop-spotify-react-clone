import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {IStorePlaylist} from '../../types/Playlist';
import CreatePlaylistButton from '../CreatePlaylistBtn';
import PlayListContainer from '../Playlist';

const LeftMenu = () => {

  const playlists = useSelector((state: {playlists: IStorePlaylist;}) => {
    return state.playlists.playlists;
  });

  return (
    <aside className='px-2 py-5 left-menu menu-asides'>
      <ul>
        <li>
          <NavLink to='/'>
            <i className='pi pi-home'></i>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/search'>
            <i className='pi pi-search'></i>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to='/library'>
            <i className='pi pi-folder'></i>
            Your Library
          </NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <CreatePlaylistButton />
        </li>
        <li>
          <NavLink to="/playlist/999">
            <i className='pi pi-heart' />
            Liked Songs
          </NavLink>
        </li>
      </ul>
      <hr />
      <div>
        <PlayListContainer playlists={playlists} />
      </div>
    </aside>
  );
};

export default LeftMenu;
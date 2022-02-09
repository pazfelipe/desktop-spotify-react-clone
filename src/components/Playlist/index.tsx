import React from 'react';
import {IStorePlaylist} from '../../types/Playlist';
import ItemPlaylist from './Item';

const PlayListContainer = ({playlists}: IStorePlaylist) => {
  return (
    <div>
      <ul>
        {
          playlists
            .map((playlist: {id: number; name: string;}) =>
              <li key={playlist.id}>
                <ItemPlaylist {...playlist} />
              </li>
            )
        }
      </ul>
    </div>
  );
};

export default PlayListContainer;
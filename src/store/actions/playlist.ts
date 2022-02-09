import playlists from '../../database/playlists.json';
import {IStorePlaylist} from '../../types/Playlist';

const INITIAL_STATE = {
  playlists,
  playing: {
    playlist: null,
    song: null,
    isPlaying: false
  }
};

const updatePlaylist = (state: IStorePlaylist, payload: {id: number; name: string;}) => {
  const {id, name} = payload;

  return {
    ...state,
    playlists: state.playlists.map(playlist => {
      if(playlist.id === id) {
        return {
          ...playlist,
          name,

        };
      }
      return playlist;
    })
  };

};

const reducer = (
  state = INITIAL_STATE,
  action: {type: String, payload: {id: number; name: string;} | string | number;}) => {
  switch(action.type) {
    case 'CREATE_PLAYLIST':
      return {
        ...state,
        playlists: [action.payload, ...state.playlists]
      };
    case 'UPDATE_PLAYLIST':
      // @ts-ignore
      return updatePlaylist(state, action.payload);;
    case 'DELETE_PLAYLIST':
      return {
        ...state,
        playlists: state
          .playlists
          .filter((playlist: {id: number, name: string;}) => playlist.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
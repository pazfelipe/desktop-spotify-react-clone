const INITIAL_STATE = {
  playing: false,
  song: undefined,
  playlist: undefined
};

const reducer = (state = INITIAL_STATE, action: {type: String, payload: {playing: boolean, song?: number; playlist?: number;};}) => {
  switch(action.type) {
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.payload.playing,
        song: action.payload.song,
        playlist: action.payload.playlist
      };
    default:
      return state;
  }
};

export default reducer;
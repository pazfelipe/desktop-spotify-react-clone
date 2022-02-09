import {createStore} from 'redux';
import {combineReducers} from 'redux';

import uiReducer from './actions/ui-actions';
import playlists from './actions/playlist';
import songs from './actions/songs';

const reducers = combineReducers({
  ui: uiReducer,
  playlists,
  songs
});

const store = createStore(reducers);

export default store;
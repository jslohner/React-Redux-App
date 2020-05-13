import { combineReducers } from 'redux';
import { characterReducer as characters } from './characterReducer.js';
import { episodeReducer as episodes } from './episodeReducer.js';
import { locationReducer as locations } from './locationReducer.js';

export default combineReducers({
	characters,
	episodes,
	locations
});

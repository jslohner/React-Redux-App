import { combineReducers } from 'redux';
import { characterReducer as character } from './characterReducer.js';
import { episodeReducer as episode } from './episodeReducer.js';
import { locationReducer as location } from './locationReducer.js';

export default combineReducers({
	character,
	episode,
	location
});

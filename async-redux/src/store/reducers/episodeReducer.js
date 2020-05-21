import { FETCH_EPISODES_START, FETCH_EPISODES_SUCCESS } from '../actions';

export const initialState = {
	isFetching: false,
	episodeData: null
};

export const episodeReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_EPISODES_START:
			return {
				...state,
				isFetching: true
			};
		case FETCH_EPISODES_SUCCESS:
			return {
				...state,
				isFetching: false,
				episodeData: action.payload
			};

		default:
			return state;
	}
};

import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS } from '../actions';

export const initialState = {
	isFetching: false,
	characterData: null
};

export const characterReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CHARACTERS_START:
			return {
				...state,
				isFetching: true
			};
		case FETCH_CHARACTERS_SUCCESS:
			return {
				...state,
				isFetching: false,
				characterData: action.payload
			};

		default:
			return state;
	}
};

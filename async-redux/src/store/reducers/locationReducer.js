import { FETCH_LOCATIONS_START, FETCH_LOCATIONS_SUCCESS } from '../actions';

export const initialState = {
	isFetching: false,
	locationData: null
};

export const locationReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_LOCATIONS_START:
			return {
				...state,
				isFetching: true
			};
		case FETCH_LOCATIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				locationData: action.payload
			};

		default:
			return state;
	}
};

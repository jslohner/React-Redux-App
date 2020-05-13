import axios from 'axios';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS ='FETCH_CHARACTERS_SUCCESS';
export const fetchCharacters = () => {
	return dispatch => {
		dispatch({ type: FETCH_CHARACTERS_START });

		axios.get('https://rickandmortyapi.com/api/character')
			.then(res => {
				dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results });
			})
			.catch(err => {
				console.log(err);
			});
	};
};

export const FETCH_EPISODES_START = 'FETCH_EPISODES_START';
export const FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS';
export const fetchEpisodes = () => {
	return dispatch => {
		dispatch({ type: FETCH_EPISODES_START });

		axios.get('https://rickandmortyapi.com/api/episode')
			.then(res => {
				dispatch({ type: FETCH_EPISODES_SUCCESS, payload: res.data.results })
			})
			.catch(err => {
				console.log(err);
			});
	};
};

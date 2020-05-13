import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Episode from './Episode.js';

function Episodes() {
	// useEffect(() => {
	// 	axios.get('https://rickandmortyapi.com/api/episode')
	// 		.then(res => {
	// 			console.log(res);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// }, []);

	return (
		<div className='episode-page'>
			<h2>Episodes</h2>
			<Episode />
		</div>
	);
}

export default Episodes;

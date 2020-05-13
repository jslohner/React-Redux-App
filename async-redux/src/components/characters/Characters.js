import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Character from './Character.js';

function Characters(props) {
	// useEffect(() => {
	// 	axios.get('https://rickandmortyapi.com/api/character')
	// 		.then(res => {
	// 			console.log(res);
	// 			// res.data.results
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// }, []);

	return (
		<div>
			<h2>Characters</h2>
			<Character />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		characters: state.characters
	};
};

export default connect(mapStateToProps, {})(Characters);

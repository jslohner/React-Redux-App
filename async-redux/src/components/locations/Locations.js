import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Location from './Location.js';

function Locations() {
	// useEffect(() => {
	// 	axios.get('https://rickandmortyapi.com/api/location')
	// 		.then(res => {
	// 			console.log(res);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// }, []);

	return (
		<div>
			<h2>Locations</h2>
			<Location />
		</div>
	);
}

export default Locations;

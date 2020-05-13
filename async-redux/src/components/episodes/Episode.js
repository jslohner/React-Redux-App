import React from 'react';
import { connect } from 'react-redux';

function Episode(props) {
	return (
		<div className='episode'>
			<h3>{props.episode.name}</h3>
			<p>Episode - {props.episode.episode}</p>
			<p>Air Date - {props.episode.air_date}</p>
		</div>
	);
}

export default connect(null, {})(Episode);

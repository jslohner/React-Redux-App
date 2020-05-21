import React from 'react';
import { connect } from 'react-redux';

function Location(props) {
	return (
		<div className='location'>
			<h3>{props.location.name}</h3>
			<p>Dimension - {props.location.dimension}</p>
			<p>Type - {props.location.type}</p>
		</div>
	);
}

export default connect(null, {})(Location);

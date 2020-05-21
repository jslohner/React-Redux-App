import React from 'react';
import { connect } from 'react-redux';

function Character(props) {
	return (
		<div className='character'>
			<h3>Name - {props.character.name}</h3>
			<img src={props.character.image} alt='character avatar'/>
			<p>Gender - {props.character.gender}</p>
			<p>Species - {props.character.species}</p>
			<p>Status - {props.character.status}</p>
		</div>
	);
}

export default connect(null, {})(Character);

// created: "2017-11-04T18:48:46.250Z"
// gender: "Male"
// id: 1
// image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
// location: {name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20"}
// name: "Rick Sanchez"
// origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"}
// species: "Human"
// status: "Alive"
// type: ""
// url: "https://rickandmortyapi.com/api/character/1"

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../../store/actions';

import Character from './Character.js';

function Characters({ fetchCharacters, isFetching, characterData }) {
	useEffect(() => {
		fetchCharacters();
	}, []);

	return (
		<div className='character-page'>
			<h2>Characters</h2>
			{isFetching && <h3>Fetching Character Data...</h3>}
			{!isFetching && characterData && (
				characterData.map((char, idx) => {
					return <Character key={char.id} character={char}/>
				})
			)}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		isFetching: state.characters.isFetching,
		characterData: state.characters.characterData
	};
};

export default connect(mapStateToProps, { fetchCharacters })(Characters);

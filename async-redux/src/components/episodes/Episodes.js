import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEpisodes } from '../../store/actions';

import Episode from './Episode.js';

function Episodes({ fetchEpisodes, isFetching, episodeData }) {

	useEffect(() => {
		fetchEpisodes();
	}, []);

	return (
		<div className='episode-page'>
			<h2>Episodes</h2>
			{isFetching && <h3>Fetching Episode Data...</h3>}
			{!isFetching && episodeData && (
				episodeData.map(episode => {
					return <Episode key={episode.id} episode={episode}/>
				})
			)}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		isFetching: state.episodes.isFetching,
		episodeData: state.episodes.episodeData
	};
};

export default connect(mapStateToProps, { fetchEpisodes })(Episodes);

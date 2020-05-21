import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../../store/actions';

import Location from './Location.js';

function Locations({ fetchLocations, isFetching, locationData }) {

	useEffect(() => {
		fetchLocations();
	}, []);

	return (
		<div className='location-page'>
			<h2>Locations</h2>
			{isFetching && <h3>Fetching Location Data...</h3>}
			{!isFetching && locationData && (
				locationData.map(location => {
					return <Location key={location.id} location={location}/>
				})
			)}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		isFetching: state.locations.isFetching,
		locationData: state.locations.locationData
	};
};

export default connect(mapStateToProps, { fetchLocations })(Locations);

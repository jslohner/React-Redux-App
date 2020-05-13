import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className='home-page'>
			<h1>Home Page</h1>
			<div className='page-links'>
				<Link to='/characters'>Characters</Link>
				<Link to='/episodes'>Episodes</Link>
				<Link to='/locations'>Locations</Link>
			</div>
		</div>
	);
}

export default Home;

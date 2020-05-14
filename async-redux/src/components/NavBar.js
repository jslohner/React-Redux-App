import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav className='navbar'>
			<Link to='/'>Home</Link>
			<Link to='/characters'>Characters</Link>
			<Link to='/episodes'>Episodes</Link>
			<Link to='/locations'>Locations</Link>
		</nav>
	);
}

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

import Home from './Home.js';
import Characters from './characters/Characters.js';
import Episodes from './episodes/Episodes.js';
import Locations from './locations/Locations.js';

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

import React from 'react';

import './App.css';

import Characters from './components/characters/Characters.js';
import Episodes from './components/episodes/Episodes.js';
import Locations from './components/locations/Locations.js';

function App() {
	return (
		<div className='App'>
			<Characters />
			<Episodes />
			<Locations />
		</div>
	);
}

export default App;

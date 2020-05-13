import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home.js';
import Characters from './components/characters/Characters.js';
import Episodes from './components/episodes/Episodes.js';
import Locations from './components/locations/Locations.js';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route>
					<Characters path='/characters'/>
				</Route>

				<Route>
					<Episodes path='/episodes'/>
				</Route>

				<Route>
					<Locations path='/locations'/>
				</Route>
			</Switch>
		</div>
	);
}

export default App;

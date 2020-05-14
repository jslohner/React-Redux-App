import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import Characters from './components/characters/Characters.js';
import Episodes from './components/episodes/Episodes.js';
import Locations from './components/locations/Locations.js';

function App() {
	return (
		<div className='App'>
			<Route path='/'>
				<NavBar />
			</Route>

			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route path='/characters'>
					<Characters />
				</Route>

				<Route path='/episodes'>
					<Episodes />
				</Route>

				<Route path='/locations'>
					<Locations />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

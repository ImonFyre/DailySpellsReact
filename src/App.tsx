import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom"
import { Character } from './contents/Character';
import { Navigation } from './components/Navigation';



class App extends React.Component
{
	render()
	{
		return (

				<Router>
					<main>
						<nav>
							<Navigation  />
						</nav>

						<Route path='/character/:id'
							render={props => (<Character data={props.match.params.id} />)}>
						</Route>
					</main>
				</Router>

		);
	}

}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import {BrowserRouter as Router, Route} from "react-router-dom"
import { Character } from './contents/Character';
import { Navigation } from './components/Navigation';
import { Home } from './contents/Home';



class App extends React.Component
{
	render()
	{
		return (
				<Router>
					<main>
						<nav id='sidebar'>
							<Navigation  />
						</nav>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path='/character/:id'
							render={props => (<Character data={props.match.params.id} />)}>
						</Route>
					</main>
				</Router>
		);
	}
}

export default App;

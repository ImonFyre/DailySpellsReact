import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Character } from './contents/Character';
import { Navigation } from './components/Navigation';
import { Home } from './contents/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/App.css';

class App extends React.Component
{
	render()
	{
		return (
				<>
				<Router>
					<main>
						<input type="checkbox" className="menuToggle" />
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
				<ToastContainer limit={5} draggable={true} />
				</>
		);
	}
}

export default App;

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
						<input id="menuToggle" type="checkbox" className="menuToggle" />
						<nav id='sidebar' className="p-0 pl-md-3 pt-md-3">
							<Navigation  />
						</nav>
						<section className="headerBar">
							<label htmlFor="menuToggle">
								<svg viewBox="0 0 100 80" width="40" height="40" >
									<rect width="100" height="20"></rect>
									<rect y="30" width="100" height="20"></rect>
									<rect y="60" width="100" height="20"></rect>
								</svg>
							</label>
						</section>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path='/character/:id'
							render={props => (<>

												<Character data={props.match.params.id} />
											</>)}>
						</Route>
					</main>
				</Router>
				<ToastContainer limit={5} draggable={true} />
				</>
		);
	}
}

export default App;

import React from 'react';
import './App.css';
import { ICharactersProp } from './components/interfaces/customInputProps';

import {BrowserRouter as Router, Route, useLocation} from "react-router-dom"
import { NavItem } from './components/NavItem';
import { Character } from './contents/Character';



class App extends React.Component<ICharactersProp>
{
	render()
	{
		let nav = this.props.characters.map((c,idx) => {
			return <NavItem tolink={`/character/${idx}`} item={c.name} />
		})
		return (
			<main>
				<Router>
					{nav}
					<Route path='/character/:id'
							render={props => (
								<Character character={this.props.characters[props.match.params.id]} />
							)
						} />

				</Router>
			</main>
		);
	}
}

export default App;

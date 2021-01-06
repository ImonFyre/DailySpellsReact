import React from 'react';
import './App.css';
import { ICharacterProp, ICharactersProp } from './components/interfaces/customInputProps';

import {BrowserRouter as Router, Route, useLocation} from "react-router-dom"
import { NavItem } from './components/NavItem';
import { Character } from './contents/Character';
import { queryAllByAltText } from '@testing-library/react';



class App extends React.Component<ICharactersProp>
{

	render()
	{
		/*let useQuery = () =>  new URLSearchParams(useLocation().search;
		let query = useQuery();*/
		let nav = this.props.characters.map((c,idx) => {
			return <NavItem tolink={`/character/${idx}`} item={c.name} />
		})
		//<NavItem tolink='/character' item={this.props.characters[0].name}></NavItem>
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

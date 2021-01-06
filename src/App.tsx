import React from 'react';
import './App.css';
import { Header } from './classes/Header';
import { ICharacterProp } from './classes/interfaces/customInputProps';
import { StatBlock } from './classes/StatBlock';

class App extends React.Component<ICharacterProp>
{
	render()
	{
		const character = this.props.character;
		return (
			<main>
				<Header character={character} />
				<StatBlock stats={character.stats} />
			</main>
		);
	}
}




export default App;

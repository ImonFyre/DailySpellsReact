import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './classes/Header';
import { render } from '@testing-library/react';
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

import React, { Component } from "react";
import { CharacterHeader } from "../components/CharacterHeader";
import { ICharacterProp, INumberData } from "../components/interfaces/customInputProps";
import { StatBlock } from "../components/StatBlock";

interface ICharacterState extends ICharacterProp{
	isLoaded: boolean,
	error : any
}

export class Character extends Component<INumberData,ICharacterState>
{
	constructor(props : any)
	{
		super(props);
		this.state = {character: {}, isLoaded: false, error: null} as ICharacterState;
	}

	componentDidMount()
	{
		const myHeaders = new Headers();
		myHeaders.append('Access-Control-Allow-Origin', '*');
		fetch(`http://localhost:59352/api/DailySpells/GetCharacter/${this.props.data}`)
		.then(result => result.json())
		.then((result) => {
				this.setState( { isLoaded : true,
				character: result});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		);
	}

	render()
	{

		const {error, isLoaded, character} = this.state;
		if(error)
		{
			console.log(error);
			return <div>Error: {error.message}</div>
		}
		else if(!isLoaded)
		{
			return <div>Loading...</div>
		}
		else
		{
		return (<section>
					<CharacterHeader character={character} />
					<StatBlock stats={character.characterStats} />
				</section>);
		}
	}
}
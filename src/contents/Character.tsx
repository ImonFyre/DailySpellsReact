import React, { Component } from "react";
import { CharacterHeader } from "../components/CharacterHeader";
import { ICharacterProp } from "../components/interfaces/customInputProps";
import { StatBlock } from "../components/StatBlock";


export class Character extends Component<ICharacterProp>
{
	render()
	{
		const character = this.props.character;
		return (<section>
					<CharacterHeader character={character} />
					<StatBlock stats={character.stats} />
				</section>);
	}
}
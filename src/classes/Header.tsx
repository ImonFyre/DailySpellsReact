import React from "react";
import { CharacterName } from "./CharacterName";
import { Class } from "./Class";
import { ICharacterProp } from "./interfaces/customInputProps";
import { Level } from "./Level";
import { Race } from "./Race";

export class Header extends React.Component<ICharacterProp>
{
	render()
	{
		const data = this.props.character;
		return (
			<div className="header">
				<h2><CharacterName data={data.name}/></h2>
				<span><Class data={data.class} /> <Level data={data.level}/></span> <span><Race data={data.race} /></span>
			</div>
		);
	}
}
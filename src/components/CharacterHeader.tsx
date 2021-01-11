import React from "react";
import { CharacterName } from "./CharacterName";
import { Class } from "./Class";
import { ICharacterProp } from "./interfaces/customInputProps";
import { Race } from "./Race";

export class CharacterHeader extends React.Component<ICharacterProp>
{
	render()
	{
		const data = this.props.character;
		const classLevels = data.classes.map(c => {
			return <Class name={c.name} level={c.level} />
		});
		return (
			<div className="header">
				<h2><CharacterName data={data.name}/></h2>
				<span><Race data={data.race} /></span>
				<ul className="classLevels">
					{classLevels}
				</ul>

			</div>
		);
	}
}
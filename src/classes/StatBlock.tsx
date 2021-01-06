import React from "react";
import { IStatsProp } from "./interfaces/customInputProps";
import { Stat } from "./Stat";

export class StatBlock extends React.Component<IStatsProp>
{
	render()
	{
		let stats = this.props.stats;
		let statList =  Object.keys(stats).map(key => {
			return (<Stat name={key} value={stats[key as keyof typeof stats]} />);
		});

		return (
			<div className="statBlock">
				<ul>{statList}</ul>
			</div>
		);
	}
}
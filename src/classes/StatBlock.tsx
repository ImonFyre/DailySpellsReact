import { stat, Stats } from "fs";
import React from "react";
import { IStatsProp } from "./interfaces/customInputProps";
import { Stat } from "./Stat";

export class StatBlock extends React.Component<IStatsProp>
{
	render()
	{
		let __this = this;
		let stats = this.props.stats;
		let statList =  Object.keys(stats).map(key => {
			return (<li>{key}: <Stat data={stats[key as keyof typeof stats]} /></li>);
		});

		return (
			<ul>{statList}</ul>
		);
		return null;
	}
}
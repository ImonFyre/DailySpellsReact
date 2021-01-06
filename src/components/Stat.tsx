import React from "react";
import { IStatData } from "./interfaces/customInputProps";

export class Stat extends React.Component<IStatData>
{
	render()
	{
		let bonus = this.computeBonus(this.props.value);
		return (<li>
					{this.props.name}: <span className="statNumber">{this.props.value}</span> <span className="statBonus">{(bonus < 0 ? bonus : `+${bonus}`)}</span>
				</li>);
	}

	private computeBonus(stat: number) : number
	{
		return Math.floor((stat - 10)/2);
	}
}
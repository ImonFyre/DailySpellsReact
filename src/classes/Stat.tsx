import React from "react";
import { INumberData } from "./interfaces/customInputProps";

export class Stat extends React.Component<INumberData>
{
	render()
	{
		let bonus = this.computeBonus(this.props.data);
		return (<div>
					<span>{this.props.data}</span><span>{(bonus < 0 ? bonus : `+${bonus}`)}</span>
				</div>);
	}

	private computeBonus(stat: number) : number
	{
		return Math.floor((stat - 10)/2);
	}
}
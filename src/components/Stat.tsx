import React from "react";
import { IStatData } from "../interfaces/customInputProps";
import Util from "../Util/Util";

export class Stat extends React.Component<IStatData>
{
	render()
	{
		let bonus = Util.computeBonus(this.props.value);
		return (<li key={this.props.name}>
					{this.props.name}: <span className="statNumber">{this.props.value}</span> <span className="statBonus">{(bonus < 0 ? bonus : `+${bonus}`)}</span>
				</li>);
	}


}
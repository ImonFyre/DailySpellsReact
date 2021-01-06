import React, { Component } from "react";
import { Link } from "react-router-dom";
import { INavItem } from "./interfaces/customInputProps";

export class NavItem extends Component<INavItem>
{
	render()
	{
		return ( <li>
			<Link to={this.props.tolink}>
				{this.props.item}
			</Link>
		</li>)
	}
}

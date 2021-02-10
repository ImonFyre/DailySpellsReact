import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IGraphQLNavItem, INavItem } from "../interfaces/customInputProps";

export class NavItem extends Component<IGraphQLNavItem>
{
	render()
	{
		return ( <li key={this.props.name}>
			<Link to={this.props.tolink}>
				{this.props.name}
			</Link>
		</li>)
	}
}

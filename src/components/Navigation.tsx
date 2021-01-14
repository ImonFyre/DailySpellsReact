import React, { Component } from "react";
import { INavItem } from "../interfaces/customInputProps";
import { NavItem } from "./NavItem";


export class Navigation extends Component<{}, {	error: any,	isLoaded:boolean, items:INavItem[] }>
{

	constructor(props :any)
	{
		super(props);
		this.state = {
			error: null,
			isLoaded:false,
			items:[]
		};
	}

	componentDidMount()
	{
		fetch("http://localhost:59352/api/DailySpells/GetMenu")
		.then(result => result.json())
		.then((result) => {
				this.setState( { isLoaded : true,
				items: result});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		);
	}

	render()
	{
		const {error, isLoaded, items} = this.state;
		if(error)
		{
			console.log(error);
			return <div>Error: {error.message}</div>
		}
		else if(!isLoaded)
		{
			return <div>Loading...</div>
		}
		else
		{
			let nav = [ <NavItem tolink='/' item="Home" /> ]
						.concat( items.map((c : INavItem, idx:number) => {
											return <NavItem tolink={`/character/${idx}`} item={c.item} />
						}));

			return <ul>{nav}</ul> ;
		}
	}
}
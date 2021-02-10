import React, { Component } from "react";
import { IGraphQLNavItem, INavItem } from "../interfaces/customInputProps";
import { NavItem } from "./NavItem";


export class Navigation extends Component<{}, {	error: any,	isLoaded:boolean, items:IGraphQLNavItem[] }>
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
		fetch("http://api.artoodeetoo.ca/graphql", {
			method: "POST",
			headers: {"content-type": "application/json" },
			mode: "cors",
			body: JSON.stringify({query : `query {
				characters {
				  name, id
				}
			  }`})
			},
		)
		.then(result => result.json())
		.then((result) => {
				console.log(result);
				this.setState( { isLoaded : true,
				items: result.data.characters});
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
			let nav = [ <NavItem tolink='/' name="Home" /> ]
						.concat( items.map((c : IGraphQLNavItem, idx:number) => {
											return <NavItem tolink={`/character/${idx}`} name={c.name} />
						}));

			return <ul>{nav}</ul> ;
		}
	}
}

import { Component } from "react";
import { ICheckableComponent } from "../interfaces/customInputProps";

export class CheckableItem extends Component<ICheckableComponent>
{
	render()
	{
		let item = this.props;
		return (
			<li className={item.checked ? "disc" : "circle"}>
				{item.value} {item.description}
			</li>
		);
	}

}
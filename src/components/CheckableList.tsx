import { Component } from "react";
import { ICheckableComponents } from "../interfaces/customInputProps";
import { CheckableItem } from "./CheckableItem";

export class CheckableList extends Component<ICheckableComponents>
{
	render()
	{
		let list = this.props.list.map(item => {
			return <CheckableItem checked={item.checked} description={item.description} value={item.value} />
		});
		return (
			<>
				<h3>
					{this.props.title}
				</h3>
				<ul>
					{list}
				</ul>
			</>
		);
	}

}
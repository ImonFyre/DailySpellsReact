import { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import { toast, ToastOptions } from 'react-toastify';

import { ICheckableComponent } from "../interfaces/customInputProps";

import { Dice } from "../Util/Dice";
import { DiceType} from "../enum/DiceType"
const TOAST_PARAMS : ToastOptions = { position: toast.POSITION.TOP_CENTER,
										autoClose: false };


export class CheckableItem extends Component<ICheckableComponent>
{
	render()
	{
		let item = this.props;
		return (
			<li key={item.description} className={item.checked ? "disc" : "circle"} onClick={() => this.roll()}>
				{item.value} {item.description}
			</li>
		);
	}
	private roll()
	{
		let diceRoll = Dice.roll(DiceType.d20);
		toast(`Rolled ${this.props.description} ${diceRoll} + ${this.props.value} = ${diceRoll + this.props.value}`, TOAST_PARAMS);
	}
}
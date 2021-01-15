import { Component } from 'react';
import { toast, ToastOptions } from 'react-toastify';

import { ICheckableComponent } from "../interfaces/customInputProps";

import { Dice, DiceType } from "../Util/Dice";

export const CheckableItem = (props: ICheckableComponent) =>
{
	let toastParams : ToastOptions = { position: toast.POSITION.TOP_CENTER,
										autoClose: false };
	let item = props;
	return (
		<li className={item.checked ? "disc" : "circle"} onClick={() => roll()}>
			{item.value} {item.description}
		</li>
	);

	function roll()
	{
		let diceRoll = Dice.roll(DiceType.d20);
		toast(`Rolled ${item.description} ${diceRoll} + ${item.value} = ${diceRoll + item.value}`, toastParams);
	}
}
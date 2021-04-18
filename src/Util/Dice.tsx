import {DiceType} from "../enum/DiceType"

export class Dice
{
	public static roll(diceType: DiceType = DiceType.d6, bonus = 0)
	{
		let sides = 6
		switch (diceType)
		{
			case DiceType.d2:
				sides = 2;
				break;
			case DiceType.d3:
				sides = 3;
				break;
			case DiceType.d4:
				sides = 4;
				break;
			case DiceType.d6:
				sides = 6;
				break;
			case DiceType.d8:
				sides = 8;
				break;
			case DiceType.d10:
				sides = 10;
				break;
			case DiceType.d12:
				sides = 12;
				break;
			case DiceType.d20:
				sides = 20;
				break;
			case DiceType.d100:
				sides = 100;
				break;
		}
		return Math.max(1, Math.floor(Math.random() * sides) + 1 + bonus);
	}
}


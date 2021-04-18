import { Dice } from "./Dice"
import { DiceType } from "../enum/DiceType"

describe ("dice rolling",() => {
	//basic test

	it("rolls a d6 and it will be values from 1 to 6", () => {
		let rolledVal = Dice.roll();
		expect(rolledVal).toBeGreaterThanOrEqual(1);
		expect(rolledVal).toBeLessThanOrEqual(6);
	});

	//Dice type tests

	it("rolls a d6 and it will be values from 1 to 6", () => {
		let rolledVal = Dice.roll(DiceType.d6);
		expect(rolledVal).toBeGreaterThanOrEqual(1);
		expect(rolledVal).toBeLessThanOrEqual(6);
	});

	it("rolls a d4 and it will be values from 1 to 4", () => {
		let rolledVal = Dice.roll(DiceType.d4);
		expect(rolledVal).toBeGreaterThanOrEqual(1);
		expect(rolledVal).toBeLessThanOrEqual(4);
	});
	it("rolls a d3 and it will be values from 1 to 3", () => {
		let rolledVal = Dice.roll(DiceType.d3);
		expect(rolledVal).toBeGreaterThanOrEqual(1);
		expect(rolledVal).toBeLessThanOrEqual(3);
	});

	it("rolls a d2 and it will be values from 1 to 2", () => {
		let rolledVal = Dice.roll(DiceType.d2);
		expect(rolledVal).toBeGreaterThanOrEqual(1);
		expect(rolledVal).toBeLessThanOrEqual(2);
	});
	it("rolls a d8 and it will be values from 1 to 8", () => {
		let rolledVal = Dice.roll(DiceType.d8);
		expect(rolledVal).toBeGreaterThanOrEqual(1);
		expect(rolledVal).toBeLessThanOrEqual(8);
	});

	it("rolls a d10 and it will be values from 1 to 10", () => {
		let rolledVal = Dice.roll(DiceType.d10);
		expect(rolledVal).toBeGreaterThanOrEqual(1);
		expect(rolledVal).toBeLessThanOrEqual(10);
	});
	it("rolls a d12 and it will be values from 1 to 12", () => {
		let rolledVal = Dice.roll(DiceType.d12);
		expect(rolledVal).toBeGreaterThanOrEqual(1);
		expect(rolledVal).toBeLessThanOrEqual(12);
	});

	it("rolls a d20 and it will be values from 1 to 20", () => {
		let rolledVal = Dice.roll(DiceType.d20);
		expect(rolledVal).toBeGreaterThanOrEqual(1);
		expect(rolledVal).toBeLessThanOrEqual(20);
	});

	it("rolls a d100 and it will be values from 1 to 100", () => {
		let rolledVal = Dice.roll(DiceType.d100);
		expect(rolledVal).toBeGreaterThanOrEqual(1);
		expect(rolledVal).toBeLessThanOrEqual(100);
	});


	//Dice type plus modifier tests
	it("rolls a d6 + a positive modifier and it will be values from (1 to 6) + modifier", () => {
		let modifier = Dice.roll(DiceType.d3);
		let rolledVal = Dice.roll(DiceType.d6, modifier);
		expect(rolledVal).toBeGreaterThanOrEqual(1 + modifier);
		expect(rolledVal).toBeLessThanOrEqual(6 + modifier);
	});

	it("rolls a d6 + a negative modifier and it will be values from (1 to 6) + modifier", () => {
		let modifier = Dice.roll(DiceType.d3) * -1;
		let rolledVal = Dice.roll(DiceType.d3, modifier);
		expect(rolledVal).toBeGreaterThanOrEqual(Math.max(1,1 + modifier));
		expect(rolledVal).toBeLessThanOrEqual(Math.max(1,3 + modifier));
	});
});
export default class Util
{
	public static computeBonus(stat: number) : number
	{
		return Math.floor((stat - 10)/2);
	}
}
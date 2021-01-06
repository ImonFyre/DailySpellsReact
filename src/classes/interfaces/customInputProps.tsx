export interface ICharacterProp {
	character: {name:string, class:{name:string, level:number}[], race:string, stats:{ str:number, dex:number, con:number, int:number, wis:number, cha:number}};
}

export interface IStatsProp {
	stats:{ str:number, dex:number, con:number, int:number, wis:number, cha:number};
}

export interface IStringData
{
	data : string;
}

export interface INumberData
{
	data : number;
}

export interface IStatData
{
	value: number;
	name:string;
}

export interface IClassData
{
	name:string;
	level:number;
}
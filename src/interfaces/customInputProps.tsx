export interface ICharacterProp {
	character: {name:string, characterClasses:{className:string, level:number}[], race:{ name: string}, characterStats:{ str:number, dex:number, con:number, int:number, wis:number, cha:number}};
}
export interface ICharactersProp {
	characters: {name:string, characterClasses:{className:string, level:number}[], race:{ name: string}, characterStats:{ str:number, dex:number, con:number, int:number, wis:number, cha:number}}[];
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

export interface INavItemList
{
	NavItemList: INavItem[];
}

export interface INavItem
{
	tolink: string;
	item: string;
}

export interface IGraphQLNavItem
{
	tolink: string;
	name: string;
	id: number;
}

export interface INavigationState
{
	error: any;
	items: INavItemList;
	isLoaded:boolean;
}

export interface ICheckableComponents
{
	list: ICheckableComponent[];
	title: string;
}

export interface ICheckableComponent
{
	checked: boolean;
	value : number;
	description: string;
}

export interface ICheckableComponentWithState extends ICheckableComponent
{
	setState: any;
}
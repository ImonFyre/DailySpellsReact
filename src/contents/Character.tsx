import React, { Component } from "react";
import { CharacterHeader } from "../components/CharacterHeader";
import { ICharacterProp, ICheckableComponent, ICheckableComponents, INumberData } from "../interfaces/customInputProps";
import { StatBlock } from "../components/StatBlock";
import { CheckableList } from "../components/CheckableList";
import Util from "../Util/Util";

interface ICharacterState extends ICharacterProp{
	isLoaded: boolean,
	error : any
}

export class Character extends Component<INumberData,ICharacterState>
{
	constructor(props : any)
	{
		super(props);
		this.state = {character: {}, isLoaded: false, error: null} as ICharacterState;
	}

	componentDidMount()
	{
		this.getData(this.props.data);
	}

	componentDidUpdate(prevProps:any)
	{
		if(prevProps.data !== this.props.data)
			this.getData(this.props.data);
	}

	getData(id:number)
	{
		fetch(`http://localhost:59352/api/DailySpells/GetCharacter/${id}`)
		.then(result => result.json())
		.then((result) => {
				this.setState( { isLoaded : true,
								character: result});
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
		const {error, isLoaded, character} = this.state;
		let list :ICheckableComponent[] = [
			{
				checked:false,
				value:1,
				description: "circle"
			},
			{
				checked:true,
				value:2,
				description: "dot"
			}
		];

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
		return (<>
					<section>
						<CharacterHeader character={character} />
					</section>
					<section>
						<StatBlock stats={character.characterStats} />
						<CheckableList list={this.generateSavingThrowList()} title='Saving Throws' />
						<CheckableList list={this.generateSkillsList()} title='Skills' />
					</section>
				</>);
		}
	}
	private generateSkillsList() : ICheckableComponent[]
	{
		let characterStats = this.state.character.characterStats;
		return [
			{
				description:"Acrobatics",
				value : Util.computeBonus(characterStats.dex),
				checked : false
			},
			{
				description: "Animal Handling",
				value:  Util.computeBonus(characterStats.wis),
				checked:  false
			},
			{
				description: "Arcana",
				value: Util.computeBonus(characterStats.int),
				checked:  false
			},
			{
				description: "Athletics",
				value:  Util.computeBonus(characterStats.str),
				checked:  false
			},
			{
				description: "Deception",
				value:  Util.computeBonus(characterStats.cha),
				checked:  false
			},
			{
				description: "History",
				value:  Util.computeBonus(characterStats.int),
				checked:  false
			},
			{
				description: "Insight",
				value:  Util.computeBonus(characterStats.wis),
				checked:  false
			},
			{
				description: "Intimidation",
				value:  Util.computeBonus(characterStats.cha),
				checked:  false
			},
			{
				description: "Investigation",
				value:  Util.computeBonus(characterStats.int),
				checked:  false
			},
			{
				description: "Medecine",
				value:  Util.computeBonus(characterStats.wis),
				checked:  false
			},
			{
				description: "Nature",
				value:  Util.computeBonus(characterStats.int),
				checked:  false
			},
			{
				description: "Perception",
				value: Util.computeBonus(characterStats.wis),
				checked:  false
			},
			{
				description: "Performance",
				value:  Util.computeBonus(characterStats.cha),
				checked:  false
			},
			{
				description: "Persuation",
				value:  Util.computeBonus(characterStats.cha),
				checked:  false
			},
			{
				description: "Religion",
				value:  Util.computeBonus(characterStats.int),
				checked:  false
			},
			{
				description: "Sleight of Hand",
				value:  Util.computeBonus(characterStats.dex),
				checked:  false
			},
			{
				description: "Stealth",
				value:  Util.computeBonus(characterStats.dex),
				checked:  false
			},
			{
				description: "Survival",
				value:  Util.computeBonus(characterStats.wis),
				checked:  false
			}
		]

	}

	private generateSavingThrowList(): ICheckableComponent[]
	{
		let characterStats = this.state.character.characterStats;
		return [
			{
				description: "Strength",
				value:  Util.computeBonus(characterStats.str),
				checked:  false
			},
			{
				description: "Dexterity",
				value:  Util.computeBonus(characterStats.dex),
				checked:  false
			},
			{
				description: "Constitution",
				value:  Util.computeBonus(characterStats.con),
				checked:  false
			},
			{
				description: "Intelligence",
				value:  Util.computeBonus(characterStats.int),
				checked:  false
			},
			{
				description: "Wisdom",
				value:  Util.computeBonus(characterStats.wis),
				checked:  false
			},
			{
				description: "Charisma",
				value:  Util.computeBonus(characterStats.cha),
				checked:  false
			}
		];
	}
}
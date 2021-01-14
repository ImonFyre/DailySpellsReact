import React from "react";
import { IClassData } from "../interfaces/customInputProps";

export class Class extends React.Component <IClassData>
{
	render() { return <li>{this.props.name} {this.props.level}</li>; }
}
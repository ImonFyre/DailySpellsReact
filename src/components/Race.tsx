import React from "react";
import { IStringData } from "../interfaces/customInputProps";

export class Race extends React.Component<IStringData>
{
	render() { return this.props.data; }
}
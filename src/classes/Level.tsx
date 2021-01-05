import React from "react";
import { INumberData } from "./interfaces/customInputProps";

export class Level extends React.Component<INumberData>
{
	render() { return this.props.data; }
}
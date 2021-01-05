import React from "react";
import { IStringData } from "./interfaces/customInputProps";

export class Class extends React.Component <IStringData>
{
	render() { return this.props.data; }
}
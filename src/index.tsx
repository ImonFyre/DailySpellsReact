import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const CHARACTER_DATA = {name:"Drizzt", class:[{name:"Barbarian", level: 3},{name:"Fighter", level: 11},{name:"Ranger", level:7}], race:"Drow",stats:{ str:13, dex:20, con:15, int:17, wis:17, cha:15 }};

ReactDOM.render(
	<App character={CHARACTER_DATA} />,
	document.getElementById('root')
);
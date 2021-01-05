import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const CHARACTER_DATA = {name:"Drizzt", class:"Ranger", level:18, race:"Drow",stats:{ str:13, dex:20, con:15, int:17, wis:17, cha:15 }};

ReactDOM.render(
	<App character={CHARACTER_DATA} />,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import React from "react";
import {Link} from "react-router-dom";

export default class Entry extends React.Component {
	render() {
		return <>
		<div className="devul-animation"></div>
		<div className="center"><Link to="/home"><p>enter</p></Link></div>
		</>
	}
}
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './Home';
import Store from './store/Store';
import MissionStatement from './mission-statement/MissionStatement';
import Lookbook from './lookbook/Lookbook';
import About from './about/About';


export const pages = [
	{
		name: "Home",
		link: "/home",
		component: Home
	},
	{
		name: "Store",
		link: "/store",
		component: Store
	},
	{
		name: "Lookbook",
		link: "/lookbook",
		component: Lookbook
	},
	{
		name: "Mission Statement",
		link: "/mission-statement",
		component: MissionStatement
	},
	{
		name: "About",
		link: "/about",
		component: About
	}
]

function makeNavItem(item) { 
	return <>
		<span className="nav-item">
			<NavLink to={item.link} className="navUnselected" activeClassName="navSelected" exact={true}>{item.name}</NavLink>
		</span>
	</>
}

const content = pages.map(makeNavItem)

const NavigationToHide = (props) => {
	const { location } = props;
	if (location.pathname.match('entry')){
		return null;
	}
	return <>
	<div className="nav-background">
		<div className="nav-container">
			{content}
		</div>
	</div>
	</>
}

export const Navigation = withRouter(NavigationToHide);
import React from 'react'
import { withRouter } from 'react-router';
// export default class Footer extends React.Component {
// 	render() {
// 		function makeSocialLink(social) { 
// 			return <a href={social.link}>{social.name}</a>
// 		}

// 		return <>
// 			<div className="socials">
// 				{socials.map(makeSocialLink)}
// 			</div>
// 		</>
// 	}
// }


function makeSocialLink(social) { 
	return <a href={social.link}>{social.name}</a>
}

const FooterToHide = (props) => {
	const { location } = props;
	if (location.pathname.match('entry')){
		return null;
	}
	return <>
	<div className="socials">
		{socials.map(makeSocialLink)}
	</div>
	</>
}

export const Footer = withRouter(FooterToHide);

const socials = [
	{
		name: "Instagram",
		link: ""
	},
	{
		name: "Twitter",
		link: ""
	},
]
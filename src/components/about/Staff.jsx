import React from 'react'
import ReactMarkdown from 'react-markdown';
import lucas from '../../images/lucas.jpg'

export default class Staff extends React.Component {
	render() { 
		function makeBioCard(person) {
			return <div className='bio'>
			<img src={person.image} alt={person.name}></img>
			<div className='bio-name'>{person.name}</div>
			<ReactMarkdown>{person.bio}</ReactMarkdown>
			<div className='bio-socials-container'>
				{person.socials.map((social) => <a href={social.link}>{social.name}</a>)}
			</div>
			</div>
		}

		const staffCards = staff.map(makeBioCard)
		return <>
		<div className='staff-container'>
			{staffCards}
		</div>
		</>	
	}
}

export const staff = [
	{
		name: "Leo",
		bio: `Leo babababababa lorem ipsum hehehehehe`,
		socials: []
	},
	{
		name: "Nico/Ghosti",
		bio: `Lorem ipsum lorem ipsum lorem ipsum`,
		socials: [
			{
				name: 'Instagram', 
				link: 'https://www.instagram.com/aguamiele/'
			},
			{
				name: 'Twitter', 
				link: 'https://twitter.com/aguamieles'
			}
		]
	},
	{
		name: "Ashley",
		bio: `Ashley is cool `,
		socials: []
	},
	{
		image: lucas,
		name: "Lucas",
		bio: `Lucas engineered and maintains the Citrusboys website, and 
		occasionally contributes designs and concepts. He is also a musician 
		and songwriter, he plays guitar for a hardcore punk band and drums for 
		a Seattle-based art rock band. Lucas studies physics and computer
		science at Brown University, and in his free time you can find him reading 
		philosophy or skateboarding.`,
		socials: [
			{
				name: 'Site',
				link: 'https://www.lucasbrito.site/'
			},
			{
				name: 'Instagram', 
				link: 'https://www.instagram.com/lzawbrito/'
			},
			{
				name: 'Twitter', 
				link: 'https://twitter.com/lucaszawbrito'
			}
		]
 }
]
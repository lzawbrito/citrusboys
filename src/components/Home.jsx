import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { ParallaxProvider } from "react-scroll-parallax";
import Pitchfork from './Pitchfork';

const content = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id nisi varius, malesuada lacus et, mattis arcu. Pellentesque rhoncus venenatis erat, vel blandit purus consectetur accumsan. Morbi ultrices tempor tellus vel imperdiet. Donec quam dolor, interdum sit amet est eget, elementum mattis ipsum. Suspendisse maximus sollicitudin eros, eget vestibulum urna scelerisque vitae. Mauris facilisis ornare risus, non malesuada diam semper sed. Nullam ornare, purus id porta suscipit, nisl tellus ullamcorper augue, nec pulvinar lorem massa at sem. Maecenas turpis nisl, bibendum posuere mattis ac, cursus eu lacus. Vivamus ipsum dolor, tincidunt nec imperdiet aliquam, bibendum quis diam. Aenean efficitur lorem nec diam ultrices, nec scelerisque tellus tempus. Nunc feugiat iaculis tincidunt. Curabitur placerat enim a diam ornare maximus. Vestibulum ante turpis, semper et ligula et, luctus volutpat velit. Morbi eu rutrum nisi.

Cras viverra, dui quis semper sodales, massa sem pellentesque eros, a cursus ex felis vitae urna. Pellentesque a urna a tellus ultricies mollis. Vivamus placerat, nisl at aliquet dictum, neque arcu posuere urna, commodo tristique dui ipsum finibus massa. Pellentesque condimentum urna felis, vel pulvinar ligula hendrerit et. Fusce quis sollicitudin purus, id rhoncus lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium porttitor lacus sed feugiat. Nam a odio metus. Vestibulum tristique in leo sed finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque interdum sem vitae felis finibus dapibus.

Vivamus quis nulla vitae tortor ultricies vehicula. Aenean et turpis dui. Suspendisse sodales faucibus congue. Donec pretium elementum felis at dictum. Vivamus ac consequat ante. In hac habitasse platea dictumst. Fusce molestie imperdiet laoreet. Aliquam erat volutpat. Morbi ornare, nisi vitae ultricies mollis, libero mauris vulputate neque, non accumsan purus tellus id nisl. Morbi tempor accumsan nulla, a mollis urna malesuada id. Phasellus maximus varius enim maximus congue.

Nulla vitae augue ut nulla placerat iaculis. Praesent mi ex, lacinia sed feugiat sed, facilisis sed ipsum. Etiam ipsum libero, commodo et pretium sed, finibus eget metus. Proin rutrum fermentum hendrerit. Cras sed est lectus. Nunc a metus nunc. Praesent rutrum massa vitae ante suscipit, et vulputate orci euismod. Mauris finibus fermentum leo sed lacinia. Nunc ut consectetur lacus, eget feugiat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia vestibulum quam, et auctor felis dictum vehicula. Proin volutpat dapibus hendrerit. Fusce sagittis tincidunt facilisis. Aliquam imperdiet lacus leo, non lobortis massa consequat at. Donec mi augue, imperdiet a nisl et, volutpat ullamcorper purus. Donec eu nibh in ex rutrum pellentesque.

Sed in mattis felis. Pellentesque ac sollicitudin metus. Nullam sed justo eget dolor feugiat volutpat quis at tellus. Donec vitae condimentum risus, ac ultricies nisi. Maecenas commodo dolor at ante porttitor, et placerat erat sollicitudin. Aenean urna tortor, aliquam vitae turpis ac, viverra rhoncus neque. Donec ac neque justo. Suspendisse eget odio sagittis, congue nulla at, luctus elit. Fusce in justo elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
`

export default class Home extends React.Component {
	render() {
		return <>
		<body>
			<ReactMarkdown>{content}</ReactMarkdown>
		</body>
		<Pitchfork/>
		</>
	}
}
import React, { useLayoutEffect } from 'react'
import { Parallax, useController, withController } from 'react-scroll-parallax'

class Pitchfork extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {loaded: false}
	// }
	stati 
	handleLoad = () => {
		this.props.parallaxController.update();
	}	
	render() {
		// var classname = null;
		// if (this.state.loaded) {
		// 	classname = "parallax-image-container"
		// } else {
		// 	classname = "hidden"
		// }
		return <>
			<Parallax
				className='parallax-image-container'
				x={[-70, 350]}
				>
					<img class='parallax-image' src="./citrusboys/images/devils_pitchfork_cropped.svg" alt="" onLoad={this.handleLoad}></img>
			</Parallax>
		</>
	}
}

export default withController(Pitchfork)

// const ParallaxCache = () => {
// 	const {parallaxController} = useController();
// 	useLayoutEffect(() => {
// 		const handler = () => parallaxController.update();
// 		window.addEventListener('load', handler);
// 		return () => window.removeEventListener('load', handler);
// 	}, [parallaxController]);
// 	return null;
// }
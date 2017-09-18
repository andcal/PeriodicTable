import React, { Component } from 'react'
import uuid from 'uuid'

import styles from './animation-trigger.css'

class AnimationTrigger extends Component {

	constructor(props) {
		super(props)

	}

	render() {

		return(

			<div className = {styles.triggerDiv}>

				<div 
					className = {(this.props.groupCategory === 'metal') ? styles.metal : ''}
				>	
				</div>

				<div
					className = {(this.props.groupCategory === 'nonmetal') ? styles.nonmetal : ''}
					onClick = {this.props.onOpenModalHalogens}
				>
				</div>

				<div 
					className = {(this.props.groupCategory === 'lanthanide') ? styles.lanthanide : ''}
				>
				</div>
			</div>

		)
	}
}

export default AnimationTrigger

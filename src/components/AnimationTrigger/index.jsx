import React, { Component } from 'react'
import uuid from 'uuid'

import styles from './animation-trigger.css'

class AnimationTrigger extends Component {

	constructor(props) {
		super(props)

		this.state = {
			groupCategory: this.props.groupCategory
		}

	}

	render() {

		return(

			<div className={styles.triggerDiv	}>

				<div className = {(this.state.groupCategory === 'metal') ? styles.metal : ''}>
				</div>

				<div className = {(this.state.groupCategory === 'nonmetal') ? styles.nonmetal : ''}>
				</div>

				<div className = {(this.state.groupCategory === 'lanthanide') ? styles.lanthanide : ''}>
				</div>

			</div>

		)
	}
}

export default AnimationTrigger

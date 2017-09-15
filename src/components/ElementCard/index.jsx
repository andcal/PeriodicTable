import React, { Component } from 'react'

import styles from './element-card.css'

class ElementCard extends Component {

	constructor(props) {
		super(props)

	}

	render() {

		return(
			<div className = {styles.card}>
				<p>{this.props.elementData.name}</p>
				<p>{this.props.elementData.groupCategory}</p>
				<p>{this.props.elementData.subCategory}</p>
			</div>
		)
	}

}

export default ElementCard
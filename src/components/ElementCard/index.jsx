import React, { Component } from 'react'

import styles from './element-card.css'

class ElementCard extends Component {

	constructor(props) {
		super(props)

	}

	render() {

		return(
			<div className = {styles.card}>
				<p>Name: {this.props.elementData.name}</p>
				<p>Category: {this.props.elementData.groupCategory}</p>
				<p>Subcategory: {this.props.elementData.subCategory}</p>
			</div>
		)
	}

}

export default ElementCard
import React, { Component } from 'react'

import styles from './element.css'

class Element extends Component {

	constructor(props) {
		super(props)

		this.onPressElement = this.onPressElement.bind(this)
	}

	onPressElement(groupCategory) {

		this.props.handlePressedElement(groupCategory)
	}

	render() {

		let groupCategory = this.props.groupCategory
		let subCategory = this.props.subCategory 
		let family = `family${this.props.family}`
		let period = `period${this.props.period}`

		return (
			<div 
				className = {`
					${styles.element}
					${styles[subCategory]} 
					${styles[family]} 
					${styles[period]}
				`}

				onClick = { () => this.onPressElement(groupCategory) }
			>
				<p className = {styles.number}>{this.props.number}</p>
				<p className = {styles.symbol}>{this.props.symbol}</p>
				<p className = {styles.name}>{this.props.name}</p>
			</div>
		)
	}
}

export default Element
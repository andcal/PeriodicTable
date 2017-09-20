import React, { Component } from 'react'

import styles from './element.css'

class Element extends Component {

	constructor(props) {
		super(props)

		this.state = {
			elementData: {
				id: this.props.id,
				groupCategory: this.props.groupCategory,
				subCategory: this.props.subCategory,
				period:  this.props.period,
				family: this.props.family,
				number: this.props.number,
				name: this.props.name,
				symbol: this.props.symbol,
				mass: this.props.mass
			}
		}
	}

	render() {

		let elementData = this.state.elementData
		let groupCategory = this.state.elementData.groupCategory
		let subCategory = this.state.elementData.subCategory
		let family = `family${this.state.elementData.family}`
		let period = `period${this.state.elementData.period}`

		return (
			<div 
				className = {`
					${styles.element}
					${styles[subCategory]} 
					${styles[family]} 
					${styles[period]}
				`}
				onClick = { () => this.props.onPressElement(groupCategory) }
				onMouseOver = { () => this.props.onOverElement(elementData) }
				onMouseOut = {this.props.onOutElement}
			>
				<p className = {styles.number}>{this.props.number}</p>
				<p className = {styles.symbol}>{this.props.symbol}</p>
			</div>
		)
	}
}

export default Element
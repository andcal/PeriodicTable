import React, { Component } from 'react'
import uuid from 'uuid'

import styles from './table.css'
import Element from '../Element'
import ElementCard from '../ElementCard'

class Table extends Component {

	constructor(props) {
		super(props)

		this.state = {
			rotate: '',
			card: false,
			elementData: ''
		}

		this.onPressElement = this.onPressElement.bind(this)
		this.handleOverElement = this.handleOverElement.bind(this)
		this.handleOutElement = this.handleOutElement.bind(this)
	}

	componentWillReceiveProps(props) {
		this.setState({
			rotate: props.reappearanceElements
		})
	}

	onPressElement(groupCategory) {
		this.setState({
			rotate: groupCategory
		})
		this.props.handlePressedElement(groupCategory)
	}

	handleOverElement(elementData) {
		this.setState({
			elementData: elementData,
			card: true
		})
	}

	handleOutElement(e) {
		this.setState({
			card: false
		})
	}

	renderPressedElements() {
		return(
			this.props.elements.map( el => {

				let categories = el.category.split(' ')
				let groupCategory = categories[categories.length-1]
				let subCategory = categories[0]

				if( groupCategory === this.state.rotate ) {
					return(
						<Element
							id = {uuid.v4()}
							groupCategory = {groupCategory}
							subCategory = {subCategory}								period = {el.ypos}
							family = {el.xpos}
							onPressElement = {this.onPressElement}
							onOverElement = {this.handleOverElement}
							onOutElement = {this.handleOutElement}
						/>
					)

				} else {
					return(
						<Element
							id = {uuid.v4()}
							groupCategory = {groupCategory}
							subCategory = {subCategory}
							period = {el.ypos}
							family = {el.xpos}
							number = {el.number}
							symbol = {el.symbol}
							name = {el.name}
							onPressElement = {this.onPressElement}
							onOverElement = {this.handleOverElement}
							onOutElement = {this.handleOutElement}
						/>
					)
				}
			})
		)
	}

	renderCardElement() {

		if(this.state.card && this.state.rotate === '') {
			return(
				<ElementCard
					elementData = {this.state.elementData}
				/>
			)
		}
	}


	render() {

		return(
			<div className = {styles.table}>

				{this.renderPressedElements()}

				{this.renderCardElement()}

			</div>
		)
	}
}

export default Table
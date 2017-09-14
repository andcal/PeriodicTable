import React, { Component } from 'react'
import uuid from 'uuid'

import styles from './table.css'
import Element from '../Element'
import AnimationTrigger from '../AnimationTrigger'

class Table extends Component {

	constructor(props) {
		super(props)

		this.state = {
			rotate: ''
		}

		this.onPressElement = this.onPressElement.bind(this)
	}

	onPressElement(groupCategory) {

		this.setState({
			rotate: groupCategory
		})

		this.props.handlePressedElement(groupCategory)
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
									subCategory = {subCategory}
									period = {el.ypos}
									family = {el.xpos}
									onPressElement = {this.onPressElement}
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
						/>
					)
				}
			})
		)
	}


	render() {

		return(
			<div className = {styles.table}>

				{this.renderPressedElements()}

			</div>
		)
	}
}

export default Table
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

		this.handlePressedElement = this.handlePressedElement.bind(this)
	}

	handlePressedElement(groupCategory) {
		
		this.setState({
			rotate: groupCategory
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
								subCategory = {subCategory}
								period = {el.ypos}
								family = {el.xpos}
								handlePressedElement = {this.handlePressedElement}
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
							handlePressedElement = {this.handlePressedElement}
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
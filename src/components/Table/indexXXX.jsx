import React, { Component } from 'react'
import uuid from 'uuid'

import styles from './table.css'
import Element from '../Element'


class Table extends Component {

	constructor(props) {
		super(props)

		this.state = {
			displayedElements: [],
			nums: Array.from(Array(118).keys()).map(x => ++x),
			rotated: 1
		}

		//this.handleElementsAppearance = this.handleElementsAppearance.bind(this)
		this.handlePressedElement = this.handlePressedElement.bind(this)

	}

	componentWillMount() {
		//let nums = this.state.nums
		//let num = nums[Math.floor(Math.random()*nums.length)]
			if(this.state.rotated === 1) {			//CONSOLE ERROR
			this.props.elements.map(el => {
				console.log('hola1')
				console.log(el)
					//if(nums[num] === el.number) {
						let newElement = {
							id: uuid.v4(),
							//he quitado
							subCategory: el.category.split(' ')[0]
						}

						this.setState({
							displayedElements: this.state.displayedElements.concat(newElement)
							//nums: this.state.nums.splice(num)
						})
					//} if
			})
		}
	}

	handlePressedElement(category) {

		let pressedCategory = category.split(' ')[0]
		

		this.setState({
			rotated: pressedCategory		
		})
	}
	
	handleRotationElement() {

		return(
			this.state.displayedElements.map(el => {//props.

					console.log(el)
					
					if(el.category === this.state.rotated) {
						
						return(
							<Element 
								id = {el.id}
								category = {el.category}
								period = {el.ypos}//cambiar por perios
								family = {el.xpos}//cambiar por familli
								handlePressedElement = {this.handlePressedElement}
							/>
						)
					} else {

						return(
							<Element
								id = {el.id}
								number = {el.number}
								symbol = {el.symbol}
								name = {el.name}
								category = {el.category}
								period = {el.period}//cambiar por perios
								family = {el.family}//cambiar por familli
								handlePressedElement = {this.handlePressedElement}
							/>
						)
					}
			})
		)
	}

	render() {
		return (
			<div className = {styles.table}>

				{ this.handleRotationElement() }
			
			</div>
		)
	}

}

export default Table


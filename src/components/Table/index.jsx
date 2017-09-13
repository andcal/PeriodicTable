import React, { Component } from 'react'
import uuid from 'uuid'

import styles from './table.css'
import Element from '../Element'


class Table extends Component {

	constructor (props) {
		super(props)

		this.state = {
			displayedElement: [],
			appearance: false,
			delY: 0
		}

		this.handleWheel = this.handleWheel.bind(this)

	}

	componentDidMount() {
   		document.addEventListener('wheel', this.handleWheel);
	
	}

	handleWheel(e) {
		if(e.deltaY > 0) {
			this.setState({
				appearance: true
			})
		}

		this.setState({
			delY: this.state.delY + Math.trunc(e.deltaY)
		})
		console.log('del:'+ this.state.delY)

		this.props.elements.map(el => {
			if(this.state.delY === el.number) {
				let newElement = {
					id: uuid.v4(),
					number: el.number,
					symbol: el.symbol,
					name: el.name,
					period: el.ypos,
					family: el.xpos,
					category: el.category
		
				}
				this.setState({
					displayedElement: this.state.displayedElement.concat(newElement)
				})
			}
		})
	}
	
	render() {
		return (
			<div className={`
				${styles.table}
				${(this.state.appearance) ? styles.appearance : ''}
				`}
			>
			{ this.state.displayedElement.map(el => 

				<Element
								id = {el.id}
								number = {el.number}
								symbol = {el.symbol}
								name = {el.name}
								category = {el.category}
								period = {el.period}
								family = {el.family}
				/>
			)}
	
			</div>
		)
	}

}

export default Table


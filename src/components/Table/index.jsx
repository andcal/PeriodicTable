import React, { Component } from 'react'

import styles from './table.css'
import Element from '../Element'


class Table extends Component {

	constructor (props) {
		super(props)

	}
	
	render() {
		return (
			<div className={styles.table}>
		
				{
					this.props.elements.map(el => {
						return (
							<Element
								number={el.number}
								symbol={el.symbol}
								name={el.name}
								category={el.category}
								period={el.ypos}
								family={el.xpos}
							/>
						)
					})
				}
			</div>
		)
	}

	
}

export default Table


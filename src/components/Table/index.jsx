import React, { Component } from 'react'

import styles from './table.css'
import Element from '../Element'


class Table extends Component {

	constructor (props) {
		super(props)
	}
	
	render() {
		return (
			<div>
				<Element elements={this.props.elementsList} />
			</div>
		)
	}

	
}

export default Table


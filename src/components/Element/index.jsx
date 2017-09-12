import React, { Component } from 'react'

import styles from './element.css'

class Element extends Component {

	constructor(props) {
		super(props)

	}

	render() {
		let category = `${this.props.category}`
		let family = `family${this.props.family}`
		let period = `period${this.props.period}`
	
		return (
			<div 
				className={`
					${styles.element}
					${styles[category.split(" ")[0]]} 
					${styles[family]} 
					${styles[period]}

				`}
			>	
				<p className={styles.number}>{this.props.number}</p>
				<p className={styles.symbol}>{this.props.symbol}</p>
				<p className={styles.name}>{this.props.name}</p>
			</div>
		)
	}
}

export default Element
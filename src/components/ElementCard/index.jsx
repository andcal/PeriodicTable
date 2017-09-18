import React, { Component } from 'react'

import styles from './element-card.css'

class ElementCard extends Component {

	constructor(props) {
		super(props)
	}

	render() {

		let name = this.props.elementData.name
		let groupCategory = this.props.elementData.groupCategory
		let subCategory = this.props.elementData.subCategory

		return(
			<div className = {`
				${styles.card}
				${styles[subCategory]}
			`}>
				<p className={styles.name}>Name: {name}</p>
				<p className={styles.groupCategory}>Category: {groupCategory}</p>
				<p className={styles.subCategory}>Subcategory: {subCategory}</p>
			</div>
		)
	}

}

export default ElementCard
import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import styles from './element-card.css'

class ElementCard extends Component {

	constructor(props) {
		super(props)
	}

	render() {

		let subCategory = this.props.elementData.subCategory
		let name = this.props.elementData.name
		let groupCategory = this.props.elementData.groupCategory
		let mass = (this.props.elementData.mass).toString()
		let massSlice = mass.slice(0, (mass.indexOf("."))+7)

		return(
			
				<div className = {`
					${styles.card}
					${styles[subCategory]}
				`}>
					<p className={styles.name}>Name:<br/>{name}</p>
					<p className={styles.mass}>Atomic mass:<br/>{massSlice}</p>
					<p className={styles.groupCategory}>Category:<br/>{groupCategory}</p>
				</div>
		)
	}

}

export default ElementCard
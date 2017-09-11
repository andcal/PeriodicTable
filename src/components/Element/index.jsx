import React, { Component } from 'react'

class Element extends Component {

	constructor(props) {
		super(props)
	}

	render() {

		return (
			<div>
				<span>{this.props.elements}</span>
				<span>Wf</span>
				<span>Wolframio</span>
			</div>
		)
	}
}

export default Element
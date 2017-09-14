import React, { Component } from 'react'
import ReactModal from 'react-modal'

import styles from './animation-container.css'
import AnimationTrigger from '../AnimationTrigger'

class AnimationContainer extends Component {

	constructor(props) {
		super(props)
		
	}

	render() {
		return(
			<div className = {styles.container}>

				<AnimationTrigger
					groupCategory = {this.props.groupCategory}
				/>

				<ReactModal 
                        isOpen={this.props.showModal}
                        contentLabel="Modal for snimations"
                >
                        <button onClick = {this.props.onCloseModal}>Close</button>
                </ReactModal>

			</div>
		)
	}
}

export default AnimationContainer
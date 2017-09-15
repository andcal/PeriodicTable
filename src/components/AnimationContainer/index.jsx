import React, { Component } from 'react'
import ReactModal from 'react-modal'

import styles from './animation-container.css'
import AnimationTrigger from '../AnimationTrigger'

class AnimationContainer extends Component {

	constructor(props) {
		super(props)

		this.state = {
			showModal: false
		}

		this.handleOpenModal = this.handleOpenModal.bind(this)
		this.handleCloseModal = this.handleCloseModal.bind(this)
	}

	handleOpenModal() {
		this.setState({
			showModal: true
		})
	}

	handleCloseModal() {
		this.setState({
			showModal: false
		})
		this.props.onReappearElements()
	}



	render() {
		return(
			<div className = {styles.container}>

				<AnimationTrigger
					groupCategory = {this.props.groupCategory}
					onOpenModal = {this.handleOpenModal}
				/>

				<ReactModal 
                        isOpen = {this.state.showModal}
                        contentLabel="Modal for snimations"
                        onRequestClose={this.handleCloseModal} 
                >
                        <button onClick = {this.handleCloseModal}>Close</button>
                </ReactModal>

			</div>
		)
	}
}

export default AnimationContainer
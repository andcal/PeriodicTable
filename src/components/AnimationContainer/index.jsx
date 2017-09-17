import React, { Component } from 'react'
import ReactModal from 'react-modal'

import styles from './animation-container.css'
import AnimationTrigger from '../AnimationTrigger'
import HalogensAnimation from '../HalogensAnimation'

class AnimationContainer extends Component {

	constructor(props) {
		super(props)

		this.state = {
			showModalHalogens: false
		}

		this.handleOpenModalHalogens = this.handleOpenModalHalogens.bind(this)
		this.handleCloseModal = this.handleCloseModal.bind(this)
	}

	handleOpenModalHalogens() {
		this.setState({
			showModalHalogens: true
		})
	}

	handleCloseModal() {
		this.setState({
			showModalHalogens: false
		})
		this.props.onReappearElements()
	}

	render() {
		return(
			<div className = {styles.container}>

				<AnimationTrigger
					groupCategory = {this.props.groupCategory}
					onOpenModalConductivity = {this.handleOpenModalHalogens}
				/>

				<ReactModal
					contentLabel="Modal for halogens animation"
                    isOpen = {this.state.showModalHalogens}
                    onRequestClose={this.handleCloseModal} 
                >

                	<HalogensAnimation />

                    <button onClick = {this.handleCloseModal}>Close</button>
                </ReactModal>

			</div>
		)
	}
}

export default AnimationContainer
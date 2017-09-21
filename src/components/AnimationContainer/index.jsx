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
					onOpenModalHalogens = {this.handleOpenModalHalogens}
					onHalogensInteraction = {this.handleHalogensInteraction}
				/>

				<ReactModal
					contentLabel="Modal for halogens animation"
                    isOpen = {this.state.showModalHalogens}
                    onRequestClose = {this.handleCloseModal} 
                    className = {styles.modal}
                    overlayClassName = {styles.overlay}
                >

              		<HalogensAnimation />

                    <span onClick = {this.handleCloseModal}>
                    	<svg x="0" y="0" width="100%" height="100%" viewBox="0 0 20 20">
                    		<path fill="none" stroke="#c5c2cb" strokeWidth="3" strokeLinecap="butt" d="M1,19L19,1 M1,1l18,18"/>
                    	</svg>
                    </span>
               
                </ReactModal>

			</div>
		)
	}
}

export default AnimationContainer
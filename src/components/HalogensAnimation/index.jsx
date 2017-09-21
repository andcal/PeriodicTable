import React, { Component } from 'react'
import Anime from 'react-anime'
import { Draggable, Droppable } from 'react-drag-and-drop'
import styles from './halogens-animation.css'
import HalogensInteraction from '../HalogensAnimation'

class HalogensAnimation extends Component {

	constructor(props) {
		super(props)

		this.state = {
			ineteraction:false,
			dropAlkSymbol: '',
			dropAlkName: '',
			dropHalSymbol: '',
			dropHalname: ''
		}

		this.handleIntTrigger = this.handleIntTrigger.bind(this)
		this.handleDropAlk = this.handleDropAlk.bind(this)
		this.handleDropHal = this.handleDropHal.bind(this)
	}

	handleIntTrigger() {
		this.setState({
			ineteraction: true
		})
	}

	renderAnimationInteraction() {
		if(!this.state.ineteraction) {
			return(
				this.renderAnimation()
			)
		}

		if(this.state.ineteraction) {
			return(
				this.renderIntearction()
			)
		}
	}

	renderAnimation() {
		if(!this.state.ineteraction) {
			return(
				<div>
					<svg className = {styles.animation} version="1.1" id="table" x="0px" y="0px" width="960px" height="560px" viewBox="0 0 960 560">
						
						<Anime 
							duration={10000}
							loop={false}
							easing="easeOutExpo"
							strokeDashoffset={0}
							delay = {1000}
						>
							<path id={styles.edge} strokeLinecap="round" strokeDasharray="3000" strokeDashoffset="3000" d="M39.5,6.5 79.5,6.5 79.5,57.5 122.5,57.5 122.5,160.5 542.5,160.5 542.5,58.5 751.5,58.5 751.5,7.5 792.5,7.5 792.5,367.5 39.5,367.5z "/>
						</Anime>
			
							<rect id={styles.alkalinGroup} x="42" y="60" width="38" height="0" fill="#18ff92"/>
						
							<rect id={styles.halogenGroup} x="716" y="61"  width="38" height="0" fill="#61c3ff"/>

							<g id={styles.alkalin}>
								<path d="M56.215,94.001l-2.52,7.631h-3.24l8.243-24.261h3.779l8.279,24.261H67.41l-2.592-7.631H56.215z M64.17,91.553,l-2.376-6.983c-0.54-1.583-0.9-3.023-1.26-4.427h-0.072c-0.36,1.44-0.756,2.916-1.224,4.392l-2.375,7.019H64.17z"/>
								<path d="M54.812,113.371h3.131v21.633h10.367v2.627H54.812V113.371z"/>
								<path d="M53.552,149.371h3.131v11.698h0.108c0.648-0.936,1.296-1.8,1.908-2.592l7.415-9.106h3.888l-8.783,10.294l9.467,13.966,h-3.708l-7.991-11.915l-2.304,2.664v9.251h-3.131V149.371z"/>
								<path d="M56.215,202.001l-2.52,7.631h-3.24l8.243-24.261h3.779l8.279,24.261H67.41l-2.592-7.631H56.215z M64.17,199.553,l-2.376-6.983c-0.54-1.583-0.9-3.023-1.26-4.427h-0.072c-0.36,1.44-0.756,2.916-1.224,4.392l-2.375,7.019H64.17z"/>
								<path d="M54.812,221.371h3.131v21.633h10.367v2.627H54.812V221.371z"/>
								<path d="M62.137,257.371v24.261h-3.131v-24.261H62.137z"/>
								<path d="M51.464,317.632v-24.261h3.419l7.775,12.274c1.8,2.844,3.204,5.399,4.355,7.883l0.072-0.036,c-0.288-3.239-0.36-6.191-0.36-9.971v-10.15h2.952v24.261H66.51l-7.703-12.311c-1.692-2.699-3.312-5.472-4.535-8.099l-0.108,0.035,c0.18,3.061,0.252,5.976,0.252,10.008v10.366H51.464z"/>
							</g>

							<g id={styles.halogen}>
								<path d="M725.131,90.871v10.15h11.734v-10.15h3.168v24.261h-3.168v-11.375h-11.734v11.375h-3.132V90.871H725.131z"/>
								<path d="M726.644,143.501l-2.52,7.631h-3.24l8.243-24.261h3.78l8.278,24.261h-3.348l-2.592-7.631H726.644z M734.599,141.053,l-2.376-6.983c-0.54-1.583-0.899-3.023-1.26-4.427h-0.072c-0.359,1.44-0.756,2.916-1.224,4.392l-2.376,7.019H734.599z"/>
								<path d="M725.239,162.871h3.132v21.633h10.367v2.627h-13.499V162.871z"/>
								<path d="M742.066,210.75c0,8.351-5.075,12.778-11.267,12.778c-6.407,0-10.906-4.967-10.906-12.311,c0-7.703,4.787-12.742,11.267-12.742C737.783,198.475,742.066,203.55,742.066,210.75z M723.241,211.146,c0,5.183,2.808,9.827,7.739,9.827c4.967,0,7.774-4.571,7.774-10.079c0-4.824-2.52-9.863-7.739-9.863,C725.833,201.031,723.241,205.818,723.241,211.146z"/>
								<path d="M740.573,258.052c-1.403,0.504-4.176,1.332-7.451,1.332c-3.671,0-6.695-0.936-9.07-3.204,c-2.088-2.016-3.384-5.255-3.384-9.035c0.036-7.235,5.003-12.526,13.139-12.526c2.808,0,5.003,0.612,6.047,1.116l-0.756,2.556,c-1.296-0.576-2.916-1.044-5.363-1.044c-5.903,0-9.755,3.671-9.755,9.755c0,6.155,3.708,9.791,9.358,9.791,c2.052,0,3.456-0.288,4.176-0.648v-7.235h-4.932v-2.52h7.991V258.052z"/>
								<path d="M737.441,283.757h-9.431v8.747h10.511v2.628h-13.643v-24.261h13.103v2.627h-9.971v7.667h9.431V283.757z"/>
								<path d="M721.892,331.132v-24.261h3.42l7.775,12.274c1.8,2.844,3.203,5.399,4.355,7.883l0.071-0.036,c-0.288-3.239-0.359-6.191-0.359-9.971v-10.15h2.951v24.261h-3.167l-7.703-12.311c-1.692-2.699-3.312-5.472-4.536-8.099,l-0.107,0.036c0.18,3.06,0.252,5.975,0.252,10.007v10.366H721.892z"/>
							</g>

							<g id={styles.salt}>
								<path d="M231.289,212.771c0.335,2.368,0.993,4.137,1.974,5.309c1.795,2.133,4.87,3.199,9.225,3.199,c2.608,0,4.727-0.281,6.354-0.844c3.087-1.078,4.631-3.082,4.631-6.012c0-1.71-0.756-3.035-2.268-3.973,c-1.513-0.914-3.911-1.723-7.195-2.426l-5.61-1.23c-5.514-1.218-9.302-2.543-11.364-3.973c-3.493-2.391-5.238-6.129-5.238-11.215,c0-4.641,1.708-8.496,5.125-11.566c3.417-3.07,8.435-4.605,15.055-4.605c5.528,0,10.243,1.447,14.146,4.342,c3.903,2.895,5.949,7.096,6.139,12.604h-10.406c-0.192-3.117-1.586-5.332-4.181-6.645c-1.73-0.867-3.88-1.301-6.451-1.301,c-2.86,0-5.143,0.562-6.849,1.688s-2.559,2.695-2.559,4.711c0,1.852,0.841,3.234,2.523,4.148c1.081,0.61,3.375,1.324,6.885,2.145,l9.094,2.145c3.986,0.938,6.973,2.192,8.963,3.762c3.088,2.438,4.633,5.965,4.633,10.582c0,4.734-1.83,8.666-5.49,11.795,s-8.831,4.693-15.511,4.693c-6.822,0-12.188-1.541-16.097-4.623c-3.909-3.082-5.863-7.318-5.863-12.709H231.289z"/>
								<path d="M286.326,176.947h12.252l18.334,51.82H305.17l-3.419-10.652h-19.083l-3.513,10.652h-11.326L286.326,176.947z,M285.613,209.186h13.271l-6.546-20.391L285.613,209.186z"/>
								<path d="M323.504,176.947h10.828v42.504h25.875v9.316h-36.703V176.947z"/>
								<path d="M399.828,176.947v9.176h-15.504v42.645h-10.898v-42.645h-15.574v-9.176H399.828z"/>
							</g>
					</svg>

					<div className = {styles.halogenText}>
						<p>The name ‘halogen’ means ‘salt-producing’. The elements in column 17 belong to this group.</p>
						<p>When halogens react with elements in the first family, called alkalins, they produce a wide range of salts.</p>
						<p>Halogens tend to find an electron to be more stable. And alkalins release an electron.</p>
						<p>When both atoms join produce a compound called salt.</p>
					</div>

					{/*Button to trigger the interaction*/}
					<div 
						className = {styles.interactionTrigger}
						onClick = {this.handleIntTrigger}
					>
						<p>Produce my salt</p>
					</div>	
				</div>
			)
		}
	}

	renderIntearction() {
		if(this.state.ineteraction) {
			return(
				<div className={styles.interactionContainer}>
					<div className = {styles.compound}>
						<p>This is your salt</p>
						<p>{this.state.dropAlkName} {this.state.dropHalName}</p>
					</div>
					
					<div className = {styles.dragAndDrop}>
						<div className = {styles.dragAlkalin}>
							<Draggable type="alkalin" data="Li-Lithium">
								<p>Li</p>
							</Draggable>
							<Draggable type="alkalin" data="Na-Sodium">
								<p>Na</p>
							</Draggable>
							<Draggable type="alkalin" data="K-Potassium">
								<p>K</p>
							</Draggable>
						</div>

						<Droppable
							types="alkalin"
							onDrop = {this.handleDropAlk}
						>
							<div className={styles.dropAlkalin}>
								<p>{this.state.dropAlkSymbol}</p>
							</div>
						</Droppable>

						<Droppable
							types="halogen"
							onDrop={this.handleDropHal}
						>
							<div className={styles.dropHalogen}>
								<p>{this.state.dropHalSymbol}</p>
							</div>
						</Droppable>

						<div className = {styles.dragHalogen}>
							<Draggable type="halogen" data="F-fluoride">
								<p>F</p>
							</Draggable>
							<Draggable type="halogen" data="Cl-chloride">
								<p>Cl</p>
							</Draggable>
							<Draggable type="halogen" data="I-iodide">
								<p>I</p>
							</Draggable>
						</div>
					</div>
				</div>
			)
		}
	}

	handleDropAlk(data){

		let symbol = data.alkalin.split('-')[0]
		let formulationName = data.alkalin.split('-')[1]

		this.setState({
			dropAlkSymbol: symbol,
			dropAlkName: formulationName
		})
	}

	handleDropHal(data){

		let symbol = data.halogen.split('-')[0]
		let formulationName = data.halogen.split('-')[1]

		this.setState({
			dropHalSymbol: symbol,
			dropHalName: formulationName
		})
	}

	render() {
		return(
			<div>
				{ this.renderAnimationInteraction() }
			</div>
		)
	}
}

export default HalogensAnimation
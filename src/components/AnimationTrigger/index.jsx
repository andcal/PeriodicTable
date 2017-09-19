import React, { Component } from 'react'
import uuid from 'uuid'

import styles from './animation-trigger.css'

class AnimationTrigger extends Component {

	constructor(props) {
		super(props)

	}

	render() {
		return(

			<div className = {styles.triggerDiv}>

				<div className={styles.none}>
				</div>

				<svg
					className = {(this.props.groupCategory === 'nonmetal') ? styles.nonmetal : styles.none}
					onClick = {this.props.onOpenModalHalogens}
					version="1.1" id="salt" x="0px" y="0px" width="960px" height="560px" viewBox="-110 140 600 300"
					>
						<g>
								<rect x="111.784" y="390.158" width="16.634" height="16.634"/>
								<rect x="145.051" y="390.158" width="16.634" height="16.634"/>
								<rect x="211.585" y="390.158" width="16.634" height="16.634"/>
								<rect x="178.317" y="390.158" width="16.634" height="16.634"/>
								<rect x="78.516" y="390.158" width="16.634" height="16.634"/>
								<rect x="244.853" y="390.158" width="16.634" height="16.634"/>
								<rect x="220.457" y="356.891" width="16.634" height="16.634"/>
								<rect x="153.921" y="356.891" width="16.634" height="16.634"/>
								<rect x="187.189" y="356.891" width="16.634" height="16.634"/>
								<rect x="120.655" y="356.891" width="16.634" height="16.634"/>
								<rect x="253.724" y="356.891" width="16.634" height="16.634"/>
								<rect x="98.476" y="323.623" width="16.634" height="16.634"/>
								<rect x="131.744" y="323.623" width="16.634" height="16.634"/>
								<rect x="165.011" y="323.623" width="16.633" height="16.634"/>
								<rect x="198.278" y="323.623" width="16.634" height="16.634"/>
								<rect x="231.546" y="323.623" width="16.634" height="16.634"/>
								<rect x="153.921" y="292.574" width="16.634" height="16.634"/>
								<rect x="187.189" y="292.574" width="16.634" height="16.634"/>
								<rect x="253.724" y="292.574" width="16.634" height="16.634"/>
								<rect x="220.457" y="292.574" width="16.634" height="16.634"/>
								<rect x="136.18" y="261.525" width="16.634" height="16.633"/>
								<rect x="102.912" y="261.525" width="16.634" height="16.633"/>
								<rect x="231.546" y="230.475" width="16.634" height="16.634"/>
								<rect x="165.011" y="230.475" width="16.633" height="16.634"/>
								<rect x="198.278" y="230.475" width="16.634" height="16.634"/>
								<path d="M327.578 391.974l-16.546 1.707c0.898 8.699-1.833 17.064-7.69 23.557 -5.856 6.492-13.898 10.068-22.642 10.068H93.681c-8.708 0-16.726-3.549-22.578-9.996 -5.813-6.402-8.575-14.656-7.791-23.26l18.16-127.135 17.157-120.213H275l11.585 79.426 16.46-2.4 -12.536-85.945v-17.065c0-57.183-46.523-103.707-103.709-103.707S83.092 63.534 83.092 120.717v9.352l-0.452 10.924C78.2 172.217 47.151 389.55 46.816 391.897l-0.046 0.375c-1.277 13.199 3.103 26.402 12.016 36.219 8.914 9.82 21.632 15.449 34.894 15.449h187.018c13.317 0 26.074-5.67 34.993-15.561C324.614 418.491 328.947 405.222 327.578 391.974zM99.726 120.717c0-48.012 39.061-87.073 87.074-87.073 48.014 0 87.074 39.061 87.074 87.073v9.352H99.726V120.717z"/>
						</g>
						<text x="60" y="590">Salt</text>
				</svg>

			</div>
		)
	}
}

export default AnimationTrigger

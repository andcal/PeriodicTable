import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Table from '../Table'

class App extends Component {
	
	constructor (props) {
		super(props)

		this.state = { elements: ['a', 2,3] }
	}

	componentWillMount() {
    	fetch('https://api.myjson.com/bins/yrxyd')
     		.then((response) => {
        		return response.json()
      		})
      		.then((elements) => {
        		this.setState({ elements: elements })
      		})
  }

	render() {
    	if (this.state.elements.length > 0) {
      		return (
          		<Table elementsList={this.state.elements} />
      		)
    	} else {
     		 return <p className="text-center">Searching for elements...</p>
    	}
  	}
}

export default App
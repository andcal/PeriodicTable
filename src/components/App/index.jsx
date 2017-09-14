import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Table from '../Table'

class App extends Component {
	
	constructor () {
		super()

        this.state = {
            elements: []
        }
    }

    componentWillMount() {
        fetch('https://api.myjson.com/bins/gwqv1')
        .then((response) => {
            return response.json()
        })
        .then((elements) => {
            this.setState({ elements: elements })
        })
    }

    render() {

        return (
                <Table elements = {this.state.elements}/>
        )
    }
}


export default App
import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Table from '../Table'
import AnimationContainer from '../AnimationContainer'

class App extends Component {
	
	constructor () {
		super()

        this.state = {
            elements: [],
            rotate: ''
        }

        this.handlePressedElement = this.handlePressedElement.bind(this)
        this.handleReappearanceElements = this.handleReappearanceElements.bind(this)
    }

    componentWillMount() {
        fetch('https://periodic-table-mendeleev.firebaseio.com/elements.json')
        .then((response) => {
            return response.json()
        })
        .then((elements) => {
            this.setState({ elements: elements })
        })
    }

    handlePressedElement(groupCategory) {    
        this.setState({
            rotate: groupCategory
        }) 
    }

    handleReappearanceElements() {
        this.setState({
            rotate: ''
        })
    }

    renderAnimationContainer() {
        if(this.state.rotate !== '') { 
            return (               
                <AnimationContainer
                    groupCategory = {this.state.rotate}
                    onReappearElements = {this.handleReappearanceElements}
                />
            )
        } 
    }

    render() {
        return (
            <div>

                <Table
                    elements = {this.state.elements}
                    handlePressedElement = {this.handlePressedElement}
                    reappearanceElements = {this.state.rotate}
                />

                { this.renderAnimationContainer() }

            </div>
        )
    }
}

export default App
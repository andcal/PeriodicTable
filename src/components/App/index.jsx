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
            rotate: '',
            showModal: false
        }

        this.handlePressedElement = this.handlePressedElement.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
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

    handlePressedElement(groupCategory) {    
        this.setState({
            rotate: groupCategory,
            showModal: true
        }) 
    }

    handleCloseModal() {
        console.log('close')
        this.setState({
            showModal: false
        })
    }

    renderAnimationContainer() {

        if(this.state.rotate !== '') {
    
            return (
                    
                     <AnimationContainer
                        groupCategory = {this.state.rotate}
                        showModal = {this.state.showModal}
                        onCloseModal = {this.handleCloseModal}
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

                />

                {this.renderAnimationContainer()}


            </div>
        )
    }
}


export default App
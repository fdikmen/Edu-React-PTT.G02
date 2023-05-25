import React, { Component } from 'react'
import EventSubSample from './EventSubSample'

export default class EventSample extends Component {
    state = {counter: 0}
    render() {
        const onHandleIncrease = () => {
            this.setState({ counter: this.state.counter + 1 })
        }
        const onSetCounter = (num) => {
            this.setState({ counter: num })
        }
        return (
            <div>
                EventSample
                <h2>Counter is {this.state.counter}</h2>
                <button type='button'
                    onClick={onHandleIncrease}
                >Increase</button>
                <hr />

                <EventSubSample 
                onSetCounter={onSetCounter}
                counter={this.state.counter}  
                onHandleIncrease={onHandleIncrease}/>
            </div>
        )
    }
}

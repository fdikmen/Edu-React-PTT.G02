import React, { Component } from 'react'

export default class EventSubSample extends Component {
    // changeCounter = () => {
    //     this.props.onHandleIncrease()
    // }
    render() {
        const changeCounter = () => {
            this.props.onHandleIncrease()
        }

        const setCounter = () => {
            this.props.onSetCounter(90)
        }

        const setConsole = (event) => {
            event.preventDefault(); // prevent page refresh
            console.log("Console Write!")
        }
        return (
            <form onSubmit={setConsole}>
                <div>EventSubSample
                <h2 style={{ color: 'red' }}>Parent Counter is {this.props.counter}</h2>
                <button type='button'
                    onClick={changeCounter}
                >+</button>

                <button type='button'
                    onClick={setCounter}
                >+90</button>

                <button type='button'
                    onClick={setConsole}
                >Console Write!</button>

                <button type='button'
                    onClick={() => this.props.onHandleIncrease()
                    }
                >+130v2</button>

                <button type='submit'>Submit</button>
            </div>
            </form>
        )
    }
}

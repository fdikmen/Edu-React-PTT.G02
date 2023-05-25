import React, { Component } from 'react'
import StateSubSample from './StateSubSample'

export default class StateSample extends Component {
    state = {
        counter: 1,username:'TommyUserName'
    }
    render() {
        const name = 'Tommy'
        let age = 12;
        let counter2 = 0;

        const onCounterChange = () => {
            counter2 = counter2 + 1;
            this.setState({ counter: this.state.counter + 1 })
            console.log("State Counter is ", this.state.counter)
            console.log("LET Counter is ", counter2)
        }

        const onHandleClick = (ageNumber) => {
            console.log("Clicked!")
            //this.setState({age:ageNumber})
            age = Math.random() * 10;
            console.log("Age is ", age)
        }
        return (
            <div>
                <h2>State Counter is {this.state.counter}</h2>
                <h2>LET Counter2 is {counter2}</h2>
                <span>username {this.state.username} </span>
                <button type='button'
                    onClick={onCounterChange}>Counter Change</button>
<hr />
                <h2>State Sample Component</h2>
                Name is : {name}<br />
                <button type='button'
                    onClick={onHandleClick}
                >Console Write!</button>
                <StateSubSample age={age}
                    onHandleClick={onHandleClick}
                />

<h2>State Counter is {this.state.counter}</h2>
            </div>
        )
    }
}

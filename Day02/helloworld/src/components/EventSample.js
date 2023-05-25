import React, { Component } from 'react'
import EventSubSample from './EventSubSample'

export default class EventSample extends Component {
    // state = {
    //     age: 12
    // }
    render() {
        const name = 'Tommy'
        let age = 12;
        const onHandleClick = (ageNumber) => {
            console.log("Clicked!")
            //this.setState({age:ageNumber})
            age = Math.random() * 10;
            console.log("Age is ",age)
        }
        return (
            <div>
                <h2>Event Sample Component</h2>
                Name is : {name}<br />
                <button type='button'
                onClick={onHandleClick}
                >Console Write!</button>
                <EventSubSample age={age}
                onHandleClick={onHandleClick}
                />
            </div>
        )
    }
}

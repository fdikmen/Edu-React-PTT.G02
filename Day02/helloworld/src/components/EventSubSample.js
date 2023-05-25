import React, { Component } from 'react'

export default class EventSubSample extends Component {
  render() {
    const onHandleClick = () => {
        console.log("Clicked!")
    this.props.onHandleClick(65)
    }
    return (
      <div>EventSubSample
        <h2>Age is
             {this.props.age}</h2>
        <button type='button'
            onClick={onHandleClick}
        >Console Write!</button>
      </div>
    )
  }
}

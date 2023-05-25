import React, { Component } from 'react'

export default class StateSubSample extends Component {
  render() {
    const onHandleClick = () => {
        console.log("Clicked!")
    this.props.onHandleClick(65)
    }
    return (
      <div>StateSubSample
        <h2>Age is
             {this.props.age}</h2>
        <button type='button'
            onClick={onHandleClick}
        >Console Write!</button>
      </div>
    )
  }
}

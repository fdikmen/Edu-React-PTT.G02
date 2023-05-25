import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div className='FormComponent'>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone" />
        <button type="button">Add</button>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div className='ListComponent'>
        <input type="text" placeholder="Search..." />
        <ul>
            <li>John</li>
            <li>Tom</li>
            <li>Jack</li>
            <li>Mike</li>
        </ul>
      </div>
    )
  }
}

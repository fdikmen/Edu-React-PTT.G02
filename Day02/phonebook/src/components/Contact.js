import React, { Component } from 'react'
import Form from './Form'
import List from './List'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <List />
        <Form />
      </div>
    )
  }
}

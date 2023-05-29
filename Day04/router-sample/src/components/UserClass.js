import React, { Component } from 'react'

export default class UserClass extends Component {
  render() {
   console.log("window.location", window.location)
   const params = window.location.pathname.split("/").pop();
    return (
      <div>User Class Comp. ID: {params}</div>
    )
  }
}

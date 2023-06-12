import React, { Component } from 'react'

export default class BugFixed extends Component {
    componentDidMount() { console.log('BugFixed componentDidMount'); }
    componentWillUnmount() { console.log('BugFixed componentWillUnmount'); }
    componentDidUpdate() { console.log('BugFixed componentDidUpdate'); }
  render() {
    return (
      <div>BugFixed</div>
    )
  }
}

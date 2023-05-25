// by rcc / rce snippet

import React, { Component } from 'react'

export default class ClassComp extends Component {
    //CLASS FIELD => constructor, state, method, life cycle method
    // rconst
    constructor(props) {
      super(props)
      // Constructor Field
      console.log("Constructor Method Run!") 
    }
    state = { counter: 0,name:'Tommy' }
  render() {
    // JS CODE FIELD
    const changeCounter = () => {
        this.setState({counter: this.state.counter + 1})
    }
    return (
        // JSX CODE FIELD
      <div 
      style={{width:'49%',
      backgroundColor:'greenyellow',
      float:'left',minHeight: '90vh',}}>
        <h3>Class Component / Statefull Component</h3>
        <h3>Name is {this.state.name}</h3>
        <h2>Counter is {this.state.counter}</h2>
        <button type='button'
        onClick={changeCounter}
        >+ADD</button>

      </div>
    )
  }
}

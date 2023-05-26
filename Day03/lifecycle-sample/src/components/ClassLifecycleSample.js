import React, { Component } from 'react'

export default class ClassLifecycleSample extends Component {

    state = {number: 0}

    onchangeNumber = () => {   
        this.setState({number: this.state.number + 1})
    }

    // rconst snippet -- 01
    constructor(props) {
        super(props) // bug fix: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        console.log('01-Constructor Run!')
    }
    //cdm snippet -- 03
    componentDidMount() {
        console.log('03-componentDidMount Run!')
    }
    //cdup snippet -- 04
    componentDidUpdate(prevProps, prevState) { 
        console.log('04-componentDidUpdate Run!')
        console.log('prevProps: ', prevProps, 'nextProps: ', this.props)
        console.log('prevState: ', prevState, 'nextState: ', this.state)

    } 
    //scu snippet -- 02.1
    shouldComponentUpdate = (nextProps, nextState) => {
      console.log('02.1-shouldComponentUpdate Run!')
      if (nextState.number > 10) {
        return false // disable update
      }
      return true // enable update
    };
    

    //cwun snippet -- 05
    componentWillUnmount() {
        console.log('05-componentWillUnmount Run!')
     }


    //02.2
    render() {
        console.log('02.2-render Run!')
        return (
            <div>ClassLifecycleSample
                <br/>
                <span>{this.state.number}</span><br/>
                <button onClick={this.onchangeNumber}>Change Number</button>
            </div>
        )
    }
}

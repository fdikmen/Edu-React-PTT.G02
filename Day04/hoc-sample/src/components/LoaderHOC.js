import React, { Component } from 'react'

/*
const LoaderHOC = (ComponentXXX) => {
    return [class/func COMPONENT]
 }
 */


const LoaderHOC = (ComponentXXX) => {
    return class LoaderHOC extends Component {
        render() {
          return (
           <div className='divSection'>
             {
                this.props.loading
                ? <h1>Loading...</h1> 
                : <ComponentXXX {...this.props} />
             }
           </div>
          )
        }
      }
 }


export default LoaderHOC;
/*
//STEP-01
const LoaderHOC = (ComponentXXX) => {
  return
}
//STEP-02 - create a component class(rcc) /func (rfc)
import React from 'react'
export default function LoaderHOC() {
  return (
    <div>LoaderHOC</div>
  )
}
//STEP-03 Delete export default & import
function LoaderHOC() {
  return (
    <div>LoaderHOC</div>
  )
}
//STEP-04 - return the component
const LoaderHOC = (ComponentXXX) => {
  return function LoaderHOC() {
    return (
      <div>LoaderHOC</div>
    )
  }
}

//STEP-RESULT
const LoaderHOC1 = (ComponentXXX) => {
  return function LoaderHOC(props) {
    return (
      {props.loading
        ? <h1>Loading...</h1>
        : <ComponentXXX {...props} />
    )
  }
}
  
*/



  



















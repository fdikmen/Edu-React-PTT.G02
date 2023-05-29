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





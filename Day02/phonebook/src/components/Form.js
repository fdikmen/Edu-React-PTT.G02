import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    name: '',
    phone: ''
  }
  /*onChangeInputName = (e) => {
    this.setState({
      name: e.target.value
    })
    console.log(this.state.name, this.state.phone)
  }
  onChangeInputPhone = (e) => {
    this.setState({
      phone: e.target.value
    })
    console.log(this.state.name, this.state.phone)
  }*/

  onChangeInput= (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.name, this.state.phone)
  }



  render() {
    return (
      <div className='FormComponent'>
        <input type="text" name='name' id='name' 
        placeholder="Name" onChange={this.onChangeInput} />
        <input type="text" name='phone' id='phone' 
        placeholder="Phone" onChange={this.onChangeInput} />
        <button type="button">Add</button>
      </div>
    )
  }
}

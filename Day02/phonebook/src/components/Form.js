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

  onChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.name, this.state.phone)
  }

  onSubmitHandler = (e) => {
    e.preventDefault() // prevent page refresh
    /*this.props.addContact({
      name: this.state.name,
      phone: this.state.phone
    })*/
    // this.props.addContact(this.state)
    if (this.state.name?.trim() !== '' && this.state.phone?.trim() !== '') {
      this.props.addContact({ ...this.state })
      this.setState({
        name: '',
        phone: ''
      })
    }
    else {
      alert('Please fill the form')
    }
  }



  render() {
    return (
      <form className='FormComponent' onSubmit={this.onSubmitHandler}>
        <input type="text" name='name' id='name' value={this.state.name}
          placeholder="Name" onChange={this.onChangeInput} />
        <input type="text" name='phone' id='phone' value={this.state.phone}
          placeholder="Phone" onChange={this.onChangeInput} />
        <button type="submit">Add</button>
      </form>
    )
  }
}

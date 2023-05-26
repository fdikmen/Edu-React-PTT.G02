import React, { Component } from 'react'
import Form from './Form'
import List from './List'

export default class Contact extends Component {
  state = {
    contacts: [
      {name: 'John', phone: '+123456789'},
      {name: 'Jack', phone: '+123456789'},
      {name: 'Mike', phone: '+123456789'},
    ]
  }
 addContact = (itemObj) => {
    /*const newContact = this.state.contacts.push(itemObj)
    this.setState({
      contacts:newContact
    })*/
    this.setState({
      contacts: [...this.state.contacts, itemObj]
    })
  }
  render() {
    return (
      <>
        <List contacts={this.state.contacts} />
        <Form addContact={this.addContact}/>
      </>
    )
  }
}

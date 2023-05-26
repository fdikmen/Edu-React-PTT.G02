import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
  state = {
    filterText: ''
  }
  static propTypes = {
    contacts: PropTypes.array.isRequired
  }
  render() {
    const onChangeFilterText = (e) => {
      //console.log("INPUT", e.target.value)
      this.setState({
        filterText: e.target.value
      })
      //console.log("STATE", this.state.filterText)
    }

    const filteredContacts = this.props.contacts.filter(
      contact => {
        return contact.name.toLowerCase().indexOf(
          this.state.filterText.toLowerCase()
        ) !== -1
        ||
        contact.phone.toLowerCase().indexOf(
          this.state.filterText.toLowerCase()
        ) !== -1
      }
    )
    return (
      <div className='ListComponent'>
        <input type="text" placeholder="Search..." onChange={onChangeFilterText} />
        <ul>
          {filteredContacts.map((contact, index) => (
            <li key={index}>
              <span>{contact.name}</span>
              <span>{contact.phone}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

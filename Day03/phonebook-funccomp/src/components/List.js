import React, { useState } from 'react'

export default function List(props) {
    const [filterText, setFilterText]
     = useState('')

     const onChangeFilterText = (e) => {
        //console.log("INPUT", e.target.value)
        setFilterText(e.target.value)
        //console.log("STATE", filterText)
        }
const filteredContacts = props.contacts.filter(
    contact => {
        return contact.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) !== -1
        ||
        contact.phone.toLowerCase().indexOf(
          filterText.toLowerCase()
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

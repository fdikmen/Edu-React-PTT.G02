//by rfc
import React, { useState } from 'react'
import List from './List'
import Form from './Form'

export default function Contact() {
    const defaultContacts = [
        {name: 'John', phone: '+123456789'},
        {name: 'Jack', phone: '+123456789'},
        {name: 'Mike', phone: '+123456789'},
      ]
    const [contacts, setContacts] = useState(defaultContacts)
    const addContact = (itemObj) => {
        setContacts([...contacts, itemObj])
    }
    return (
        <>
        <List contacts={contacts} />
        <Form addContact={addContact}/>
      </>
  )
}

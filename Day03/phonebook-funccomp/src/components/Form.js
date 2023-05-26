import React, { useState } from 'react'

export default function Form({ addContact }) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const onChangeInput = (event) => {

        if (event.target.name == 'name') {
            setName(event.target.value)
        }
        else if (event.target.name == 'phone') {
            setPhone(event.target.value)
        }
        console.log(name, phone)
    }

    // if(name!=null){name=name.trim()} => name?.trim()


    const onSubmitHandler = (e) => {
        e.preventDefault() // prevent page refresh
        if (name?.trim() !== '' && phone?.trim() !== '') {
            //   addContact({ name:name,phone :phone})
            addContact({ name, phone })
            setName('')
            setPhone('')
        }
        else {
            alert('Please fill the form')
        }
    }
    return (
        <form className='FormComponent' onSubmit={onSubmitHandler}>
            <input type="text" name='name' id='name' value={name}
                placeholder="Name" onChange={onChangeInput} />
            <input type="text" name='phone' id='phone' value={phone}
                placeholder="Phone" onChange={onChangeInput} />
            <button type="submit">Add</button>
        </form>
    )
}

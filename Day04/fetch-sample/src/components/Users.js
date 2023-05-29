//by rfc snippet
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users() {
    const [users, setUsers] = useState([])
    /*useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setUsers(data))
    }, [])*/

    const getUsersWithFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }

    const getUsersWithAxios = () => {
        // console.log('getUsersWithAxios')
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
    }


    return (
        <div>Users
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.name} | {user.phone}</li>)
                }
                <button onClick={getUsersWithFetch}>Get Users with FETCH</button><br />
                <button onClick={getUsersWithAxios}>Get Users with AXIOS</button>
            </ul>
        </div>
    )
}

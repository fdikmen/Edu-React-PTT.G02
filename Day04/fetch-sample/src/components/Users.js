//by rfc snippet
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    /*useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setUsers(data))
    }, [])*/

    const getUsersWithFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }

    const getUsersWithAxios = () => {
        setLoading(true)
        // console.log('getUsersWithAxios')
        // get or delete
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
            setLoading(false)
        }, 3000);
    }

    const postUsersWithAxios = () => {
        //post or put
        axios.post('https://jsonplaceholder.typicode.com/users',
            { name: 'test', phone: '1234567890' })
            .then(res => setUsers([...users, res.data]))
            .catch(err => console.log(err))
    }


    return (
        <div>Users
            {
                loading
                    ? <h1>Loading...</h1>
                    : <ul>
                        {
                            users.map(user => <li key={user.id}>{user.name} | {user.phone}</li>)
                        }</ul>
            }


            <button onClick={getUsersWithFetch}>Get Users with FETCH</button><br />
            <button onClick={getUsersWithAxios}>Get Users with AXIOS</button><br />
            <button onClick={postUsersWithAxios}>Post User with AXIOS</button>

        </div>
    )
}

import React from 'react'
import { useContext } from 'react'
import { userContext } from '../context/rootContext'

export default function Profile() {
    const userdetail = useContext(userContext);
    console.log("CONTEXT",userdetail);
  return (
    <div>Profile
        <h1>Name: {userdetail.name}</h1>
        <h2>Age: {userdetail.age}</h2>
        <h3>Address: {userdetail.address}</h3>

    </div>
  )
}

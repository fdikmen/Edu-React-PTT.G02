import React from 'react'
import { useParams } from 'react-router-dom';

export default function User() {
    const params = useParams();
    console.log("User -> params", params)
  return (
    <div>User ID {params.userId}</div>
  )
}

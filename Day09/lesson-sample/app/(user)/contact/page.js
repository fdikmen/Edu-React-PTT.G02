import React from 'react'

export default function page(props) {
  console.log(props)
  return (
    <div>Contact Page
        <p>contact: {props.params.contact}</p>
    </div>
  )
}

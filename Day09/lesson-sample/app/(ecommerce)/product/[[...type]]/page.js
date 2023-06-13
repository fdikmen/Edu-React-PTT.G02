import React from 'react'

export default function page(props) {
  console.log(props)
  return (
    <div>Product Page
        <p>product: {props.params.type}</p>
    </div>
  )
}

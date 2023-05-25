// by rcc or rce snippet
import React, { Component } from 'react'
import './Blog.css'
// import style from './Blog.css'

export class Blog extends Component {
    render() {
        const buttonStyle = {
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px',
            fontSize: '20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }
        return (
            <div>Blog
                <h1>
                    Blog Heading
                </h1>
                <p className='pharagraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                </p>

                <p id='blog'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                </p>

                <p style={{ backgroundColor: 'blueviolet', fontWeight: 'bolder' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                </p>
                <button style={buttonStyle}>Click Me</button>

            </div>
        )
    }
}

export default Blog

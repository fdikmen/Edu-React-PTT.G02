// by rcc or rce snippet
import React, { Component } from 'react'
import './Blog.css'
import BlogItem from './BlogItem'
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
        console.log("BLOG COMP PROPS =>",this.props)
        
        const blogItems =[
            {id:1,title:'Tommy',content:'Lorem ipsum dol'},
            {id:2,title:'Jerry',content:'Lorem ipsum dol'},
            {id:3,title:'Spike',content:'Lorem ipsum dol'},
            {id:4,title:'Tyke',content:'Lorem ipsum dol'},
        ]
        
        return (
            <div>
                
                <hr/>11111
                <BlogItem userId={123} username={this.props.name} blogItems={blogItems}/>
                2222222
                <BlogItem userId={123} blogItems={blogItems}/>
                <hr/>
                Blog
                <h1>
                    Blog Heading NAME: {this.props.name} AGE: {this.props.age}
                </h1>
                <label htmlFor='blogbtn'>Blog</label>
                <button className='btn' id='blogbtn' onClick={()=>alert("Clicked!")}>Click Me</button>
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

import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class BlogItem extends Component {

    // PROPS
    static propTypes = { 
        username: propTypes.string,
        // blogItems: propTypes.array.isRequired,
        blogItems: propTypes.arrayOf(propTypes.shape({
            id: propTypes.number.isRequired,
            title: propTypes.any.isRequired,
            content: propTypes.string
        })).isRequired,
        // userId: propTypes.any.isRequired
        // userId: propTypes.oneOfType([propTypes.string,propTypes.number]).isRequired
        userId: propTypes.oneOfType([propTypes.string,propTypes.number])
    }

    // DEFAULT PROPS
    static defaultProps = {
        username: 'Not User'}
    
    // CLASS ATTRIBUTE FIELD
    // constructor , state , methods
    render() {
        // JS CODE FIELD
        const mybutton = <button type='button'>
            Click Me from Blog Item
        </button>
        return (
            // JSX CODE FIELD
            <div>
                <h2>Blog Item Name: 
                    {this.props.username} </h2>
                BlogItem {5 + 9}
                {
                    5 / 2 === 2.5
                        ? <h1>True</h1>
                        : <h1>False</h1>
                }
                {mybutton}

                {/* <ul>
                    <li>{this.props.blogItems[0].id} 
                    {this.props.blogItems[0].title} 
                    {this.props.blogItems[0].content}</li>

                    <li>{this.props.blogItems[1].id} 
                    {this.props.blogItems[1].title} 
                    {this.props.blogItems[1].content}</li>

                    <li>{this.props.blogItems[2].id} 
                    {this.props.blogItems[2].title} 
                    {this.props.blogItems[2].content}</li>

                    <li>{this.props.blogItems[3].id} 
                    {this.props.blogItems[3].title} 
                    {this.props.blogItems[3].content}</li>
                </ul> */}
                <hr/>
                <ul>
                    {this.props.blogItems &&
                        this.props.blogItems.map((item,index)=>{
                            return <li key={index}>
                                {item.id} - 
                                {item.title} - 
                                {item.content}</li>
                        }
                        )
                    }
                </ul>
                
            </div>
        )
    }
}

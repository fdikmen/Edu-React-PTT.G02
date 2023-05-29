import React, { useState,useEffect,useRef } from 'react'

export default function FuncLifecycleSample() {
    console.log('02.2-render Run!')
    const [number, setNumber] = useState(0)
    const [name, setName] = useState('Tommy')

    const onchangeNumber = () => {   
        setNumber(number + 1)
    }

//componentDidMount
    //useEffect(function,array)
    useEffect(() => {
        console.log('03-componentDidMount Run!')
        //componentWillUnmount
        return () => { 
            console.log('05-componentWillUnmount Run!')
        }
    },[])

    //componentDidUpdate
    //useEffect(function,array)
    useEffect(() => {
        console.log('04-componentDidUpdate Run!')
    },[name,number])
    

    return (
        <div>FuncLifecycleSample
            <br/>
            <span>{number}</span><br/>
            <button onClick={onchangeNumber}>Change Number</button>
        </div>
    )
}

// by rfc / rfce snippet
import React,{useState} from 'react'


export default function FuncComp() {
    // JS CODE FIELD
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('Tommy')
    const changeCounter = () => {setCounter(counter + 1)}
  return (
     // JSX CODE FIELD
    <div
    style={{width:'49%',
    backgroundColor:'#e6e6e6',
float:'left',minHeight: '90vh'}}>

<h3>Function Component / Stateless Component</h3>
<h3>Name is {name}</h3>
<h2>Counter is {counter}</h2>
<button type='button'
        onClick={changeCounter}
        >+ADD</button>
</div>
  )
}

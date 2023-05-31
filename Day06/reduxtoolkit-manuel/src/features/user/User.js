import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { login } from './userSlice';

export default function User() {
    const dispatch = useDispatch();

    const onLogin = (username) => {
        dispatch(login(username));
    }
    //function(state){ return state;}
    console.log("useSelector",useSelector(state=>state.userReducer.username));
   
    const [username, setUsername] = useState(useSelector(state=>state.userReducer.username))

  return (
    <div>
        <h1>User : {username && username}</h1>
        <button onClick={()=>onLogin('Tommy')}>Login</button>
    </div>
  )
}

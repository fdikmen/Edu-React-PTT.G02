import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { login,deleteUser } from './userSlice';

export default function User() {
    const dispatch = useDispatch();

    const onLogin = (newUserName) => {
        dispatch(login(newUserName));
    }
    //function(state){ return state;}
    //console.log("useSelector",useSelector(state=>state.userReducer.userName));
   
    const _username = useSelector(state=>state.userReducer.userName)

    const onDelete = () => {
        dispatch(deleteUser());
    }

  return (
    <div>
        <h1>User : {_username}</h1>
        <button onClick={()=>onLogin('Tommy')}>Login</button>
        <button onClick={onDelete}>Delete</button>
    </div>
  )
}

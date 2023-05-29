import Post from "./components/Post";
import Todo from "./components/Todo";
import User from "./components/User";
import "./main.css"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, 2000);
  }, [])



  const [posts, setPosts] = useState([])
  useEffect(() => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setPosts(res.data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])


  const [todos, setTodos] = useState([])
  useEffect(() => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => setTodos(res.data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])

  return (
    <div style={{ width: '100%', float: "left" }}>
      <h3> Higher Order Components</h3>
      <p>
        <ul>
          <li>Higher Order Components</li>
          <li>Reuseable Higher Order Components</li>
          <li>Pure Component</li>
        </ul>
      </p>
      <hr />
      <User loading={loading} users={users} />
      <Post loading={loading} posts={posts} />
      <Todo loading={loading} todos={todos}  />
    </div>
  );
}

export default App;

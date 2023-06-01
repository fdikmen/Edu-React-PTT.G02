import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MovieAdd from '../features/movie/MovieAdd';
import MovieList from '../features/movie/MovieList';
import { Message } from 'semantic-ui-react'

export default function RootRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomeMessage/>} />
            <Route path="/movie/add" element={<MovieAdd />} />
            <Route path="/movie/list" element={<MovieList />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

const HomeMessage = () => (
  <Message>
    <Message.Header>Home Page</Message.Header>
    <p>
      Welcome to the Movie App!
    </p>
  </Message>
)

const NotFound = () => (
  <Message negative>
    <Message.Header>404!</Message.Header>
    <p>Not Found!</p>
  </Message>
)


//Created by rfc snippet
import React, { useEffect } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchMovies } from './movieSlice';
import PageCardComp from '../../components/PageCardComp';

export default function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movieReducer.movies);
    
    //ComponentDidMount
    useEffect(() => {
        // console.log("MovieList useEffect");
        // dispatch({type:"movie/fetchMovies"});
        dispatch(fetchMovies())
    }, [])
    return (
        <div>MovieList
            <Card.Group itemsPerRow={3}>
                {
                    movies.map((movie,index) => (
                        <PageCardComp key={index} movie={movie}/>
                    ))
                }
            </Card.Group>
        </div>
    )
}
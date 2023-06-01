//Created by rxslice snippet
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../API/axiosConfig'

export const fetchMovies = createAsyncThunk(
    'movie/fetchMovies',
    async () => {
        const response = await API.get('/movies')
        console.log("fetchMovies response.data",response.data);
        return response.data
    }
)

export const createMovie = createAsyncThunk(
    'movie/createMovie',
    async (movie) => {
        console.log("WILL createMovie movie",movie);
        const response = await API.post('/movies',movie)
        console.log("createMovie response.data",response.data);
        return response.data
    }
)

const initialState = {
    movies:[],
    movie:{},
    status: 'idle',
    error: null
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
    extraReducers: {
        //FETCH MOVIES
        [fetchMovies.pending]: (state, action) => {
            state.status = 'loading'
        }
        ,
        [fetchMovies.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.movies = action.payload
        }
        ,
        [fetchMovies.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
        //CREATE MOVIE
        [createMovie.pending]: (state, action) => {
            state.status = 'loading'
        }
        ,
        [createMovie.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.movie = action.payload
        }
        ,
        [createMovie.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
});

export const {} = movieSlice.actions

export default movieSlice.reducer
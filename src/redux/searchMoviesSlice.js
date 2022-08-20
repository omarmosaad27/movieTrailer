import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
const api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=a9fbb32d"

export const getMovies = createAsyncThunk('movies/getMovies', (title)=> {
    return fetch(`${api_url}&s=${title}`)
        .then(resp => resp.json())
        .catch((err) => console.log(err))
});

const searchMoviesSlice = createSlice ({
    name: "movies",
    initialState: {
        movies: getMovies(),
        isLoading: false,
    },
    extraReducers: {
        [getMovies.pending]: (state) => {
            state.isLoading = true
        },
        [getMovies.fulfilled]: (state, action) => {
            state.isLoading = false
            state.movies = action.payload
        },
        [getMovies.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export default searchMoviesSlice.reducer
import React from 'react'
import SearchForm from '../../compoenets/searchform/SearchForm'
import { useSelector } from 'react-redux'
const MoviesPage = ({ searchOpen }) => {
    const {Search} = useSelector(state=> state.movies.movies)
    console.log(Search);
    return (
        <>
            {
                searchOpen && <SearchForm/>
            }

        </>
    )
}

export default MoviesPage
import React,{useState} from 'react'
import './Search.css'
import { BiSearchAlt } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { getMovies } from '../../redux/searchMoviesSlice'
const SearchForm = () => {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            getMovies(title)
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='search movie' onChange={(e)=>setTitle(e.target.value)} />
            <BiSearchAlt className='form-icon' />
        </form>
    )
}

export default SearchForm
import React from 'react'
import { Link } from 'react-router-dom'
import {BiSearchAlt} from 'react-icons/bi'
import  './navbar.css'
const Navbar = ({searchOpen,setSearchOpen}) => {
    return (
        <nav>
            <header className="nav-header">
                <Link to="/" className='logo'>
                    Movie Trailer
                </Link>
            </header>
            
                <Link to={'/searchmovies'}  onClick={() => setSearchOpen(!searchOpen)}  className='search'>
                search Movie
                <BiSearchAlt className='form-icon' />
                </Link>
            
            <div className="nav-links">
                <Link to={'/boxoffice'} className="nav-link">
                    Box Office

                </Link>
            </div>
            
        </nav>
    )
}

export default Navbar
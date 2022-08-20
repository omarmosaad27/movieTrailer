import React, { useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
// import { useEffect } from 'react';
// import { useDispatch,useSelector } from 'react-redux';
import { getMovies } from './redux/searchMoviesSlice'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './compoenets/navbar/Navbar'
import BoxOffice from './pages/boxoffice/BoxOffice';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/movies/MoviesPage';
function App() {

  const [searchOpen, setSearchOpen] = useState(false);

  const { isLoading } = useSelector(state => state);
  const dispatch = useDispatch();

  // fetch movies
  useEffect(() => {
    dispatch(getMovies("spiderman"))
  }, []);

  // if loading true return loading component
  if (isLoading) {
    return (
      <div className='loading'> 
        <h2>Loading...</h2>
      </div>
    )
  }
  // basic return
  return (
    <BrowserRouter>
      <Navbar searchOpen={searchOpen} setSearchOpen={setSearchOpen}/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/boxoffice" element={<BoxOffice/>}/>
        <Route path="/searchmovies" element={<MoviesPage searchOpen={searchOpen}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

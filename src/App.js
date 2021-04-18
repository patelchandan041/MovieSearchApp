import React, { useEffect, useState } from 'react'
import './App.css';
import MovieCard from './MovieCard';

 const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9cfc295537684b6dcd1fd57ead573ac4';
 const SEARCH_API ='https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='

function App() {
  const [ movies, setMovies ] = useState([]);
  const [searchTerm, setSearchTerm ] = useState([])
  useEffect(() =>{
      fetch(MOVIES_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        console.log(data.vote_average)
      })
  },[])

const handleSubmit = (e) =>{
  e.preventDefault();
  fetch(SEARCH_API+searchTerm)
  .then((ten) => ten.json())
   .then((data) =>{
     setMovies(data.results);
   })
   setSearchTerm('')
}

  return (

    <div className="App">

       <form onSubmit={handleSubmit}>
      <header>
        <input className='search' placeholder="search" type="search" value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)} />
      </header>
      </form>
      
      <div className="app_container">
      {
     movies.length > 0 &&
       movies.map((movie) => <MovieCard key={movie.id}{...movie}  />  )
     }
      </div>
    
    </div>
  )
}

export default App

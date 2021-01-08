import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar';
import { searchTitle } from '../actions/OMDBapi'
import DisplayMovies from './DisplayMovies';
import DisplayNominees from './DisplayNominees';
import Banner from '../components/Banner';
import ls from 'local-storage'
// import bootstrap from "bootstrap";

function Home() {
  const [movies, setMovies] = useState([])
  const [nominees, setNominees] = useState(ls.get('nominees') || [])
  const [searchWord, setSearchWord] = useState("")

  const handleSearch = (title) => {
    console.log("entered handleSearch")
    setSearchWord(title)
    searchTitle(title)
      .then(movieArray => {
        console.log(movieArray)
        setMovies(movieArray)
        console.log(movies)
      })
  }

  const addNominee = (movie) => {
    if (!nominees.find(m => m.Title === movie.Title)) {
      setNominees(nominees.concat(movie))
    }
  }

  useEffect(() => {
    ls.set('nominees', nominees)
  }, [nominees])
  
  const removeNominee = (movie) => {
    setNominees(nominees.filter(m => m.Title !== movie.Title))
  }

  return (
    <div>
     <div class="container justify-content-center">
      <h3>The Shoppies</h3>
      <Banner show={nominees.length >= 5}/>
      <SearchBar handleSearch={handleSearch}/>
      <DisplayMovies movies={movies} nominees={nominees} addNominee={addNominee} searchWord={searchWord}/>
      <DisplayNominees nominees={nominees} removeNominee={removeNominee} />
     </div>
    </div>

    
  );
}

export default Home;

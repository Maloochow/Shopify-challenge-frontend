import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar';
import { searchTitle } from '../actions/OMDBapi'
import DisplayMovies from './DisplayMovies';
import DisplayNominees from './DisplayNominees';
import Banner from '../components/Banner';
import ls from 'local-storage'
import { Paper, Typography, Container, Grid } from '@material-ui/core'
import { grey } from '@material-ui/core/colors';

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
    
    <Container >
     
      <Typography variant="h3" align='center' style={{padding: 30}}>The Shoppies</Typography>
      <Banner show={nominees.length >= 5}/>
      <SearchBar handleSearch={handleSearch}/>

      <section style={{paddingBottom: 40}}></section>

    <Grid container spacing={0}>
      <Grid item xs={6}>
        <DisplayMovies movies={movies} nominees={nominees} addNominee={addNominee} searchWord={searchWord}/>
      </Grid>

      <Grid item xs={6}>
        <DisplayNominees nominees={nominees} removeNominee={removeNominee} />
      </Grid>
    </Grid>
    
    <section style={{paddingBottom: 40}}></section>
    </Container>
    

    
  );
}

export default Home;

import React from 'react'
import DisplayMovie from '../components/DisplayMovie'

const DisplayMovies = ({movies, nominees, addNominee, searchWord}) => {
    const showMovies = () => {
        if (movies) {
            return movies.map(movie => {
                let isNominated = nominees.find(m => m.imdbID === movie.imdbID) || nominees.length >= 5 ? true : false
                return <DisplayMovie movie={movie} handleClick={addNominee} disabled={isNominated} buttonText="search" key={movie.imdbID}/>
            })
        } else {
            return <p>No result from the title</p>
        }
    }

    const showTitle = () => {
        if (searchWord) {
            return <h3>Results for "{searchWord}"</h3>
        }
    }
    
    
    return (
        <div>
            {showTitle()}
        <ul>
            {showMovies()}
        </ul>
        </div>
    )
}

export default DisplayMovies
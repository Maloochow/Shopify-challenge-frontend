import React from 'react'
import MovieItem from './MovieItem'

const DisplayMovie = ({movie, handleClick, disabled, buttonText}) => {    
    return (
        <li>
            <MovieItem title={movie.Title} year={movie.Year} /> <button onClick={e => handleClick(movie)} disabled={disabled}>{buttonText}</button>
        </li>
    )
}

export default DisplayMovie
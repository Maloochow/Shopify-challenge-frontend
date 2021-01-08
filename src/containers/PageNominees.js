import React, {useState, useEffect} from 'react'
import MovieItem from '../components/MovieItem'
import { searchID } from '../actions/OMDBapi'

const PageNominees = ({ movieIDs}) => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const fetchMovies = () => {
            return Promise.all(movieIDs.map( id => {
                return searchID(id)
            }))
        }

        fetchMovies()
        .then( array => {
            console.log(array)
            setMovies(array)
        })
    }, [movieIDs])
    
    const showNominees = () => {
        return movies.map(movie => {
            console.log(movie)
            return (
            <li><MovieItem title={movie.Title} year={movie.Year} key={movie.imdbID}/></li>
            )
        })
    }

    return (
        <div>
            {showNominees()}
        </div>
    )
}

export default PageNominees
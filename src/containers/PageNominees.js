import React, {useState, useEffect} from 'react'
import MovieItem from '../components/MovieItem'
import { searchID } from '../actions/OMDBapi'
import { ListItem, List, ListItemIcon } from '@material-ui/core'
import TurnedInIcon from '@material-ui/icons/TurnedIn';

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
            setMovies(array)
        })
    }, [movieIDs])
    
    const showNominees = () => {
        return movies.map(movie => {
            return (
            <ListItem>
                <ListItemIcon edge="front">
                        <TurnedInIcon fontSize="small"/>                        
                </ListItemIcon>
                <MovieItem title={movie.Title} year={movie.Year} key={movie.imdbID}/>
            </ListItem>
            )
        })
    }

    return (
        <List>
            {showNominees()}
        </List>
    )
}

export default PageNominees
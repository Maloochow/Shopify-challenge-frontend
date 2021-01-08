import React from 'react'
import MovieItem from './MovieItem'
import { ListItem, ListItemIcon, ListItemSecondaryAction, Button } from '@material-ui/core'
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

const DisplayMovie = ({movie, handleClick, disabled, buttonText}) => {    
    return (
        <ListItem>
            <ListItemIcon edge="front">
                { buttonText === "remove" || disabled ?
                    <TurnedInIcon fontSize="small"/>
                    : <TurnedInNotIcon fontSize="small"/>}
            </ListItemIcon>
            <MovieItem title={movie.Title} year={movie.Year} /> 
            <ListItemSecondaryAction>
                <Button size="small" variant="outlined" edge="end" aria-label="delete" onClick={e => handleClick(movie)} disabled={disabled}>
                {buttonText}
                </Button>
            
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default DisplayMovie
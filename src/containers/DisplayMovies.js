import React from 'react'
import DisplayMovie from '../components/DisplayMovie'
import { List, Typography, Container, Card, CardContent, CardHeader } from '@material-ui/core'

const DisplayMovies = ({movies, nominees, addNominee, searchWord}) => {
    const showMovies = () => {
        if (movies) {
            return movies.map(movie => {
                let isNominated = nominees.find(m => m.imdbID === movie.imdbID) || nominees.length >= 5 ? true : false
                return <DisplayMovie movie={movie} handleClick={addNominee} disabled={isNominated} buttonText="nominate" key={movie.imdbID}/>
            })
        } else {
            return <p>No result from the title</p>
        }
    }

    const showTitle = () => {
        if (searchWord) {
            return <Typography variant="h3">Results for "{searchWord}"</Typography>
        } else {
            return <Typography variant="h5">Search for your movie</Typography>
        }
    }
    
    
    return (
        <Container >
            <Card style={{minHeight: 500 }}>
                <CardHeader 
                    title={showTitle()} />
            <CardContent>
            <List>{showMovies()}</List>
            </CardContent>
            </Card>
        </Container>
    )
}

export default DisplayMovies
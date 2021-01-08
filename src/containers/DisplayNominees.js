import React from 'react'
import DisplayMovie from '../components/DisplayMovie'
import { generatePageLink } from '../actions/GeneratePageLink'
import { Link } from 'react-router-dom'
import { List, Paper, Typography, Container, Card, CardContent, CardHeader, CardActions, IconButton } from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share';

const DisplayNominees = ({nominees, removeNominee}) => {

    const showNominees = () => {
        return nominees.map(movie => {
            return <DisplayMovie movie={movie} handleClick={removeNominee} buttonText="remove" key={movie.imdbID}/>
        })
    }

    return (
     <Container>
        <Card style={{height: 500 }}>
            <CardHeader 
                action={
                    <IconButton href={`/page/${generatePageLink(nominees)}`}>
                    <ShareIcon />
                {/* <Link to={`/page/${generatePageLink(nominees)}`}>Share</Link> */}
                    </IconButton>
                }
                title="Nominations"/>
        <CardContent>
         <List>{showNominees()}</List>
        </CardContent>
        </Card>
     </Container>
 )   
}

export default DisplayNominees
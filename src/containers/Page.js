import React from 'react'
import { useParams } from 'react-router-dom'
import PageNominees from './PageNominees'
import { Container, Card, CardHeader } from '@material-ui/core'

const Page = () => {
    
    let { nominees } = useParams()
    let movieIDs = nominees.split("-")

    
    return (
        <Container style={{padding: 30}} maxWidth="sm">
            <Card style={{padding: 30}}>
            <CardHeader title="Nominations" />
            <PageNominees movieIDs={movieIDs} />
            </Card>
        </Container>
    )
}

export default Page
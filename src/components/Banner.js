import React from 'react'
import {Alert} from '@material-ui/lab';
import { Container } from '@material-ui/core'

const Banner = ({show}) => {
    const display = () => {
        if (show) {
            return <Alert variant="filled" severity="success">You have nominated all 5 movies</Alert>
        } else {
            return <div></div>
        }
    }
    
    return (
        <Container>{display()}</Container>
    )
}

export default Banner
import React from 'react'
import { ListItemText } from '@material-ui/core'

const MovieItem = ({ title, year }) => {
    let text = `${title} (${year})`

    return (
            <ListItemText primary={text} />
    )
}

export default MovieItem
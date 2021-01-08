import React from 'react'

const MovieItem = ({ title, year }) => {
    return (
        <span>
            {title} ({year})
        </span>
    )
}

export default MovieItem
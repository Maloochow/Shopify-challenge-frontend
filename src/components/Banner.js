import React from 'react'

const Banner = ({show}) => {
    const display = () => {
        if (show) {
            return <div>You have nominated all 5 movies</div>
        }
    }
    
    return (
        <div>{display()}</div>
    )
}

export default Banner
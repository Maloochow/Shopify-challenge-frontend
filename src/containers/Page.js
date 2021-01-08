import React from 'react'
import { useParams } from 'react-router-dom'
import PageNominees from './PageNominees'

const Page = () => {
    
    let { nominees } = useParams()
    let movieIDs = nominees.split("-")

    
    return (
        <div>
            <h3>Nominations</h3>
            <ul>
            <PageNominees movieIDs={movieIDs} />
            </ul>
        </div>
    )
}

export default Page
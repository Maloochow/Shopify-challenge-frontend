import React from 'react'
import DisplayMovie from '../components/DisplayMovie'
import { generatePageLink } from '../actions/GeneratePageLink'
import { Link } from 'react-router-dom'

const DisplayNominees = ({nominees, removeNominee}) => {

    const showNominees = () => {
        return nominees.map(movie => {
            return <DisplayMovie movie={movie} handleClick={removeNominee} buttonText="remove" key={movie.imdbID}/>
        })
    }

    return (
     <div>
         <Link to={`/page/${generatePageLink(nominees)}`}>Share</Link>
         <h3>Nominations</h3>
         <ul>{showNominees()}</ul>
     </div>
 )   
}

export default DisplayNominees
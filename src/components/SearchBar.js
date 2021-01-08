import React, { useState } from 'react'


const SearchBar = ({ handleSearch }) => {
    const [search, setSearch] = useState("")

    let typingTimer

    const handleTyping = (e) => {
        if (e.target.value !== "") {
            clearTimeout(typingTimer)
            typingTimer = setTimeout(() => {
                handleSearch(e.target.value)
            }, 1000)
        }
    }
    
    
    return (
        <div className="card" style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}>
           <div className="card-body">
            <p>Movie title</p>
            <input 
                type="text" 
                value={search}
                placeholder="Search by movie title"
                onChange={e => { 
                    setSearch(e.target.value)
                    handleTyping(e)
                    }}/>
            </div>
        </div>
    )
}

export default SearchBar
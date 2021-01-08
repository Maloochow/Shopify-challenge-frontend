import React, { useState } from 'react'
import { TextField, Grid, Container, Typography, Card } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
        <Container>
           <Card style={{padding: 20}}>
            <Typography variant="h6">Movie title</Typography>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={1}>
                    <SearchIcon />
                </Grid>
                <Grid item xs={11}>
                <TextField
                    fullWidth={true} 
                    type="text" 
                    value={search}
                    placeholder="Search by movie title"
                    onChange={e => { 
                        setSearch(e.target.value)
                        handleTyping(e)
                        }}/>
                </Grid>
            </Grid>
            </Card>
        </Container>
    )
}

export default SearchBar
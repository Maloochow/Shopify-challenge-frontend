import React from 'react'
import { ListItemText } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const MovieItem = ({ title, year }) => {
    let text = `${title} (${year})`

    const theme = createMuiTheme({
        overrides: {
          // Style sheet name ⚛️
          MuiListItemText: {
            // Name of the rule
            display: "inline",
            width: 100
          },
        },
      });

    return (
        <ThemeProvider theme={theme}>
            <ListItemText primary={text} />
        </ThemeProvider>
    )
}

export default MovieItem
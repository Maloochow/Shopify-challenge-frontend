import axios from 'axios'

const rootURL = 'https://www.omdbapi.com/?apikey=9fb58b5c'

export const searchTitle = (title) => {
    return axios.get(rootURL + "&s=" + title)
            .then(response => {
                return response.data.Search
            })
            .catch(err => console.error(err))
}

export const searchID = (id) => {
    return axios.get(rootURL + "&i=" + id)
            .then(response => {
                return response.data
            })
            .catch(err => console.error(err))
}
import axios from 'axios'

const rootURL = 'http://www.omdbapi.com/?apikey=9fb58b5c'

export const searchTitle = (title) => {
    return axios.get(rootURL + "&s=" + title)
            .then(response => {
                console.log(title)
                return response.data.Search
            })
            .catch(err => console.error(err))
}

export const searchID = (id) => {
    console.log("calling searchID")
    return axios.get(rootURL + "&i=" + id)
            .then(response => {
                // console.log(response.data)
                return response.data
            })
            .catch(err => console.error(err))
}
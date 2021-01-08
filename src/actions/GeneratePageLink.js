export const generatePageLink = (nominees) => {
    let url = ""
    for (let i = 0; i < nominees.length; i++ ) {
        if (i=== 0) {
            url += `${nominees[i].imdbID}`
        } else {
            url += `-${nominees[i].imdbID}`
        }
    }
    return url
}
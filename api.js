fetch("https://imdb8.p.rapidapi.com/title/get-plots?tconst=tt0944947", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "9dd2fb5d00mshf542bbe7a288501p194b73jsnc0b091569688",
        "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
})
    .then(response => {
        console.log(response.headers);
    })
    .catch(err => {
        console.error(err);
    });
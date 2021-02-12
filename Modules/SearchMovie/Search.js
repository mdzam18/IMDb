export async function searchMovie(){
    let movieName = document.getElementById("search").value
    await fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/" + movieName, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9dd2fb5d00mshf542bbe7a288501p194b73jsnc0b091569688",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
        }
    })
        .then(response => {
            let info = response.json();
            info.then(data => {
                let id = data.titles[0].id;
                window.location.hash = '#movieInfo?id=' + id;
            })
        })
        .catch(err => {
            console.error(err);
        });
}
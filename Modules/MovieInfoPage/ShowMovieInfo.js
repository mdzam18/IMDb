export async function showMovieInfo(id) {
    await fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + id, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9dd2fb5d00mshf542bbe7a288501p194b73jsnc0b091569688",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
        }
    }).then(response => {
        let images = response.json();
        images.then(data => {
            let result = {
                image: data.poster,
                title: data.title,
                plot: data.plot,
                year: data.year,
                cast: data.cast
            };
            let curr = document.getElementsByClassName("content")[0];
            curr.innerHTML = `<div class="movie-info">
            <div class="upper-half">
                <img class="image5"
                     src=${result.image}>
                <div class="description">
                    <h3>${result.title}</h3>
                    <p>${result.plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${result.plot}</p>
            </div>
        </div>`;
        })
    }).catch(err => {
        console.error(err);
    });
}
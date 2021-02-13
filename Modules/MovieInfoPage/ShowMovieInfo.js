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
            curr.innerHTML = `<script type="module"> import {changeColor} from "./ShowMovieInfo.js";</script>
            <div class="movie-info">
            <div class="upper-half">
                <img class="image5"
                     src=${result.image}>
                <div class="description">
                    <h3>${result.title}</h3>
                    <p>${result.plot}</p>
                </div>
            </div>
            <div class="lower-half">
               <p>year: ${result.year}</p>
               <div class = "rate">
                    <img onclick="changeColor(1)" class="star1" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                    <img onclick="changeColor(1)" class="star2" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                    <img onclick="changeColor(1)" class="star3" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                    <img onclick="changeColor(1)" class="star4" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                    <img onclick="changeColor(1)" class="star5" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                </div>
            </div>
        </div>`;
        })
    }).catch(err => {
        console.error(err);
    });
}

export function changeColor(n){
    document.getElementsByClassName("star1")[0].style.backgroundColor = none;
}
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
            curr.innerHTML = `
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
                    <img onclick="changeColor(1)" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                    <img onclick="changeColor(2)" id="star2" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                    <img onclick="changeColor(3)" id="star3" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                    <img onclick="changeColor(4)" id="star4" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                    <img onclick="changeColor(5)" id="star5" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                </div>
            </div>
        </div>`;
        })
    }).catch(err => {
        console.error(err);
    });
}

export function changeColor(n){
    let urls = [];
    for(var a = 0; a < n; a++){
        urls.push("Modules/MovieInfoPage/yellowstar.png");
    }
    for(var a = n; a < 5; a++){
        urls.push("Modules/MovieInfoPage/star.png");
    }
    let curr = document.getElementsByClassName("rate")[0];
    curr.innerHTML = `
        <img onclick="changeColor(1)" id="star1" src= ${urls[0]} style="width: 20px; height: 20px; color:white">
        <img onclick="changeColor(2)" id="star2" src = ${urls[0]} style="width: 20px; height: 20px; color:white">
        <img onclick="changeColor(3)" id="star3" src= ${urls[0]} style="width: 20px; height: 20px; color:white">
        <img onclick="changeColor(4)" id="star4" src= ${urls[0]} style="width: 20px; height: 20px; color:white">
        <img onclick="changeColor(5)" id="star5" src= ${urls[0]} style="width: 20px; height: 20px; color:white">
    `;

}
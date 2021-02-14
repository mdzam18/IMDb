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
               <p>Would you like to rate the movie?</p>
               <p>your rating:</p>
               <div class = "rate">
                    <img  id = "star1" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                    <img  id="star2" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                    <img  id="star3" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                    <img  id="star4" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                    <img  id="star5" src="Modules/MovieInfoPage/star.png" style="width: 20px; height: 20px; color:white">
                </div>
            </div>
        </div>`;
            document.getElementById("star1").addEventListener("click", function(){
                changeColor(1);
            });
            document.getElementById("star2").addEventListener("click", function(){
                changeColor(2);
            });
            document.getElementById("star3").addEventListener("click", function(){
                changeColor(3);
            });
            document.getElementById("star4").addEventListener("click", function(){
                changeColor(4);
            });
            document.getElementById("star5").addEventListener("click", function(){
                changeColor(5);
            });
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
        <img  id="star1" src= ${urls[0]} style="width: 20px; height: 20px; color:white">
        <img  id="star2" src = ${urls[1]} style="width: 20px; height: 20px; color:white">
        <img  id="star3" src= ${urls[2]} style="width: 20px; height: 20px; color:white">
        <img  id="star4" src= ${urls[3]} style="width: 20px; height: 20px; color:white">
        <img  id="star5" src= ${urls[4]} style="width: 20px; height: 20px; color:white">
    `;
    document.getElementById("star1").addEventListener("click", function(){
        changeColor(1);
    });
    document.getElementById("star2").addEventListener("click", function(){
        changeColor(2);
    });
    document.getElementById("star3").addEventListener("click", function(){
        changeColor(3);
    });
    document.getElementById("star4").addEventListener("click", function(){
        changeColor(4);
    });
    document.getElementById("star5").addEventListener("click", function(){
        changeColor(5);
    });
}
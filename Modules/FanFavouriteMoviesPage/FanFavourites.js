import {res} from '../MainPage/HomePage.js'

let allInfo = []

async function fetchInfo(id, j) {
    id = id.substring(7, id.length - 1);
    await fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + id, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9dd2fb5d00mshf542bbe7a288501p194b73jsnc0b091569688",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
        }
    }).then(response => {
        let images = response.json();
        id = res[j];
        id = id.substring(7, id.length - 1);
        images.then(data => {
            let result = {
                image: data.poster,
                title: data.title,
                plot: data.plot,
                year: data.year,
                cast: data.cast,
                id: id
            };
            allInfo.push(result);
            if(allInfo.length === 4){
                showInfo();
            }
        })
    }).catch(err => {
        console.error(err);
    });
}

function showInfo(){
    let curr = document.getElementsByClassName("content")[0];
    let urlOfMovie1 = '#movieInfo?id=' + allInfo[0].id;
    let urlOfMovie2 = '#movieInfo?id=' + allInfo[1].id;
    let urlOfMovie3 = '#movieInfo?id=' + allInfo[2].id;
    let urlOfMovie4 = '#movieInfo?id=' + allInfo[3].id;
    curr.innerHTML = `
        <div class="movie-info">
            <div class="upper-half">
                <a href = ${urlOfMovie1}><img class="image4"
                     src=${allInfo[0].image}> </a>
                <div class = "description">
                   <a href = ${urlOfMovie1}> <h3>${allInfo[0].title}</h3></a>
                    <p>${allInfo[0].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>year: ${allInfo[0].year}</p>
            </div>
        </div>
         <div class="movie-info">
            <div class="upper-half">
                 <a href = ${urlOfMovie2}> <img class="image4"
                     src=${allInfo[1].image}> </a>
                <div class = "description">
                     <a href = ${urlOfMovie1}><h3>${allInfo[1].title}</h3></a>
                    <p>${allInfo[1].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>year: ${allInfo[1].year}</p>
            </div>
        </div>
         <div class="movie-info">
            <div class="upper-half">
                 <a href = ${urlOfMovie3}> <img class="image4"
                     src=${allInfo[2].image}> </a>
                <div class = "description">
                     <a href = ${urlOfMovie3}><h3>${allInfo[2].title}</h3></a>
                    <p>${allInfo[2].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>year: ${allInfo[2].year}</p>
            </div>
        </div>
         <div class="movie-info">
            <div class="upper-half">
                 <a href = ${urlOfMovie4}> <img class="image4"
                     src=${allInfo[3].image}> </a>
                <div class = "description">
                     <a href = ${urlOfMovie4}><h3>${allInfo[3].title}</h3></a>
                    <p>${allInfo[3].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>year: ${allInfo[3].year}</p>
            </div>
        </div>
`;
}

export function showFanFavouriteMovieList() {
    for (let j = 0; j < res.length; j++) {
        fetchInfo(res[j], j);
    }
}

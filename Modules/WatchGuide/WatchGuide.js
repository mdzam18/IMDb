import {res} from '../MainPage/HomePage.js'

let allInfo = [];

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
    let curr = document.getElementsByClassName('content')[0];
    let urlOfMovie1 = '#movieInfo?id=' + allInfo[0].id;
    let urlOfMovie2 = '#movieInfo?id=' + allInfo[1].id;
    let urlOfMovie3 = '#movieInfo?id=' + allInfo[2].id;
    let urlOfMovie4 = '#movieInfo?id=' + allInfo[3].id;
    curr.innerHTML = `
        <table>
            <tr>
                <th>image</th>
                <th>Title</th>
                <th>Year</th>
            </tr>
            <tr>
                <td><a class="imageLink" href = ${urlOfMovie1}><img class="image4"
                     src=${allInfo[0].image}> </a></td>
                <td><a href = ${urlOfMovie1}>${allInfo[0].title}</a></td>
                <td>${allInfo[0].year}</td>
            </tr>
            <tr>
                <td><a href = ${urlOfMovie2}><img class="image4"
                     src=${allInfo[1].image}> </a></td>
                <td><a href = ${urlOfMovie2}>${allInfo[1].title}</a></td>
                 <td>${allInfo[1].year}</td>
            </tr>
            <tr>
                 <td><a href = ${urlOfMovie3}><img class="image4"
                     src=${allInfo[2].image}> </a></td>
                <td><a href = ${urlOfMovie3}>${allInfo[2].title}</a></td>
                 <td>${allInfo[2].year}</td>
            </tr>
            <tr>
                 <td><a href = ${urlOfMovie4}><img class="image4"
                     src=${allInfo[3].image}> </a></td>
                <td><a href = ${urlOfMovie4}>${allInfo[3].title}</a></td>
                 <td>${allInfo[3].year}</td>
            </tr>
        </table>
    `;
}


export function showWatchGuide(){
    for (let j = 0; j < res.length; j++) {
        fetchInfo(res[j], j);
    }
}
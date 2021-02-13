import {allInfo} from '../MainPage/HomePage.js'

export function showWatchGuide(){
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
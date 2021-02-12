export async function getInfo() {
    for(let j = 0; j < res.length; j++) {
        let id = res[j];
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
                getImages(result.image);
            })
        }).catch(err => {
            console.error(err);
        });
    }
}

async function getImages(image) {
    urls.push(image);
    if (isFirst) {
        updateImage(allInfo[0]);
        isFirst = false;
    }
    number++;
    if (number == 3) {
        updateImage2(allInfo[0], allInfo[1], allInfo[2], "trailerImage", "plusDivs2(-3)", "plusDivs2(3)", "trailers");
    }
    if (number == 6) {
        updateImage2(allInfo[3], allInfo[4], allInfo[5], "images2", "plusDivs3(-3)", "plusDivs3(3)", "featuredTodayImages");
    }
    if (number == 6) {
        updateImage2(allInfo[3], allInfo[4], allInfo[5], "images3", "plusDivs4(-3)", "plusDivs4(3)", "trailers2");
    }
}

async function updateImage(info) {
    let image = info.image;
    let curr = document.getElementsByClassName("images")[0];
    let urlOfMovie = '#movieInfo?id=' + info.id;
    curr.innerHTML = `
                <button class="display-left" onclick="plusDivs(-1)">&#10094;</button>
                <a href=${urlOfMovie}><img class="mainImage"
                     src=${image}></a>
                <button class="display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
}

async function updateImage2(info1, info2, info3, classname, buttonName1, buttonName2, className2) {
    let url1 = info1.image;
    let url2 = info2.image;
    let url3 = info3.image;
    let urlOfMovie1 = '#movieInfo?id=' + info1.id;
    let urlOfMovie2 = '#movieInfo?id=' + info2.id;
    let urlOfMovie3 = '#movieInfo?id=' + info3.id;
    let x = document.getElementsByClassName(className2)[0];
    x.innerHTML = `
    <button class="display-left" onclick= ${buttonName1}>&#10094;</button>
    <a href=${urlOfMovie1}><img class=${classname}
         src=${url1}> </a>
     <a href=${urlOfMovie2}><img class=${classname}
         src=${url2}> </a>
     <a href=${urlOfMovie3}><img class=${classname}
         src=${url3}> </a>
    <button class="display-right" onclick=${buttonName2}>&#10095;</button>`;
}

export function plusDivs(n) {
    console.log("sasuke")
    i = i + n;
    if (i < 0) {
        i = res.length - 1;
    }
    i = i % res.length;
    let x = document.getElementsByClassName("mainImage")[0];
    x.style.display = "none";
    updateImage(allInfo[i]);
}

export function plusDivs2(n) {
    k = k + n;
    if (k < 0) {
        k = res.length - 1;
    }
    k = k % res.length;
    let x = document.getElementsByClassName("trailerImage");
    for (let a = 0; a < 3; a++) {
        x[a].style.display = "none";
    }
    let a = k - 1;
    if (a < 0) {
        a = res.length - 1;
    }
    let b = a - 1;
    if (b < 0) {
        b = res.length - 1;
    }
    let c = b - 1;
    if (c < 0) {
        c = res.length - 1;
    }
    updateImage2(allInfo[c], allInfo[b], allInfo[a], "trailerImage", "plusDivs2(-3)", "plusDivs2(3)", "trailers");
}

export function plusDivs3(n) {
    s = s + n;
    if (s < 0) {
        s = res.length - 1;
    }
    s = s % res.length;
    let x = document.getElementsByClassName("images2");
    for (let a = 0; a < 3; a++) {
        x[a].style.display = "none";
    }
    let a = s - 1;
    if (a < 0) {
        a = res.length - 1;
    }
    let b = a - 1;
    if (b < 0) {
        b = res.length - 1;
    }
    let c = b - 1;
    if (c < 0) {
        c = res.length - 1;
    }
    updateImage2(allInfo[c], allInfo[b], allInfo[a], "images2", "plusDivs3(-3)", "plusDivs3(3)", "featuredTodayImages");
}

export function plusDivs4(n) {
    h = h + n;
    if (h < 0) {
        h = res.length - 1;
    }
    h = h % res.length;
    let x = document.getElementsByClassName("images3");
    for (let a = 0; a < 3; a++) {
        x[a].style.display = "none";
    }
    let a = h - 1;
    if (a < 0) {
        a = res.length - 1;
    }
    let b = a - 1;
    if (b < 0) {
        b = res.length - 1;
    }
    let c = b - 1;
    if (c < 0) {
        c = res.length - 1;
    }
    updateImage2(allInfo[c], allInfo[b], allInfo[a], "images3", "plusDivs4(-3)", "plusDivs4(3)", "trailers2");
}



let isFirst = true;
let number = 0;
let i = 0;
let k = 3;
let s = 0;
let h = 0;
let urls = [];
export let allInfo = [];
let res = ["/title/tt2948372/", "/title/tt7126948/", "/title/tt6723592/", "/title/tt0087538/", "/title/tt0097647/", "/title/tt0091326/", "/title/tt0120338/"];

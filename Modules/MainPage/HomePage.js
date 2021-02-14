async function fetchInfo(){
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

function setEventListener(className1, className2){
    if(className1 === 'display-left2'){
        document.getElementsByClassName("display-left2")[0].addEventListener("click", function(){
            plusDivs2(-3)
        });
        document.getElementsByClassName("display-right2")[0].addEventListener("click", function(){
            plusDivs2(3)
        });
    } else if(className1 === 'display-left3'){
        document.getElementsByClassName("display-left3")[0].addEventListener("click", function(){
            plusDivs3(-3)
        });
        document.getElementsByClassName("display-right3")[0].addEventListener("click", function(){
            plusDivs3(3)
        });
    } else if(className1 === 'display-left4'){
        document.getElementsByClassName("display-left4")[0].addEventListener("click", function(){
            plusDivs4(-3)
        });
        document.getElementsByClassName("display-right4")[0].addEventListener("click", function(){
            plusDivs4(3)
        });
    } else {
        document.getElementsByClassName("display-left")[0].addEventListener("click", function(){
            plusDivs(-1)
        });
        document.getElementsByClassName("display-right")[0].addEventListener("click", function(){
            plusDivs(1)
        });
    }
}

export async function getInfo() {
   fetchInfo();
}

export function changeHTML(){
    number = 0;
    isFirst = true;
    let curr = document.getElementsByClassName("content")[0];
    curr.innerHTML = `
         <div class="movies">
            <div class="images">
            </div>
            <div class="upNext">
                <h1>Up next</h1>
                <div class="trailers">
                </div>
            </div>
        </div>

        <div class="featuredToday">
            <h1> Featured Today </h1>
            <div class="featuredTodayImages">
            </div>
        </div>

        <div class="whatToWatch">
            <h1>What To Watch</h1>
            <a href="#WatchMovies"> <input type="button" value="Browse our What to Watch page"> </a>
        </div>

        <div class="fromYourWatchList">
            <div class="wathcListButton">
                <div class="line"></div>
                <a href="#watchList"><input type="button" value="Watch list"></a>
            </div>
            <p> access Watchlist </p>
            <p>
                Save shows and movies to keep track of what you want to watch
            </p>
        </div>
        <div class="fanFavorites">
            <div class="fanFavorites2">
                <div class="line"></div>
                <a href="#FanFavouriteMovies"><input type="button" value="Fan Favourites"> </a>
            </div>
            <div class="trailers2">
            </div>
        </div>

        <div class="moreToWatch">
            <h1>More to watch</h1>
            <h3>IMDb helps you select the perfect next show or movie to watch.</h3>
            <div class="buttons">
                <a href="#watchGuide"><input type="button" value="Watch Guide"></a>
                <a href="#PopularMovies"><input type="button" value="Most Popular" style="margin-left: 40px"> </a>
            </div>
        </div>

        <div class="exclusiveVideos">
            <h1>Exclusive Videos</h1>
            <div class="imdbOriginals">
                <div class="line"></div>
                <h1>IMDb Originals</h1>
            </div>
            <h4> Celebrity interviews, trending entertainment stories, and expert analysis </h4>
        </div>
    `;
}

async function getImages(image) {
    urls.push(image);
    if (isFirst) {
        updateImage(allInfo[0]);
        isFirst = false;
    }
    number++;
    if (number == 3) {
        updateImage2(allInfo[0], allInfo[1], allInfo[2], "trailerImage", "plusDivs2(-3)", "plusDivs2(3)", "trailers", "display-left2", "display-right2");
    }
    if (number == 6) {
        updateImage2(allInfo[3], allInfo[4], allInfo[5], "images2", "plusDivs3(-3)", "plusDivs3(3)", "featuredTodayImages", "display-left3", "display-right3");
    }
    if (number == 6) {
        updateImage2(allInfo[3], allInfo[4], allInfo[5], "images3", "plusDivs4(-3)", "plusDivs4(3)", "trailers2", "display-left4", "display-right4");
    }
}

export async function updateImage(info) {
    let image = info.image;
    let curr = document.getElementsByClassName("images")[0];
    let urlOfMovie = '#movieInfo?id=' + info.id;
    curr.innerHTML = `
                <button class="display-left">&#10094;</button>
                <a href=${urlOfMovie}><img class="mainImage"
                     src=${image}></a>
                <button class="display-right">&#10095;</button>
            `;
    document.getElementsByClassName("display-left")[0].addEventListener("click", function(){
        plusDivs(-1)
    });
    document.getElementsByClassName("display-right")[0].addEventListener("click", function(){
        plusDivs(1)
    });
}

function setImages(info1, info2, info3, classname, buttonName1, buttonName2, className2, buttonClassName1, buttonClassName2){
    let url1 = info1.image;
    let url2 = info2.image;
    let url3 = info3.image;
    let urlOfMovie1 = '#movieInfo?id=' + info1.id;
    let urlOfMovie2 = '#movieInfo?id=' + info2.id;
    let urlOfMovie3 = '#movieInfo?id=' + info3.id;
    let x = document.getElementsByClassName(className2)[0];
    console.log(buttonClassName1);
    x.innerHTML = `
    <button class=${buttonClassName1}>&#10094;</button>
    <a href=${urlOfMovie1}><img class=${classname}
         src=${url1}> </a>
     <a href=${urlOfMovie2}><img class=${classname}
         src=${url2}> </a>
     <a href=${urlOfMovie3}><img class=${classname}
         src=${url3}> </a>
    <button class=${buttonClassName2}>&#10095;</button>`;
    setEventListener(buttonClassName1, buttonClassName2);
}

export function updateImage2(info1, info2, info3, classname, buttonName1, buttonName2, className2, buttonClassName1, buttonClassName2) {
    setImages(info1, info2, info3, classname, buttonName1, buttonName2, className2, buttonClassName1, buttonClassName2);
}
function plusDivs(n) {
    i = i + n;
    console.log(i);
    if (i < 0) {
        i = res.length - 1;
    }
    i = i % res.length;
    let x = document.getElementsByClassName("mainImage")[0];
    x.style.display = "none";
    updateImage(allInfo[i]);
}

function plusDivs2(n) {
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
    updateImage2(allInfo[c], allInfo[b], allInfo[a], "trailerImage", "plusDivs2(-3)", "plusDivs2(3)", "trailers", "display-left2", "display-right2");
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
    updateImage2(allInfo[c], allInfo[b], allInfo[a], "images2", "plusDivs3(-3)", "plusDivs3(3)", "featuredTodayImages", "display-left3", "display-right3");
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
    updateImage2(allInfo[c], allInfo[b], allInfo[a], "images3", "plusDivs4(-3)", "plusDivs4(3)", "trailers2", "display-left4", "display-right4");
}


let isFirst = true;
let number = 0;
let i = 0;
let k = 3;
let s = 0;
let h = 0;
let urls = [];
export let allInfo = [];
export let res = ["/title/tt2948372/",
    "/title/tt7126948/",
    "/title/tt6723592/",
    "/title/tt0087538/",
    "/title/tt0097647/",
    "/title/tt0091326/",
    "/title/tt0120338/"];

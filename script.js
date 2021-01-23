window.addEventListener('hashchange', function () {
    console.log('The hash has changed!')
    locationHashChanged();
}, false);

function locationHashChanged() {
    if (location.hash === "#WatchMovies") {
        UrlMapping["#WatchMovies"]();
    } else if (location.hash === "#") {
        UrlMapping["#"]();
    } else if (location.hash === '#FanFavouriteMovies') {
        UrlMapping['#FanFavouriteMovies']();
    } else if (location.hash === '#PopularMovies') {
        UrlMapping['#PopularMovies']();
    } else if (location.hash.substring(0, 14) === '#movieInfo?id=') {
        console.log(location.hash.substring(14, location.hash.length));
        UrlMapping['#movieInfo?id='](location.hash.substring(14, location.hash.length));
    }
}

window.onhashchange = locationHashChanged;

var UrlMapping = {
    "#": function () {
        getInfo();
    },
    '#WatchMovies': function () {
        showMoviesList();
    },
    '#FanFavouriteMovies': function () {
        showFanFavouriteMovieList();
    },
    '#PopularMovies': function () {
        showPopularMoviesList();
    },
    '#movieInfo?id=': function (id) {
        showMovieInfo(id);
    }
};

async function showMovieInfo(id) {
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
            curr.innerHTML = `<div class="movie">
            <div class="upper-half">
                <img class="image4"
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

async function updateImage(info) {
    let image = info.image;
    let curr = document.getElementsByClassName("images")[0];
    let urlOfMovie = '#movieInfo?id=' + info.id;
    console.log(urlOfMovie);
    curr.innerHTML = `
                <button class="display-left" onclick="plusDivs(-1)">&#10094;</button>
                <a href=${urlOfMovie}><img class="mainImage"
                     src=${image}></a>
                <button class="display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
}

async function plusDivs(n) {
    i = i + n;
    if (i < 0) {
        i = res.length - 1;
    }
    i = i % res.length;
    x = document.getElementsByClassName("mainImage")[0];
    x.style.display = "none";
    updateImage(allInfo[i]);
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
    <a href=${urlOfMovie1} style = "margin: 2% 5% 2% 5px"><img class=${classname}
         src=${url1}> </a>
     <a href=${urlOfMovie2} style = "margin: 2% 5% 2% 5px"><img class=${classname}
         src=${url2}> </a>
     <a href=${urlOfMovie3} style = "margin: 2% 5% 2% 5px"><img class=${classname}
         src=${url3}> </a>
    <button class="display-right" onclick=${buttonName2}>&#10095;</button>`;
}

async function showMoviesList() {
    let curr = document.getElementsByClassName("content")[0];
    curr.innerHTML = `<div class="content">
        <div class="movie-info">
            <div class="upper-half">
                <img class="image4"
                     src=${allInfo[0].image}>
                <div class = "description">
                    <h3>${allInfo[0].title}</h3>
                    <p>${allInfo[0].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${allInfo[0].plot}</p>
            </div>
        </div>
         <div class="movie-info">
            <div class="upper-half">
                <img class="image4"
                     src=${allInfo[1].image}>
                <div class = "description">
                    <h3>${allInfo[1].title}</h3>
                    <p>${allInfo[1].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${allInfo[1].plot}</p>
            </div>
        </div>
         <div class="movie-info">
            <div class="upper-half">
                <img class="image4"
                     src=${allInfo[2].image}>
                <div class = "description">
                    <h3>${allInfo[2].title}</h3>
                    <p>${allInfo[2].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${allInfo[2].plot}</p>
            </div>
        </div>
         <div class="movie-info">
            <div class="upper-half">
                <img class="image4"
                     src=${allInfo[3].image}>
                <div class = "description">
                    <h3>${allInfo[3].title}</h3>
                    <p>${allInfo[3].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${allInfo[3].plot}</p>
            </div>
        </div>
`;
}

async function showFanFavouriteMovieList() {
    let curr = document.getElementsByClassName("content")[0];
    curr.innerHTML = `<div class="content">
        <div class="movie-info">
            <div class="upper-half">
                <img class="image4"
                     src=${allInfo[2].image}>
                <div class = "description">
                    <h3>${allInfo[2].title}</h3>
                    <p>${allInfo[2].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${allInfo[2].plot}</p>
            </div>
        </div>
         <div class="movie-info">
            <div class="upper-half">
                <img class="image4"
                     src=${allInfo[1].image}>
                <div class = "description">
                    <h3>${allInfo[1].title}</h3>
                    <p>${allInfo[1].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${allInfo[1].plot}</p>
            </div>
        </div>
         <div class="movie-info">
            <div class="upper-half">
                <img class="image4"
                     src=${allInfo[2].image}>
                <div class = "description">
                    <h3>${allInfo[2].title}</h3>
                    <p>${allInfo[2].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${allInfo[2].plot}</p>
            </div>
        </div>
         <div class="movie-info">
            <div class="upper-half">
                <img class="image4"
                     src=${allInfo[3].image}>
                <div class = "description">
                    <h3>${allInfo[3].title}</h3>
                    <p>${allInfo[3].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${allInfo[3].plot}</p>
            </div>
        </div>
`;
}

async function showPopularMoviesList() {
    let curr = document.getElementsByClassName("content")[0];
    curr.innerHTML = `<div class="content">
        <div class="movie-info">
            <div class="upper-half">
                <img class="image4"
                     src=${allInfo[1].image}>
                <div class = "description">
                    <h3>${allInfo[1].title}</h3>
                    <p>${allInfo[1].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${allInfo[1].plot}</p>
            </div>
        </div>
         <div class="movie-info">
            <div class="upper-half">
                <img class="image4"
                     src=${allInfo[1].image}>
                <div class = "description">
                    <h3>${allInfo[1].title}</h3>
                    <p>${allInfo[1].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${allInfo[1].plot}</p>
            </div>
        </div>
         <div class="movie-info">
            <div class="upper-half">
                <img class="image4"
                     src=${allInfo[2].image}>
                <div class = "description">
                    <h3>${allInfo[2].title}</h3>
                    <p>${allInfo[2].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${allInfo[2].plot}</p>
            </div>
        </div>
         <div class="movie-info">
            <div class="upper-half">
                <img class="image4"
                     src=${allInfo[3].image}>
                <div class = "description">
                    <h3>${allInfo[3].title}</h3>
                    <p>${allInfo[3].plot}</p>
                </div>
            </div>
            <div class="lower-half">
                <p>${allInfo[3].plot}</p>
            </div>
        </div>
`;
}


async function plusDivs2(n) {
    k = k + n;
    if (k < 0) {
        k = res.length - 1;
    }
    k = k % res.length;
    x = document.getElementsByClassName("trailerImage");
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

async function plusDivs3(n) {
    s = s + n;
    if (s < 0) {
        s = res.length - 1;
    }
    s = s % res.length;
    x = document.getElementsByClassName("images2");
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

async function plusDivs4(n) {
    h = h + n;
    if (h < 0) {
        h = res.length - 1;
    }
    h = h % res.length;
    x = document.getElementsByClassName("images3");
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

async function getInfo() {
    for (let j = 0; j < res.length; j++) {
        let id = res[j];
        id = id.substring(7, id.length - 1);
        console.log("sasuke ");
        console.log(id);
        console.log("naruto");
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
                console.log("itachi ");
                console.log(id);
                console.log("minato");
                allInfo.push(result);
                getImages(result.image);
            })
        }).catch(err => {
            console.error(err);
        });
    }
}

let isFirst = true;
let number = 0;
let i = 0;
let k = 0;
let s = 0;
let h = 0;
let urls = [];
let allInfo = [];
let res = ["/title/tt2948372/", "/title/tt7126948/", "/title/tt6723592/", "/title/tt0087538/", "/title/tt0097647/", "/title/tt0091326/", "/title/tt0120338/"];


window.onload = function () {
    getInfo();
}

/*
11:"/title/tt0091326/"
12:"/title/tt0451279/"
13:"/title/tt10288566/"
14:"/title/tt4154796/"
15:"/title/tt10451914/"
16:"/title/tt9770150/"
17:"/title/tt8367814/"
18:"/title/tt4566758/"
19:"/title/tt10362466/"
20:"/title/tt8633478/"
21:"/title/tt10612922/"
22:"/title/tt6751668/"
23:"/title/tt5363618/"
24:"/title/tt7737786/"
25:"/title/tt6105098/"
26:"/title/tt0068646/"
27:"/title/tt8946378/"
28:"/title/tt6475714/"
29:"/title/tt10886166/"
30:"/title/tt2850386/"
31:"/title/tt10514222/"
32:"/title/tt8579674/"
33:"/title/tt0241527/"
34:"/title/tt1401152/"
35:"/title/tt6878306/"
36:"/title/tt1160419/"
37:"/title/tt1070874/"
38:"/title/tt0111161/"
39:"/title/tt0974661/"
40:"/title/tt8829830/"
41:"/title/tt0120737/"
42:"/title/tt0993846/"
43:"/title/tt8784956/"
44:"/title/tt10618286/"
45:"/title/tt0083630/"
46:"/title/tt7131622/"
47:"/title/tt0816692/"
48:"/title/tt1838556/"
49:"/title/tt2222042/"
50:"/title/tt7395114/"
51:"/title/tt0314331/"
52:"/title/tt1502397/"
53:"/title/tt12676326/"
54:"/title/tt2382320/"
55:"/title/tt10016180/"
56:"/title/tt1392190/"
57:"/title/tt10161886/"
58:"/title/tt2527338/"
59:"/title/tt0088103/"
60:"/title/tt9214832/"
61:"/title/tt7286456/"
62:"/title/tt4154756/"
63:"/title/tt6334354/"
64:"/title/tt4682266/"
65:"/title/tt9484998/"
66:"/title/tt0468569/"
67:"/title/tt1877830/"
68:"/title/tt0090264/"
69:"/title/tt1375666/"
70:"/title/tt9827834/"
71:"/title/tt3501632/"
72:"/title/tt7846844/"
73:"/title/tt10838180/"
74:"/title/tt3281548/"
75:"/title/tt1343727/"
76:"/title/tt0829150/"
77:"/title/tt1677720/"
78:"/title/tt1051906/"
79:"/title/tt0099685/"
80:"/title/tt4123430/"
81:"/title/tt0110912/"
82:"/title/tt0414387/"
83:"/title/tt8772262/"
84:"/title/tt5164214/"
85:"/title/tt0264464/"
86:"/title/tt8503618/"
87:"/title/tt2584384/"
88:"/title/tt4126476/"
89:"/title/tt6772802/"
90:"/title/tt10633456/"
91:"/title/tt0109830/"
92:"/title/tt0361748/"
93:"/title/tt6394270/"
94:"/title/tt10731256/"
95:"/title/tt0293429/"
96:"/title/tt0133093/"
97:"/title/tt0120915/"
98:"/title/tt6673612/"
99:"/title/tt3480822/"];*/
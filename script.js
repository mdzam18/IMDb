function updateImage(image) {
    console.log(image);
    curr = document.getElementsByClassName("images")[0];
    curr.innerHTML = `
                <button class="display-left" onclick="plusDivs(-1)">&#10094;</button>
                <img class="mainImage"
                     src=${image}>
                <button class="display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
}

function plusDivs(n) {
    i = i + n;
    if (i < 0) {
        i = 4;
    }
    i = i % 5;
    x = document.getElementsByClassName("mainImage")[0];
    x.style.display = "none";
    updateImage(urls[i]);
}

function getImages(id) {
    id = id.substring(7);
    fetch("https://imdb8.p.rapidapi.com/title/get-base?tconst=" + id, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9dd2fb5d00mshf542bbe7a288501p194b73jsnc0b091569688",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    }).then(response => {
        let images = response.json();
        images.then(data => {
            image = data.image.url;
            if(i === 0 && isFirst){
                updateImage(image);
                isFirst = false;
            }
            urls.push(image);
        });
    })
        .catch(err => {
            console.error(err);
        });
}

let isFirst = true;
let i = 0;
let idsData = [];
let urls = [];

window.onload = function () {
    fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-tv-shows?homeCountry=US&purchaseCountry=US&currentCountry=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9dd2fb5d00mshf542bbe7a288501p194b73jsnc0b091569688",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    })
        .then(response => {
            let ids = response.json();
            ids.then(data => {
                idsData = data;
                for (j = 0; j < 5; j++) {
                    getImages(data[j]);
                }
            });
        })
        .catch(err => {
            console.error(err);
        });
}

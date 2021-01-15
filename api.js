/*fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "9dd2fb5d00mshf542bbe7a288501p194b73jsnc0b091569688",
        "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
})
    .then(response => {
        response.json().then((ParsedResponse) =>
            document.getElementsByClassName("fromYourWatchList")[0].innerHTML = `<input type= "button" value="sasuke">`;
    })
    .catch(err => {
        console.error(err);
    }); */

window.onload = function() {
    function myFunction(p1, p2) {
        return p1 * p2;
    }

    document.getElementById("demo").innerHTML = myFunction(4, 3);

    function loadImage() {
        console.log(document.getElementsByClassName("fromYourWatchList"));
        document.getElementsByClassName("fromYourWatchList")[0].innerHTML = `<input type= "button" value="sasuke">`;
    }
    loadImage();
}

function loadImage() {
    console.log(document.getElementsByClassName("fromYourWatchList"));
    document.getElementsByClassName("fromYourWatchList").innerHTML = `<input type= "button" value="sasuke">`;
}

fetch("https://imdb8.p.rapidapi.com/title/get-images?tconst=tt0944947&limit=25", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "9dd2fb5d00mshf542bbe7a288501p194b73jsnc0b091569688",
        "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
})
    .then(response => {
        let images = response.json();
        for (i = 0; i < 10; i++) {
            let curr = images[i];
        }
    })
    .catch(err => {
        console.error(err);
    });

/*
fetch("https://imdb8.p.rapidapi.com/title/get-coming-soon-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "9dd2fb5d00mshf542bbe7a288501p194b73jsnc0b091569688",
        "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
})
    .then(response => {
        let movies = response.json()
        console.log(movies);
    })
    .catch(err => {
        console.error(err);
    });*/
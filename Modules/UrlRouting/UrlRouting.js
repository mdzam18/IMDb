import {getInfo, plusDivs, plusDivs2, plusDivs3, plusDivs4} from '../MainPage/HomePage.js'
import {showPopularMoviesList} from '../PopularMoviesPage/PopularMovies.js'
import {showFanFavouriteMovieList} from '../FanFavouriteMoviesPage/FanFavourites.js'
import {showMoviesList} from "../WatchMoviesPage/WatchMovies.js";
import {showMovieInfo} from "../MovieInfoPage/ShowMovieInfo.js";
import {searchMovie} from "../SearchMovie/Search.js";

window.addEventListener('hashchange', function () {
    console.log('The hash has changed!')
    locationHashChanged();
}, false);

function locationHashChanged() {
    if (location.hash === "#WatchMovies") {
        UrlMapping["#WatchMovies"]();
    } else if (location.hash === "#/") {
        UrlMapping["#/"]();
    } else if (location.hash === '#FanFavouriteMovies') {
        UrlMapping['#FanFavouriteMovies']();
    } else if (location.hash === '#PopularMovies') {
        UrlMapping['#PopularMovies']();
    } else if (location.hash.substring(0, 14) === '#movieInfo?id=') {
        console.log(location.hash.substring(14, location.hash.length));
        UrlMapping['#movieInfo?id='](location.hash.substring(14, location.hash.length));
    } else  if (location.hash === '#searchMovie'){
        UrlMapping['#searchMovie']();
    } else {
        window.onload(getInfo())
    }
}

window.onhashchange = locationHashChanged;

let UrlMapping = {
    "#/": function () {
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
    },
    '#searchMovie': function () {
        searchMovie()
    }
};
import {updateImage, updateImage2, res, allInfo} from "./HomePage.js";

export function plusDivs(n) {
    console.log("sasuke");
    i = i + n;
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

let i = 0;
let k = 3;
let s = 0;
let h = 0;
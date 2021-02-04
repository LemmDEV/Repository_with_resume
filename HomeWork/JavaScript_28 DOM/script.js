"use strict"

// 1. Создать страницу, которая выводит нумерованный список песен:

let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

let len = playList.length;
let str;

for (let i = 0; i < len; i++) {
    let author = playList[i].author;
    let song = playList[i].song;
    str = str + "<li>" + author + "-" + song + "</li>";
}
let m = document.querySelector('.music');
m.innerHTML = str;

// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. 
// На модальном окне должен быть текст и кнопка "Закрыть". 
// Изначально модальное окно не отображается. 
// При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.


let modal = document.querySelector("#my_modal");
let btn = document.querySelector("#btn_modal_window");
let span = document.querySelector(".close_modal_window");

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// 3. Создать HTML-страницу со светофором и кнопкой, 
// которая переключает светофор на следующий цвет.

// NOT DONE
/*
let red = document.querySelector("#stopLight"); // red
let yellow = document.querySelector("#slowLight"); // yellow
let green = document.querySelector("#goLight");     // green
let bttn = document.querySelector(".switchButton");

let lights = [
    { redLamp: red },
    { yellowLamp: yellow },
    { greenLamp: green },
];

for (let i = 0; i < lights.length; i++) {
    if (i = 1) {
        red.style.backgroundColor = "red"
    }
}

bttn.setAttribute("onclick", "toggle()");

bttn.onclick = function () {
    // clearLights();
    document.querySelector('#stopLight').style.backgroundColor = "red";
}
 */
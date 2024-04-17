console.log('Bienvenido a la clase 9 de IRONHACK');


/****************************/
/****FIN ELEMENTENS DOM******/
/****************************/

//BY ID
const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "Welcome to the Script Society";

//BY CLASS NAME

const infoCollection = document.getElementsByClassName("info");

const infoElementsArray = [...infoCollection]; // converting html collection to an Array

infoElementsArray.forEach(function (item) {
    item.innerHTML = "I MODIFIED THE CONTENT WITH JS";
    item.style.background = "#ff9999";
});

//BY TAG NAME

const allParagraphsHtmlCollection = document.getElementsByTagName("p");

// BY CSS SELECTORS...

 const first = document.querySelector("header h2"); // accesing only to first h2 founded
 const all = document.querySelectorAll("header h2");

 all.forEach( function(item) {
    item.style.color = "#2FBC25";
 });


 //SEARCHING ON A GIVEN CONTEXT:


const productsElement = document.getElementById("products");
const allPinProducts = productsElement.querySelectorAll("p");

allPinProducts.forEach( function(item) {
    item.style.background = "#6336E4";
    item.style.color = "#FFF";
});


let productTitle = document.getElementById("js-product-title");

let items = document.getElementById("js-items");

async function fetchJson() {
    let response = await fetch('./dataset.json');
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    let mydata = data;
    let title = productTitle.innerHTML = mydata.products[0].name;
    return title;
}

fetchJson()
    .then(title => console.log(title))
    

let overlayOpen = document.getElementById("overlay-open");
let overlayClose = document.getElementById("overlay-close");
let overlay = document.getElementById("overlay");

overlayOpen.onclick = function () {
    overlay.style.display = "block";
}

overlayClose.onclick = function () {
    overlay.style.display = "none";
}

let overlayimg = document.getElementById("overlay-img");

let button1 = document.getElementById("button-1");
let button2 = document.getElementById("button-2");
let button3 = document.getElementById("button-3");
let button4 = document.getElementById("button-4");
let button5 = document.getElementById("button-5");
let button6 = document.getElementById("button-6");
let button7 = document.getElementById("button-7");
let button8 = document.getElementById("button-8");

button1.onclick = function () {
    overlayimg.setAttribute("src", "./Media-assets/products/skateboard-blauw.png");
}

button2.onclick = function () {
    overlayimg.setAttribute("src", "./Media-assets/products/skateboard-goud.png");
}

button3.onclick = function () {
    overlayimg.setAttribute("src", "./Media-assets/products/skateboard-rood.png");
}

button4.onclick = function () {
    overlayimg.setAttribute("src", "./Media-assets/products/skateboard-zilver.png");
}

button5.onclick = function () {
    overlayimg.setAttribute("src", "./Media-assets/symbols/symbol-BAM.png");
}

button6.onclick = function () {
    overlayimg.setAttribute("src", "./Media-assets/symbols/symbol-BANG.png");
}

button7.onclick = function () {
    overlayimg.setAttribute("src", "./Media-assets/symbols/symbol-BOO.png");
}

button8.onclick = function () {
    overlayimg.setAttribute("src", "./Media-assets/symbols/symbol-BOOM!.png");
}
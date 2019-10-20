let start = new Date().getTime();

const myColors = [
    "red",
    "blue",
    "green",
    "orange",
    "yellow",
    "purple",
    "black",
    "grey",
    "pink",
];

const myShapes = [
    "0%",
    "50%"
]

function makeShapeAppear() {

    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();
    
}


function randomElementLocation() {

    document.getElementById("shape").style.padding = Math.floor(Math.random() * 100) + 'px';
    document.getElementById("shape").style.marginTop = Math.floor(Math.random() * 400) + 'px';
    document.getElementById("shape").style.marginLeft = Math.floor(Math.random() * 1000) + 'px';
    document.getElementById("shape").style.backgroundColor = myColors[Math.floor(Math.random() * myColors.length)];
    document.getElementById("shape").style.borderRadius = myShapes[Math.floor(Math.random() * myShapes.length)];

}

function appearAfterDelay() {

    setTimeout(makeShapeAppear, Math.random() * 2000);

}

appearAfterDelay();

document.getElementById("shape").onclick = function () {

    document.getElementById("shape").style.display = "none";

    let end = new Date().getTime();

    let timeTaken = (end - start) / 1000;

    document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    randomElementLocation();

    appearAfterDelay();

}
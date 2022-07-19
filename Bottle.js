img= "";
status = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetecter = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload() {
    img = loadImage('Bottle.jpg');
}

function modelLoaded() {
    console.log("Model Loaded!");
     status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    }

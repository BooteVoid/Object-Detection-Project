img= "";
status = "";
objects = [];

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetecter = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload() {
    img = loadImage('Bed_room.jpg');
}

function draw() {
    
    if(status!=" ")
    {
        for (i=0; i<objects.length; i++)
        {
            text(objects[i].label)
            (objects[i].confidence,
            objects[i].x, objects[i].y);
            objects[i].width;
            objects[i].height;
        
            
        }
    }
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

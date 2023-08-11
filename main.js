vid = "";
detec = "";
obj = [];
palav = "";
function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    vid = createCapture(VIDEO);
    vid.size(475, 375);
    vid.hide();
    detec = ml5.objectDetector('cocossd', modelLoaded);
}
function draw() {
    image(vid, 0, 0, 480, 380);
    detec.detect(vid, gotResult);
    for (i = 0; i < obj.length; i++) {
        fill("blue");
        text(obj[i].label, obj[i].x, obj[i].y);
        noFill();
        stroke("blue");
        rect(obj[i].x, obj[i].y, obj[i].width, obj[i].height);
        if(palav==obj[i].label){
            document.getElementById("noo").innerHTML= palav+" Foi Encontrado";
        }

    }
}

function start() {
    palav = document.getElementById("palav").value;
}

function modelLoaded() {
    console.log(":)");
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    console.log(":)");
    obj = results;
}

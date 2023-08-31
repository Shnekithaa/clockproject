let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let radius = canvas.height/2;
context.translate(radius, radius);
radius = radius * 0.90
function drawFace(){
    context.beginPath();
    context.arc(0,0,radius,0,2*Math.PI);
    context.fillStyle = "white";
    context.fill();

    context.beginPath();
    context.arc(0,0,radius*0.065,0,2*Math.PI);
    context.fillStyle = "gray";
    context.fill();
}

function drawNumbers(){
    let ang;
    for(let num = 1; num<=12; num++){
        ang = num*Math.PI/6;
        context.rotate(ang);
        context.translate(0, -radius*0.83);
        context.fillText(num.toString(),0,0);
        context.translate(0, radius*0.83);
        context.rotate(-ang);

        context.font="25px raleway";
        context.textAlign="center";
        context.textBaseLine="middle";
    }
}

function drawTime(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    hour %= 12;

    hour = (hour*(Math.PI/6)) + (minute*(Math.PI/(6*60))) + (second*(Math.PI/(360*60)));
    drawHands(context, hour, radius*0.5, radius*0.04);

    minute = (minute*Math.PI/30) + (second*Math.PI/(30*60));
    drawHands(context, minute, radius*0.7, radius*0.04);

    second = (second*Math.PI/30);
    drawHands(context, second, radius*0.9, radius*0.01);
}

function drawHands(context, pos, length, width){
    context.beginPath();
    context.lineCap="round";
    context.lineWidth=width;
    context.rotate(pos);
    context.moveTo(0,0);
    context.lineTo(0,-length);
    context.stroke();
    context.rotate(-pos);
}
function drawClock(){
    drawFace();
    drawNumbers();
    drawTime();
}

setInterval(drawClock, 1000)
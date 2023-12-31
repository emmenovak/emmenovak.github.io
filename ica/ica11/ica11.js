const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random() * number);
}

function random2(number) {
    return(Math.random() * number);
}

function draw() {
    //console.log("TEST");
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let i = 0; i<400; i++) {
        ctx.beginPath();
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let alpha = random2(1);
        let color = "rgba("+red+","+green+", "+blue+", "+alpha+")";

        ctx.fillStyle = color;
       
       
        ctx.fillRect(
            random(canvas.width), 
            random(canvas.height), 
            50, 
            50
        );
    
        ctx.fill();
    }
}

btn.addEventListener("click", draw);
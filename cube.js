const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
console.log(canvas.width)
canvas.height = 500;
const ctx = canvas.getContext("2d");

setInterval(() => document.querySelector("p").style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`, 300);

function drawCube(x,y,width,height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,width,height);
}

const groundY = canvas.height/2+199.7;
const startX = canvas.width/2-670;

let cube = {
    x: startX,
    y: groundY,
    w: 25,
    h: 25,
    color: "black",
    speed: 10
};

class Apple {
    constructor(x,y,w,h,color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }
    render() {
        drawCube(this.x, this.y, this.w, this.h, this.color);
    }
}

const apples = [];
const snakes = [];

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    appleControl();
    apples.forEach(i => i.render())
    drawCube(cube.x, cube.y, cube.w, cube.h, cube.color);
    requestAnimationFrame(render);
}
render();

function appleControl() {
    if(!apples.length) {
        let x = Math.floor(Math.random() * canvas.width);
        let y = Math.floor(Math.random() * canvas.height);
        apples.push(new Apple(x, y, 30, 30, "red"));
    }
}

window.addEventListener("keydown", e => {
    let key = e.key;
    switch(key) {
        case "w":
            cube.y -= cube.speed*2;
        break;
        case "a":
            cube.x -= cube.speed*2;
        break;
        case "s":
            cube.y += cube.speed*2;
            break;
        case "d":
            cube.x += cube.speed*2;
        break;
    }
});
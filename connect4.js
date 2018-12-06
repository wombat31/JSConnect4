var myGamePiece;
var myGameGrid;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(480, 270, "black", 0, 0);
    myGameGrid = new framePiece(100,100,100,100,50,0,0,"red");
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

function component(width, height, color, x, y,type,radius) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

function framePiece(width, height, x, y, radius, startAngle, endAngle,color){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx= myGameArea.context;
    ctx.beginPath();
    ctx.moveTo(50,100);
    ctx.lineTo(0,100);
    ctx.lineTo(0,0);
    ctx.lineTo(100,0);
    ctx.arc(100,100,50,3*Math.PI/2, Math.PI,true);
    ctx.closePath()
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
}
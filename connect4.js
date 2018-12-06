var myGamePiece;
var myGameGrid;

function startGame() {
    myGameArea.start();
    myGameBackground = new component(700, 550, "black", 0, 0);
    myGameGrid = new framePiece(50,50,50,50,25,0,0,"blue");
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 550;
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
    ctx.moveTo(width/2,height);
    ctx.lineTo(0,height);
    ctx.lineTo(0,0);
    ctx.lineTo(width,0);
    ctx.arc(width,height,radius,3*Math.PI/2, Math.PI,true);
    ctx.closePath()
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
}
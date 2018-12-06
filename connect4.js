var myGamePiece;
var myGameGrid;

function startGame() {
    myGameArea.start();
    myGameBackground = new component(700, 600, "black", 0, 0);
    for (var i = 0; i <= 600; i += 100){
        for (var j = 0; j <= 500; j += 100){
            myGameGridLT = new framePieceLT(50,50,50,50,25,0,0,"blue",i,j);
            myGameGridRT = new framePieceRT(50,50,0,50,25,0,0,"red",i,j);
            myGameGridLB = new framePieceLB(50,50,50,0,25,0,0,"green",i,j);
        }
    }
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 600;
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

function framePieceLT(width, height, x, y, radius, startAngle, endAngle,color,xPos,yPos){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx= myGameArea.context;
    ctx.beginPath();
    ctx.moveTo(xPos+width/2,yPos+height);
    ctx.lineTo(xPos,yPos+height);
    ctx.lineTo(xPos,yPos);
    ctx.lineTo(xPos+width,yPos);
    ctx.arc(xPos + width,yPos + height,radius,3*Math.PI/2, Math.PI,true);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
}

function framePieceRT(width, height, x, y, radius, startAngle, endAngle,color,xPos,yPos){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx= myGameArea.context;
    ctx.beginPath();
    ctx.moveTo(xPos+width,yPos+height/2);
    ctx.lineTo(xPos+width,yPos);
    ctx.lineTo(xPos+(2* width),yPos);
    ctx.lineTo(xPos+(2*width),yPos+height);
    ctx.lineTo(xPos+(1.5*width),yPos+height);
    ctx.arc(xPos + width,yPos + height,radius,Math.PI*2, 3*(Math.PI/2),true);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
}

function framePieceLB(width, height, x, y, radius, startAngle, endAngle,color,xPos,yPos){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx= myGameArea.context;
    ctx.beginPath();
    ctx.moveTo(xPos+width,yPos+(1.5*height));
    ctx.lineTo(xPos+width,yPos+2*height);
    ctx.lineTo(xPos,yPos+2*height);
    ctx.lineTo(xPos,yPos+height);
    ctx.lineTo(xPos + width/2,yPos+height);
    ctx.arc(xPos + width,yPos+height,radius,Math.PI, Math.PI/2,true);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
}
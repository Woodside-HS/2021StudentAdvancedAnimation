function Game(){

    this.canvas1 = document.getElementById('cnv1');
    this.context1 = this.canvas1.getContext('2d');
    this.canvas2 = document.getElementById('cnv2');
    this.context2 = this.canvas2.getContext('2d');

    this.canvas1Loc = new JSVector();

    this.world = {
        top: -1500,
        left: -2000,
        bottom: 1500,
        right: 2000,
        width: 4000,
        height: 3000
    }
    // canvas2 is scaled according to the ratio of its
    // height and width to the height and width of the world
    // so that the entire world fits within canvas2
    this.scaleX = this.canvas2.width/this.world.width;
    this.scaleY = this.canvas2.height/this.world.height;

    // add an event handler such that the a, s, w, d keys
    // will reposition the canvas within the world.
    window.addEventListener("keypress", function(event){
        switch(event.code){
            case "KeyW":
                if(game.canvas1Loc.y+100 > game.world.top)
                    game.canvas1Loc.y -= 20;
                break;
            case "KeyS":
                if(game.canvas1Loc.y + game.canvas1.height -100 < game.world.bottom)
                    game.canvas1Loc.y += 20;
                break;
            case "KeyA":
                if(game.canvas1Loc.x+100 > game.world.left)
                    game.canvas1Loc.x -= 20;
                break;
            case "KeyD":
                if(game.canvas1Loc.x + game.canvas1.width -100 < game.world.right)
                    game.canvas1Loc.x += 20;
                break;
            break;
            }
    }, false);

}//++++++++++++++++++++++  end game constructor


// function to run the game each animation cycle
Game.prototype.run = function(){
    let ctx1 = this.context1;
    let cnv1 = this.canvas1;
    let ctx2 = this.context2;
    let cnv2 = this.canvas2;
    ctx1.fillStyle =  "#005050";
    ctx1.fillRect(0,0,cnv1.width,cnv1.height);
    ctx2.fillStyle =  "#005050";
    ctx2.fillRect(0,0,cnv2.width,cnv2.height);
    
    // translate canvas1 according to the location of the canvas in the world
    ctx1.save();
    ctx1.translate(-this.canvas1Loc.x, -this.canvas1Loc.y);
    // draw the bounds of the world in canvas1
    ctx1.beginPath();
    ctx1.rect(this.world.left,this.world.top,this.world.width,this.world.height);
    ctx1.strokeStyle = "rgba(255,255,10,1)";
    ctx1.lineWidth = 5;
    ctx1.stroke();
    // draw the x and y axes of the world in canvas1
    ctx1.beginPath();
    ctx1.moveTo(this.world.left,0);
    ctx1.lineTo(this.world.right,0);
    ctx1.moveTo(0,this.world.top);
    ctx1.lineTo(0,this.world.bottom);
    ctx1.strokeStyle = "rgba(255,255,10,1)";
    ctx1.lineWidth = 4;
    ctx1.stroke();
    ctx1.restore();
    // scale canvas2 to contain the entire world
    ctx2.save();
    ctx2.scale(this.scaleX, this.scaleY);
    // center the world in canvas2
    ctx2.translate(this.world.width/2, this.world.height/2);
    // draw the x and y axes of the world
    ctx2.beginPath();
        ctx2.moveTo(this.world.left,0);
        ctx2.lineTo(this.world.right,0);
        ctx2.moveTo(0,this.world.top);
        ctx2.lineTo(0,this.world.bottom);
        ctx2.strokeStyle = "rgba(255,255,0,1)";
        ctx2.lineWidth = 20;
    ctx2.stroke();
    // draw the outline of canvas1 in canvas2
    ctx2.beginPath();
        let c1x = this.canvas1Loc.x;
        let c1y = this.canvas1Loc.y;
        ctx2.strokeStyle = "rgba(0,255,255,1)";
        ctx2.lineWidth = 22;
        ctx2.rect(c1x,c1y,cnv1.width,cnv1.height);
        ctx2.stroke();
    ctx2.restore();
    // run all the actors


}

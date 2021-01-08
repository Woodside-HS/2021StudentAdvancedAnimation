//  Boid constructor function +++++++++++++++++++++++++++++
function Boid(canvas,rad, clr){
    this.radius = rad;
    this.color = clr;
    // random location
    let x = (Math.random() * (canvas.width - 2*this.radius)) + this.radius;
    let y = (Math.random() * (canvas.height - 2*this.radius)) + this.radius;
    this.loc = new JSVector(x,y);
    // random velocity
    let dx = (Math.random() * 8) -4;
    let dy = (Math.random() * 8) -4;
    this.vel = new JSVector(dx,dy);
}

  //  placing methods in the prototype (every boid shares functions)

Boid.prototype.run = function(){
    this.update();
    this.checkEdges();
    this.render();
  }



// draw the boid on the canvas
Boid.prototype.render = function(){
    let ctx = game.ctx;

    ctx.strokeStyle = this.color;
    ctx.beginPath();
    // +++++++++++++++++++++++
    // draw as circles
    ctx.arc(this.loc.x,this.loc.y, this.radius, Math.PI*2, 0, false);
    ctx.stroke();
    // +++++++++++++++++++++++
    // draw as triangles but not translated or rotated
    // ctx.moveTo(this.loc.x+this.radius, this.loc.y);
    // ctx.lineTo(this.loc.x-this.radius,this.loc.y-this.radius/2);
    // ctx.lineTo(this.loc.x-this.radius,this.loc.y+this.radius/2);
    // ctx.closePath();
    // ctx.stroke();
    // +++++++++++++++++++++++
    // draw as triangles translated and rotated.
    // ctx.save();
    // ctx.translate(this.loc.x,this.loc.y);
    // ctx.rotate(this.vel.getDirection());
    // ctx.moveTo(this.radius,0);
    // ctx.lineTo(-this.radius,-this.radius/2);
    // ctx.lineTo(-this.radius,this.radius/2);
    // ctx.closePath();
    // ctx.stroke();
    // ctx.restore();
    // ++++++++++++++++++++++++++++++++++++++


  }

// Add velocity to location
Boid.prototype.update = function(){
  if(!game.gamePaused) {
      this.loc.add(this.vel);
    }
}

// When a boid hits an edge of the canvas, it changes direction.
Boid.prototype.checkEdges = function(){
    let canvas = game.canvas;

    if(this.loc.x - this.radius < 0){
        this.vel.x = -this.vel.x;
    }
    if(this.loc.x + this.radius > canvas.width){
        this.vel.x = -this.vel.x;
    }
    if(this.loc.y - this.radius < 0){
        this.vel.y = -this.vel.y;
    }
    if(this.loc.y + this.radius > canvas.height){
        this.vel.y = -this.vel.y;
    }
}

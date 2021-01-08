//  Particle constructor function +++++++++++++++++++++++++++++
function Particle(location){
    this.loc = location;
    this.vel = new JSVector();
    this.acc = new JSVector();
 
}

  //  placing methods in the prototype 
  Particle.prototype.run = function(){
    this.update();
    this.render();
  }

  Particle.prototype.update = function(){
    this.update();
    this.render();
  }

  Particle.prototype.render = function(){
    let ctx = game.ctx;
    ctx.strokeStyle = "rgba(255,255,255,255)"//this.clr;
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.x,this.y, this.diam, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
  }


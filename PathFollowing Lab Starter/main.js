


var game;   // a single global object
window.onload = init;//  After the window has been loaded, go to init

function init(){
    game = new Game();  // global game
    animate();          // kick off the animation
}

//  animation loop called 60 fps
function animate(){
  game.run();    // run the game
  requestAnimationFrame(animate);
}

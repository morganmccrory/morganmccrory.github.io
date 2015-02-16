var puppy = {
  x: 40,
  y: 200,
  alive: true,
  won: false,
  canMove: true,
};

var alien = {
  x: 560,
  y: 80,
  alive: true,
};

var alien2 = {
  x: 560,
  y: 200,
  alive: true,
};

var alien3 = {
  x: 560,
  y: 320,
  alive: true,
};

document.getElementById("up").onclick = function() {move(38);};
document.getElementById("down").onclick = function() {move(40);};
document.getElementById("right").onclick = function() {move(39);};
document.getElementById("left").onclick = function() {move(37);};

var puppyImg = document.getElementById("puppy");
var alienImg = document.getElementById("alien");
var alienImg2 = document.getElementById("alien2");
var alienImg3 = document.getElementById("alien3");



var alienCount = 3;

function move(direction){
  if (puppy.canMove){
    console.log('moving');
    ai_move(alien, alienImg);
    ai_move(alien2, alienImg2);
    ai_move(alien3, alienImg3);
    if (direction.keyCode === 38 || direction === 38 || direction.keyCode === 73){ // move up
      if (puppy.y > 0){
        puppy.y = (puppy.y - 40);
        puppyImg.style.top = (puppy.y + "px");
      }
    }else if (direction.keyCode === 40 || direction === 40 || direction.keyCode === 75){ // move down
      if (puppy.y < 440){
        puppy.y = (puppy.y + 40);
        puppyImg.style.top = (puppy.y + "px");
      }
    }else if (direction.keyCode === 39 || direction == 39 || direction.keyCode === 76){ // move right
      if (puppy.x < 600){
        puppy.x = (puppy.x + 40);
        puppyImg.style.left = (puppy.x + "px");
      }

    }else if (direction.keyCode === 37 || direction == 37 || direction.keyCode === 74){ // move left
      if (puppy.x > 0){
        puppy.x = (puppy.x - 40);
        puppyImg.style.left = (puppy.x + "px");
      }
    }
    status(alien, alienImg);
    status(alien2, alienImg2);
    status(alien3, alienImg3);
    setTimeout(function(){
      puppy.canMove = true;
    }, 200)
    puppy.canMove = false;
  }
}

function ai_move(player, playerImg){
  var random = Math.floor((Math.random() * 4) + 1);
  // move up
  if (random === 1){
    if (player.y > 0){
      player.y = (player.y - 40);
      playerImg.style.top = (player.y + "px");
    }
  }else if (random === 2){
    // move down
    if (player.y < 440){
      player.y = (player.y + 40);
      playerImg.style.top = (player.y + "px");
    }
  }else if (random === 3){
    // move right
    if (player.x < 600){
      player.x = (player.x + 40);
      playerImg.style.left = (player.x + "px");
    }
 }else{
    //move left
    if (player.x > 0){
      player.x = (player.x - 40);
      playerImg.style.left = (player.x + "px");
    }
 }
}

document.onkeydown = move;

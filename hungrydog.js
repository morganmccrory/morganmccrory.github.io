document.getElementById("up").onclick = function() {move("up");};
document.getElementById("down").onclick = function() {move("down");};
document.getElementById("right").onclick = function() {move("right");};
document.getElementById("left").onclick = function() {move("left");};

var puppyImg = document.getElementById("puppy");
var baconImg = document.getElementById("bacon");
var boneImg1 = document.getElementById("bone1");
var boneImg2 = document.getElementById("bone2");

var puppy = {
  posX: 490,
  posY: 650,
  hunger: 10,
  success: false,
  canMove: true
};

var bacon = {
  posX: 190,
  posY: 50
};

var bone1 = {
  posX: 400,
  posY: 250
};

var bone2 = {
  posX: 200,
  posY: 550
};

function move(direction){
  if (puppy.canMove){
    console.log('moving');
    pup_move(bacon, baconImg);
    pup_move(bone1, boneImg1);
    pup_move(bone2, boneImg2);
    if (direction.keyCode === 38 || direction === 38 || direction.keyCode === 73){ // move up
      if (puppy.posY > 0){
        puppy.posY = (puppy.posY - 40);
        puppyImg.style.top = (puppy.posY + "px");
      }
    }else if (direction.keyCode === 40 || direction === 40 || direction.keyCode === 75){ // move down
      if (puppy.posY < 440){
        puppy.posY = (starfish.y + 40);
        puppyImg.style.top = (puppy.posY + "px");
      }
    }else if (direction.keyCode === 39 || direction == 39 || direction.keyCode === 76){ // move right
      if (puppy.posX < 600){
        puppy.posX = (starfish.x + 40);
        puppyImg.style.left = (puppy.posX + "px");
      }

    }else if (direction.keyCode === 37 || direction == 37 || direction.keyCode === 74){ // move left
      if (puppy.posX > 0){
        puppy.posX = (puppy.posX - 40);
        puppyImg.style.left = (puppy.posX + "px");
      }
    }
    status(bacon, baconImg);
    status(bone1, boneImg1);
    status(bone2, boneImg2);
    setTimeout(function(){
      puppy.canMove = true;
    }, 200)
    puppy.canMove = false;
  }
}

function pup_move(player, playerImg){
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
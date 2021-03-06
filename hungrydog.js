var puppy = {
  x: 100,
  y: 1000,
  alive: true,
  won: false,
  canMove: true,
};

var bone1 = {
  x: 560,
  y: 80,
  alive: true,
};

var bone2 = {
  x: 560,
  y: 200,
  alive: true,
};

var bacon = {
  x: 560,
  y: 320,
  alive: true,
};

document.getElementById("up").onclick = function() {move(38);};
document.getElementById("down").onclick = function() {move(40);};
document.getElementById("right").onclick = function() {move(39);};
document.getElementById("left").onclick = function() {move(37);};

var puppyImg = document.getElementById("puppy");
var boneImg1 = document.getElementById("bone1");
var boneImg2 = document.getElementById("bone2");
var baconImg = document.getElementById("bacon");

var boneCount = 3;

function move(direction){
  if (puppy.canMove){
    console.log('moving');
    if (direction.keyCode === 38 || direction === 38){ // move up
      if (puppy.y > 0){
        puppy.y = (puppy.y - 40);
        puppyImg.style.top = (puppy.y + "px");
      }
    }else if (direction.keyCode === 40 || direction === 40){ // move down
      if (puppy.y < 440){
        puppy.y = (puppy.y + 40);
        puppyImg.style.top = (puppy.y + "px");
      }
    }else if (direction.keyCode === 39 || direction == 39){ // move right
      if (puppy.x < 600){
        puppy.x = (puppy.x + 40);
        puppyImg.style.left = (puppy.x + "px");
      }

    }else if (direction.keyCode === 37 || direction == 37){ // move left
      if (puppy.x > 0){
        puppy.x = (puppy.x - 40);
        puppyImg.style.left = (puppy.x + "px");
      }
    }
  }
}

document.onkeydown = move;
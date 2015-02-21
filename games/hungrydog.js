var puppy = {
  x: 550,
  y: 490,
  alive: true,
  won: false,
  canMove: true,
};

var bone1 = {
  x: 750,
  y: 200,
  alive: true,
};

var bone2 = {
  x: 1100,
  y: 400,
  alive: true,
};

var bacon = {
  x: 1150,
  y: 190,
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
    food_move(bone1, boneImg1);
    food_move(bone2, boneImg2);
    food_move(bacon, baconImg);
  if (puppy.canMove){
    if (direction.keyCode === 38 || direction === 38){ // move up
      if (puppy.y > 50){
        puppy.y = (puppy.y - 10);
        puppyImg.style.top = (puppy.y + "px");
      }
    }else if (direction.keyCode === 40 || direction === 40){ // move down
      if (puppy.y < 490){
        puppy.y = (puppy.y + 10);
        puppyImg.style.top = (puppy.y + "px");
      }
    }else if (direction.keyCode === 39 || direction == 39){ // move right
      if (puppy.x < 1160){
        puppy.x = (puppy.x + 10);
        puppyImg.style.left = (puppy.x + "px");
      }

    }else if (direction.keyCode === 37 || direction == 37){ // move left
      if (puppy.x > 550){
        puppy.x = (puppy.x - 10);
        puppyImg.style.left = (puppy.x + "px");
      }
    }
  }
}
}

function food_move(food, foodImg){
  var random = Math.floor((Math.random() * 4) + 1);
  if (random === 1){
    if (food.y > 50){
      food.y = (food.y - 20);
      foodImg.style.top = (food.y + "px");
    }
  }else if (random === 2){
    if (food.y < 490){
      food.y = (food.y + 20);
      foodImg.style.top = (food.y + "px");
    }
  }else if (random === 3){
    if (food.x < 1200){
      food.x = (food.x + 20);
      foodImg.style.left = (food.x + "px");
    }
  }else{
    if (food.x > 550){
      food.x = (food.x - 20);
      foodImg.style.left = (food.x + "px");
    }
 }
}

document.onkeydown = move;
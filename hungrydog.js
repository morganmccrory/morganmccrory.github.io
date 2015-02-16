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

var move = function(direction) {
  if(puppy.canMove) {
    console.log('moving');
    pup_move(bacon, baconImg);
    pup_move(bone1, boneImg1);
    pup_move(bone2, boneImg2);
    if(direction === 'left') {
      this.posX -= 10;
      puppyImg.style.top = (puppy.posX + "px");
    } else if(direction === 'right') {
      this.posX += 10;
    } else if(direction === 'up') {
      this.posY += 10;
    } else if(direction === 'down') {
      this.posY -= 10;
    }
  }

  bacon.posX = Math.floor((Math.random()*100)+1);
  bacon.posY = Math.floor((Math.random()*100)+1);
  bone.posX = Math.floor((Math.random()*100)+1);
  bone.posY = Math.floor((Math.random()*100)+1);

  if(puppy.posX === bacon.posX && puppy.posY === bacon.posY) {
    puppy.hunger -= 5;
    alert("Yum, bacon is Pepper's favorite!")
  } else if(puppy.posX === bone.posX && puppy.posY === bone.posY) {
    puppy.hunger -= 3;
    alert("Mmm, Pepper ate a bone!")
  }

  if(puppy.hunger < 1) {
    success = true;
    alert("Thanks for feeding, Pepper! You win!");
  }

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

document.onkeydown = move;
var puppy = {
  posX: 0,
  posY: 0,
  hunger: 10,
  success: false

var move = function(direction) {
  if(direction === 'left') {
    this.posX -= 10;
  } else if(direction === 'right') {
    this.posX += 10;
  } else if(direction === 'up') {
    this.posY += 10;
  } else if(direction === 'down') {
    this.posY -= 10;
  }

  bacon.posX = Math.floor((Math.random()*100)+1);
  bacon.posY = Math.floor((Math.random()*100)+1);
  bone.posX = Math.floor((Math.random()*100)+1);
  bone.posY = Math.floor((Math.random()*100)+1);

  if(puppy.posX === bacon.posX && puppy.posY === bacon.posY) {
    puppy.hunger -= 5;
    console.log("Yum, bacon is Pepper's favorite!")
  } else if(puppy.posX === bone.posX && puppy.posY === bone.posY) {
    puppy.hunger -= 3;
    console.log("Mmm, Pepper ate a bone!")
  }

  if(puppy.hunger < 1) {
    success = true;
    console.log("Thanks for feeding, Pepper! You win!");
  }

};

var bacon = {
  positionVer: 300,
  positionHor: 300
};

var bone = {
  positionVer: -10,
  positionHor: 5
}

// Driver Test Code

console.log(puppy.hunger);
eat(bacon);
console.log(puppy.hunger);
eat(bone);
console.log(puppy.hunger);
moveLeft(puppy);
console.log(puppy.positionHor);
moveRight(puppy);
console.log(puppy.positionHor);
moveUp(puppy)
console.log(puppy.positionVer);
moveDown(puppy)
console.log(puppy.positionVer);
// Enemies our player must avoid
var Enemy = function() {
    this.x = (Math.floor((Math.random() * 7)) * 101) * -1;
    this.y = Math.floor((Math.random() * 5)) * 83;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  var newPosY = this.y;
  var newPosX = this.x + dt * 101;
  if(newPosX > 7 * 101){
    newPosX = (Math.floor((Math.random() * 7)) * 101) * -1;
    newPosY = Math.floor((Math.random() * 5)) * 83;
  }
  this.x = newPosX;
  this.y = newPosY;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
  this.x = 202;
  this.y = 415;
  this.sprite = 'images/char-boy.png';
}
Player.prototype.update = function() {}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.reset = function(){
  this.x = 202;
  this.y = 415;
}

Player.prototype.handleInput = function(keyCode) {
  var newPosX = this.x;
  var newPosY = this.y;
  switch(keyCode) {
  case "left":
      newPosX = this.x - 101;
      break;
  case "right":
      newPosX = this.x + 101;
      break;
  case "up":
      newPosY = this.y + 83;
      break;
  case "down":
      newPosY = this.y - 83;
      break;
  }
  if(insideCanvas(newPosX, newPosY)){
    this.x = newPosX;
    this.y = newPosY;
  }
}

function insideCanvas(posX, posY) {
  return posX >= 0 && posX < ctx.canvas.width && posY >= 0 && posY <= ctx.canvas.height - 191;
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
allEnemies = [];
for(var i = 0; i < 20; i++){
  allEnemies.push(new Enemy());
}
player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'down',
        39: 'right',
        40: 'up'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

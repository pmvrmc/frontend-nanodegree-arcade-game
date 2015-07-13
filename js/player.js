var Player = function(){
  var x = 202;
  var y = 415;
  Element.call(this, x, y, 'images/char-boy.png');
}
Player.prototype = Object.create(Element.prototype);
Player.prototype.constructor = Player;
Player.prototype.update = function() {}
Player.prototype.reset = function(){
  this.x = 202;
  this.y = 415;
}

Player.prototype.handleInput = function(keyCode) {
  var oldPosX = this.x;
  var oldPosY = this.y;
  switch(keyCode) {
  case "left":
      this.x = this.x - 101;
      break;
  case "right":
      this.x = this.x + 101;
      break;
  case "up":
      this.y = this.y + 83;
      break;
  case "down":
      this.y = this.y - 83;
      break;
  }
  if(!this.insideCanvas()){
    this.x = oldPosX;
    this.y = oldPosY;
  }
}

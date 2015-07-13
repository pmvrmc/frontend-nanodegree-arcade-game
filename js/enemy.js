var Enemy = function() {
    var x = (Math.floor((Math.random() * 7)) * 101) * -1;
    var y = Math.floor((Math.random() * 5)) * 83;

    Element.call(this, x, y, 'images/enemy-bug.png');
}
Enemy.prototype = Object.create(Element.prototype);
Enemy.prototype.constructor = Enemy;

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

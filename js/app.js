// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var gameManager = GameManager.getInstance();

allEnemies = [];
for(var i = 0; i < gameManager.getNEnemies(); i++){
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

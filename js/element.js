// All Elements
var Element = function(posX, posY, sprite) {
    this.x = posX;
    this.y = posY;
    this.sprite = sprite;
}

Element.prototype.insideCanvas = function(){
    var gameManager = GameManager.getInstance();
    return this.x >= 0 && this.x < gameManager.getGameWidth() && this.y >= 0 && this.y <= gameManager.getGameHeight() -191;
}

// Draw the element on the screen, required method for game
Element.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Element.prototype.hasColision = function(anotherElement){
    return this.x > anotherElement.x - 55 && this.x < anotherElement.x + 55 && this.y === anotherElement.y;
}

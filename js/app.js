// Enemies our player must avoid
var Enemy = function(horizontLocation, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = Enemy.offScreenLocation;
    this.y = horizontLocation;
    this.speed = speed;
};

Enemy.offScreenLocation = -100;
Enemy.speeds = [100, 150, 200, 250, 300, 350, 400, 450];

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // debugger;
    this.x = this.x + this.speed * dt;

    if (this.x > ctx.canvas.width) {
        this.reset();
    }
};

Enemy.prototype.reset = function() {
    var randomSpeed = Enemy.speeds[Math.floor(Math.random() * Enemy.speeds.length)];

    this.x = Enemy.offScreenLocation;
    this.speed = randomSpeed;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
function Player() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 380;
}

Player.prototype.update = function () {

};

Player.prototype.handleInput = function (direction) {
    console.log(direction);
    var verticalMovement = 0;
    var horizontalMovement = 0;

    if (direction === 'up') {
        verticalMovement = -85;
    } else if (direction === 'down') {
        verticalMovement = 85;
    } else if (direction === 'left') {
        horizontalMovement = -100;
    } else {
        horizontalMovement = 100;
    }

    this.x += horizontalMovement;
    this.y += verticalMovement;
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
    new Enemy(60, 200),
    new Enemy(145, 350),
    new Enemy(230, 150),
];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

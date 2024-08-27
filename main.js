// Maze Game by Mr. V

// Global Variables 3
let player = newPlayer(100, 150, 35, 35, "blue", 5, 37, 39, 38);
let platforms = [];
let borders = [];
let pipes = [];
let buttons = [];
let spikes = [];
let buttonIsPressed = false;
let levels = 1;
let paused = false;
let key = false;
initPlatforms(platforms);
initBorders(borders);
initButtons(buttons);
initPipes(pipes);
initSpikes(spikes);
// Set Canvas Size
canvasSize(1200, 800);

// Main Draw Loop
requestAnimationFrame(draw);

function draw() {
  // LOGIC
  movePlayer(player);

  // DRAWING
  background("skyblue");
  drawPlayer(player);
  drawPlatforms(platforms);
  drawBorders(borders);
  drawPipes(pipes);
  drawButtons(buttons);
  drawSpikes(spikes);
  // Draw the Entrance Decoration Pipe
  fill('orange');
  rect(100, 150, 35, 50, 'fill');
  rect(90, 200, 55, 25, 'fill');
  if (buttonIsPressed == true) {
    borders.pop()
    buttons[0] = newButton(650, 287.5, 75, 12.5, 'purple')
  } else if (buttonIsPressed == false) {
    borders[0] = newBorder(1000, 625, 20, 125, 'black');
    buttons[0] = newButton(650, 275, 75, 25, 'purple')
  }
  levelCount();
  deathCount();
  if (paused == false) {
    requestAnimationFrame(draw);
  } else if (paused == true) {
    font('44px Arial')
    fill('black');
    text('Paused', 550, 400, 'fill')
  }
}

function deathCount() {
  document.getElementById('overallDeaths').innerHTML = 'Deaths: ' + deaths;
  if (deaths === 420) {
    alert('Congrats on taking a joke too far. As such, you will watch yourself die in slowmotion. Hope this easter egg was worth it you clown, you absolute buffoon.')
  }
}

function levelCount() {
  document.getElementById('stageNum').innerHTML = levels;
  if (levels == 1) {
    document.getElementById('stageName').innerHTML = 'Not too hard.'
  } else if (levels == 2) {
    document.getElementById('stageName').innerHTML = 'But maybe with inverted controls?'
    player.lKey = 39;
    player.rKey = 37;
  } else if (levels == 3) {
    document.getElementById('stageName').innerHTML = "One small step for a square..."
    player.lKey = 37;
    player.rKey = 39;
    player.a = 0.5;
  } else if (levels == 4) {
    document.getElementById('stageName').innerHTML = "Gotta Go FAST!"
    player.a = 1.1
    player.dx = 25;
  } else if (levels == 5) {
    document.getElementById('stageName').innerHTML = "What A Spectacular Div element!"
    player.lKey = 65;
    player.rKey = 68;
    player.uKey = 87;
    player.dx = 5;
  } else if (levels == 6) {
    document.getElementById('stageName').innerHTML = "Oof, ate too much."
    player.lKey = 37;
    player.rKey = 39;
    player.uKey = 38;
    player.a = 1.1;
    player.launchSpeed = -11;
    borders.pop();
    fill('black');
    rect(1000, 625, 20, 125, 'fill');
  } else if (levels == 7) {
    document.getElementById('stageName').innerHTML = "Think Before Doing!"
    player.launchSpeed = -20;
    borders[0] = newBorder(1000, 1000, 20, 125);
    if (buttonIsPressed == true) {
      borders[0] = newBorder(1000, 625, 20, 125);
    }
  } else if (levels == 8) {
    document.getElementById('stageName').innerHTML = "8 is the key"
    buttons.pop();
  } else if (levels == 9) {
    document.getElementById('stageName').innerHTML = "Can you find your way?"
    for (let i = 0; i < pipes.length; i++) {
    pipes[i].fill = 'skyblue';
    }

    for (let i = 0; i < borders.length; i++) {
      borders[i].fill = 'skyblue';
    }

    for (let i = 0; i < platforms.length; i++) {
      platforms[i].fill = 'skyblue';
    }

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].fill = 'skyblue';
    }

    for (let i = 0; i < spikes.length; i++) {
      spikes[i].fill = 'skyblue';
    }
  } else if (levels == 10) {
    document.getElementById('stageName').innerHTML = "The Final Challenge"
    
    for (let i = 0; i < borders.length; i++) {
      borders[i].fill = 'skyblue';
    }

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].fill = 'skyblue';
    }
    player.lKey = 68;
    player.rKey = 65;
    player.uKey = 87;
    player.dx = 15;
    player.a = 0.5;
  } else if (levels == 11) {
    document.getElementById('stageName').innerHTML = "Thanks for playing!"
    platforms.splice(0, 20);
    borders.splice(0, 1);
    pipes.splice(0, 2);
    spikes.splice(0, 9);
    buttons.splice(0, 1);
    font('22px Arial')
    fill('black')
    text("Thanks for playing this short game! Although this was originally supposed to be one level, it sure didn't seem like it!", 20, 30, 'fill')
    fill('blue');
    text("Game Coder: Arnav Gupta                                                                                                With help from: Mr. V", 20, 80, 'fill');
    fill('red');
    fill('green');
    text('Special thanks to the guy that made the original game, and to the player for playing!', 20, 250, 'fill')
    font('100px Arial')
    fill('black');
    text('CONGRATULATIONS!!!!', 40, 400, 'fill');
    player.canJump = true;
  }


}

// Make a function that passes in the level # and level name

// Event Stuff
document.addEventListener("keydown", keydownHandler);
document.addEventListener('keyup', keyUpHandler);

function keydownHandler(event) {
  jumpPlayer(player, event.keyCode);
}

function keyUpHandler(event) {
  console.log(event.keyCode);
  if (event.keyCode == 13) {
    paused = !paused;
    if (paused == false) {
      requestAnimationFrame(draw);
    }
  } else if (event.keyCode == 8 && levels == 8) {
    buttonIsPressed = true;
  }  
}
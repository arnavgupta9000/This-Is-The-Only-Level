// Player Functions
let deaths = 0;

function newPlayer(initX, initY, initW, initH, initColor, initSpeed, initlKey, initrKey, inituKey) {
  return {
    x: initX,
    y: initY,
    w: initW,
    h: initH,
    color: initColor,
    dx: initSpeed,
    dy: 0,
    a: 1.1,
    launchSpeed: -20,
    lKey: initlKey,
    rKey: initrKey,
    uKey: inituKey,
    canJump: true,
  }
}

function drawPlayer(aPlayer) {
  fill(aPlayer.color);
  rect(aPlayer.x, aPlayer.y, aPlayer.w, aPlayer.h, "fill");
}

function movePlayer(aPlayer) {
  // Horizontal Movement
  if (keyIsDown[aPlayer.lKey]) {
    aPlayer.x += -aPlayer.dx;
    checkWallCollision(aPlayer, 'right');
    checkBorderCollision(aPlayer, 'right');
    checkButtonCollision(aPlayer, 'right');
    checkSpikeCollision(aPlayer, 'right');
  } else if (keyIsDown[aPlayer.rKey]) {
    aPlayer.x += aPlayer.dx;
    checkWallCollision(aPlayer, 'left');
    checkBorderCollision(aPlayer, 'left');
    checkButtonCollision(aPlayer, 'left');
    checkPipeCollision(aPlayer, 'left');
    checkSpikeCollision(aPlayer, 'left');
  }

  // Vertical Movement
  aPlayer.y += aPlayer.dy; // Move Vertically
  checkBorderCollision(aPlayer, 'vertical');
  checkWallCollision(aPlayer, 'vertical');
  checkButtonCollision(aPlayer, 'vertical');
  checkPipeCollision(aPlayer, 'vertical');
  checkSpikeCollision(aPlayer, 'vertical');
  aPlayer.dy += aPlayer.a; // Apply acceleration (gravity)

  // Check Collision with Ground
  if (aPlayer.y + aPlayer.h > cnv.height) {
    aPlayer.y = cnv.height - aPlayer.h;
    aPlayer.dy = 0;
    aPlayer.canJump = true;
  }

}

function jumpPlayer(aPlayer, keyCode) {
  // Jump if keyCode is the player's up key
  if (aPlayer.uKey === keyCode && player.canJump) {
    aPlayer.dy = aPlayer.launchSpeed;
    aPlayer.canJump = false;
  }
}

function checkWallCollision(aPlayer, edge) {
  for (let i = 0; i < platforms.length; i++) {
    if (rectCollide(aPlayer, platforms[i])) {
      moveToPlatEdge(aPlayer, platforms[i], edge);
      break;
    }
  }
}

function checkBorderCollision(aPlayer, edge) {
  for (let i = 0; i < borders.length; i++) {
    if (rectCollide(aPlayer, borders[i])) {
      blockade(aPlayer, borders[i], edge);
      break;
    }
  }
}

function checkButtonCollision(aPlayer, edge) {
  for (let i = 0; i < buttons.length; i++) {
    if (rectCollide(aPlayer, buttons[i])) {
      pressButton(aPlayer, buttons[i], edge);
      break;
    }
  }
}

function checkPipeCollision(aPlayer, edge) {
  for (let i = 0; i < pipes.length; i++) {
    if (rectCollide(aPlayer, pipes[i])) {
      finishStage(aPlayer, pipes[i], edge);
      break;
    }
  }
}

function checkSpikeCollision(aPlayer, edge) {
  for (let i = 0; i < spikes.length; i++) {
    if (rectCollide(aPlayer, spikes[i])) {
      spikyDeath(aPlayer, spikes[i], edge);
      break;
    }
  }
}


function moveToPlatEdge(aPlayer, platform, edge) {
  if (edge == 'right') {
    aPlayer.x = platform.x + platform.w;
  } else if (edge == 'left') {
    aPlayer.x = platform.x - aPlayer.w;
  } else if (edge == 'vertical') {
    if (aPlayer.dy < 0) {
      aPlayer.y = platform.y + platform.h; // Teleport to bottom of platform
      aPlayer.canJump = false;
    } else if (aPlayer.dy > 0) {
      aPlayer.y = platform.y - aPlayer.h; // Teleport to top of platform
      aPlayer.canJump = true;
    }
    aPlayer.dy = 0; // Set speed to 0 to prevent falling through platform
  }
}

function blockade(aPlayer, border, edge) {
  if (edge == 'right') {
    aPlayer.x = border.x + border.w;
  } else if (edge == 'left') {
    aPlayer.x = border.x - aPlayer.w;
  } else if (edge == 'vertical') {
    if (aPlayer.dy < 0) {
      aPlayer.y = border.y + border.h; // Teleport to bottom of platform
      aPlayer.canJump = false;
    } else if (aPlayer.dy > 0) {
      aPlayer.y = border.y - aPlayer.h; // Teleport to top of platform
      aPlayer.canJump = true;
    }
    aPlayer.dy = 0; // Set speed to 0 to prevent falling through platform
  }
}

function pressButton(aPlayer, button, edge) {
  if (edge == 'right') {
    buttonIsPressed = true;
    button.h = 1 / 2 * button.h
    button.y = button.y + button.h
  } else if (edge == 'left') {
    buttonIsPressed = true;
    button.h = 1 / 2 * button.h
    button.y = button.y + button.h
  } else if (edge == 'vertical') {
    if (aPlayer.dy < 0) {
      buttonIsPressed = true;
      button.h = 1 / 2 * button.h
      button.y = button.y + button.h
    } else if (aPlayer.dy > 0) {
      buttonIsPressed = true;
      button.h = 1 / 2 * button.h
      button.y = button.y + button.h
    }
    aPlayer.dy = 0; // Set speed to 0 to prevent falling through platform
  }
}

function spikyDeath(aPlayer, spike, edge) {
  if (edge == 'right') {
    deaths++;
    buttonIsPressed = false;
    aPlayer.x = 100;
    aPlayer.y = 150;
  } else if (edge == 'left') {
    deaths++;
    buttonIsPressed = false;
    aPlayer.x = 100;
    aPlayer.y = 150;
  } else if (edge == 'vertical') {
    if (aPlayer.dy < 0) {
      deaths++;
      buttonIsPressed = false;
      aPlayer.x = 100;
      aPlayer.y = 150;
    } else if (aPlayer.dy > 0) {
      deaths++;
      buttonIsPressed = false;
      aPlayer.x = 100;
      aPlayer.y = 150;
    }
    aPlayer.dy = 0; // Set speed to 0 to prevent falling through platform
  }
}

function finishStage(aPlayer, pipe, edge) {
  if (edge == 'left') {
    levels++;
    aPlayer.x = 100;
    aPlayer.y = 150;
    buttonIsPressed = false;
    borders.push(newBorder(1000, 625, 20, 125))
    buttons.pop();
    buttons.push(newButton(650, 275, 75, 25));
  } else if (edge == 'vertical') {
    if (aPlayer.dy < 0) {
      levels++;
      aPlayer.x = 100;
      aPlayer.y = 150;
      buttonIsPressed = false;
      borders.push(newBorder(1000, 625, 20, 125))
      buttons.pop()
      buttons.push(newButton(650, 275, 75, 25));
    } else if (aPlayer.dy > 0) {
      levels++;
      aPlayer.x = 100;
      aPlayer.y = 150;
      buttonIsPressed = false;
      borders.push(newBorder(1000, 625, 20, 125))
      buttons.pop()
      buttons.push(newButton(650, 275, 75, 25));
    }
    aPlayer.dy = 0; // Set speed to 0 to prevent falling through platform
  }
}
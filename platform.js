// Wall Functions
function newPlatform(initX, initY, initW, initH, platformC) {
    return {
      x: initX,
      y: initY,
      w: initW,
      h: initH,
      fill: platformC
    }
  }
  
  function initPlatforms(platforms) {
    platforms.push(newPlatform(520, 300, 250, 20, 'grey'));
    platforms.push(newPlatform(275, 475, 150, 20, 'grey'));
    platforms.push(newPlatform(0, 460, 150, 340, 'grey'));
    platforms.push(newPlatform(0, 0, 1200, 50, 'grey'));
    platforms.push(newPlatform(0, 0, 200, 150,'grey'));
    platforms.push(newPlatform(0, 0, 50, 800, 'grey'));
    platforms.push(newPlatform(0, 460, 150, 340, 'grey'));
    platforms.push(newPlatform(0, 400, 200, 60, 'grey'));
    platforms.push(newPlatform(0, 775, 1200, 25, 'grey'));
    platforms.push(newPlatform(1175, 0, 25, 800, 'grey'));
    platforms.push(newPlatform(525, 675, 150, 100, 'grey'));
    platforms.push(newPlatform(575, 575, 100, 100, 'grey'));
    platforms.push(newPlatform(775, 625, 40, 100, 'grey'));
    platforms.push(newPlatform(815, 675, 100, 100, 'grey'));
    platforms.push(newPlatform(815, 750, 365, 25, 'grey'));
    platforms.push(newPlatform(1000, 575, 200, 50, 'grey'));
    platforms.push(newPlatform(1000, 525, 50, 50, 'grey'));
    platforms.push(newPlatform(825, 195, 100, 20, 'grey'));
    platforms.push(newPlatform(895, 445, 100, 20, 'grey'));
    platforms.push(newPlatform(1000, 0, 200, 150, 'grey'));
    platforms.push(newPlatform(1050, 0, 150, 200, 'grey'));
  }
  
  function drawPlatform(aPlatform) {
    fill(aPlatform.fill);
    rect(aPlatform.x, aPlatform.y, aPlatform.w, aPlatform.h, "fill");
  }
  
  function drawPlatforms(platforms) {
    for (let i = 0; i < platforms.length; i++) {
      drawPlatform(platforms[i]);
    }
  }
// Pipe Functions
function newPipe(initX, initY, initW, initH, pipeC) {
    return {
        x: initX,
        y: initY,
        w: initW,
        h: initH,
        fill: pipeC
    }
}

function initPipes(pipes) {
    pipes.push(newPipe(1125, 700, 50, 40, 'green'));
    pipes.push(newPipe(1100, 690, 25, 60, 'green'));
}

function drawPipe(aPipe) {
    fill(aPipe.fill);
    rect(aPipe.x, aPipe.y, aPipe.w, aPipe.h, "fill");
}

function drawPipes(pipes) {
    for (let i = 0; i < pipes.length; i++) {
        drawPipe(pipes[i]);
    }
}
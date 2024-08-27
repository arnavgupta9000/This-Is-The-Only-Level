// Spike Functions
function newSpike(initX, initY, initW, initH, spikeC) {
    return {
        x: initX,
        y: initY,
        w: initW,
        h: initH,
        fill: spikeC
    }
}

function initSpikes(spikes) {
    spikes.push(newPipe(50, 225, 30, 175, 'red'));
    spikes.push(newPipe(150, 755, 175, 20, 'red'));
    spikes.push(newPipe(675, 755, 140, 20, 'red'));
    spikes.push(newPipe(625, 50, 150, 30, 'red'));
    spikes.push(newPipe(915, 725, 25, 25, 'red'));
    spikes.push(newPipe(1145, 400, 30, 175,'red'));
    spikes.push(newPipe(970, 50, 30, 20, 'red'));
    spikes.push(newPipe(1000, 150, 50, 20, 'red'));
    spikes.push(newPipe(1030, 150, 20, 50, 'red'));
    spikes.push(newPipe(1050, 200, 125, 20,'red'));
}

function drawSpike(aSpike) {
    fill(aSpike.fill);
    rect(aSpike.x, aSpike.y, aSpike.w, aSpike.h, "fill");
}

function drawSpikes(spikes) {
    for (let i = 0; i < spikes.length; i++) {
        drawSpike(spikes[i]);
    }
}
// Border Functions
function newBorder(initX, initY, initW, initH, borderC) {
    return {
        x: initX,
        y: initY,
        w: initW,
        h: initH,
        fill: borderC
    }
}

function initBorders(borders) {
    borders.push(newBorder(1000, 625, 20, 125, 'black'))
}

function drawBorder(aBorder) {
    fill(aBorder.fill);
    rect(aBorder.x, aBorder.y, aBorder.w, aBorder.h, "fill");
}

function drawBorders(borders) {
    for (let i = 0; i < borders.length; i++) {
        drawBorder(borders[i]);
    }
}
// Button Functions
function newButton(initX, initY, initW, initH, buttonC) {
    return {
        x: initX,
        y: initY,
        w: initW,
        h: initH,
        fill: buttonC
    }
}

function initButtons(buttons) {
    buttons.push(newButton(650, 275, 75, 25, 'purple'))
}

function drawButton(aButton) {
    fill(aButton.fill);
    rect(aButton.x, aButton.y, aButton.w, aButton.h, "fill");
}

function drawButtons(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        drawButton(buttons[i]);
    }
}
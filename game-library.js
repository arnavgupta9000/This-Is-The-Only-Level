// GAME LIBRARY

// FUNCTION LIST
// canvasSize(width, height)
// background(color)
// stroke(color)
// fill(color)
// lineWidth(width)
// font(fontSetting)
// rect(x, y, w, h, mode)
// line(x1, y1, x2, y2)
// circle(x, y, r, mode)
// triangle(x1, y1, x2, y2, x3, y3, mode)
// polygon(points, mode)
// text(message, x, y, mode)
// ellipse(x, y, xRadius, yRadius, rotation, mode)
// image(img, x, y, w, h)
// imageClip(img, xc, yc, wc, hc, x, y, w, h)
// dist(x1, y1, x2, y2)
// ptInCircle(x, y, aCircle)
// ptInRect(x, y, aRect)
// circleCollide(circle1, circle2)
// rectCollide(rect1, rect2)

// Global Variables
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

let mouseX;
let mouseY;
let mouseIsPressed = false;
let keyIsDown = {};

// Canvas Default Size
cnv.width = 400;
cnv.height = 400;

// Set the canvas to the provided size
function canvasSize(width, height) {
  cnv.width = width;
  cnv.height = height;
}

// Fill the canvas with the provided color
function background(color) {
  fill(color);
  rect(0, 0, cnv.width, cnv.height, "fill");
}

// Set the strokeStyle
function stroke(color) {
  ctx.strokeStyle = color;
}

// Set the fillStyle
function fill(color) {
  ctx.fillStyle = color;
}

// Set the lineWidth
function lineWidth(width) {
  ctx.lineWidth = width;
}

// Set the font
function font(fontSetting) {
  ctx.font = fontSetting;
}

// Draw a stroke or fill rectangle with a top-left corner of (x,y), a width of w and a height of h
function rect(x, y, w, h, mode) {
  if (mode === "fill") {
    ctx.fillRect(x, y, w, h);
  } else if (mode === "stroke") {
    ctx.strokeRect(x, y, w, h);
  }
}

// Draw a line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Endpoint 1
  ctx.lineTo(x2, y2); // Endpoint 2
  ctx.stroke();
}

// Draw a stroke or fill circle with center (x,y) and radius of r
function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

// Draw a stroke or fill triangle with vertices (x1,y1), (x2,y2), (x3,y3)
function triangle(x1, y1, x2, y2, x3, y3, mode) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Vertex 1
  ctx.lineTo(x2, y2); // Vertex 2
  ctx.lineTo(x3, y3); // Vertex 3
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}

// Draw a stroke or fill polygon using the given array of points
function polygon(points, mode) {
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}

// Draw stroke or fill text with bottom-left corner (x,y)
function text(message, x, y, mode) {
  if (mode === "fill") {
    ctx.fillText(message, x, y);
  } else if (mode === "stroke") {
    ctx.strokeText(message, x, y);
  }
}

// Draw a stroke or fill ellipse with center (x,y)
function ellipse(x, y, xRadius, yRadius, rotation, mode) {
  ctx.beginPath();
  ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

// Draw an image on the canvas
function image(img, x, y, w, h) {
  ctx.drawImage(img, x, y, w, h);
}

// Draw a clip of an image on the canvas
function imageClip(img, xc, yc, wc, hc, x, y, w, h) {
  ctx.drawImage(img, xc, yc, wc, hc, x, y, w, h);
}

// Determine the distance between two points
function dist(x1, y1, x2, y2) {

}

// Test if point is in circle
function ptInCircle(x, y, aCircle) {

}

// Test if point is in rectangle
function ptInRectangle(x, y, aRect) {

}

// Test if two circle objects intersect
function circleCollide(circle1, circle2) {

}

// Test if two rectangle objects intersect
function rectCollide(rect1, rect2) {
  if (rect1.x < rect2.x + rect2.w 
    && rect1.x + rect1.w > rect2.x 
    && rect1.y < rect2.y + rect2.h 
    && rect1.y + rect1.h > rect2.y) {
  return true;
 }
 
}

// Event Listeners & Handlers
document.addEventListener("mousedown", mousedownHandlerLib);
document.addEventListener("mouseup", mouseupHandlerLib);
document.addEventListener("mousemove", mousemoveHandlerLib);
document.addEventListener("keydown", keydownHandlerLib);
document.addEventListener("keyup", keyupHandlerLib);

function mousedownHandlerLib() {
  mouseIsPressed = true;
}

function mouseupHandlerLib() {
  mouseIsPressed = false;
}

function keydownHandlerLib(event) {
  keyIsDown[event.keyCode] = true;
}

function keyupHandlerLib(event) {
  keyIsDown[event.keyCode] = false;
}

function mousemoveHandlerLib(event) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}
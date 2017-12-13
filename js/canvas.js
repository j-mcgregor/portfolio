var canvas = document.querySelector('canvas');
// set dimensions of the canvas to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// create the context in the form of the 'c', basically passing 'c' a ton of canvas methods and functions which we can use to draw with
var c = canvas.getContext('2d');

// // DRAWING RECTABGLES

// // c.fillStyle = "#3c2" - change the fill color
// c.fillStyle = "rgba(255,0,0,.5)";
// // c.fillRect(x, y, width, height);
// c.fillRect(100, 100, 100, 100);
// // canvas JS is cascading, meaning that properties can be changed if specified so further down the code
// c.fillStyle = "rgba(0,0,255,.5)";
// c.fillRect(300, 400, 100, 100);
// c.fillStyle = "rgba(0,255,0,.5)";
// c.fillRect(200, 300, 100, 100);


// // DRAWING LINES
// c.beginPath();

// // c.moveTo(x,y) - start positions
// c.moveTo(50, 50)
// // c.lineTo(x,y) - move the line
// c.lineTo(100, 200)
// // add another lineTo
// c.lineTo(300, 400)
// // add another...
// c.lineTo(350, 200)
// // add close it off
// c.lineTo(50, 50)
// // c.strokeStyle = "#3c2" - change the color of our lines
// c.strokeStyle = "#3c2";
// // c.stroke() - make the line itself
// c.stroke()

// Comment In START

// // DRAWING ARCS
// // Use begin path again to seperate any shapes
// c.beginPath();
// // c.arc(x, y, radius, startAngle, endAngle, anticlockwise?)
// c.arc(300,300,30,0,Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// Comment In END

// DRAWING MULTIPLE CIRCLES
for (let i = 0; i < 10; i++) {

  // To make a single shape appear multiple times across the screen you can the x and y coordinates as variables, like so:

  // // set random variables so move the circles across the screen
  // var x = Math.random() * window.innerWidth;
  // var y = Math.random() * window.innerHeight;

  // c.beginPath();
  // c.arc(x,y,30,0,Math.PI * 2, false);
  // c.strokeStyle = 'blue';
  // c.stroke();

  // However, if we want to reuse those randomly generated coordinates for m ultiple shapes, we can make a callback function which generates a random number each time it is called, like so:
  var randomNumber = function (num) {
    return Math.floor(Math.random() * num);
  }

  var randomColor = function () {
    return "rgba(" + randomNumber(255) + "," + randomNumber(255) + "," + randomNumber(255) + ",.5)";
  }

  // the num is for the innerWidth/innerHeight, declared below
  h = window.innerHeight;
  w = window.innerWidth;
  // For generating a random color
  color = 255;

  // We can then pass in the window's width and height values to both the ARC and RECT pathmakers
  c.beginPath();
  c.arc(randomNumber(w), randomNumber(h), 30, 0, Math.PI * 2, false);
  c.strokeStyle = randomColor();
  c.stroke();

  // c.fillStyle = "#3c2" - change the fill color
  c.fillStyle = randomColor();
  // c.fillRect(x, y, width, height);
  c.fillRect(randomNumber(w), randomNumber(h), 50, 50);
  // canvas JS is cascading, meaning that properties can be changed if specified so further down the code
  c.fillStyle = randomColor();
  c.fillRect(randomNumber(w), randomNumber(h), 50, 50);
  c.fillStyle = randomColor();
  c.fillRect(randomNumber(w), randomNumber(h), 50, 50);



}
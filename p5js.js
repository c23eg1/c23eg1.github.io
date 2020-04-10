var bubbles = [];
  
function setup() {
  createCanvas(400, 400);
//   for (let i = 0; i < 1000; i++) {
//     var x = random(width)
//     var y = random(height)

  // var r = random(10, 40)
  //   var c = random(10, 255)
//     bubbles[i] = new Bubble(x, y, r, c)
//   }

}

function mouseDragged(){
  var r = random(10,40)
 var c = random (10,255)

  let b = new Bubble(mouseX,mouseY,r,c)
  bubbles.push(b);
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();

  }
  //   bubbles[1].show();
  // bubbles[1].move();

}



class Bubble {
  constructor(x, y, r, c) {
    this.x = x;
    this.y = y
    this.r = r;
    this.c = c
  }
  move() {
    this.x = this.x + random(-5, 5)
    this.y = this.y + random(-5, 5)
  }
  show() {
    //   stroke(255);
    // strokeWeight(4)
    noStroke()
    tint(255, 127);

    fill(this.c);
    ellipse(this.x, this.y, this.r * 2)
  }
}
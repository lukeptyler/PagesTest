// Click and drag the mouse to view the scene from different angles.

function setup() {
  createCanvas(400, 400, WEBGL);

  describe('A white cube rotates slowly against a gray background.');
  
  angleMode(DEGREES);
}

var cameraAngleX = 0;
var cameraAngleY = 0;

function draw() {
  background(200);
  
  // Set camera transform
  rotateX(cameraAngleX);
  rotateY(cameraAngleY);
  orbitControl(0,0,1);

  // Draw a box.
  translate(-55,0,-55);
  for (x = 0; x < 3; x++) {
    push();
    for (z = 0; z < 3; z++) {
      box(50,50);
      translate(0,0,55);
    }
    pop();
    translate(55,0,0);
  }
}

function mouseDragged(event) {
  if (event.buttons == 1) {
    cameraAngleX -= event.movementY;
    cameraAngleY += event.movementX;
  }
}
const TRIANGLE_WIDTH_HEIGHT = 80;
var theta = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  amountX = width / TRIANGLE_WIDTH_HEIGHT;
  amountY = height / TRIANGLE_WIDTH_HEIGHT;

  theta += 0.05;

  var colorCode = map(sqrt(sin(theta) + 1), 0, 1.5, 64, 255);

  for (i = 0; i < amountX; i++) {
    for (j = 0; j < amountY; j++) {
      fill(colorCode);
      triangle(
        (i + 1) * TRIANGLE_WIDTH_HEIGHT,
        j * TRIANGLE_WIDTH_HEIGHT,
        (i + 1) * TRIANGLE_WIDTH_HEIGHT - 5,
        (j + 1) * TRIANGLE_WIDTH_HEIGHT - 5,
        i * TRIANGLE_WIDTH_HEIGHT,
        (j + 1) * TRIANGLE_WIDTH_HEIGHT
      );

      fill(255 - colorCode);
      triangle(
        (i + 1) * TRIANGLE_WIDTH_HEIGHT,
        j * TRIANGLE_WIDTH_HEIGHT,
        i * TRIANGLE_WIDTH_HEIGHT + 5,
        j * TRIANGLE_WIDTH_HEIGHT + 5,
        i * TRIANGLE_WIDTH_HEIGHT,
        (j + 1) * TRIANGLE_WIDTH_HEIGHT
      );
    }
  }
}

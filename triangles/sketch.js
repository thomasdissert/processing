const TRIANGLE_WIDTH_HEIGHT = 80;
var theta = 0;

function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  smooth();
  amountX = width / TRIANGLE_WIDTH_HEIGHT;
  amountY = height / TRIANGLE_WIDTH_HEIGHT;

  theta += 0.05;

  for (i = 0; i < amountX; i++) {
    for (j = 0; j < amountY; j++) {
      var colorCode = map(sqrt(sin(theta - i * j) + 1), 0, 1.5, 64, 255);
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

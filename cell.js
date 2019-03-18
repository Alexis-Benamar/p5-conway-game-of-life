class Cell {
  x;
  y;
  xPos;
  yPos;
  size;
  sizeMultiplier = 0.8;
  alive;

  constructor(x, y, size) {
    this.x = x
    this.y = y
    this.xPos = this.x * size
    this.yPos = this.y * size
    this.size = size
    this.alive = false
  }

  show() {
    noStroke()
    this.alive ? fill(8) : fill(255)
    ellipse(this.xPos + (this.size/2), this.yPos + (this.size / 2), this.size * this.sizeMultiplier, this.size * this.sizeMultiplier)
  }

  clicked() {
    if (
      mouseX > this.xPos && mouseX < this.xPos + this.size &&
      mouseY > this.yPos && mouseY < this.yPos + this.size
    ) {
      this.alive = !this.alive
    }
  }
}
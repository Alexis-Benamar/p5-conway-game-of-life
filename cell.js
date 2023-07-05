class Cell {
  x
  y
  xPos
  yPos
  size
  sizeMultiplier = 0.6
  alive

  constructor(x, y, size) {
    this.x = x
    this.y = y
    this.xPos = this.x * size
    this.yPos = this.y * size
    this.size = size
    this.alive = false
  }

  drawCell(cellColor) {
    if (CELL_RING) {
      stroke(cellColor)
      strokeWeight(4)
      fill(BG_COLOR)
      circle(
        this.xPos + (this.size/2),
        this.yPos + (this.size/2),
        (this.size / 2) * this.sizeMultiplier
      )
    } else {
      noStroke()
      fill(cellColor)
      ellipse(
        this.xPos + (this.size / 2),
        this.yPos + (this.size / 2),
        this.size * this.sizeMultiplier, this.size * this.sizeMultiplier
      )
    }
  }

  show() {
    if (this.alive) {
      this.drawCell(CELL_COLOR)
    } else {
      if (
        !run &&
        mouseX > this.xPos && mouseX < this.xPos + this.size &&
        mouseY > this.yPos && mouseY < this.yPos + this.size
      ) {
        this.drawCell(CELL_COLOR / 3)
      }
    }
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
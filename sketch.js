let grid, randomFillButton, sizeMulSlider
let canvasSize = 512
let cols = 5
let rows = 5
let run = false
let fps = 0

function setup() {
  createCanvas(canvasSize, canvasSize)
  grid = new Grid(rows, cols, canvasSize)
  
  randomFillButton = createButton('random fill').mousePressed(fillButton)
  startButton = createButton('run').mousePressed(start)
}

function draw() {
  run ? background(100, 255, 100) : background(240)
  grid.show()
  if(run && !(fps % 30)) {
  }
  fps++
}

function mousePressed() {
  grid.cells.forEach(rows => {
    rows.forEach(cell => {
      cell.clicked()
    })
  });
}

function fillButton() {
  grid.fillRandom()
}

function start() {
  grid.update()
  // run = !run
}
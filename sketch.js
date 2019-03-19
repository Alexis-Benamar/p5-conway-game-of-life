let grid, randomFillButton, sizeMulSlider
let canvasSize = 512
let cols = 32
let rows = 32
let run = false
let fps = 0

function setup() {
  createCanvas(canvasSize, canvasSize)
  grid = new Grid(rows, cols, canvasSize)
  
  randomFillButton = createButton('random fill').mousePressed(fillButton)
  runButton = createButton('run').mousePressed(runGame)
}

function draw() {
  background(255)
  grid.show()
  if(run && !(fps % 3)) {
    grid.update()
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

function runGame() {
  run = !run
  runButton.remove()
  runButton = run ? createButton('stop') : createButton('run')
  runButton.mousePressed(runGame)
}
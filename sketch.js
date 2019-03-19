let grid, randomFillButton, runButton, fpsSlider
let cellPxSize = 16
let cols = 48
let rows = 32
let canvasHeight = rows * cellPxSize
let canvasWidth = cols * cellPxSize
let run = false

function setup() {
  grid = new Grid(rows, cols, cellPxSize)
  randomFillButton = createButton('random fill').mousePressed(fillButton)
  runButton = createButton('run').mousePressed(runGame)
  fpsSlider = createSlider(1, 30, 15, 1)
  createCanvas(canvasWidth, canvasHeight)
  createP('stopped').addClass('text')
}

function draw() {
  frameRate(fpsSlider.value())
  background(250)
  if(run) grid.update()
  grid.show()
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
  gameState = select('.text')
  gameState.html(run ? 'running...' : 'stopped')
}
let grid, randomFillButton, runButton, fpsSlider
let canvasSize = 512
let cols = 32
let rows = 32
let run = false

function setup() {
  grid = new Grid(rows, cols, canvasSize)
  randomFillButton = createButton('random fill').mousePressed(fillButton)
  runButton = createButton('run').mousePressed(runGame)
  fpsSlider = createSlider(1, 60, 15, 1)
  createCanvas(canvasSize, canvasSize)
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
let grid
let createGridButton, randomFillButton, runButton
let colsInput, rowsInput, cellSizeInput
let fpsSlider
let cellPxSize
let cols
let rows
let canvasHeight
let canvasWidth
let run = false
let gameStateText

function setup() {
  createP('cols').addClass('label')
  createP('rows').addClass('label')
  createP('cell size (px)').addClass('label')
  createSpan('<br>')

  colsInput = createInput().addClass('grid-input')
  rowsInput = createInput().addClass('grid-input')
  cellSizeInput = createInput().addClass('grid-input')
  createSpan('<br>')
  
  createGridButton = createButton('generate grid').mousePressed(genGrid)
  randomFillButton = createButton('random fill').mousePressed(fillButton)
  runButton = createButton('run').mousePressed(runGame)
  fpsSlider = createSlider(1, 30, 15, 1)
  
  createCanvas(0, 0)
  gameStateText = createP('stopped').addClass('game-state hidden')
}

function draw() {
  frameRate(fpsSlider.value())
  background(250)
  if(grid !== undefined) {
    if(run) grid.update()
    grid.show()
  }
}

function genGrid() {
  if(rowsInput.value() !== '' && colsInput.value() !== '' && cellSizeInput.value() !== '') {
    rows = abs(round(rowsInput.value()))
    cols = abs(round(colsInput.value()))
    cellPxSize = abs(round(cellSizeInput.value()))
    canvasHeight =  rows * cellPxSize
    canvasWidth = cols * cellPxSize
    
    grid = new Grid(rows, cols, cellPxSize)
    resizeCanvas(canvasWidth, canvasHeight)
    gameStateText.removeClass('hidden')
  }
}

function mousePressed() {
  if(grid !== undefined) {
    grid.cells.forEach(rows => {
      rows.forEach(cell => {
        cell.clicked()
      })
    });
  }
}

function fillButton() {
  if(grid !== undefined) {
    grid.fillRandom()
  }
}

function runGame() {
  run = !run
  gameState = select('.game-state')
  gameState.html(run ? 'running...' : 'stopped')
}
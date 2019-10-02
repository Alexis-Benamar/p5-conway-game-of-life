const FPS_RATE = 12
const CELL_PX_SIZE = 32
const CELL_COLOR = 250
const BG_COLOR = 8
let CELL_RING = true

let grid
let cols
let rows
let run = true

function setup() {
  createCanvas((CELL_PX_SIZE * Math.floor(windowWidth / CELL_PX_SIZE)), (CELL_PX_SIZE * Math.floor(windowHeight / CELL_PX_SIZE)))
  cols = width / CELL_PX_SIZE
  rows = height / CELL_PX_SIZE
  genGrid()
  console.log(`
    Welcome !
    This is an adaptation of the infamous Conway's Game of Life.
    
    Controls:
    * S: stop / resume
    * R: random grid
    * E: empty grid
    * O: cell style
    * Mouse Click: cell toggle
  `)
}

function draw() {
  frameRate(FPS_RATE)
  background(BG_COLOR)
  if(grid !== undefined) {
    if(run) grid.update()
    grid.show()
  }
}

function genGrid() {
  grid = new Grid(rows, cols)
  grid.fillRandom()
}

function mousePressed() {
  if (run) {
    console.warn('click only works when stopped !')
  } else {
    grid.cells.forEach(rows => {
      rows.forEach(cell => {
        cell.clicked()
      })
    });
  }
}

function keyPressed() {
  switch(key) {
    case 'r':
      console.log('random fill')
      grid.fillRandom()
      break
    case 's':
      run = !run
      console.log(run ? 'running...' : 'stopped')
      break
    case 'e':
      console.log('emptied grid')
      grid.fillEmpty()
      break
    case 'o':
      CELL_RING = !CELL_RING
      console.log(`cell style: ${CELL_RING ? 'ring' : 'circle'}`)
    default:
      break
  }
}

function fillButton() {
  if(grid !== undefined) {
    grid.fillRandom()
  }
}
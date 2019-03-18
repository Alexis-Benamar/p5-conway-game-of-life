class Grid {
  cells;
  rows;
  cols;

  constructor(rows, cols, canvasSize) {
    this.rows = rows
    this.cols = cols

    this.cells = new Array(cols)
    for(let i = 0; i < this.cells.length; i++) {
      this.cells[i] = new Array(rows)
    }

    for(let i = 0; i < cols; i++) {
      for(let j = 0; j < rows; j++) {
        this.cells[i][j] = new Cell(i, j, canvasSize / cols)
      }
    }
  }

  update() {
    let next = new Array(this.cols)
    for(let i = 0; i < next.length; i++) {
      next[i] = new Array(this.rows)
    }

    for(let i = 0; i < this.cols; i++) {
      for(let j = 0; j < this.rows; j++) {
        
        if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
          next[i][j] = this.cells[i][j]
        } else {
          let neighbors = this.countNeighbors(this.cells, i, j)
          console.log('%s %s %s', i, j, neighbors)

        }
      }
    }
  }
  
  countNeighbors(grid, x, y) {
    let sum = 0
    for(let i = -1; i < 1; i++) {
      for(let j = -1; j < 1; j++) {
          sum += grid[x + i][y + j].alive ? 1 : 0
      }
    }
    sum -= grid[x][y].alive ? 1 : 0
    return sum
  }

  fillRandom() {
    this.cells.forEach(rows => {
      rows.forEach(cell => {
        cell.alive = random() >= 0.8 ? true : false
      })
    })
  }

  show() {
    this.cells.forEach(rows => {
      rows.forEach(cell => {
        cell.show()
      })
    })
  }

}
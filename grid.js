class Grid {
  cells;
  rows;
  cols;

  constructor(rows, cols, cellPxSize) {
    this.rows = rows
    this.cols = cols

    this.cells = new Array(cols)
    for(let i = 0; i < cols; i++) {
      this.cells[i] = new Array(rows)
      for(let j = 0; j < rows; j++) {
        this.cells[i][j] = new Cell(i, j, cellPxSize)
      }
    }
  }

  update() {
    let next = new Array(this.cols)
    
    for(let i = 0; i < this.cols; i++) {
      next[i] = new Array(this.rows)
      for(let j = 0; j < this.rows; j++) {
        if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
          next[i][j] = this.cells[i][j]
        } else {
          let neighbors = this.countNeighbors(this.cells, i, j)
          
          if (!(this.cells[i][j].alive) && neighbors == 3) {
            next[i][j] = new Cell(i, j, cellPxSize)
            next[i][j].alive = true
          } else if (this.cells[i][j].alive && (neighbors < 2 || neighbors > 3)) {
            next[i][j] = new Cell(i, j, cellPxSize)
            next[i][j].alive = false
          } else {
            next[i][j] = this.cells[i][j]
          }
        }
      }
    }

    this.cells = [...next]
  }
  
  countNeighbors(grid, x, y) {
    let sum = 0

    for(let i = x-1; i <= x+1; i++) {
      for(let j = y-1; j <= y+1; j++) {
        sum += grid[i][j].alive ? 1 : 0
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
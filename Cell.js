class Cell {
  constructor(left, top, size, column, id, cellObject, neighborColumns) {
    this.id              = id
    this.cellObject      = cellObject
    this.column          = column
    this.board           = this.column.board
    this.neighborColumns = neighborColumns 
    this.left            = left;
    this.top             = top;
    this.size            = size; 
    this.neighbors       = {}                                                                                             /* remember: the neighborhood can be as large as you want because you can reference your */
    this.draw()
  }

  draw() {
  
    let cell             = document.createElement('div')
    let body             = document.getElementsByTagName('body')[0]
    cell.style.position  = 'absolute'
    cell.style.left      = this.left  + 'px'
    cell.style.top       = this.top   + 'px'
    cell.style.width     = this.size  + 'px'
    cell.style.height    = this.size  + 'px'
    cell.style.margin    = 'none'
    cell.classList.add('cell')

    console.log('hello')

    body.append(cell)
    this.div = cell
  }

  findNeighbors(){
    console.log('finding neighbors')

    this.neighbors.top                                   = this.cellObject[this.id - this.column.board.cellSize]
    this.neighbors.bottom                                = this.cellObject[this.id + this.column.board.cellSize]
    if(this.neighborColumns.left ) this.neighbors.left   = this.neighborColumns.left.cells[this.id]
    if(this.neighborColumns.right) this.neighbors.right  = this.neighborColumns.right.cells[this.id]



    // if(this.column.cells[this.id - this.column.board.cellSize])   {this.neighbors.top  = this.column.cells[this.id - this.column.board.cellSize]}
    // if(this.board.columns[this.column.id - this.size].cells[this.id])   {this.neighbors.left = this.board.columns[this.column.id - this.size].cells[this.id]} 
  }

  update(){

  }
}

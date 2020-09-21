let board   = new Board(window.innerWidth, window.innerHeight, 10)
setInterval(board.update, 500)

let cells   = Array.from(document.getElementsByClassName('cell'))
let colors  = ['a', 'b', 'c', 'd',]
let state   = {}


// modes to draw different kinds of square (put these options in an expandable menu)
// square types that affect the squares around them

state.drawing = false 

document.addEventListener('mousedown', e => {
    e.preventDefault()
    state.drawing = true
})

document.addEventListener('mouseup', e => {
    state.drawing = false
})

document.addEventListener('mousemove', e => {
    
    state.mouseX = e.clientX
    state.mouseY = e.clientY

})


cells.forEach(c=> {
    c.addEventListener('mouseenter', e => {
        if(state.drawing){
            e.target.classList.add(colors[Math.floor(Math.random() * 3)])
        }
    })

    c.addEventListener('mouseleave', e => {
        e.target.classList.toggle('looking')
    })

    c.addEventListener('mouseenter', e => {
        e.target.classList.toggle('looking')
})
})




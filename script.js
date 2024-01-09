//create the grid
const grid = document.querySelector('#grid');
const gridSize = document.querySelector('#gridSize')

function generateGrid(count) {
    for (let i = 0; i < count; i++){
        const blank = document.createElement('div');
        blank.setAttribute('class', 'blank')
    
        for(let j = 0; j < count; j++){
            const horBlank = document.createElement('div')
            horBlank.setAttribute('class', 'horizontal')
            
        blank.appendChild(horBlank)
        }
    
        grid.appendChild(blank);
    
        console.log(i)
        }
    
    }
    

let count = 16
generateGrid(count)



let countGrid
gridSize.addEventListener('click', () => {
    count = prompt('How many squares?')
    grid.innerHTML = ''
    generateGrid(count)
})
//count = countGrid
console.log('the grid count is: ' + count)


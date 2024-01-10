//create the grid
const grid = document.querySelector('#grid');
const gridSize = document.querySelector('#gridSize')

function generateGrid(count) {
    console.log('the grid count is: ' + count + ' x ' + count)


    for (let i = 0; i < count; i++){
        const blank = document.createElement('div');
        blank.setAttribute('class', 'blank')
    
        for(let j = 0; j < count; j++){
            const horBlank = document.createElement('div')
            horBlank.setAttribute('class', 'horizontal')
            
        blank.appendChild(horBlank)
        }
    
        grid.appendChild(blank);
    
        //console.log(i)
        }
    
    }
    

let count = 8
generateGrid(count)


let countGrid


gridSize.addEventListener('click', () => {
    count = prompt('How many squares?')
    grid.innerHTML = ''

    if (count > 100){
        alert('Im sorry, grid size may not exceed 100. \nReturning to default of 16')
        count = 16
    }

    generateGrid(count)
})


const boxes = document.querySelectorAll('.horizontal')
console.log('box count is: ' + boxes.length)
console.log(boxes)

for (let e = 0; (e) < boxes.length; e ++){

    let rand = Math.floor(Math.random()*256)
    let rand2 = Math.floor(Math.random()*256)
    let rand3 = Math.floor(Math.random()*256)


    boxes[e].style['background-color'] = "rgb(" + rand + "," + rand2  + "," + rand3 + ")"
    boxes[e].textContent = 'RGB: ' + rand + "," + rand2 + "," + rand3 + ")"


    /*console.log(rand)
    console.log(rand2)
    console.log(rand3)
    console.log(boxes[e])  
*/
}




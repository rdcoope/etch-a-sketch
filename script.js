//create the grid
const grid = document.querySelector('#grid');
const gridSize = document.querySelector('#gridSize')
const random = document.querySelector('#randomize')
const erase = document.querySelector('#erase')


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
        click()
       // randomize()
    }
    

let count = 16
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


function randomize(){
    const boxes = document.querySelectorAll('.horizontal')
    console.log('box count is: ' + boxes.length)
    //console.log(boxes)


    for (let e = 0; (e) < boxes.length; e ++){

        let rand = Math.floor(Math.random() * 256)
        let rand2 = Math.floor(Math.random() * 256)
        let rand3 = Math.floor(Math.random() * 256)

        boxes[e].addEventListener('click', () => {
        boxes[e].style['background-color'] = "rgb(" + rand + "," + rand2 + "," + rand3 + ")"
        //boxes[e].textContent = 'RGB: ' + rand + "," + rand2 + "," + rand3 + ")"
        })

    //    console.log(rand)
    //    console.log(rand2)
    //    console.log(rand3)
    //    console.log(boxes[e])  
    
    }
}
function click(color) {
    const box = document.querySelectorAll('.horizontal')
    //console.log(box)
    for (let i = 0; i < box.length; i++){
        box[i].addEventListener('click', () => {
            console.log(color)
            box[i].removeAttribute('style')
            box[i].setAttribute('class', 'clicked horizontal')
            //box[i].textContent = 'Clicked'
        })
    }
}
//click()

random.addEventListener('click', randomize())
erase.addEventListener('click', () => {
    
})


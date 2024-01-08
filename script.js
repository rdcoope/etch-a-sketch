//create the grid
const count = 100

const grid = document.querySelector('#grid');


for (let i = 0; i < count; i++){
    const blank = document.createElement('div');
    blank.setAttribute('class', 'blank')

    for(let j = 1; j < count; j++){
        const horBlank = document.createElement('div')
        horBlank.setAttribute('class', 'horizontal')
        
    blank.appendChild(horBlank)
    }

    grid.appendChild(blank);
    console.log(i)

}

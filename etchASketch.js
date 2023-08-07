function random(number) {
    return Math.floor(Math.random() * (number + 1))
}
function onHover(item) {
    item.addEventListener('mouseover', (event) => {
        let k = Number(event.target.getAttribute('opacity'))+1
        if (Number(event.target.getAttribute('opacity')) < 10) {
            event.target.setAttribute('opacity', k);
        };
        const randomColor = `rgba(${random(255)}, ${random(255)}, ${random(255)}, ${Number(event.target.getAttribute('opacity'))/10})`;
        event.target.style.backgroundColor=randomColor
    });
}

function createGrid(squaresAcross=4){

    for (let i=0; i<squaresAcross * squaresAcross; i++) {
        const gridElement=document.createElement('div');
        gridElement.classList.add('gridElement');
        gridElement.style.width= (800 / squaresAcross).toString() + 'px'
        gridElement.style.height= (800 / squaresAcross).toString() + 'px'
        gridElement.setAttribute('opacity', 0)
        grid.appendChild(gridElement);
    };

    document.querySelectorAll('.gridElement').forEach(item =>onHover(item));
}

const container=document.querySelector('#container');
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

const button = document.querySelector('button');
createGrid()

button.addEventListener('click', (event) => {
    while(grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
    let squares= prompt("Please enter the number of squares across: ");
    if (squares > 100) {
        squares= prompt("Please enter a number less than 100: ");
    }
    createGrid(squares);

});
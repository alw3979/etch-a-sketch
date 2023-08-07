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


const container=document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

for (let i=0; i<16; i++) {
    const gridElement=document.createElement('div');
    gridElement.classList.add('gridElement');
    gridElement.setAttribute('opacity', 0)
    grid.appendChild(gridElement);
};

document.querySelectorAll('.gridElement').forEach(item =>onHover(item));
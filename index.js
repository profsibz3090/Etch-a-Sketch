const button = document.createElement('button');
button.innerText = 'add grids'
button.addEventListener('click', function (){
    userInput();
});

document.querySelector('body').appendChild(button);

document.querySelector('body').setAttribute('style', 'padding:0; margin:0; box-sizing: border-box; width:100vw')
const flexContainer = document.createElement('div');
flexContainer.setAttribute('style', 'display:flex;');
   
function createColumn() {
    const columnChildren = document.createElement('div');
    columnChildren.setAttribute('style', 'diplay:flex; flex-direction: column');
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.setAttribute('style', 'width:76px; height:80px; background-color:red; flex: auto; margin: 4px;');
        // div.addEventListener('mouseenter', (event) => {
        //     div.style.cssText = 'background-color:green';
        // });
        // div.addEventListener('mouseleave', (event) => {
        //     div.style.cssText = 'background-color:null';
        // });

        div.addEventListener('mouseenter', (event) => {
            // prompt('tapinda here')
            div.classList.add('on-hover');
            div.style.backgroundColor = "green";
        });
        div.addEventListener('mouseleave', (event) => {
            // prompt('tabuda here')
            div.classList.remove('on-hover');
            div.style.backgroundColor = "red";
        });
        columnChildren.appendChild(div);
    }
    return columnChildren;
}

function addGrid() {
    flexContainer.appendChild(createColumn());
    document.querySelector('.items').appendChild(flexContainer);
}

// for (let i = 0; i < 16; i++) {
//     addGrid();
// }
function runX(number) {
    for (let i = 0; i < number; i++) {
        addGrid();
     }
}

function userInput() {
    let number = 0;
    const children = document.querySelector('.items');
    while(children.firstChild) {
        children.removeChild(children.firstChild);
    }
   
    console.log(number)
    number = Number(prompt('the number of squares per side for the new grid'));
    console.log(number)
    number <=64 && runX(number);
}
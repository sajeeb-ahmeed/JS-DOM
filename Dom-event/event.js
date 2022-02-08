const h1 = document.getElementById('heading');
h1.style.textAlign = 'center'
h1.style.color = 'coral'
h1.style.cursor = 'pointer'
h1.style.padding = '20px'
h1.style.backgroundColor = '#000'
h1.style.color = ' #fff'
const button = document.getElementById('button')
button.style.padding = ' 7px 10px'
button.style.border = '5px'
button.style.backgroundColor = 'green'
button.style.color = 'black'
button.style.textAlign = 'center'
button.style.display = 'block'
button.style.cursor = 'pointer'

const red = document.getElementById('getRedBg');
red.onclick = makeRed;

function makeRed() {
    document.body.style.backgroundColor = 'red'
}
// annonimous function 
const yellow = document.getElementById('getYellowBg');

yellow.onclick = function () {
    document.body.style.backgroundColor = 'yellow'
}
// addEventListerner
const grren = document.getElementById('getGreenBg');
grren.addEventListener('click', getGreen);

function getGreen() {
    document.body.style.backgroundColor = 'green'
}
// add event lisener shortcut
document.getElementById('getBlueBg').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue'
})

function addText() {
    const text = document.getElementById('Even-handdle');
    text.innerText = 'changes from javascripts '
}

//add event on a peraghraphs

const peraghraphs = document.getElementById('direct-event').addEventListener('click', function () {

    const p = document.getElementById('Even-handdle');
    p.innerText = 'Hello form JS '
})

//input update 
document.getElementById('updatebtn').addEventListener('click', function () {
    const inputFiled = document.getElementById('getInput');

    const p = document.getElementById('Even-handdle');
    p.innerText = inputFiled.value;
    inputFiled.value = ''
})
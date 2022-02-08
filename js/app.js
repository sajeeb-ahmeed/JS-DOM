const getText = document.getElementsByTagName('p');
for (const text of getText) {
    console.log(text);
}

// explore by id 
const tittle_one = document.getElementById('tittle-one');
tittle_one.style.textAlign = 'center';
tittle_one.style.color = 'red';
tittle_one.style.cursor = 'pointer';
tittle_one.style.fontSize = '30px';
tittle_one.style.fontFamily = '30px';
const three = document.getElementById('tittle-3');
three.innerText = 'i can do magic by use js '
three.style.textAlign = 'center '
three.style.fontSize = '40px '
three.style.fontWeight = '700 '
three.style.textTransform = 'uppercase'
three.style.backgroundColor = 'coral'
three.style.padding = '30px'
three.style.color = '#fff'

// explore by class name 

const sections = document.getElementsByClassName('section');
for (let section of sections) {
    section.style.border = '3px solid orange'
    section.style.borderRadius = '10px'
    section.style.padding = '10px'
    section.style.margin = '10px'
}

function colortest() {
    document.body.style.backgroundColor = 'black'
    document.body.style.Color = '#fff'
}
const container = document.getElementById('container');
let title = document.createElement('h2');
title.setAttribute('class', 'title')
title.innerText = 'События';

let coordsPage = document.createElement('div');
coordsPage.setAttribute('class', 'coords-page')
coordsPage.innerText = 'Координаты относительно страницы: ';
let x2 = document.createElement('span');
x2.setAttribute('class', 'x2')
x2.innerText = 'x';
let y2 = document.createElement('span');
y2.setAttribute('class', 'y2')
y2.innerText = 'y';

let block = document.createElement('div');
block.setAttribute('class', 'block');


let coordsBlock = document.createElement('div');
coordsBlock.setAttribute('class', 'coords-block')
coordsBlock.innerText = 'Координаты внутри блока: ';
let x = document.createElement('span');
x.setAttribute('class', 'x')
x.innerText = 'x';
let y = document.createElement('span');
y.setAttribute('class', 'y')
y.innerText = 'y';

container.appendChild(title);
container.appendChild(coordsPage);
container.appendChild(block);
container.appendChild(coordsBlock);

coordsPage.appendChild(x2)
coordsPage.appendChild(y2)

coordsBlock.appendChild(x)
coordsBlock.appendChild(y)


document.querySelector(".block").onmousemove = function (event) {
    event = event || window.event;
    console.log(event);
    document.querySelector(".x").innerHTML = event.offsetX + ", ";
    document.querySelector(".y").innerHTML = event.offsetY;
};

document.querySelector(".page").onmousemove = function (event) {
    event = event || window.event;
    console.log(event);
    document.querySelector(".x2").innerHTML = event.offsetX + ", ";
    document.querySelector(".y2").innerHTML = event.offsetY;
};

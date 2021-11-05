let planets = document.createElement('div')
planets.setAttribute('id', 'planets')
document.body.prepend(planets);

let button = document.createElement('button')
button.setAttribute('id', 'button')
button.innerText = 'Get data';
document.body.prepend(button);

button.addEventListener('click', e => {
    fetch('https://trevadim.github.io/vue/data/data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.planets)
            getDetails(data)
        })
        .catch(error => console.log(error))
})


function getDetails(data) {
    let planetsData = data.planets;

    for (let value in planetsData) {
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        let title = document.createElement('h1')
        title.setAttribute('class', 'title')
        title.innerText = planetsData[value].title
        let divImg = document.createElement('div');
        divImg.setAttribute('class', 'picture');
        let url = document.createElement('img')
        url.setAttribute('class', 'img')
        url.src = planetsData[value].url
        let info = document.createElement('ul')
        info.setAttribute('class', 'info')

        let textInfo = document.createElement('div')
        textInfo.setAttribute('class', 'textInfo');

        planetsData[value].info.map(el => {
            let infoEl = document.createElement('li');
            infoEl.setAttribute("class", 'infoEl');
            infoEl.innerText = el;
            info.appendChild(infoEl);
        })
        divImg.appendChild(url)
        card.appendChild(divImg)
        card.appendChild(title)
        card.appendChild(textInfo)

        textInfo.appendChild(title)
        textInfo.appendChild(info)
        button.style.display = 'none'
        planets.appendChild(card)
    }
}




function implementDucks(duck){
    let file = document.createElement('li')
    file.className = 'file'
    file.innerHTML = `
    <img src="${duck.imageURL}">
    <div class="content">
        <h4>${duck.bandNumber}</h4>
        <p>
            <span class="sighting">${duck.sightings}</span>
        </p>
        <p>${duck.description}</p>
    `
    document.querySelector('#banded-list').appendChild(file)
}

function initialization(){
    ducksBanded.forEach(duck => implementDucks(duck))
}
initialization()
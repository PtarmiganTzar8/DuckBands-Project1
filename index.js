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
    </div>
    <div class="buttons">
        <button> Additional Sighting </button>
        <button> Unfortunate End </button>
    </div>
    `
    document.querySelector('#banded-list').appendChild(file)
}

function findBandData(){
    fetch('http://localhost:3000/ducksBanded')
    .then(res => res.json())
    .then(ducksBanded => ducksBanded.forEach(duck => implementDucks(duck)))
}

function initialization(){
    // ducksBanded.forEach(duck => implementDucks(duck))
    findBandData()
}
initialization()
document.querySelector('#newly-banded').addEventListener('submit', submitBand)

function submitBand(e){
    e.preventDefault()
    console.log(e.target.band.value)
    let duckAdd = {
        band:e.target.band.value,
        subspecies:e.target.sub_species.value,
        imageUrl:e.target.image_url.value,
        description:e.target.description.value,
        sightings: 0
    }
    implementDucks(duckAdd)
    newBand(duckAdd)
}


//DOM Manipulation function, adding db.json data to the SPA  
function implementDucks(duck){
    let filed = document.createElement('li')
    filed.className = 'filed'
    filed.innerHTML = `
    <img src="${duck.imageUrl}">
    <div class="content">
        <h4>Band Number: ${duck.band}</h4>
        <p>
            <span class="sighting">Sightings: ${duck.sightings}</span>
        </p>
        <p>Notes: ${duck.description}</p>
    </div>
    <div class="buttons">
        <button> Additional Sighting </button>
        <button> Unfortunate End </button>
    </div>
    `
    document.querySelector('#banded-list').appendChild(filed)
    console.log("duck", duck)
}

//Get request to access the the db.json server, and run an iteration on the object
function findBandData(){
    fetch('http://localhost:3000/ducksBanded')
    .then(resp => resp.json())
    .then(ducksBanded => ducksBanded.forEach(duck => implementDucks(duck)))
    console.log("test")
}

function newBand(duckAdd){
    fetch('http://localhost:3000/ducksBanded',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(duckAdd)
    })
    .then(res => res.json())
}

function initialization(){
    // ducksBanded.forEach(duck => implementDucks(duck))
    findBandData()
    console.log("fun")
}
initialization()
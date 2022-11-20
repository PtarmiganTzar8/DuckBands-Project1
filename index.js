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
        <button id='visual'> Additional Sighting </button>
        <button id='ending'> Unfortunate End </button>
    </div>
    `
filed.querySelector('#visual').addEventListener('click', () => {
    duck.sightings++
    filed.querySelector('span').textContent = "Sightings: " + duck.sightings
    patchingDucks(duck)
})

filed.querySelector('#ending').addEventListener('click', () => {
    filed.remove()
    duckPerish(duck.id)
})

    document.querySelector('#banded-list').appendChild(filed)
}

//Get request to access the the db.json server, and run an iteration on the object
function findBandData(){
    fetch('http://localhost:3000/ducksBanded')
    .then(resp => resp.json())
    .then(ducksBanded => ducksBanded.forEach(duck => implementDucks(duck)))
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

function patchingDucks(ducksBanded){
    fetch(`http://localhost:3000/ducksBanded/${ducksBanded.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ducksBanded)
    })
    .then(resp => resp.json())
}

function duckPerish(id){
    fetch(`http://localhost:3000/ducksBanded/${id}`,{
        method:'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(res => res.json())
}

function initialization(){
    // ducksBanded.forEach(duck => implementDucks(duck))
    findBandData()
}
initialization()
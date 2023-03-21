const React = require('react')
const Def = require('../default.jsx')

function index(data) {
    let placesFormatted = data.places.map((place, index) => {
        const cuisines = place.cuisines

        return (
            <div key={index} className="col-sm-6 p-5">
                <h2>{place.name}</h2>
                <p>{cuisines.map((cuisine) => {
                    return cuisine + " * "
                })}
                </p>
                <img className='img-fluid text-center rounded' src={place.pic} alt={place.name} />
                <p>Located in {place.city}, {place.state}</p>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <a href='/places/new'><button>Create New Place</button></a>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index
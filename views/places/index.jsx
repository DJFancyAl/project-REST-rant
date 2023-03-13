const React = require('react')
const Def = require('../default.jsx')

function index(data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div key={index}>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} />
                <p><a href={"/places/" + index}>Read more...</a></p>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>Places Index Page</h1>
                <a href='/places/new'><button>Create New Place</button></a>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index
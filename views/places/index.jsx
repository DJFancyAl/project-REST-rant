const React = require('react')
const Def = require('../layouts/default.jsx')

function index(data) {
    let placesFormatted = data.places.map((place, index) => {
        const cuisines = place.cuisines

        return (
            <div key={index} className="col-sm-6 p-5">
                <a href={`/places/${index}`}><h2>{place.name}</h2></a>
                <p>
                {cuisines.map((cuisine, index) => {
                    return(
                        <span key={index} className="badge rounded-pill p-2 mx-1 pill">{cuisine}</span> 
                    )
                })}
                </p>
                <img className='img-fluid text-center w-100' src={place.pic} alt={place.name} />
                <h5 className='mt-2'>Located in {place.city}, {place.state}</h5>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <div className='position-relative'>
                    <h1>Places to Rant or Rave About</h1>
                    <a className='position-absolute create-button' href='/places/new'><button className='btn btn-warning'>Create New Place</button></a>
                </div>
                <div className='container'>
                    <div className='row'>
                        {placesFormatted}
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = index
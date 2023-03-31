const React = require('react')
const Def = require('../layouts/default')

function show({place}){
    return (
        <Def>
            <main className='container'>
                <h1 className='shadow-sm'>{place.name}</h1>
                <div className='flex row align-items-stretch'>
                    <div className='col-sm-12 col-md-6'>
                        <img className='img-fluid shadow' src={place.pic} alt={place.name} />
                    </div>
                    <div className='col-sm-12 col-md-6 align-self-center text-center py-4'>
                        <h2>Rating</h2>
                        <p>Not yet rated...</p>
                        <h2 className='mt-5'>Description</h2>
                        <h5>Located in {place.city}, {place.state}</h5>

                        <p> 
                        {place.cuisines.map((cuisine, index) => {
                            return(
                                <span key={index} className="badge rounded-pill p-2 mx-1 pill">{cuisine}</span> 
                            )
                        })}
                        </p>

                        <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form>

                        <a href={`/places/${place.id}/edit`}><button className='btn btn-warning inline-block mt-3'>Edit Place</button></a>
                    </div>
                </div>
                <div className='col-6 m-auto mt-5 text-center'>
                    <h2>Comments</h2>
                    <p>There's not any comments yet...</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = show

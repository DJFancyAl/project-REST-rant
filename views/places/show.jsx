const React = require('react')
const Def = require('../layouts/default')

function show({place, id}){
    return (
        <Def>
            <main className='container'>
                <h1 className='shadow-sm'>{place.name}</h1>
                <div className='flex row align-items-stretch'>
                    <div className='col-6'>
                        <img className='img-fluid shadow' src={place.pic} alt={place.name} />
                    </div>
                    <div className='col-6 align-self-center text-center'>
                        <h2>Rating</h2>
                        <p>Not yet rated...</p>
                        <h2 className='mt-5'>Description</h2>
                        <h5>Located in {place.city}, {place.state}</h5>

                        <p>{place.cuisines.map((cuisine) => {
                            return cuisine + " * "
                        })}
                        </p>
                        <a href={"/places/" + id + "/edit"}><button>Edit Place</button></a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show
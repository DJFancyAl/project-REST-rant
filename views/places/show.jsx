const React = require('react')
const Def = require('../layouts/default')

function show({place}){
    let comments = (<h3 className='inactive'>No comments yet!</h3>)

    if (place.comments.length) {
        comments = place.comments.map(c => {
          return (
            <div className="comment border-5 mb-3 pb-2" key={c.id}>
              <h3 className="rant p-2 mb-3">{c.rant ? 'Rant! 🤬' : 'Rave! 😁'}</h3>
              <h5>{c.content}</h5>
              <h4>
                <stong>~ {c.author}</stong>
              </h4>
              <h5 className='rant p-3 rounded-pill d-inline-block'>Rating: {c.stars}</h5>
            </div>
          )
        })
      }

    return (
        <Def>
            <main className='container'>
                <h1 className='shadow-sm'>{place.name}</h1>
                <div className='flex row align-items-stretch'>
                    <div className='col-sm-12 col-md-6'>
                        <img className='img-fluid shadow mb-3' src={place.pic} alt={place.name} />
                        <h3>Located in {place.city}, {place.state}</h3>
                    </div>
                    <div className='col-sm-12 col-md-6 align-self-center text-center py-4'>
                        <h2>Rating</h2>
                        <p>Not yet rated...</p>
                        <h2 className='mt-5'>Description</h2>
                        <h3 className='mb-3 px-5'>{place.showEstablished()}</h3>

                        <p className='mb-5'> 
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
                    <h2 className='mb-3'>Comments</h2>
                    {comments}
                </div>
            </main>
        </Def>
    )
}

module.exports = show

const React = require('react')
const Def = require('../layouts/default')

function show({place, id}){
    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <p>{place.city}, {place.state}</p>
                <p>{place.cuisines}</p>
                <p><a href={"/places/" + id + "/edit"}>Edit</a></p>
            </main>
        </Def>
    )
}

module.exports = show
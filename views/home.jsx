const React = require('react')
const Def = require('./default.jsx')

function home() {
    return (
        <Def>
            <main>
                <h1>Home Page</h1>
                <p><a href='/places'>Restaurants</a></p>
            </main>
        </Def>
    )
}

module.exports = home
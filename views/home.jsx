const React = require('react')
const Def = require('./default.jsx')

function home() {
    return (
        <Def>
            <main>
                <h1>Home Page</h1>
                <div>
                    <img src="/images/sushi.jpg" alt="Sushi Restaurant" width="900" />
                    <div>Photo by <a href="https://unsplash.com/@mahmoud_fawzy100?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mahmoud Fawzy</a> on <a href="https://unsplash.com/s/photos/sushi?orientation=landscape&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
const React = require('react')

function heading(){
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center bg-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">REST-rant</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/places">Places</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/places/new">Rant</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">Help</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

module.exports = heading
const React = require('react')
const Def = require('./layouts/default.jsx')

function error404 () {
    return (
      <Def>
          <main className="container">
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/page_not_found.jpg" alt="Warning Sign" width="900" />
                <div>Photo by <a href="https://unsplash.com/pt-br/@joshuas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Sukoff</a> on <a href="https://unsplash.com/s/photos/oh-no?orientation=landscape&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
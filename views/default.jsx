const React = require('react')
const Heading = require('./heading')
const Footer = require('./footer')

function Def (html) {
  return (
      <html>
          <head>
              <title>Title</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
              <link rel="stylesheet" href="/css/style.css" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
              <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
          </head>
          <body>
            <Heading />
            {html.children}
            <Footer />
          </body>
      </html>
  )
}


module.exports = Def
const React = require('react')
const Heading = require('../heading')
const Footer = require('../footer')

function Def (html) {
  return (
      <html>
          <head>
              <title>Title</title>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossOrigin="anonymous" />
              <link rel="stylesheet" href="/css/style.css" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
              <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
          </head>
          <body>
            <Heading />
            {html.children}
            <Footer />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossOrigin="anonymous"></script>
            <script src="https://kit.fontawesome.com/abfb523ce8.js" crossOrigin="anonymous"></script>
          </body>
      </html>
  )
}


module.exports = Def
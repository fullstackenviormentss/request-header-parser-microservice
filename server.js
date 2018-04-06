// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

app.get("/whoami", (request, response) => {
  let ipaddress = request.headers['x-forwarded-for'].split(',')[0];
  let softwareString = request.headers['user-agent'];
  
  let software = softwareString.substring(softwareString.indexOf('(') + 1, softwareString.indexOf(')'));
  let language = request.headers['accept-language'].split(',')[0];
  
  response.send({ipaddress, software, language});
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})

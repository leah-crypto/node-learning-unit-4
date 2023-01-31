

// fs.writeFileSync('hello.txt', 'Hello from Node.js')

const http = require('http')



const routes = require('./routes')
// function rqListener(req, res){

// }

// http.createServer(rqListener)

// http.createServer(function(req, res) {

// })

console.log(routes.someText)

const server = http.createServer(routes.handler)
    // const url = req.url;
    // const method = req.method;



server.listen(5000)
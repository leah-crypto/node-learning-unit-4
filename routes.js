const fs = require('fs');


const requestHandler = (req, res) => {

const url = req.url
const method = req.method

    if(url === '/'){
        // res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter message!</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="sumbit">Send</button></input></form></body>')
        res.write('</html>')
       return res.end()
        
    }
    
        // console.log(req.url, req.method, req.headers)
        // process.exit();
    
        if(url === '/message' && method === "POST"){
            const body = [];
            req.on('data', (chunk) => {
                console.log(chuck)
                body.push(chuck)
            })
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString()
                // console.log(parsedBody)
                const message = parsedBody.split('=')[1]
                fs.writeFile('message.txt', message, (err) => {
            // res.writeHead(302, {})
            res.statusCode = 302;
            res.setHeader('Location', '/')
            return res.end()
            })
                })
         
            
           
        }
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>My 500th Page!</title></head>')
        res.write('<body><h1>Hello from my Node.js server!</h1></body>')
        res.write('</html>')
        res.end()
        res.write()
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some Txt'
// }

// module.exports.handler = requestHandler;

// module.exports.someText = 'Some hard coded txt'

exports.handler = requestHandler;

exports.someText = 'Some hard coded txt'
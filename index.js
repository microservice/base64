const http = require('http')

const contentType = { false: 'binary', true: 'base64' }
const b64 = (content = '', decode = false) => Buffer.from(content, contentType[decode]).toString(contentType[!decode])

http.createServer((req, res) => {
  let body = ''
  req.on('data', chunk => { body += chunk.toString() })
  req.on('end', () => {
    if (!['/encode', '/decode'].includes(req.url)) {
      res.writeHead(404) // the request is not valid
      res.end()
    }
    let content // content to encode/decode
    try {
      content = JSON.parse(body).content.toString()
    } catch (ignored) {
      res.writeHead(400) // the request is malformed
      res.end()
    }
    // The request is valid, we process the data
    let ret = b64(content, (req.url === '/decode')) // b64(content:string, decode:bool):string
    res.writeHead(200, { 'Content-Length': Buffer.byteLength(ret), 'Content-Type': 'text/plain' })
    res.end(ret)
  })
}).listen(process.env.PUBSUB_PORT || 5000)

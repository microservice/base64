const http = require('http')

const contentType = { false: 'binary', true: 'base64' }
const b64 = (content = '', decode = false) => Buffer.from(content, contentType[decode]).toString(contentType[!decode])

http.createServer((req, res) => {
  let body = ''
  req.on('data', chunk => { body += chunk.toString() })
  req.on('end', () => {
    let content
    try {
      content = JSON.parse(body).content.toString()
    } catch (ignored) {}
    let route = ['/encode', '/decode'].includes(req.url)
    let ret = route && content ? b64(content, req.url === '/decode') : JSON.stringify({ message: (content ? 'not found' : 'malformed content') })
    res.writeHead(route ? 200 : content ? 404 : 400, { 'Content-Length': Buffer.byteLength(ret), 'Content-Type': route ? 'text/plain' : 'application/json' })
    res.end(ret)
  })
}).listen(process.env.PUBSUB_PORT || 5000)

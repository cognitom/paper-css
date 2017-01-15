import {createServer} from 'http'
import {Server} from 'node-static'

export default function startServer (documentRoot, port) {
  const staticServer = new Server(documentRoot)
  const server = createServer((req, res) => {
    req.addListener('end', () => staticServer.serve(req, res)).resume()
  })
  server.listen(port)
  return server
}

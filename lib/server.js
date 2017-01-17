import connect from 'connect'
import injectLivereloadTag from 'connect-livereload'
import livereload from 'livereload'
import serveStatic from 'serve-static'
import findPort from './find-port'

export default async function (documentRoot, port) {
  const app = connect()
  app.use(serveStatic(documentRoot))
  const server = app.listen(port)
  return server
}

export async function startPreviewServer (documentRoot, port) {
  const app = connect()
  const subPort = await findPort(port + 1)
  app.use(injectLivereloadTag({port: subPort}))
  app.use(serveStatic(documentRoot))
  const server = app.listen(port)
  const livereloadServer = livereload.createServer({port: subPort})
  livereloadServer.watch(documentRoot)
  return server
}

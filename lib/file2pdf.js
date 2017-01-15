import startServer from './server'
import findPort from './find-port'
import urlToPdf from './url2pdf'

export default async function (file, opts) {
  const port = await findPort()
  const url = `http://localhost:${port}/${file}`
  const cwd = process.cwd()
  const server = startServer(cwd, port)

  await urlToPdf(url, opts)

  server.close()
}

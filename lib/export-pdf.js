import startServer from './server'
import findPort from './find-port'
import urlToPdf from './url2pdf'

export default async function (file, opts) {
  try {
    const port = await findPort()
    const url = `http://localhost:${port}/${file}`
    const cwd = process.cwd()
    const server = await startServer(cwd, port)

    await urlToPdf(url, opts)

    server.close()
  } catch (e) {
    console.error(`Couldn't generate PDF from the file: ${file}`)
  }
}

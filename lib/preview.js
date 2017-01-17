import opn from 'opn'
import {startPreviewServer} from './server'
import findPort from './find-port'

export default async function (file, opts) {
  try {
    const port = await findPort()
    const url = `http://localhost:${port}/${file}`
    const cwd = process.cwd()
    await startPreviewServer(cwd, port)
    console.log(`Your preview server has been started:\n  ${url}`)
    opn(url)
    console.log('  To stop the server, hit Ctrl + C')
  } catch (e) {
    console.error(`Couldn't preview the file: ${file}`)
  }
}

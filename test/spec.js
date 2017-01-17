/* eslint-env mocha */
import {equal, ok} from 'assert'
import {dirname} from 'path'
import request from 'request-promise-native'
import {readFile} from 'fs-promise'
import findPort from '../lib/find-port'
import startServer from '../lib/server'

const root = dirname(__dirname)

describe('paper-cli', function () {
  it('finds an available port', async function () {
    const port = await findPort()
    ok(Number.isInteger(port))
  })

  it('starts a static server', async function () {
    const port = await findPort()
    const server = await startServer(root, port)
    const file = 'test/fixture/white.html'
    const url = `http://localhost:${port}/${file}`
    const actual = await request(url)
    const expected = await readFile(file, 'utf8')
    equal(actual, expected)
    server.close()
  })
})

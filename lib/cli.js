import {join} from 'path'
import {readFile} from 'fs-promise'
import meow from 'meow'
import fileToPdf from './file2pdf'
import urlToPdf from './url2pdf'

async function load () {
  const helpFile = join(__dirname, '../', 'bin', 'help.txt')
  const helpText = await readFile(helpFile, 'utf8')
  const cli = meow(helpText, {
    alias: {
      s: 'size',
      o: 'output',
      l: 'landscape',
      b: 'background'
    },
    string: ['size', 'wait', 'output'],
    boolean: ['landscape', 'background']
  })
  const input = cli.input[0]
  const flags = cli.flags
  const opts = {}
  if (!input) {
    console.log('No file or url specified')
    return
  }
  if (flags.output) opts.output = flags.output
  if (flags.size) opts.size = flags.size
  if (flags.wait) opts.wait = flags.wait
  if (flags.landscape) opts.landscape = true
  if (flags.background) opts.background = true

  if (/^http/.test(input)) await urlToPdf(input, opts)
  else await fileToPdf(input, opts)
}

load()

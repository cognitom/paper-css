import {join} from 'path'
import {readFile} from 'fs-promise'
import meow from 'meow'
import exportPdf from './export-pdf'
import createNew from './create-new'
import preview from './preview'

async function paper () {
  const helpFile = join(__dirname, '../', 'bin', 'help.txt')
  const helpText = await readFile(helpFile, 'utf8')
  const cli = meow(helpText, {
    alias: {
      s: 'size',
      o: 'output',
      l: 'landscape',
      b: 'background'
    },
    string: ['size', 'wait', 'output', 'padding'],
    boolean: ['landscape', 'background']
  })

  const {subcommand, file} = getSubcommandAndFile(cli.input)
  if (!file) {
    console.log('No file specified')
    return
  }

  const flags = cli.flags
  const opts = {}
  if (flags.output) opts.output = flags.output
  if (flags.size) opts.size = flags.size
  if (flags.padding) opts.padding = flags.padding
  if (flags.wait) opts.wait = flags.wait
  if (flags.landscape) opts.landscape = true
  if (flags.background) opts.printBackground = true

  switch (subcommand) {
    case 'export': return await exportPdf(file, opts)
    case 'create': return await createNew(file, opts)
    case 'preview': return await preview(file)
  }
}

export function getSubcommandAndFile (input) {
  let subcommand = input[0]
  let file = input[1]
  switch (subcommand) {
    case 'create': case 'export': case 'preview': break
    case 'c': subcommand = 'create'; break
    case 'e': subcommand = 'export'; break
    case 'p': subcommand = 'preview'; break
    default:
      file = file || subcommand
      subcommand = 'preview'
  }
  return {subcommand, file}
}

paper()

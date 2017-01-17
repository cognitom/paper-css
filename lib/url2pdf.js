import Nightmare from 'nightmare'

const noMargin = 1
const defaultOpts = {
  wait: 1000,
  printBackground: false,
  printSelectionOnly: false,
  marginsType: noMargin
}

export default function (url, userOpts) {
  const opts = Object.assign({}, defaultOpts, userOpts || {})
  const output = opts.output || getOutputFileName(url)
  const wait = opts.wait
  delete opts.output
  delete opts.wait

  return Nightmare()
    .goto(url)
    .wait(wait)
    .pdf(output, opts)
    .end()
}

function getOutputFileName (url) {
  const lastPart = url.split('/').pop()
  const fileName = lastPart.replace(/\..+?$/, '')
  return `${fileName}.pdf`
}

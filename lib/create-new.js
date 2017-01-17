import {writeFile} from 'fs-promise'
import htmlTemplate from './html-template'

/** the first value of each is its default */
const variation = {
  size: ['A4', 'A3', 'A5'],
  landscape: [false, true],
  padding: ['10mm', '15mm', '20mm', '25mm', 'none']
}

export default async function (file, opts) {
  const size = getOption('size', opts)
  const landscape = getOption('landscape', opts)
  const padding = getOption('padding', opts)
  const html = htmlTemplate(size, landscape, padding)

  try {
    await writeFile(file, html)
  } catch (e) {
    console.error(`Couldn't create HTML file: ${file}`)
  }
}

export function getOption (name, opts) {
  const defaultValue = variation[name][0]
  const value = opts[name] || defaultValue
  if (!variation[name].includes(value)) {
    console.error(`"${value}" is unknown ${name} value. (${variation[name].join(', ')})`)
  }
  return value
}

import {getPort} from 'portfinder'

export default function (options) {
  options = options || {}
  return new Promise((resolve, reject) => {
    getPort(options, (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

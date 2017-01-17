import {getPort} from 'portfinder'

export default function (startingPortNumber) {
  const options = {}
  if (startingPortNumber) options.port = startingPortNumber
  return new Promise((resolve, reject) => {
    getPort(options, (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

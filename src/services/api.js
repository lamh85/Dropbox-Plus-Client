import { fetch } from 'whatwg-fetch'

const PATH_ROOT = 'http://localhost:3000'

export const getFolder = (path, callback) => {
  const pathEncoded = encodeURI(path)

  console.log(callback)
  fetch(`${PATH_ROOT}/folder?path=${pathEncoded}`)
    .then(response => {
      // return response.json()
      callback(response.json())
    })
    .then(json => {
      console.log(json)
    })
}
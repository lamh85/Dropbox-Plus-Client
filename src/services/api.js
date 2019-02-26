import { fetch } from 'whatwg-fetch'

const PATH_ROOT = 'http://localhost:3000'

export const getFolder = path => {
  const pathEncoded = encodeURI(path)

  fetch(`${PATH_ROOT}/folder?path=${pathEncoded}`)
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json)
    })
}
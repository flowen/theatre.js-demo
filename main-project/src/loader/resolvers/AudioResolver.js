import { AudioLoader } from 'three'

export class AudioResolver {
  constructor(renderer) {
    this.type = 'audio'
    this.renderer = renderer
    this.loader = new AudioLoader()
  }

  resolve(item) {
    return new Promise(resolve => {
      this.loader.load(
        item.url,
        audioBuffer => {
          resolve(Object.assign(item, { audioBuffer }))
        },
        xhr => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
          // xhr.loaded === xhr.total
          //   ? resolve(Object.assign(item, { audio }))
          //   : null
        },
        err => console.log(`error: ${err}`)
      )
    })
  }

  get(item) {
    return item.audioBuffer
  }
}

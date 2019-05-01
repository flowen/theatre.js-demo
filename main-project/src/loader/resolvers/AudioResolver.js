import { AudioLoader } from 'three'

export class AudioResolver {
  constructor(preloaderUI) {
    this.type = 'audio'
    this.loader = new AudioLoader()
    this.percentageUI = document.createElement('span')
    this.percentageUI.classList.add('percentage')
    preloaderUI.append(this.percentageUI)
  }

  resolve(item) {
    return new Promise(resolve => {
      this.loader.load(
        item.url,
        audioBuffer => {
          resolve(Object.assign(item, { audioBuffer }))
        },
        xhr => {
          this.percentageUI.innerHTML = `${parseInt((xhr.loaded / xhr.total) * 100)}% loaded`
          // console.log(`${parseInt((xhr.loaded / xhr.total) * 100)}% loaded`)
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

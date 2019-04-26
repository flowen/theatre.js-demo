/**
 * @param sceneTimelines - array
 */

const ENTER = 13
const BRACKETRIGHT = 221

export default class SceneController {
  constructor(sceneTimelines) {
    this.sceneTimelines = sceneTimelines
    this.currentScene = 0
    this.sceneLabel = document.querySelector('.scene--label')
    this.scenes = document.querySelectorAll('.scene')
    this.totalScenes = this.scenes.length

    window.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case ENTER:
          this.playScene()
          break

        case BRACKETRIGHT:
          this.nextScene()
        default:
          break
      }
    })

    this.toggleScenes()
  }

  updateScene() {
    this.currentScene + 1 >= this.totalScenes
      ? (this.currentScene = 0)
      : (this.currentScene += 1)
  }

  toggleScenes() {
    this.scenes.forEach(scene => scene.classList.add('hidden'))
    this.scenes[this.currentScene].classList.remove('hidden')
  }

  playScene() {
    if (typeof this.sceneTimelines[this.currentScene] === 'undefined') return

    this.sceneTimelines[this.currentScene].forEach(tl => {
      tl.play()
    })
  }

  updateLabel() {
    this.sceneLabel.innerHTML = this.currentScene + 1
  }

  nextScene() {
    this.updateScene()
    this.updateLabel()
    this.toggleScenes()
  }
}

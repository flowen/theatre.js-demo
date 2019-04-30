/**
 * @param sceneTimelines - array
 */

const ENTER = 13
const BRACKETRIGHT = 221
const BRACKETLEFT = 219

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
          break

        case BRACKETLEFT:
          this.prevScene()
          break

        default:
          break
      }
    })

    this.toggleScenes()
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
    this.sceneLabel.innerHTML = this.currentScene
  }

  nextScene() {
    this.currentScene + 1 >= this.totalScenes
      ? (this.currentScene = 0)
      : (this.currentScene += 1)

    this.updateLabel()
    this.toggleScenes()
  }

  prevScene() {
    this.currentScene - 1 < 0
      ? (this.currentScene = this.totalScenes - 1)
      : (this.currentScene -= 1)

    this.updateLabel()
    this.toggleScenes()
  }
}

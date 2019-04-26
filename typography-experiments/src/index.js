import './scss/index.scss'

import Theatre from 'theatre'
import TextAnimator from './utils/TextAnimator'
import SceneController from './utils/SceneController'
import state from './assets/data/theatre-state'

Theatre.ui.show()

const project = Theatre.getProject('Text duplication', { state })

// scene 1 - duplication
const animateLeftCol = new TextAnimator(
  Array.from(document.querySelectorAll('.duplication--left > .words')),
  project,
  'Scene 1 - left col'
)

const animateRightCol = new TextAnimator(
  //prettier-ignore
  Array.from(document.querySelectorAll('.duplication--right > .words'))
    .reverse(),
  project,
  'Scene 1 - right col'
)

// scene 2 - mask

const sceneTimelines = []
sceneTimelines.push([animateLeftCol, animateRightCol]) // scene 1

const sceneController = new SceneController(sceneTimelines)

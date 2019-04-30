import './scss/index.scss'

import SceneController from './scenes/SceneController'
import { animateLeftCol, animateRightCol } from './scenes/Scene-0'
import './scenes/Scene-4'

const sceneTimelines = []
sceneTimelines.push([animateLeftCol, animateRightCol]) // scene 0

const sceneController = new SceneController(sceneTimelines)

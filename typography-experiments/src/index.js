import './scss/index.scss'

import SceneController from './scenes/SceneController'
import { animateLeftCol, animateRightCol } from './scenes/Scene-1'

const sceneTimelines = []
sceneTimelines.push([animateLeftCol, animateRightCol]) // scene 1

const sceneController = new SceneController(sceneTimelines)

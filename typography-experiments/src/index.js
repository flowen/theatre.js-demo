import './scss/index.scss'

import SceneController from './scenes/SceneController'
import { animateLeftCol, animateRightCol } from './scenes/Scene-0'
import { scene1, staggerStories } from './scenes/Scene-1'
import './scenes/Scene-2'
import './scenes/Scene-4'

const sceneTimelines = []
sceneTimelines.push([animateLeftCol, animateRightCol]) // scene 0
sceneTimelines.push([scene1, staggerStories]) // scene 1

const sceneController = new SceneController(sceneTimelines)

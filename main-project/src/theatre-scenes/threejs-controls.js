import { project } from './theatre-project'
import { camera } from '../index'

let frequencyLimit = 100

const timelineThreeControls = project.getTimeline('Scene 3d controls')
const camera$ = timelineThreeControls.getObject('camera', camera, {
  props: {
    z: { type: 'number' },
  },
})

camera$.onValuesChange(props => (camera.position.z = props.z))

const frequencyLimit$ = timelineThreeControls.getObject('frequency limit', frequencyLimit, {
  props: {
    frequencyLimit: { type: 'number' },
  },
})

frequencyLimit$.onValuesChange(props => (frequencyLimit = props.frequencyLimit))

export { timelineThreeControls, frequencyLimit }

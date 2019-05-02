import { timeline } from './theatre-project'
import { camera } from '../index'

let frequencyLimit = 100

// const timelineThreeControls = project.getTimeline('Scene 3d controls')
const camera$ = timeline.getObject('camera', camera, {
  props: {
    z: { type: 'number' },
  },
})

camera$.onValuesChange(props => (camera.position.z = props.z))

const frequencyLimit$ = timeline.getObject('frequency limit', frequencyLimit, {
  props: {
    frequencyLimit: { type: 'number' },
  },
})

frequencyLimit$.onValuesChange(props => (frequencyLimit = props.frequencyLimit))

export { frequencyLimit }

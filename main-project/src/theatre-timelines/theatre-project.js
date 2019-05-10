import Theatre from 'theatre'
import { state } from './theatre-state'

Theatre.ui.show()

const TIMELINENAME = 'Main timeline'

const project = Theatre.getProject('Theatre demo', { state })
const timeline = project.getTimeline(TIMELINENAME)
const totalTime = state.projectState.timelineTemplates[TIMELINENAME].duration

export { project, timeline, totalTime }

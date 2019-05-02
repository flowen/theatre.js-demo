import Theatre from 'theatre'
import state from './theatre-state'

Theatre.ui.show()

const project = Theatre.getProject('Theatre demo', { state })
const timeline = project.getTimeline('Main timeline')

export { project, timeline }

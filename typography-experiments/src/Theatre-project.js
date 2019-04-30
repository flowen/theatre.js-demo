import Theatre from 'theatre'
import state from './assets/data/theatre-state'

Theatre.ui.show()

export const project = Theatre.getProject('Untold Stories', { state })

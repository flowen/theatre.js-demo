import Theatre from 'theatre'
import state from './theatre-state'

Theatre.ui.show()

export const project = Theatre.getProject('Theatre demo', { state })

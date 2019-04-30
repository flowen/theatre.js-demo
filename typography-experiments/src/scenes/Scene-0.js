/**
 * Scene 0 - duplication and stagger
 */

import { project } from '../Theatre-project'
import TextAnimator from '../utils/TextAnimator'

export const animateLeftCol = new TextAnimator(
  Array.from(document.querySelectorAll('.duplication--left > .words')),
  project,
  'Scene 0 - left col'
)

export const animateRightCol = new TextAnimator(
  Array.from(
    document.querySelectorAll('.duplication--right > .words')
  ).reverse(),
  project,
  'Scene 0 - right col'
)

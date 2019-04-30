/**
 * Scene 1 - duplication
 */

import { project } from '../Theatre-project'
import TextAnimator from '../utils/TextAnimator'

export const animateLeftCol = new TextAnimator(
  Array.from(document.querySelectorAll('.duplication--left > .words')),
  project,
  'Scene 1 - left col'
)

export const animateRightCol = new TextAnimator(
  //prettier-ignore
  Array.from(document.querySelectorAll('.duplication--right > .words'))
    .reverse(),
  project,
  'Scene 1 - right col'
)

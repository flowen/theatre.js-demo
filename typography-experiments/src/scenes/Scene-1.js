/**
 * Scene 1 - untold stories
 */

import { project } from '../Theatre-project'
import TextAnimator from '../utils/TextAnimator'

const timeline = project.getTimeline('Scene 1 - untold')

// the scene contains the objects
const scene = document.querySelector('.scene--1')

// the word untold
const untold = scene.querySelector('.untold')
const untold$ = timeline.getObject('untold', untold, {
  props: {
    skewX: { type: 'number' },
    skewY: { type: 'number' },
    y: { type: 'number' },
    opacity: { type: 'number' },
  },
})

untold$.onValuesChange(props => {
  const css = `transform: translate3d(0, ${props.y}px, 0)
                          skewX(${props.skewX}deg)
                          skewY(${props.skewY}deg);
               opacity: ${props.opacity};`

  untold$.nativeObject.style.cssText = css
})

// the words stories
const stories = scene.querySelector('.stories-wrapper')

const staggerStories = new TextAnimator(
  Array.from(stories.querySelectorAll('.word')).reverse(),
  project,
  'Scene 1 - stories',
  {
    props: {
      skewX: { type: 'number' },
      skewY: { type: 'number' },
      y: { type: 'number' },
      opacity: { type: 'number' },
    },
  }
)

export { timeline as scene1, staggerStories }

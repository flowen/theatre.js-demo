import { project } from './theatre-project'

const tlScene0 = project.getTimeline('Scene 0 timeline')
const scene0Objects = Array.from(
  document.querySelectorAll('.scene--0 .intro, .scene--0 .credits > li')
)

scene0Objects.forEach((obj, i) => {
  scene0Objects[i] = tlScene0.getObject('Scene 0 - Intro' + i, obj, {
    props: {
      y: { type: 'number' },
      opacity: { type: 'number' },
    },
  })

  scene0Objects[i].onValuesChange(props => {
    const css = `transform: translate3d(0, ${props.y}px, 0);
                 opacity: ${props.opacity};`
    scene0Objects[i].nativeObject.style.cssText = css
  })
})

export { tlScene0 }

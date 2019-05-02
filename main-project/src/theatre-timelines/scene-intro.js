import { timeline } from './theatre-project'

const scene0Objects = Array.from(
  document.querySelectorAll('.scene--intro .intro, .scene--intro .credits > li')
)

scene0Objects.forEach((obj, i) => {
  scene0Objects[i] = timeline.getObject(`Intro - ${obj.className}(${i})`, obj, {
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
import { timeline } from './theatre-project'

const sceneIntro = document.querySelector('.scene--intro')
const sceneObjects = Array.from(
  sceneIntro.querySelectorAll(`.intro, 
                               .credits > li,
                               .presents,
                               .title`)
)

sceneObjects.forEach((obj, i) => {
  sceneObjects[i] = timeline.getObject(`Intro - ${obj.dataset.objName}`, obj, {
    props: {
      y: { type: 'number' },
      opacity: { type: 'number' },
    },
  })

  sceneObjects[i].onValuesChange(props => {
    const css = `transform: translate3d(0, ${props.y}px, 0);
                 opacity: ${props.opacity};`
    sceneObjects[i].nativeObject.style.cssText = css
  })
})

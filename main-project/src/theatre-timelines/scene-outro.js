import { timeline } from './theatre-project'

const sceneOutro = document.querySelector('.scene--outro')
const sceneObjects = Array.from(
  sceneOutro.querySelectorAll(`.undiscovered, 
                               .unconnected,
                               .unfinished,
                               .credits__title,
                               .credit__sound,
                               .credit__animation,
                               .credit__theatre,
                               .credits__explanation,
                               .credits__reset`)
)

sceneObjects.forEach((obj, i) => {
  sceneObjects[i] = timeline.getObject(`Outro - ${obj.dataset.objName}`, obj, {
    props: {
      opacity: { type: 'number' },
    },
  })

  sceneObjects[i].onValuesChange(
    props => (sceneObjects[i].nativeObject.style.cssText = `opacity: ${props.opacity};`)
  )
})

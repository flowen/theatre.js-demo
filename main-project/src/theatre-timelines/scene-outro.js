import { timeline } from './theatre-project'

const sceneOutro = document.querySelector('.scene--outro')
const sceneObjects = Array.from(
  sceneOutro.querySelectorAll(`.undiscovered, 
                               .unconnected,
                               .unfinished`)
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

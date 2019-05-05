import { timeline } from './theatre-project'
import Charming from '../utils/charming'

const sceneChorus = document.querySelector('.scene--chorus')
const sceneChorusObjects = Array.from(sceneChorus.querySelectorAll(`.intro, .question`))
const CLASSPREFIX = 'word'

/**
 * We break up each sentence in the Chorus
 * We want to control opacity and scale for the complete sentence
 * then we break them up in words later and control each word
 */
sceneChorusObjects.forEach((sentence, i) => {
  sceneChorusObjects[i] = timeline.getObject(`Chorus - ${sentence.dataset.objName}`, sentence, {
    props: {
      scale: { type: 'number' },
      opacity: { type: 'number' },
    },
  })

  sceneChorusObjects[i].onValuesChange(props => {
    const css = `opacity: ${props.opacity};
                 transform: scale(${props.scale});`
    sceneChorusObjects[i].nativeObject.style.cssText = css
  })

  Charming(sentence, {
    splitRegex: ' ', // .split(' ') regex would add a space as a word. We also add a space back in with css
    classPrefix: CLASSPREFIX,
  })

  const sceneWords = Array.from(sentence.querySelectorAll(`.${CLASSPREFIX}`))

  sceneWords.forEach((obj, j) => {
    sceneWords[j] = timeline.getObject(
      `Chorus - ${sentence.dataset.objName} - ${obj.dataset.objName}`,
      obj,
      {
        props: {
          opacity: { type: 'number' },
          skewX: { type: 'number' },
          skewY: { type: 'number' },
          scaleX: { type: 'number' },
          scaleY: { type: 'number' },
        },
      }
    )

    sceneWords[j].onValuesChange(props => {
      const css = `opacity: ${props.opacity};
                   transform: skew(${props.skewX}deg, ${props.skewY}deg)
                              scale(${props.scaleX}, ${props.scaleY});`
      sceneWords[j].nativeObject.style.cssText = css
    })
  })
})

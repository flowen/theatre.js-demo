import { timeline } from './theatre-project'
import Charming from '../utils/charming'

const sceneChorus = document.querySelector('.scene--chorus')

const sceneQuestions = Array.from(sceneChorus.querySelectorAll(`.intro, .question`))
sceneQuestions.forEach((question, i) => {
  Charming(question, {
    splitRegex: ' ', // .split(' ') but we a space back in with css
    classPrefix: 'word',
  })

  const sceneWords = Array.from(question.querySelectorAll(`.word`))

  sceneWords.forEach((obj, j) => {
    sceneWords[j] = timeline.getObject(`Chorus - Q${i + 1} - ${obj.dataset.objName}`, obj, {
      props: {
        opacity: { type: 'number' },
        skewX: { type: 'number' },
        skewY: { type: 'number' },
        scaleX: { type: 'number' },
        scaleY: { type: 'number' },
        scaleZ: { type: 'number' },
      },
    })

    sceneWords[j].onValuesChange(props => {
      const css = `opacity: ${props.opacity};
                   transform: skew(${props.skewX}deg ${props.skewY}deg)
                            scale(${props.scaleX} ${props.scaleY} ${props.scaleZ})
                            rotate(${props.rotate}deg);`
      sceneWords[j].nativeObject.style.cssText = css
    })
  })
})

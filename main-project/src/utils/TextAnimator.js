export default class TextAnimator {
  constructor(elements, theatreProject, id) {
    this.theatreProject = theatreProject
    this.id = id

    this.elements = elements.map((el, i) => {
      const elTimeline = theatreProject.getTimeline(id + ' / Word', 'Word ' + i)
      const el$ = elTimeline.getObject('Element', el, {
        props: {
          skewX: { type: 'number' },
          skewY: { type: 'number' },
          y: { type: 'number' },
          opacity: { type: 'number' },
        },
      })

      const unsubscribe = el$.onValuesChange(props => {
        //prettier-ignore
        const css = `
          transform: translate3d(0, ${props.y}px, 0)
                     skewX(${props.skewX}deg)
                     skewY(${props.skewY}deg); 
          opacity: ${props.opacity};`

        el$.nativeObject.style.cssText = css
      })

      return { elTimeline, el$, unsubscribe }
    })

    this.mainTimeline = theatreProject.getTimeline(id + ' / Sentence')
    this.mainObject = this.mainTimeline.getObject('Main controls', null, {
      props: {
        progression: { type: 'number' },
        offsetPerElement: { type: 'number' },
      },
    })

    this.unsubscribeFromMainObject = this.mainObject.onValuesChange(
      newValues => {
        const { progression, offsetPerElement } = newValues

        const globalTime = this.mainTimeline.time

        this.elements.forEach((element, index) => {
          const elTimeline = element.elTimeline
          const elDuration = element.elTimeline.duration
          const elStartTime = index * offsetPerElement
          const elEndTime = elStartTime + elDuration
          //prettier-ignore
          const elCurrentTime =
            globalTime < elStartTime /* hasn't started */
              ? 0
              : globalTime > elEndTime
              ? elDuration /* ended */
              : globalTime - elStartTime /* we're somewhere during the animation */

          elTimeline.time = elCurrentTime
        })
      }
    )
  }

  play() {
    this.mainTimeline.play()
  }
}

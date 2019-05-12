import { timeline } from './theatre-project'
import { camera, particles } from '../index'
import PPmanager from '../controls/PostprocessingManager'

let frequencyLimit = 100
let particleSize = 2

const blurPass = {
  resolution: 1,
  opacity: 1,
}

const bloomPass = {
  resolution: 1,
  opacity: 1,
  distinction: 1,
}

const scanlinePass = {
  density: 1,
  opacity: 1,
}

const vignetteEffect = {
  offset: 0.16,
  darkness: 0.5,
  opacity: 1,
}

// camera theatre object
const camera$ = timeline.getObject('camera', camera, {
  props: {
    z: { type: 'number' },
  },
})

// frequencylimit theatre object
const frequencyLimit$ = timeline.getObject('frequency limit', frequencyLimit, {
  props: {
    frequencyLimit: { type: 'number' },
  },
})

// frequencylimit theatre object
const particleSize$ = timeline.getObject('particle size', particleSize, {
  props: {
    particleSize: { type: 'number' },
  },
})

// blur pass theatre object
const blurPass$ = timeline.getObject('blurPass', blurPass, {
  props: {
    resolution: { type: 'number' },
    opacity: { type: 'number' },
  },
})

// bloom pass theatre object
const bloomPass$ = timeline.getObject('bloomPass', bloomPass, {
  props: {
    resolution: { type: 'number' },
    opacity: { type: 'number' },
    distinction: { type: 'number' },
  },
})

// scanline pass theatre object
const scanlinePass$ = timeline.getObject('scanlinePass', scanlinePass, {
  props: {
    density: { type: 'number' },
    opacity: { type: 'number' },
  },
})

// vignetteEffect pass theatre object
const vignetteEffect$ = timeline.getObject('vignetteEffect', vignetteEffect, {
  props: {
    offset: { type: 'number' },
    darkness: { type: 'number' },
    opacity: { type: 'number' },
  },
})

const initTheatreProps = () => {
  camera$.onValuesChange(props => (camera.position.z = props.z))

  frequencyLimit$.onValuesChange(props => (frequencyLimit = props.frequencyLimit))
  particleSize$.onValuesChange(props => particles.changeSize(props.particleSize))

  //prettier-ignore
  blurPass$.onValuesChange(({ resolution, opacity }) => 
    PPmanager.blurControls(resolution, opacity))

  bloomPass$.onValuesChange(({ resolution, opacity, distinction }) =>
    PPmanager.bloomControls(resolution, opacity, distinction)
  )

  scanlinePass$.onValuesChange(({ density, opacity }) =>
    PPmanager.scanlineControls(density, opacity)
  )

  vignetteEffect$.onValuesChange(({ offset, darkness, opacity }) =>
    PPmanager.vignetteControls(offset, darkness, opacity)
  )
}

export { frequencyLimit, initTheatreProps }

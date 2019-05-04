import { timeline } from './theatre-project'
import { camera } from '../index'
import PPmanager from '../controls/PostprocessingManager'

let frequencyLimit = 100
let particleSize = 2 // between 2 and .005

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

const glitchEffect = {
  columns: 0.16,
  weakGlitch: 0.5,
  strongGlitch: 1,
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

// glitchEffect pass theatre object
const glitchEffect$ = timeline.getObject('glitchEffect', glitchEffect, {
  props: {
    columns: { type: 'number' },
    weakGlitch: { type: 'number' },
    strongGlitch: { type: 'number' },
  },
})

const initTheatreProps = () => {
  camera$.onValuesChange(props => (camera.position.z = props.z))
  frequencyLimit$.onValuesChange(props => (frequencyLimit = props.frequencyLimit))
  particleSize$.onValuesChange(props => (particleSize = props.particleSize))

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

  glitchEffect$.onValuesChange(({ columns, weakGlitch, strongGlitch }) =>
    PPmanager.glitchControls(columns, weakGlitch, strongGlitch)
  )
}

export { frequencyLimit, particleSize, initTheatreProps }

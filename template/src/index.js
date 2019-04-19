import './index.css'

import {
  EffectComposer,
  BloomEffect,
  SMAAEffect,
  RenderPass,
  EffectPass,
} from 'postprocessing'

import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  PointLight,
  Audio,
  AudioListener,
  AudioAnalyser,
  Vector3,
} from 'three'

import OrbitControls from './controls/OrbitControls'
import { preloader } from './loader'
import { TextureResolver } from './loader/resolvers/TextureResolver'
import { ImageResolver } from './loader/resolvers/ImageResolver'
import { GLTFResolver } from './loader/resolvers/GLTFResolver'
import { AudioResolver } from './loader/resolvers/AudioResolver'

import Particles from './objects/Particles'
import Theatre from 'theatre'

const project = Theatre.getProject('Theatre demo')
const timeline = project.getTimeline('Main timeline')

const nPlay = document.querySelector('.play')
const play = timeline.getObject('Ball', nPlay, {
  props: {
    y: {
      type: 'number',
    },
  },
})

play.onValuesChange(newValues => {
  nPlay.style.transform = `translateY(${-newValues.y}px)`
})

/* Custom settings */
const SETTINGS = {
  useComposer: true,
  axes: false,
  followMouse: false,
  tsmooth: 0.75,
  clampVEL: 0.02,
  addForceInIterations: 1,
}
// basically the next few variables are all feeders for procedural functions such as noise, movement, etc
let subAvg = 0
let lowAvg = 0
let midAvg = 0
let highAvg = 0
let time = 0
let tprev = time
let composer, stats

/* Init renderer and canvas */
const container = document.querySelector('.main')
const renderer = new WebGLRenderer()
container.style.overflow = 'hidden'
container.style.margin = 0
container.appendChild(renderer.domElement)
renderer.setClearColor(0x3d3b33)

/* Main scene and camera */
const scene = new Scene()
const camera = new PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
const controls = new OrbitControls(camera)
camera.position.z = 10
controls.enableDamping = true
controls.dampingFactor = 0.15
controls.start()

/* Lights */
const frontLight = new PointLight(0xffffff, 1)
const backLight = new PointLight(0xffffff, 1)
scene.add(frontLight)
scene.add(backLight)
frontLight.position.set(20, 20, 20)
backLight.position.set(-20, -20, 20)

/* Audio */
const listener = new AudioListener()
camera.add(listener)

const audio = new Audio(listener)
let analyser

/* Various event listeners */
window.addEventListener('resize', onResize)

/* Objects */
const particleCount = 100000

// init particles & attractor
const particles = new Particles(particleCount)
scene.add(particles.points)

let attractor = new Vector3()

/* Preloader */
preloader.init(
  new ImageResolver(),
  new GLTFResolver(),
  new TextureResolver(),
  new AudioResolver()
)
preloader
  .load([
    { id: 'searchImage', type: 'image', url: SMAAEffect.searchImageDataURL },
    { id: 'areaImage', type: 'image', url: SMAAEffect.areaImageDataURL },
    {
      id: 'soundTrack',
      type: 'audio',
      url: require('./assets/audio/mert.mp3'),
    },
  ])
  .then(() => {
    initPostProcessing()
    onResize()

    const audioBuffer = preloader.get('soundTrack')
    audio.setBuffer(audioBuffer)
    audio.setLoop(false)
    audio.setVolume(0.25)

    // create an AudioAnalyser, passing in the sound and desired fftSize
    analyser = new AudioAnalyser(audio, 32)

    // bind and unbind start functionality
    const playButton = document.querySelector('.play')

    const start = () => {
      audio.play()
      animate()

      playButton.style.opacity = 0
      playButton.removeEventListener('click', start)
    }
    playButton.addEventListener('click', start)

    /* Actual content of the scene */
  })

/* setup GUI and Stats monitor */
if (DEVELOPMENT) {
  const dat = require('dat.gui')
  const gui = new dat.GUI({ name: 'GUI' })

  gui.add(SETTINGS, 'useComposer')
  gui.add(SETTINGS, 'followMouse')
  gui
    .add(SETTINGS, 'tsmooth')
    .min(0.01)
    .max(1)
    .step(0.01)
  gui
    .add(SETTINGS, 'clampVEL')
    .min(0.001)
    .max(1)
    .step(0.001)
  gui
    .add(SETTINGS, 'addForceInIterations')
    .min(1)
    .max(10)
    .step(1)

  const Stats = require('stats.js')
  stats = new Stats()
  stats.showPanel(0)
  container.appendChild(stats.domElement)
  stats.domElement.style.position = 'absolute'
  stats.domElement.style.top = 0
  stats.domElement.style.left = 0
}

/* Postprocessing -------------------------------------------------------------------------------- */
function initPostProcessing() {
  // add postprocessing effects: bloomPass, fxaaPass, noise, vignette, dof
  composer = new EffectComposer(renderer)
  const bloomEffect = new BloomEffect()
  const smaaEffect = new SMAAEffect(
    preloader.get('searchImage'),
    preloader.get('areaImage')
  )
  const effectPass = new EffectPass(camera, smaaEffect, bloomEffect)
  const renderPass = new RenderPass(scene, camera)
  composer.addPass(renderPass)
  composer.addPass(effectPass)
  effectPass.renderToScreen = true
}

/**
  Resize canvas
*/
function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  composer.setSize(window.innerWidth, window.innerHeight)
}

/**
  RAF
*/
function animate() {
  window.requestAnimationFrame(animate)
  render()
}

// can we read out Theatre variable with the sound? if so, define certain stages and trigger cutscenes

/**
  Render loop
*/
function render() {
  if (DEVELOPMENT) {
    stats.begin()
  }

  time += 0.0025
  tprev = time * SETTINGS.tsmooth

  // calculate sound inputs and use them to render specific outputs
  // get the average frequency of the sound
  const avg = analyser.getAverageFrequency()

  // set attractor (optionally bind to mouse)
  attractor.set(Math.cos(-time), Math.sin(time), Math.cos(time))

  // draw the particles with calculated velocity and acceleration
  particles.update()

  const particleVertices = particles.points.geometry.vertices
  for (let i = 0; i < particleVertices.length; i++) {
    const currentVector = particleVertices[i]

    if (avg > 100) {
      for (let j = 0; j < SETTINGS.addForceInIterations; j++) {
        // than we apply forces of all attractors to particle and calculate direction
        const attraction = particles.calculateForce(attractor, currentVector)
        particles.applyForce(attraction, i)
      }
    }
  }

  controls.update()
  if (SETTINGS.useComposer) {
    composer.render()
  } else {
    renderer.clear()
    renderer.render(scene, camera)
  }

  if (DEVELOPMENT) {
    stats.end()
  }
}

export { SETTINGS }

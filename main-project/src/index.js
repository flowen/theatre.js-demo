import './scss/index.scss'

import {
  EffectComposer,
  BloomEffect,
  RenderPass,
  EffectPass,
  NoiseEffect,
  VignetteEffect,
} from 'postprocessing'

import {
  WebGLRenderer,
  Scene,
  Color,
  PerspectiveCamera,
  Audio,
  AudioListener,
  AudioAnalyser,
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
} from 'three'

import OrbitControls from './controls/OrbitControls'
import { preloader } from './loader'
import { AudioResolver } from './loader/resolvers/AudioResolver'

import Particles from './objects/Particles'
import { timelineThreeControls, frequencyLimit } from './theatre-scenes/threejs-controls'
import { tlScene0 as Scene0 } from './theatre-scenes/scene-0'

/* Custom settings */
const SETTINGS = {
  useComposer: true,
  axes: false,
  followMouse: false,
  tsmooth: 0.75,
  clampVEL: 0.02,
  addForceInIterations: 1,
  showAttractor: false,
}

const dom = {
  main: document.getElementsByTagName('main')[0],
  screenAnimations: document.querySelector('.screen--animations'),
  screenStart: document.querySelector('.screen.start'),
  play: document.querySelector('.start__play'),
  loader: document.querySelector('.start__loader'),
  threeContainer: document.querySelector('.screen.threejs'),
}

let time = 0
let tprev
let composer, stats

/* Init renderer and canvas */
const renderer = new WebGLRenderer()
dom.threeContainer.appendChild(renderer.domElement)
renderer.setClearColor(0x120707)

/* Main scene and camera */
const bgColor = new Color(0x120707)
const scene = new Scene()
scene.background = bgColor

/* create camera and controls */
const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
const controls = new OrbitControls(camera, dom.main)
camera.position.z = 10
controls.enableDamping = true
controls.dampingFactor = 0.15
// controls.autoRotate = true
// controls.autoRotateSpeed = 1
controls.start()

/* setup Audio */
const listener = new AudioListener()
camera.add(listener)

const audio = new Audio(listener)
let analyser

/* Various event listeners */
window.addEventListener('resize', onResize)

/* init particles & attractor */
const particleCount = 10000
const particles = new Particles(particleCount)
scene.add(particles.points)

const attractor = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshStandardMaterial({
    color: 0x00ff00,
    transparent: true,
    opacity: 0.5,
  })
)
attractor.position.set(0, 0, 0)
scene.add(attractor)

// unhide the screens, but still hide animations
dom.main.classList.remove('hide-till-loaded')
dom.main.classList.add('hide-animations')

/* Preloader */
preloader.init(new AudioResolver(dom.loader))
preloader
  .load([
    {
      id: 'soundTrack',
      type: 'audio',
      url: require('./assets/audio/untold_story_V2.mp3'),
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

    dom.loader.classList.add('hidden') // hide the loading screen
    dom.play.classList.remove('hidden') // show the play button

    const start = e => {
      e.preventDefault()
      console.log('start')
      audio.play()
      animate()

      dom.screenStart.classList.add('hidden')
      dom.screenAnimations.classList.remove('hidden')

      // start Theatre timelines
      Scene0.play()
      timelineThreeControls.play()

      dom.play.removeEventListener('click', start)
    }
    dom.play.addEventListener('click', start)

    /* Actual content of the scene, such as objects, etc. */
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
  gui.add(SETTINGS, 'showAttractor')

  const Stats = require('stats.js')
  stats = new Stats()
  stats.showPanel(0)
  dom.threeContainer.appendChild(stats.domElement)

  stats.domElement.style.position = 'absolute'
  stats.domElement.style.top = 0
  stats.domElement.style.left = 0
}

/* Postprocessing -------------------------------------------------------------------------------- */
function initPostProcessing() {
  composer = new EffectComposer(renderer)
  const bloomEffect = new BloomEffect()
  const noiseEffect = new NoiseEffect({ premultiply: true })
  const vignetteEffect = new VignetteEffect({
    offset: 0.171,
    darkness: 0.475,
    opacity: 1,
  })
  const effectPass = new EffectPass(camera, bloomEffect, noiseEffect, vignetteEffect)
  const renderPass = new RenderPass(scene, camera)

  noiseEffect.blendMode.opacity.value = 0.75
  effectPass.renderToScreen = true

  composer.addPass(renderPass)
  composer.addPass(effectPass)
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
  requestAnimationFrame(animate)
  render()
}

/**
  Render loop
*/
function render() {
  if (DEVELOPMENT) stats.begin()

  time += 0.0025
  tprev = time * SETTINGS.tsmooth

  // attractor (optionally bind to mouse)
  attractor.position.set(Math.cos(-time * 3), Math.sin(time * tprev), Math.cos(time))
  attractor.visible = SETTINGS.showAttractor

  // draw the particles with calculated velocity and acceleration
  particles.update()

  const particleVertices = particles.points.geometry.vertices
  for (let i = 0; i < particleVertices.length; i++) {
    const currentVector = particleVertices[i]

    // calculate sound inputs and use them to render specific outputs
    // get the average frequency of the sound
    const avg = analyser.getAverageFrequency() //between 0 and 128

    if (avg > frequencyLimit) {
      for (let j = 0; j < SETTINGS.addForceInIterations; j++) {
        // then we apply forces of all attractors to particle and calculate direction
        const attraction = particles.calculateForce(attractor.position, currentVector)
        particles.applyForce(attraction, i)
      }
    }
  }

  // controls.target = attractor.position
  controls.update()

  SETTINGS.useComposer ? composer.render() : (renderer.clear(), renderer.render(scene, camera))

  if (DEVELOPMENT) stats.end()
}

export { SETTINGS, camera }

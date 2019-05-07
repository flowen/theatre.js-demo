import './scss/index.scss'

import { EffectComposer } from 'postprocessing'

import {
  WebGLRenderer,
  Scene,
  Color,
  PerspectiveCamera,
  Audio,
  AudioListener,
  AudioAnalyser,
} from 'three'

// controls, loaders
import { preloader } from './loader'
import { AudioResolver } from './loader/resolvers/AudioResolver'

import OrbitControls from './controls/OrbitControls'
import PPmanager from './controls/PostprocessingManager'

// objects we animate
import { attractor } from './objects/attractor'
import Particles from './objects/Particles'

// Theatre
import {
  frequencyLimit,
  particleSize,
  initTheatreProps,
} from './theatre-timelines/threejs-controls'
import { timeline } from './theatre-timelines/theatre-project'
import './theatre-timelines/scene-intro'
import './theatre-timelines/scene-chorus'

// helpers
import { map } from './utils/helpers'
import onResize from './utils/onresize'

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
let stats

/* Init renderer and canvas */
const renderer = new WebGLRenderer()
dom.threeContainer.appendChild(renderer.domElement)
renderer.setClearColor(0x120707)

let composer = new EffectComposer(renderer)

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

const AUDIOTRACK = require('./assets/audio/untold_story_V2.mp3')

const audio = new Audio(listener)
let analyser

/* init particles & attractor */
const particleCount = 10000
const particles = new Particles(particleCount)
scene.add(particles.points)
scene.add(attractor)

const is_touch_device = () => !!('ontouchstart' in window)

// unhide the screens, but still hide animations
dom.main.classList.remove('hide-till-loaded')
dom.main.classList.add('hide-animations')

/* Preloader */
preloader.init(new AudioResolver(dom.loader))
preloader.load([{ id: 'soundTrack', type: 'audio', url: AUDIOTRACK }]).then(() => {
  PPmanager.init()
  initTheatreProps()
  onResize()

  const audioBuffer = preloader.get('soundTrack')
  audio.setBuffer(audioBuffer)
  audio.setLoop(false)
  audio.setVolume(0.75)

  async function attachAudioToTimeline() {
    await timeline.experimental_attachAudio({
      decodedBuffer: audioBuffer,
      audioContext: audio.context,
      destinationNode: audio.gain,
    })

    // create an AudioAnalyser, passing in the audio and desired fftSize
    analyser = new AudioAnalyser(audio, 32) // use larger fftsize for different average and thus effects?
  }

  attachAudioToTimeline()

  dom.loader.classList.add('hidden') // hide the loading screen
  dom.play.classList.remove('hidden') // show the play button

  const start = () => {
    animate()

    dom.screenStart.classList.add('hidden')
    dom.screenAnimations.classList.remove('hidden')

    // ready? set? ACTION!!!
    timeline.play()

    dom.play.removeEventListener(is_touch_device() ? 'touchstart' : 'click', start, false)
  }
  dom.play.addEventListener(is_touch_device() ? 'touchstart' : 'click', start, false)
})

/* setup GUI and Stats monitor */
if (DEVELOPMENT) {
  const dat = require('dat.gui')
  const gui = new dat.GUI({ name: 'GUI' })

  gui.add(SETTINGS, 'useComposer')
  gui
    .add(SETTINGS, 'tsmooth')
    .min(0.01)
    .max(1)
    .step(0.01)
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

  // draw the particles with (re-)calculated velocity and acceleration
  particles.update()

  // const r = map(attractor.position.x, -1, 1, 0, 1)
  // const g = map(attractor.position.y, -1, 1, 0, 1)
  // const b = map(attractor.position.z, -1, 1, 0, 1)

  // const color = new Color(r, g, b)
  // particles.changeColor(color)
  particles.changeSize(particleSize)

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

export { SETTINGS, renderer, composer, camera, scene }

import './scss/index.scss'

import './utils/welcomelog'

import { EffectComposer } from 'postprocessing'
import { Audio, AudioListener, Color, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

// controls, loaders
import { preloader } from './loader'
import { AudioResolver } from './loader/resolvers/AudioResolver'

import OrbitControls from './controls/OrbitControls'
import PPmanager from './controls/PostprocessingManager'

// objects we animate
import { attractor } from './objects/attractor'
import Particles from './objects/Particles'

// Theatre
import Theatre from 'theatre'
import { attachAudioToTimeline, analyser } from './theatre-timelines/attachAudioToTimeline'
import { frequencyLimit, initTheatreProps } from './theatre-timelines/threejs-controls'
import { timeline } from './theatre-timelines/theatre-project'
import './theatre-timelines/scene-controls'
import './theatre-timelines/scene-intro'
import './theatre-timelines/scene-chorus'
import './theatre-timelines/scene-outro'

// helpers
import onResize from './utils/onResize'
import isTouchDevice from './utils/isTouchDevice'

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
  loader: document.querySelector('.start__loader'),
  screenAnimations: document.querySelector('.screen--animations'),
  screenThree: document.querySelector('.screen.threejs'),
  screenStart: document.querySelector('.screen.start'),
  startIntro: document.querySelector('.start__intro'),
  playButton: document.querySelector('.start__play'),
  resetButton: document.querySelector('.credits__reset'),
  openTheatreButton: document.querySelector('.js--open-theatre-ui'),
}

let time = 0
let tprev
let stats

/* Init renderer and canvas */
const renderer = new WebGLRenderer()
dom.screenThree.appendChild(renderer.domElement)
renderer.setClearColor(0x120707)

let composer = new EffectComposer(renderer)

/* Main scene and camera */
const bgColor = new Color(0x120707)
const scene = new Scene()
scene.background = bgColor

/* create camera and controls */
const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 10

const controls = new OrbitControls(camera, dom.main)
controls.enableDamping = true
controls.dampingFactor = 0.15
controls.start()

/* setup Audio */
const listener = new AudioListener()
camera.add(listener)
const audio = new Audio(listener)

/* init particles & attractor */
const particleCount = 10000
const particles = new Particles(particleCount)
scene.add(particles.points)
scene.add(attractor)

/* Hide everything initially */
dom.main.classList.remove('hide-till-loaded')
dom.main.classList.add('hide-animations')

/* Preloader */
preloader.init(new AudioResolver(dom.loader))
preloader
  .load([
    {
      id: 'soundTrack',
      type: 'audio',
      url: require('./assets/audio/mert gencer (lowkolos) - untold_story.mp3'),
    },
  ])
  .then(() => {
    // audio has loaded, so let's go!
    PPmanager.init()
    initTheatreProps()
    onResize()
    attachAudioToTimeline()

    // hide loader and show start screen
    dom.loader.classList.add('hidden')
    dom.startIntro.classList.remove('hidden')

    // ready?
    const start = () => {
      dom.screenStart.classList.add('hidden')

      // we MUST start playing it from the function that's attached to the clickhandler
      // otherwise IOS will not play it. Not even in a setTimeout fired by that function
      animate()
      timeline.play()
    }
    dom.playButton.addEventListener(isTouchDevice() ? 'touchstart' : 'click', start, false)

    // When css (hiding) animations are finished, we start playing the timeline.
    dom.screenStart.addEventListener('transitionend', e => {
      if (e.target.classList.contains('screen')) {
        dom.screenAnimations.classList.remove('hidden')

        dom.playButton.removeEventListener(isTouchDevice() ? 'touchstart' : 'click', start, false)
      }
    })

    // reset the timeline and particles
    const resetTimeline = () => {
      particles.reset()
      timeline.time = 0
      timeline.play()
    }
    dom.resetButton.addEventListener('click', resetTimeline, false)

    // click handler to show UI
    dom.openTheatreButton.addEventListener('click', () => Theatre.ui.restore(), false)
  })

/* setup tools for development */
if (DEVELOPMENT) {
  const dat = require('dat.gui')
  const gui = new dat.GUI({ name: 'GUI' })
  gui.close()

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
  dom.screenThree.appendChild(stats.domElement)

  stats.domElement.style.position = 'absolute'
  stats.domElement.style.top = 0
  stats.domElement.style.left = 0
}

/**
 * ANIMATION
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

  // The attractor, attracts the particles, based on the force (on line 214)
  attractor.position.set(Math.cos(-time * 3), Math.sin(time * tprev), Math.cos(time))
  attractor.visible = SETTINGS.showAttractor

  // update the controls and particles every frame
  controls.update()
  particles.update()

  const particleVertices = particles.points.geometry.vertices

  for (let i = 0; i < particleVertices.length; i++) {
    const currentVector = particleVertices[i]

    // calculate sound inputs and use them to render specific outputs
    // get the average frequency of the sound
    const avg = analyser.getAverageFrequency()

    if (avg > frequencyLimit) {
      for (let j = 0; j < SETTINGS.addForceInIterations; j++) {
        // apply forces of all attractors to particle and calculate direction
        const attraction = particles.calculateForce(attractor.position, currentVector)

        particles.applyForce(attraction, i)
      }
    }
  }

  SETTINGS.useComposer ? composer.render() : (renderer.clear(), renderer.render(scene, camera))

  if (DEVELOPMENT) stats.end()
}

export { SETTINGS, renderer, composer, camera, scene, audio, particles }

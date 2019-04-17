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
  AudioListener,
  AudioLoader,
  Audio,
} from 'three'

import OrbitControls from './controls/OrbitControls'
import { preloader } from './loader'
import { TextureResolver } from './loader/resolvers/TextureResolver'
import { ImageResolver } from './loader/resolvers/ImageResolver'
import { GLTFResolver } from './loader/resolvers/GLTFResolver'

// audio analyser and averager
// import average from 'analyser-frequency-average'
// import player from './utils/audioplayer'
// import { audioUtil, analyser, bands } from './utils/analyser'

/* Custom settings */
const SETTINGS = {
  useComposer: true,
  axes: false,
  followMouse: false,
  tsmooth: 0.75,
  clampVEL: 0.02,
}
let composer
let stats

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

/* Various event listeners */
window.addEventListener('resize', onResize)

/* Preloader */
preloader.init(new ImageResolver(), new GLTFResolver(), new TextureResolver())
preloader
  .load([
    { id: 'searchImage', type: 'image', url: SMAAEffect.searchImageDataURL },
    { id: 'areaImage', type: 'image', url: SMAAEffect.areaImageDataURL },
  ])
  .then(() => {
    initPostProcessing()
    onResize()
    animate()

    /* Actual content of the scene */
  })

/* some stuff with gui */
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

  const Stats = require('stats.js')
  stats = new Stats()
  stats.showPanel(0)
  container.appendChild(stats.domElement)
  stats.domElement.style.position = 'absolute'
  stats.domElement.style.top = 0
  stats.domElement.style.left = 0
}

/* -------------------------------------------------------------------------------- */
function initPostProcessing() {
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

/**
  Render loop
*/
function render() {
  if (DEVELOPMENT) {
    stats.begin()
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

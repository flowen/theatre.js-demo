/**
  Resize canvas
*/
import { camera, renderer, composer } from '../index'

export default function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  composer.setSize(window.innerWidth, window.innerHeight)
}

/* Various event listeners */
window.addEventListener('resize', onResize)

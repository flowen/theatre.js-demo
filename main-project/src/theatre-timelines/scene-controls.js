import { audio } from '../index'
import isTouchDevice from '../utils/isTouchDevice'
import toggleFullScreen from '../utils/toggleFullScreen'

const fullscreen = document.querySelector('.fullscreen')
const mute = document.querySelector('.mute')

function toggleMute() {
  audio.getVolume() === 1
    ? (audio.setVolume(0), mute.classList.add('muted'))
    : (audio.setVolume(1), mute.classList.remove('muted'))
}

fullscreen.addEventListener(
  isTouchDevice() ? 'touchstart' : 'click',
  e => toggleFullScreen(e),
  false
)
mute.addEventListener(isTouchDevice() ? 'touchstart' : 'click', toggleMute, false)

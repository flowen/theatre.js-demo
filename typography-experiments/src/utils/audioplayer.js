import audioPlayer from 'web-audio-player'
import createAudioContext from 'ios-safe-audio-context'

var modal = document.querySelector('.modal')
var audioContext = createAudioContext()

var sources = ['assets/audio/mert.mp3']
var player = audioPlayer(sources, {
  context: audioContext,
  buffer: true,
  loop: true,
})

// This is triggered on mobile, when decodeAudioData begins.
player.once('decoding', function() {
  modal.innerText = 'Decoding...'
})

// Only gets called when loop: false
player.on('end', function() {
  console.log('Audio ended')
})

// If there was an error loading the audio
player.on('error', function(err) {
  console.error(err.message)
  modal.innerText = 'Error loading audio.'
})

// This is called with 'canplay' on desktop, and after
// decodeAudioData on mobile.
player.on('load', function() {
  modal.style.display = 'none'

  console.log('Source:', player.element ? 'MediaElement' : 'Buffer')
  console.log('Playing', Math.round(player.duration) + 's of audio...')

  // start audio node
  // player.play()
})

export default player

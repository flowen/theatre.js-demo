import { AudioAnalyser } from 'three'
import { timeline } from './theatre-project'
import { preloader } from '../loader/index'
import { audio } from '../index'

let analyser

async function attachAudioToTimeline() {
  const audioBuffer = preloader.get('soundTrack')
  audio.setBuffer(audioBuffer)
  audio.setLoop(false)
  audio.setVolume(1)

  await timeline.experimental_attachAudio({
    decodedBuffer: audioBuffer,
    audioContext: audio.context,
    destinationNode: audio.gain,
  })

  // create an AudioAnalyser, passing in the audio and desired fftSize
  analyser = new AudioAnalyser(audio, 32) // use larger fftsize for different average and thus effects?
}

export { attachAudioToTimeline, analyser }

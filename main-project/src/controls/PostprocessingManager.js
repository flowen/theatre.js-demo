import {
  BlendFunction,
  BloomEffect,
  RenderPass,
  EffectPass,
  ScanlineEffect,
  BlurPass,
  NoiseEffect,
  SavePass,
  TextureEffect,
  VignetteEffect,
} from 'postprocessing'

import { composer, camera, scene } from '../index'

class PostProcessingManager {
  constructor() {
    this.blurPass = new BlurPass()
    this.savePass = new SavePass()

    this.vignetteEffect = new VignetteEffect({
      offset: 0.171,
      darkness: 0.475,
      opacity: 1,
    })

    this.noiseEffect = new NoiseEffect({ premultiply: true })

    this.bloomEffect = new BloomEffect({
      blendFunction: BlendFunction.LIGHTEN,
      resolutionScale: 0.5,
      distinction: 4.0,
    })

    // we use a textureEffect to pass opacity ? works though
    this.blurEffect = new TextureEffect({
      texture: this.savePass.renderTarget.texture,
    })

    this.scanlineEffect = new ScanlineEffect({
      blendFunction: BlendFunction.DARKEN,
      density: 4,
      opacity: 1,
    })
  }

  // vignetteControls() {}

  blurControls(resolution, opacity) {
    this.blurPass.setResolutionScale(resolution)
    this.blurEffect.blendMode.opacity.value = opacity
  }

  bloomControls(resolution, distinction, opacity) {
    this.bloomEffect.setResolutionScale(resolution)
    this.bloomEffect.distinction = distinction
    this.bloomEffect.blendMode.opacity.value = opacity
  }

  scanlineControls(density, opacity) {
    this.scanlineEffect.setDensity(density)
    this.scanlineEffect.blendMode.opacity.value = opacity
  }

  init() {
    const renderPass = new RenderPass(scene, camera)
    const effectPass = new EffectPass(
      camera,
      this.blurEffect,
      this.bloomEffect,
      this.scanlineEffect,
      this.noiseEffect,
      this.vignetteEffect
    )

    this.noiseEffect.blendMode.opacity.value = 0.75
    effectPass.renderToScreen = true
    this.bloomEffect.renderToScreen = true

    composer.addPass(renderPass)
    composer.addPass(this.savePass)
    composer.addPass(this.blurPass)
    composer.addPass(effectPass)
  }
}

const PPmanager = new PostProcessingManager()

export default PPmanager

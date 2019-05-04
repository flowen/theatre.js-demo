import {
  BlendFunction,
  BloomEffect,
  BlurPass,
  ChromaticAberrationEffect,
  EffectPass,
  GlitchEffect,
  NoiseEffect,
  RenderPass,
  SavePass,
  ScanlineEffect,
  TextureEffect,
  VignetteEffect,
} from 'postprocessing'

import { preloader } from '../loader/index'
import { composer, camera, scene } from '../index'

class PostProcessingManager {
  constructor() {
    this.blurPass = new BlurPass()

    this.bloomEffect = new BloomEffect({
      blendFunction: BlendFunction.EXCLUSION,
      resolutionScale: 0.5,
      distinction: 4.0,
    })

    this.savePass = new SavePass()

    this.blurEffect = new TextureEffect({
      texture: this.savePass.renderTarget.texture,
    })

    this.chromaticAberrationEffect = new ChromaticAberrationEffect()

    this.glitchEffect = new GlitchEffect({
      mode: 2,
      perturbationMap: preloader.get('perturbation-map'),
      chromaticAberrationOffset: this.chromaticAberrationEffect.offset,
    })

    this.noiseEffect = new NoiseEffect({
      premultiply: true,
    })

    this.scanlineEffect = new ScanlineEffect({
      blendFunction: BlendFunction.DARKEN,
      density: 4,
      opacity: 1,
    })

    this.vignetteEffect = new VignetteEffect({
      blendFunction: BlendFunction.DARKEN,
    })
  }

  glitchControls(columns, weakGlitch, strongGlitch) {
    this.glitchEffect.columns = columns
    this.glitchEffect.strength.x = weakGlitch
    this.glitchEffect.strength.y = strongGlitch
  }

  vignetteControls(offset, darkness, opacity) {
    this.vignetteEffect.offset = offset
    this.vignetteEffect.darkness = darkness
    this.vignetteEffect.blendMode.opacity.value = opacity
  }

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

    // do this with a re-render of composer?
    // const glitchPass = new EffectPass(camera, this.glitchEffect, this.chromaticAberrationEffect)
    // this.glitchEffect.renderToScreen = true

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

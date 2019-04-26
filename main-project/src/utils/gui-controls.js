import DAT from 'dat.gui'

const gui = new DAT.GUI()

const SETTINGS = {
  useComposer: true,
  axes: false,
  followMouse: false,
  tsmooth: 0.75,
  clampVEL: 0.02,
}

gui.add(SETTINGS, 'axes')
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

export { SETTINGS }

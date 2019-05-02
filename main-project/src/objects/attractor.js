import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three'

const attractor = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshStandardMaterial({
    color: 0x00ff00,
    transparent: true,
    opacity: 0.5,
  })
)
attractor.position.set(0, 0, 0)

export { attractor }

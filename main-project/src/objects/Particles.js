import { Geometry, Vector3, PointsMaterial, Points } from 'three'
import { SETTINGS } from '../index'
import { randomFloat } from '../utils/helpers'

function Particles(num) {
  this.vel = []
  this.acc = []
  this.clampVEL = 1

  const geometry = new Geometry()
  const material = new PointsMaterial({
    size: 2,
    color: 0x3d16d7,
    transparent: true,
    opacity: 1,
  })

  this.points = new Points(geometry, material)

  for (let i = 0; i < num; ++i) {
    const vertex = new Vector3(randomFloat(-20, 20), randomFloat(-20, 20), randomFloat(-20, 20))
    geometry.vertices.push(vertex)

    this.acc.push(new Vector3())
    this.vel.push(new Vector3())
  }
}

Particles.prototype.changeColor = function(color) {
  this.points.material.color = color
}

Particles.prototype.changeSize = function(size) {
  this.points.material.size = size
}

Particles.prototype.reset = function() {
  for (let i = 0; i < this.points.geometry.vertices.length; ++i) {
    this.points.geometry.vertices[i] = new Vector3(
      randomFloat(-20, 20),
      randomFloat(-20, 20),
      randomFloat(-20, 20)
    )
    this.acc[i] = new Vector3(0, 0, 0)
    this.vel[i] = new Vector3(0, 0, 0)

    this.points.geometry.verticesNeedUpdate = true
  }
}

Particles.prototype.update = function() {
  for (let i = 0; i < this.points.geometry.vertices.length; ++i) {
    const vertex = this.points.geometry.vertices[i]
    const acc = this.acc[i]
    const vel = this.vel[i]

    vel.add(acc)
    acc.clampLength(0, SETTINGS.clampVEL / 2)
    vertex.add(vel)
    vel.clampLength(0, SETTINGS.clampVEL)
  }

  this.points.geometry.verticesNeedUpdate = true
}

/**
 * Calculate forces between a particle and a attractor
 */
Particles.prototype.calculateForce = (attractorVector, particleVector) => {
  const f = new Vector3()
  const force = f.subVectors(attractorVector, particleVector)
  const distance = force.length()

  force.divideScalar(distance)
  return force
}

// apply force for acceleration
Particles.prototype.applyForce = function(force, i) {
  const f = new Vector3()
  f.copy(force)

  const acc = this.acc[i].add(f)
  const vel = this.vel[i].add(acc)
  vel.clampLength(0, SETTINGS.clampVEL)

  this.points.geometry.verticesNeedUpdate = true
}

export default Particles

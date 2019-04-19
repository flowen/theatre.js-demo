import { Geometry, Vector3, PointsMaterial, Points } from 'three'
import { SETTINGS } from '../index'
import { randomFloat } from '../utils/helpers'

function Particles(num) {
  const geometry = new Geometry()
  this.vel = []
  this.acc = []
  this.clampVEL = 1

  for (let i = 0; i < num; ++i) {
    const vertex = new Vector3(randomFloat(-20, 20), randomFloat(-20, 20), 0)
    geometry.vertices.push(vertex)

    this.acc.push(new Vector3())
    this.vel.push(new Vector3())
  }

  const material = new PointsMaterial({
    size: 0.001,
    color: 0xffffff,
  })

  this.points = new Points(geometry, material)
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

    // a very strange effect I can't explain
    // acc.clampScalar(SETTINGS.clampVEL, SETTINGS.clampVEL);
  }

  this.points.geometry.verticesNeedUpdate = true
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

Particles.prototype.calculateForce = (attractorVector, particleVector) => {
  const f = new Vector3()
  const force = f.subVectors(attractorVector, particleVector)
  const distance = force.length()

  force.divideScalar(distance)
  return force
}

export default Particles

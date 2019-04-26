import {
  Geometry,
  Vector3,
  PointsMaterial,
  Points,
  AdditiveBlending,
  CircleGeometry,
  CircleBufferGeometry,
  BufferAttribute,
  MeshBasicMaterial,
  Mesh,
} from 'three'
import { SETTINGS } from '../index'
import { randomFloat } from '../utils/helpers'

function Particles(num) {
  this.vel = []
  this.acc = []
  this.clampVEL = 1
  this.color = 0x3d16d7
  this.verticesLength = num
  // const geometry = new Geometry()
  // const material = new PointsMaterial({
  //   size: 0.05,
  // color: this.color,
  // })
  // this.points = new Points(geometry, material)

  this.verticesArray = []

  for (let i = 0; i < num; ++i) {
    const x = randomFloat(-20, 20)
    const y = randomFloat(-20, 20)
    const z = randomFloat(-20, 20)
    // const vertex = new Vector3(
    //   x,y,z
    // )
    // geometry.vertices.push(vertex)
    this.verticesArray.push(x, y, z)

    this.acc.push(new Vector3())
    this.vel.push(new Vector3())
  }

  const geometry = new CircleBufferGeometry(2)
  const vertices = new Float32Array(this.verticesArray)

  // itemSize = 3 because there are 3 values (components) per vertex
  geometry.addAttribute('position', new BufferAttribute(vertices, 3))

  const material = new MeshBasicMaterial({
    // blending: AdditiveBlending,
    color: this.color,
    // transparent: true,
    // opacity: this.opacity,
    depthTest: false,
    precision: 'lowp',
  })

  this.points = new Mesh(geometry, material)
}

Particles.prototype.update = function() {
  for (let i = 0; i < this.verticesLength; ++i) {
    const vertex = {
      x: this.points.geometry.attributes.position.array[i],
      y: this.points.geometry.attributes.position.array[i + 1],
      z: this.points.geometry.attributes.position.array[i + 2],
    }
    const acc = this.acc[i]
    const vel = this.vel[i]

    vel.add(acc)
    acc.clampLength(0, SETTINGS.clampVEL / 2)
    // debugger
    // vertex.add(vel)
    vel.add(vertex)
    vel.clampLength(0, SETTINGS.clampVEL)

    // a very strange effect I can't explain
    // acc.clampScalar(SETTINGS.clampVEL, SETTINGS.clampVEL);
  }

  this.points.geometry.attributes.position.needsUpdate = true
}

// apply force for acceleration
Particles.prototype.applyForce = function(force, i) {
  const f = new Vector3()
  f.copy(force)

  const acc = this.acc[i].add(f)
  const vel = this.vel[i].add(acc)
  vel.clampLength(0, SETTINGS.clampVEL)

  this.points.geometry.attributes.position.needsUpdate = true
}

Particles.prototype.calculateForce = (attractorVector, particleVector) => {
  const f = new Vector3()
  const force = f.subVectors(attractorVector, particleVector)
  const distance = force.length()

  force.divideScalar(distance)
  return force
}

export default Particles

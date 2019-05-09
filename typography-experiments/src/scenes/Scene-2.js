/**
 * Scene 2 - undiscovered
 */

import { project } from '../Theatre-project'
import Charming from '../utils/charming'

const scene = document.querySelector('.scene--2')
const words = scene.querySelectorAll('.discovered > .word')
// console.log(words)

words.forEach(word => Charming(word))

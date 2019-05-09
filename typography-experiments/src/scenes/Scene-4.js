/**
 * Scene 4 - understanding + fadeout random letter animation
 */

// import { project } from '../Theatre-project'

const word = document.querySelector('.understanding')
const letters = word.querySelectorAll('span')

letters.forEach(letter => {
  const random = Math.round(Math.random() * 1000)
  letter.style.setProperty('--delay', `${random}ms`)
})

function fadeOut() {
  const arr = Array.from(letters)

  for (let i = arr.length - 1; i >= 0; i--) {
    let random = Math.floor(Math.random() * arr.length)

    arr[random].classList.add('fade-out')
    arr.splice(random, 1)
  }

  word.removeEventListener('click', fadeOut)
  word.addEventListener('click', reset)
}

function reset() {
  letters.forEach(letter => letter.classList.remove('fade-out'))

  word.removeEventListener('click', reset)
  word.addEventListener('click', fadeOut)
}

word.addEventListener('click', fadeOut)

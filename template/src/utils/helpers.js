export const map = (value, start1, stop1, start2, stop2) =>
  start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))

export const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const randomFloat = (min, max) => Math.random() * (max - min) + min

// randomly return -1 and 1
export const randomNegOrPos = () => {
  let n
  Math.random() > 0.5 ? (n = -1) : (n = 1)
  return n
}
export const onError = error => console.log(`error: ${error}`)

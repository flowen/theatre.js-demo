/**
 * Toggle fullscreen function who work with webkit and firefox.
 * @function toggleFullscreen
 * @param {Object} event
 * @gist https://gist.github.com/demonixis/5188326
 */

const toggleFullScreen = event => {
  const element = document.body

  if (event instanceof HTMLElement) {
    element = event
  }

  const isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false

  element.requestFullScreen =
    element.requestFullScreen ||
    element.webkitRequestFullScreen ||
    element.mozRequestFullScreen ||
    function() {
      return false
    }
  document.cancelFullScreen =
    document.cancelFullScreen ||
    document.webkitCancelFullScreen ||
    document.mozCancelFullScreen ||
    function() {
      return false
    }

  isFullscreen ? document.cancelFullScreen() : element.requestFullScreen()
}

export default toggleFullScreen

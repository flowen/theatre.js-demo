/**
 * Toggle fullscreen function who work with webkit and firefox.
 * @function toggleFullscreen
 * @param {Object} event
 */
export default function toggleFullscreen(event) {
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

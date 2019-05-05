/**
 * This is Charming.js with a small modification to add data-obj-name and trim the string
 */
module.exports = function(element, options) {
  options = options || {}
  element.normalize()
  var splitRegex = options.splitRegex

  var tagName = options.tagName || 'span'
  var classPrefix = options.classPrefix != null ? options.classPrefix : 'char'
  var count = 1

  function inject(element) {
    var parentNode = element.parentNode
    var string = element.nodeValue.trim()
    var split = splitRegex ? string.split(splitRegex) : string
    var length = split.length
    var i = -1
    while (++i < length) {
      var node = document.createElement(tagName)
      if (classPrefix) {
        node.className = classPrefix
        node.dataset.objName = split[i] + ` (${count})`
        count++
      }

      // ugly hack to skip spaces
      // if (split[i] === ' ') continue

      node.appendChild(document.createTextNode(split[i]))

      node.setAttribute('aria-hidden', 'true')
      parentNode.insertBefore(node, element)
    }

    if (string.trim() !== '') {
      parentNode.setAttribute('aria-label', string)
    }

    parentNode.removeChild(element)
  }

  ;(function traverse(element) {
    // `element` is itself a text node.
    if (element.nodeType === 3) {
      return inject(element)
    }

    // `element` has a single child text node.
    var childNodes = Array.prototype.slice.call(element.childNodes) // static array of nodes
    var length = childNodes.length
    if (length === 1 && childNodes[0].nodeType === 3) {
      return inject(childNodes[0])
    }

    // `element` has more than one child node.
    var i = -1
    while (++i < length) {
      traverse(childNodes[i])
    }
  })(element)
}

import { Container, Element, SVG } from '@svgdotjs/svg.js'

import { CirclePointType, Node } from '../item/node'

class Canvas {
  svgElementId = '#svg-container'
  stageSize = { width: 1920, height: 1080 };
  container: Container;

  constructor () {
    const svg = SVG()
    svg.addTo(this.svgElementId)
    this.container = svg.size(this.stageSize.width, this.stageSize.height)
  }

  add (node: Node): Element {
    const element = node.addTo(this.container)
    return element
  }

  link (sourceNode: Node, sourceType: CirclePointType, targetNode: Node, targetType: CirclePointType) {
    this.container.line(sourceNode.circlePoint[sourceType][0], sourceNode.circlePoint[sourceType][1], targetNode.circlePoint[targetType][0], targetNode.circlePoint[targetType][1]).stroke({
      color: '#f06',
      width: 10,
      linecap: 'round'
    })
  }
}

export default Canvas

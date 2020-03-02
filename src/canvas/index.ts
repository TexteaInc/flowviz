import { Container, SVG } from '@svgdotjs/svg.js'

import Node from '../item/node'

class Canvas {
  svgElementId = '#svg-container'
  stageSize = { width: 1920, height: 1080 };
  container: Container;

  constructor () {
    const svg = SVG()
    svg.addTo(this.svgElementId)
    this.container = svg.size(this.stageSize.width, this.stageSize.height)
  }

  add (node: Node) {
    node.addTo(this.container)
  }
}

export default Canvas

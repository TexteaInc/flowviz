import { Container, Rect } from '@svgdotjs/svg.js'

import { ShapeViewBox } from '../common/type'
import { Node } from '../item/node'

export class End extends Node {
  constructor (public viewBox: ShapeViewBox) {
    super(viewBox)
  }

  addTo (container: Container): Rect {
    const element = container.rect(this.viewBox.width, this.viewBox.height).radius(5).move(this.viewBox.x, this.viewBox.y).attr({
      fill: '#fff',
      stroke: '#000'
    })
    return element
  }
}

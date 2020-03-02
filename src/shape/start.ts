import { Container, Rect } from '@svgdotjs/svg.js'

import { ShapeViewBox } from '../common/type'
import { Node } from '../item'

export class Start extends Node {
  constructor (public viewBox: ShapeViewBox) {
    super(viewBox)
  }

  addTo (container: Container): Rect {
    return container.rect(this.viewBox.width, this.viewBox.height).radius(5).move(this.viewBox.x, this.viewBox.y).attr({
      fill: '#fff',
      stroke: '#000'
    })
  }
}

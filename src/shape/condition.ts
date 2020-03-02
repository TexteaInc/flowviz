import { ArrayXY, Container, PointArray, Polygon } from '@svgdotjs/svg.js'

import { ShapeViewBox } from '../common/type'
import { Node } from '../item/node'

export class Condition extends Node {
  constructor (public viewBox: ShapeViewBox) {
    super(viewBox)
  }

  addTo (container: Container): Polygon {
    const leftPoint: ArrayXY = [this.viewBox.x, this.viewBox.y + this.viewBox.height / 2]
    const rightPoint: ArrayXY = [this.viewBox.x + this.viewBox.width, this.viewBox.y + this.viewBox.height / 2]
    const topPoint: ArrayXY = [this.viewBox.x + this.viewBox.width / 2, this.viewBox.y]
    const bottomPoint: ArrayXY = [this.viewBox.x + this.viewBox.width / 2, this.viewBox.y + this.viewBox.height]
    const pointArray: ArrayXY[] = [leftPoint, topPoint, rightPoint, bottomPoint]
    return container.polygon(pointArray)
  }
}

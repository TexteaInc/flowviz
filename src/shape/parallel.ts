import { ArrayXY, Container, Polygon } from '@svgdotjs/svg.js'

import { ShapeViewBox } from '../common/type'
import { Node } from '../item/node'

export class Parallel extends Node {
  screw: number = 20;

  constructor (public viewBox: ShapeViewBox) {
    super(viewBox)
  }

  addTo (container: Container): Polygon {
    const leftTopPoint: ArrayXY = [this.viewBox.x + this.screw, this.viewBox.y]
    const rightTopPoint: ArrayXY = [this.viewBox.x + this.viewBox.width, this.viewBox.y]
    const rightBottomPoint: ArrayXY = [this.viewBox.x + this.viewBox.width - this.screw, this.viewBox.y + this.viewBox.height]
    const letBottomPoint: ArrayXY = [this.viewBox.x, this.viewBox.y + this.viewBox.height]
    const pointArray: ArrayXY[] = [leftTopPoint, rightTopPoint, rightBottomPoint, letBottomPoint]
    return container.polygon(pointArray)
  }
}

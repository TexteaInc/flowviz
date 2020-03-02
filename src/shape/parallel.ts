import {ArrayXY, Container, Polygon} from '@svgdotjs/svg.js'

import {ShapeViewBox} from '../common/type'
import Node from '../item/node'

class Parallel extends Node {
  screw: number = 20;

  constructor(public viewBox: ShapeViewBox) {
    super(viewBox)
  }

  addTo(container: Container): Polygon {
    let leftTopPoint: ArrayXY = [this.viewBox.x + this.screw, this.viewBox.y]
    let rightTopPoint: ArrayXY = [this.viewBox.x + this.viewBox.width, this.viewBox.y]
    let rightBottomPoint: ArrayXY = [this.viewBox.x + this.viewBox.width - this.screw, this.viewBox.y + this.viewBox.height]
    let letBottomPoint: ArrayXY = [this.viewBox.x, this.viewBox.y + this.viewBox.height]
    let pointArray: ArrayXY[] = [leftTopPoint, rightTopPoint, rightBottomPoint, letBottomPoint]
    return container.polygon(pointArray).fill('#fff').stroke({
      width: 1,
      color: '#000'
    })
  }
}

export default Parallel

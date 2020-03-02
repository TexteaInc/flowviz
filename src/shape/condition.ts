import {ArrayXY, Container, PointArray, Polygon} from '@svgdotjs/svg.js'

import {ShapeViewBox} from '../common/type'
import Node from '../item/node'

class Condition extends Node {
  constructor(public viewBox: ShapeViewBox) {
    super(viewBox)
  }

  addTo(container: Container): Polygon {
    let leftPoint: ArrayXY = [this.viewBox.x, this.viewBox.y + this.viewBox.height / 2]
    let rightPoint: ArrayXY = [this.viewBox.x + this.viewBox.width, this.viewBox.y + this.viewBox.height / 2]
    let topPoint: ArrayXY = [this.viewBox.x + this.viewBox.width / 2, this.viewBox.y]
    let bottomPoint: ArrayXY = [this.viewBox.x + this.viewBox.width / 2, this.viewBox.y + this.viewBox.height]
    let pointArray: ArrayXY[] = [leftPoint, topPoint, rightPoint, bottomPoint]
    return container.polygon(pointArray).fill('#fff').stroke({
      width: 1,
      color: '#000'
    })
  }
}

export default Condition

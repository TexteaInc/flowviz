import { Container, Element } from '@svgdotjs/svg.js'

import { ShapeViewBox } from '../common/type'

export abstract class Node {
  viewBox: ShapeViewBox

  protected constructor (viewBox: ShapeViewBox) {
    this.viewBox = viewBox
  }

  abstract addTo (container: Container): Element

  text (container: Container, text: string): Element {
    return container.text(text).move(this.viewBox.width / 2, this.viewBox.height / 2).center(this.viewBox.width / 2, this.viewBox.height / 2)
  }
}

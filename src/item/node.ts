import { ArrayXY, Container, Element } from '@svgdotjs/svg.js'

import { ShapeViewBox } from '../common/type'

export abstract class Node {
  dragging: boolean = false
  viewBox: ShapeViewBox

  protected constructor (viewBox: ShapeViewBox) {
    this.viewBox = viewBox
  }

  abstract addTo(container: Container): Element

  addToContainer (container: Container): Element {
    const group = container.group()
    this.addTo(group)
    if (this.viewBox.text) {
      this.addText(group, this.viewBox.text)
    }
    this.addDot(group)
    this.bindEvent(group)
    return group
  }

  addDot (container: Container): Element {
    const group = container.group()
    const x1 = this.viewBox.x + this.viewBox.width / 2
    const y1 = this.viewBox.y
    const topCircle: ArrayXY = [x1, y1]

    const x2 = this.viewBox.x + this.viewBox.width
    const y2 = this.viewBox.y + this.viewBox.height / 2
    const rightCircle: ArrayXY = [x2, y2]

    const x3 = this.viewBox.x + this.viewBox.width / 2
    const y3 = this.viewBox.y + this.viewBox.height
    const bottomCircle: ArrayXY = [x3, y3]

    const x4 = this.viewBox.x
    const y4 = this.viewBox.y + this.viewBox.height / 2
    const leftCircle: ArrayXY = [x4, y4]

    this.renderDot(group, topCircle)
    this.renderDot(group, rightCircle)
    this.renderDot(group, bottomCircle)
    this.renderDot(group, leftCircle)
    return group
  }

  private renderDot (container: Container, xy: ArrayXY): Element {
    const circle = container.circle(4)
    const [x, y] = xy
    return circle.fill('#fff').move(x, y).center(x, y).attr({
      strokeWidth: 1,
      stroke: '#000'
    })
  }

  addText (container: Container, text: string): Element {
    const x = this.viewBox.x + this.viewBox.width / 2
    const y = this.viewBox.y + this.viewBox.height / 2
    return container.text(text).move(x, y).center(x, y)
  }

  bindEvent (element: Element) {
    if (this.viewBox.isDraggable) {
      element.attr('draggable', true)
      element.on('mousedown', (event: MouseEvent) => {
        this.dragging = true
        console.info('dragstart:', event)
      })
      element.on('mousemove', (event: MouseEvent) => {
        if (this.dragging) {
          element.move(event.pageX - element.width() / 2, event.pageY - element.height() / 2)
          console.info('dragging', event)
          element.css('cursor', 'move')
        }
      })
      element.on('mouseup', (event: MouseEvent) => {
        this.dragging = false
        console.info('dragend', event)
      })
    }
  }
}

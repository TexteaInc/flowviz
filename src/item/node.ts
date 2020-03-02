import { Container, Element } from '@svgdotjs/svg.js'

import { ShapeViewBox } from '../common/type'

// function text() {
//   return function (target:Node, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log(target)
//
//   }
// }

export abstract class Node {
  dragging: boolean = false
  viewBox: ShapeViewBox

  // container: Container = new Container()

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
    this.bindEvent(group)
    return group
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
          element.move(event.x - element.width() / 2, event.y - element.height() / 2)
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

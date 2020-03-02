import { Element } from '@svgdotjs/svg.js'

import { Node } from '../item'

// todo: abstract this
export function Draggable (this: Node, element: Element) {
  element.attr('draggable', true)
  element.on('mousedown', (event: MouseEvent) => {
    this.dragging = true
    this.offsetX = element.cx() - event.pageX
    this.offsetY = element.cy() - event.pageY
    console.info(this.offsetX, this.offsetY)
    console.info('dragstart:', event)
  })
  element.on('mousemove', (event: MouseEvent) => {
    if (this.dragging) {
      element.move(event.pageX + this.offsetX, event.pageY + this.offsetY).center(event.pageX + this.offsetX, event.pageY + this.offsetY)
      console.info('dragging', event)
    }
  })
  element.on('mouseup', (event: MouseEvent) => {
    this.dragging = false
    this.offsetX = 0
    this.offsetY = 0
    console.info('dragend', event)
  })
}

export function Connectable (this: Node, element: Element) {
  element.on('mouseover', (event: MouseEvent) => {
    this.circleGroup.show()
  })
  element.on('mouseout', (event: MouseEvent) => {
    this.circleGroup.hide()
  })
}

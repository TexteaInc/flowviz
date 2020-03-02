import {Container, Rect} from '@svgdotjs/svg.js'

import {ShapeViewBox} from '../common/type'
import Node from '../item/node'

class Start extends Node {
  dragging: boolean = false;

  constructor(public viewBox: ShapeViewBox) {
    super(viewBox)
  }

  addTo(container: Container): Rect {
    let element = container.rect(this.viewBox.width, this.viewBox.height).radius(5).move(this.viewBox.x, this.viewBox.y).attr({
      fill: '#fff',
      stroke: '#000'
    })
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
    return element;
  }
}

export default Start

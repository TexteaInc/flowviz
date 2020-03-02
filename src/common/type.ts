import { Point, ViewBox } from '@svgdotjs/svg.js'

interface ViewBoxOperation {
  isDraggable?: boolean
}

export type ShapeViewBox = ViewBoxOperation & Pick<ViewBox, 'x' | 'y' | 'width' | 'height'>;

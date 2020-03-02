import { Point, ViewBox } from '@svgdotjs/svg.js'

interface ViewBoxOperation {
  isDraggable?: boolean
}

interface ViewBoxProps {
  text?: string
}

export type ShapeViewBox =
  ViewBoxProps
  & ViewBoxOperation
  & Pick<ViewBox, 'x' | 'y' | 'width' | 'height'>;

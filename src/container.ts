import { SVG, Svg } from '@svgdotjs/svg.js'

import { Node } from './item'

interface ContainerConfiguration {
  element: HTMLElement
  width?: number
  height?: number
}

export class Container {
  // All the items in the Container
  readonly #root: Svg
  // todo: use a self-designed array
  #items: Node[] = []

  constructor (conf: ContainerConfiguration) {
    const { element } = conf
    let { width, height } = conf
    if (typeof width !== 'number') {
      width = element.offsetWidth
    }
    if (typeof height !== 'number') {
      height = element.offsetHeight
    }
    this.#root = SVG()
      .addTo(conf.element)
      .size(width, height)
  }

  get items () {
    return this.#items
  }

  public addItem<T extends Node> (item: Node) {
    item.addToContainer(this.#root)
    this.#items.push(item)
  }
}

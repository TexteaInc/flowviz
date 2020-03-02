import Item from './item/item'

export class Container {
  // All the items in the Container
  #items: Item[] = []

  get items () {
    return this.#items
  }
}

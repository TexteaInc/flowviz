import { Condition, Container, Parallel, Start } from '../../src'

const container = new Container({
  element: document.getElementById('root') as HTMLElement
})

container.addItem(new Start({
  x: 0,
  y: 0,
  width: 100,
  height: 40,
  isDraggable: true,
  text: 'start'
}))
container.addItem(new Condition({ x: 100, y: 0, width: 100, height: 40 }))
container.addItem(new Parallel({ x: 200, y: 0, width: 100, height: 40 }))

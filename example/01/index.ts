import '../../src/theme/light.css'

import { Condition, Container, End, Parallel, Start } from '../../src'

const container = new Container({
  element: document.getElementById('root') as HTMLElement,
  width: 1920,
  height: 1080
})

const start = new Start({
  x: 100,
  y: 100,
  width: 100,
  height: 40,
  isDraggable: true,
  text: 'start'
})
container.addItem(start)

const condition = new Condition({
  x: 100,
  y: 200,
  width: 100,
  height: 40,
  isDraggable: true,
  text: 'condition'
})
container.addItem(condition)

const parallel = new Parallel({
  x: 100,
  y: 300,
  width: 100,
  height: 40,
  isDraggable: true,
  text: 'parallel'
})
container.addItem(parallel)

const end = new End({
  x: 100,
  y: 400,
  width: 100,
  height: 40,
  isDraggable: true,
  text: 'end'
})
container.addItem(end)

container.link(start, 'bottom', condition, 'top')
container.link(condition, 'bottom', parallel, 'top')
container.link(parallel, 'bottom', end, 'top')

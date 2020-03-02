import {Container, Start, Condition, Parallel, End} from '../../src'

const container = new Container({
  element: document.getElementById('root') as HTMLElement,
  width: 1920,
  height: 1080,
})

container.addItem(new Start({
  x: 100,
  y: 100,
  width: 100,
  height: 40,
  isDraggable: true,
  text: 'start',
}))
container.addItem(new Condition({
  x: 100,
  y: 200,
  width: 100,
  height: 40,
  isDraggable: true,
  text: 'condition'
}))
container.addItem(new Parallel({
  x: 100,
  y: 300,
  width: 100,
  height: 40,
  isDraggable: true,
  text: 'parallel'
}))
container.addItem(new End({
  x: 100,
  y: 400,
  width: 100,
  height: 40,
  isDraggable: true,
  text: 'end'
}))

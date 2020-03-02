import Canvas from './canvas';
import Start from './shape/start'


let canvas = new Canvas()

let start = new Start({x: 0, y: 0, width: 100, height: 40})

canvas.add(start)

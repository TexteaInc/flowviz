import Canvas from './canvas';
import Start from './shape/start'
import Condition from "./shape/condition";


let canvas = new Canvas()

let start = new Start({x: 0, y: 0, width: 100, height: 40})
let condition = new Condition({x: 0, y: 0, width: 100, height: 40})

canvas.add(start)
canvas.add(condition)

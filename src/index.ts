import Canvas from './canvas';
import Start from './shape/start'
import Condition from "./shape/condition";
import Parallel from "./shape/parallel";


let canvas = new Canvas()

let start = new Start({x: 0, y: 0, width: 100, height: 40})
let condition = new Condition({x: 100, y: 0, width: 100, height: 40})
let parallel = new Parallel({x: 200, y: 0, width: 100, height: 40})

canvas.add(start)
canvas.add(condition)
canvas.add(parallel)

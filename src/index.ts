import SVG from 'svg.js';

const svgElementId = 'svg-container';
let draw = SVG(svgElementId).size(300, 300);
draw.rect(100, 100).attr({ fill: '#f06' });
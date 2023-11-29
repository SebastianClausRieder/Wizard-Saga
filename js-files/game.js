// Global Variables

let canvas;
let world;

// Funktions

function init() {
    canvas = element('game-display');
    world = new World(canvas);
}
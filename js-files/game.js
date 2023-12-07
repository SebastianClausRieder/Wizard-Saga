// Global Variables

let canvas;
let world;
let keyboard = new Keyboard();

// Funktions

function init() {
    canvas = element('game-display');
    world = new World(canvas, keyboard);
}

// Events

document.addEventListener('keydown', (event) => {
    if (event.code == "KeyA" || event.code == "ArrowLeft") {
        keyboard.LEFT = true;
    }

    if (event.code == "KeyD" || event.code == "ArrowRight") {
        keyboard.RIGHT = true;
    }

    if (event.code == "KeyW" || event.code == "ArrowUp") {
        keyboard.UP = true;
    }

    if (event.code == "KeyS" || event.code == "ArrowDown") {
        keyboard.DOWN = true;
    }

    if (event.code == "Space") {
        keyboard.JUMP = true;
    }

    if (event.code == "Digit4") {
        keyboard.ATTACK1 = true;
    }

    if (event.code == "Digit5") {
        keyboard.ATTACK2 = true;
    }

    if (event.code == "Digit1") {
        keyboard.MAGIC1 = true;
    }

    if (event.code == "Digit2") {
        keyboard.MAGIC2 = true;
    }

    if (event.code == "ShiftLeft") {
        keyboard.RUN = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.code == "KeyA" || event.code == "ArrowLeft") {
        keyboard.LEFT = false;
    }

    if (event.code == "KeyD" || event.code == "ArrowRight") {
        keyboard.RIGHT = false;
    }

    if (event.code == "KeyW" || event.code == "ArrowUp") {
        keyboard.UP = false;
    }

    if (event.code == "KeyS" || event.code == "ArrowDown") {
        keyboard.DOWN = false;
    }

    if (event.code == "Space") {
        keyboard.JUMP = false;
    }

    if (event.code == "Digit4") {
        keyboard.ATTACK1 = false;
    }

    if (event.code == "Digit5") {
        keyboard.ATTACK2 = false;
    }

    if (event.code == "Digit1") {
        keyboard.MAGIC1 = false;
    }

    if (event.code == "Digit2") {
        keyboard.MAGIC2 = false;
    }

    if (event.code == "ShiftLeft") {
        keyboard.RUN = false;
    }
});
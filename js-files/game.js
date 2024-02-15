// Global Variables

let canvas;
let world;
let keyboard = new Keyboard();

// Funktions

function init() {
    canvas = element('game-display');
}

function startGame() {
    element('startMonitor').classList.add('d-none');
    world = new World(canvas, keyboard);
}

// Events

document.addEventListener('keydown', (event) => {
    // console.log(event)
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

    if (event.code == "Digit1") {
        keyboard.MAGIC1 = true;
    }

    if (event.code == "Digit2") {
        keyboard.MAGIC2 = true;
    }

    if (event.code == "Digit3") {
        keyboard.USELESSMANA = true;
    }

    if (event.code == "Digit4") {
        keyboard.ATTACK1 = true;
    }

    if (event.code == "Digit5") {
        keyboard.ATTACK2 = true;
    }

    if (event.code == "Digit6") {
        keyboard.DEFENDER = true;
    }

    if (event.code == "ShiftLeft") {
        keyboard.RUN = true;
    }

    if (event.code == "KeyB") {
        keyboard.BLUEPOTION = true;
    }

    if (event.code == "KeyR") {
        keyboard.REDPOTION = true;
    }

    if (event.code == "F10") {
        canvas.requestFullscreen();
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
        keyboard.keyIsHold_UP = false;
    }

    if (event.code == "KeyS" || event.code == "ArrowDown") {
        keyboard.DOWN = false;
    }

    if (event.code == "Space") {
        keyboard.JUMP = false;
        keyboard.keyIsHold_JUMP = false;
    }

    if (event.code == "Digit1") {
        keyboard.MAGIC1 = false;
        keyboard.keyIsHold_MAGIC1 = false;
    }

    if (event.code == "Digit2") {
        keyboard.MAGIC2 = false;
        keyboard.keyIsHold_MAGIC2 = false;
    }

    if (event.code == "Digit3") {
        keyboard.USELESSMANA = false;
        keyboard.keyIsHold_USELESSMANA = false;
    }

    if (event.code == "Digit4") {
        keyboard.ATTACK1 = false;
        keyboard.keyIsHold_ATTACK1 = false;
    }

    if (event.code == "Digit5") {
        keyboard.ATTACK2 = false;
        keyboard.keyIsHold_ATTACK2 = false;
    }

    if (event.code == "Digit6") {
        keyboard.DEFENDER = false;
        keyboard.keyIsHold_DEFENDER = false;
    }

    if (event.code == "ShiftLeft") {
        keyboard.RUN = false;
    }

    if (event.code == "KeyB") {
        keyboard.BLUEPOTION = false;
        keyboard.keyIsHold_BLUEPOTION = false;
    }

    if (event.code == "KeyR") {
        keyboard.REDPOTION = false;
        keyboard.keyIsHold_REDPOTION = false;
    }
});
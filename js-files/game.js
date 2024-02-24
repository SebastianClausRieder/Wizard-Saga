// Global Variables

let canvas;
let world;
let keyboard = new Keyboard();

// Funktions

/**
 * Gives Canvas the Document value and loads the buttons.
 */
function init() {
    canvas = element('game-display');
    bindBtsPressEvents();
}

/**
 * Hides everything except the canvas and starts the Game.
 */
function startGame() {
    element('startMonitor').classList.add('d-none');
    element('endMonitor').classList.add('d-none');
    world = new World(canvas, keyboard);
}

// Events

/**
 * Loads the necessary keys for key down.
 */
document.addEventListener('keydown', (event) => {
    const keyMappings = {
        'KeyA': 'LEFT',
        'ArrowLeft': 'LEFT',
        'KeyD': 'RIGHT',
        'ArrowRight': 'RIGHT',
        'KeyW': 'UP',
        'ArrowUp': 'UP',
        'KeyS': 'DOWN',
        'ArrowDown': 'DOWN',
        'Space': 'JUMP',
        'Digit1': 'MAGIC1',
        'Digit2': 'MAGIC2',
        'Digit3': 'USELESSMANA',
        'Digit4': 'ATTACK1',
        'Digit5': 'ATTACK2',
        'Digit6': 'DEFENDER',
        'ShiftLeft': 'RUN',
        'KeyB': 'BLUEPOTION',
        'KeyR': 'REDPOTION'
    };

    const key = keyMappings[event.code];
    if (key) {
        keyboard[key] = true;
    }

    if (event.code === 'F10') {
        checkElementForFullscreen();
    }

    if (event.code === 'KeyP') {
        backgroundMusicOnOff();
    }
});

/**
 * Loads the necessary keys for key up.
 */
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

    // if (event.code == "ShiftLeft") {
    //     keyboard.RUN = false;
    // }

    if (event.code == "KeyB") {
        keyboard.BLUEPOTION = false;
        keyboard.keyIsHold_BLUEPOTION = false;
    }

    if (event.code == "KeyR") {
        keyboard.REDPOTION = false;
        keyboard.keyIsHold_REDPOTION = false;
    }
});

/**
 * Loads the buttons.
 */
function bindBtsPressEvents() {
    element('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    element('btnLeft').addEventListener('touchend', (e) => {
        keyboard.LEFT = false;
    });
    
    element('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    element('btnRight').addEventListener('touchend', (e) => {
        keyboard.RIGHT = false;
    });
    
    element('btnAction').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });

    element('btnAction').addEventListener('touchend', (e) => {
        keyboard.UP = false;
        keyboard.keyIsHold_UP = false;
    });
    
    element('btnJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.JUMP = true;
    });

    element('btnJump').addEventListener('touchend', (e) => {
        keyboard.JUMP = false;
        keyboard.keyIsHold_JUMP = false;
    });
    
    element('btnRun').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RUN = true;
    });

    // element('btnRun').addEventListener('touchend', (e) => {
    //     keyboard.RUN = false;
    // });
    
    // element('btnFS').addEventListener('touchstart', (e) => {
    //     checkElementForFullscreen();
    // });
    
    element('btnSound').addEventListener('touchstart', (e) => {
        e.preventDefault();
        backgroundMusicOnOff();
    });
}

/**
 * Checks which element goes into the full screen.
 */
function checkElementForFullscreen() {
    if (element('startMonitor').classList.contains('d-none') && element('instructionMonitor').classList.contains('d-none')) {
        enterFullscreen(canvas);
    } else {
        enterFullscreen(element('game-screen'));
    }
}

/**
 * Starts the full screen.
 * @param {ID} element ID for the full screen. 
 */
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

/**
 * Turns the background music on or off.
 */
function backgroundMusicOnOff() {
    if (world.backgroundMusic) {
        world.backgroundMusic = false;
        clearInterval(world.backgroundMusicInterV);
        stopMusic();
        element('btnSound').src = 'img/wizard-saga/touch-button/speaker-off.png';
    } else {
        world.backgroundMusic = true;
        world.playBGMusic();
        element('btnSound').src = 'img/wizard-saga/touch-button/speaker-on.png';
    }
}

/**
 * Stop the background music.
 */
function stopMusic() {
    world.background_cave.pause();
    world.background_sound.pause();
}

// Touch scaling

// Original size of the canvas.
const originalCanvasWidth = 1000;
const originalCanvasHeight = 530;

/**
 * Calculate the scale factors.
 * @returns the new scale factors.
 */
function calculateScaleFactors() {
    const currentCanvasWidth = canvas.clientWidth;
    const currentCanvasHeight = canvas.clientHeight;

    const scaleX = currentCanvasWidth / originalCanvasWidth;
    const scaleY = currentCanvasHeight / originalCanvasHeight;

    return { scaleX, scaleY };
}

/**
 * Touch coordinate conversion function.
 * @param {number} touchX coordinate
 * @param {number} touchY coordinate
 * @returns Correct location of the touch coordinate.
 */
function convertTouchCoordinates(touchX, touchY) {
    const { scaleX, scaleY } = calculateScaleFactors();

    const scaledX = touchX / scaleX;
    const scaledY = touchY / scaleY;
    
    return { x: scaledX, y: scaledY };
}

/**
 * Reacts when the window size changes.
 */
window.addEventListener('resize', () => {
    const { scaleX, scaleY } = calculateScaleFactors();
});
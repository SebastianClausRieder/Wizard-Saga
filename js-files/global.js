// Helpfull Functions

/**
 * @param {ID} inputID // translate the ID when entering element(ID).
 * @returns // return document.getElemetById(ID).
 */
function element(inputID) {
    return document.getElementById(inputID);
}

/**
 * Clear all Intervals if the Game is Loos or Win.
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

// Canvas

const canvasWidth = 1000;
const canvasHeight = 500;

// Start and Instruction Display

let endScreen = false;

/**
 * Opens the Instructions menu and closes everything else.
 */
function goToInstructionDisplay() {
    element('instructionMonitor').classList.remove('d-none');
    element('startMonitor').classList.add('d-none');
    element('endMonitor').classList.add('d-none');
}

/**
 * Closes the Instructions menu and opens the Start menu or the End menu.
 */
function closeInstructionDisplay() {
    element('instructionMonitor').classList.add('d-none');
    if (!endScreen) {
        element('startMonitor').classList.remove('d-none');
    } else {
        element('endMonitor').classList.remove('d-none');
    }
}

// End Display

/**
 * Opens the End Menu after the game has been lost (dead = true) or won (dead = false).
 * @param {boolean} dead true or false
 */
function showEndScreen(dead) {
    endScreen = true;
    if (!dead) {
        element('endMainText').innerText = 'Congratulations!';
        element('endMessage').innerText = 'You have successfully completed this level.';
        element('endImage').src = 'img/wizard-saga/headline/play-again.png';
    } else {
        element('endMainText').innerText = 'You have been defeated!';
        element('endMessage').innerText = 'Would you like to try it again?';
        element('endImage').src = 'img/wizard-saga/headline/try-again.png';
    }
}
// Helpfull Functions

/**
 * @param {ID} inputID // translate the ID when entering element(ID).
 * @returns // return document.getElemetById(ID).
 */
function element(inputID) {
    return document.getElementById(inputID);
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

// Canvas

const canvasHeight = 500;
const canvasWidth = 1000;

// Start and Instruction Display

let endScreen = false;

function goToInstructionDisplay() {
    element('instructionMonitor').classList.remove('d-none');
    element('startMonitor').classList.add('d-none');
    element('endMonitor').classList.add('d-none');
}

function closeInstructionDisplay() {
    element('instructionMonitor').classList.add('d-none');
    if (!endScreen) {
        element('startMonitor').classList.remove('d-none');
    } else {
        element('endMonitor').classList.remove('d-none');
    }
}

// End Display

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
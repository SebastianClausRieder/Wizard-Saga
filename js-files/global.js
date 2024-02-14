// Helpfull Functions

/**
 * @param {ID} inputID // translate the ID when entering element(ID).
 * @returns // return document.getElemetById(ID).
 */
function element(inputID) {
    return document.getElementById(inputID);
}

// Canvas

let canvasHeight = 500;
let canvasWidth = 1000;

// start Display

function goToInstructionDisplay() {
    element('instructionMonitor').classList.remove('d-none');
    element('startMonitor').classList.add('d-none');
}

function closeInstructionDisplay() {
    element('instructionMonitor').classList.add('d-none');
    element('startMonitor').classList.remove('d-none');
}
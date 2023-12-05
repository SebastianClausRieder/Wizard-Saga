class Character extends MovableObject {
    width = 60;

    IMAGES_IDLE = [
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-02.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-03.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-04.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-05.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-06.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-07.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png'
    ];

    constructor() {
        super().loadImage('img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png');
        this.loadImages(this.IMAGES_IDLE);
        this.animateIdle();

        this.posiY = canvasHeight - this.height - 60;
    }
}
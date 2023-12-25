class Endboss01 extends MovableObject {
    width = 175;
    
    hitBoxWidth = 60;
    hitBoxHeight = 90;
    hitBoxX = 70;
    hitBoxY = 45;

    speed = 0.5;
    doesDMG = 15;

    IMAGES_WALKING = [
        'img/wizard-saga/monsters/PNG/medusa/Walk1.png',
        'img/wizard-saga/monsters/PNG/medusa/Walk2.png',
        'img/wizard-saga/monsters/PNG/medusa/Walk3.png',
        'img/wizard-saga/monsters/PNG/medusa/Walk4.png',
    ];

    constructor() {
        super().loadImage('img/wizard-saga/monsters/PNG/medusa/Idle1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animateWalkingEnemies(225);
        this.moveLeft(this.speed, 1000 / 60);

        this.posiX = 450;
        this.posiY = canvasHeight - this.height + 15;
    }
}
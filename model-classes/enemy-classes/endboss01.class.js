class Endboss01 extends MovableObject {
    width = 175;
    height = 175;
    
    hitBoxWidth = 60;
    hitBoxHeight = 90;
    hitBoxX = 70;
    hitBoxY = 45;

    speed = 0.5;
    LP = 100;
    MP = 100;
    doesDMG = 25;

    IMAGES_IDLE = [
        'img/wizard-saga/monsters/PNG/medusa/Idle1.png',
        'img/wizard-saga/monsters/PNG/medusa/Idle2.png',
        'img/wizard-saga/monsters/PNG/medusa/Idle3.png',
        'img/wizard-saga/monsters/PNG/medusa/Idle2.png'
    ];

    IMAGES_WALKING = [
        'img/wizard-saga/monsters/PNG/medusa/Walk1.png',
        'img/wizard-saga/monsters/PNG/medusa/Walk2.png',
        'img/wizard-saga/monsters/PNG/medusa/Walk3.png',
        'img/wizard-saga/monsters/PNG/medusa/Walk4.png',
    ];

    IMAGES_HURT = [
        'img/wizard-saga/monsters/PNG/medusa/Hurt1.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt1.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt1.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt2-light.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt2.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt2-light.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt2.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt2-light.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt1.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt1.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/medusa/Hurt1.png'
    ];

    IMAGES_DEAD = [
        'img/wizard-saga/monsters/PNG/medusa/Death1.png',
        'img/wizard-saga/monsters/PNG/medusa/Death2.png',
        'img/wizard-saga/monsters/PNG/medusa/Death3.png',
        'img/wizard-saga/monsters/PNG/medusa/Death4.png',
        'img/wizard-saga/monsters/PNG/medusa/Death5.png',
        'img/wizard-saga/monsters/PNG/medusa/Death6.png'
    ];

    constructor() {
        super().loadImage('img/wizard-saga/monsters/PNG/medusa/Idle1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animateWalkingEnemies(225);
        this.checkPosition();

        this.posiX = 9760;
        this.posiY = canvasHeight - this.height + 15;
    }

    checkPosition() {
        this.walkingInterval = setInterval(() => {
            if (this.posiX <= 9600 && !this.isMovingRight) {
                    this.moveRight(this.speed, 1000 / 60)
                    clearInterval(this.movingLeftInterval);
                    this.isMovingRight = true;
                    this.isMovingLeft = false;
                    this.standing = false;
            } else if (this.posiX >= 9750 && !this.isMovingLeft) {
                    this.moveLeft(this.speed, 1000 / 60);
                    clearInterval(this.movingRightInterval);
                    this.isMovingRight = false;
                    this.isMovingLeft = true;
                    this.standing = false;
            }
        }, 250);
    }

    removeFromMap() {
        this.toBeRemoved = true;
    }
}
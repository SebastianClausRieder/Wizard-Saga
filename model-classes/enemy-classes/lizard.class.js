class Lizard extends MovableObject {
    width = 175;
    height = 175;
    
    hitBoxWidth = 30;
    hitBoxHeight = 40;
    hitBoxX = 80;
    hitBoxY = 70;

    speed = 0.15 + Math.random() * 0.5;
    LP = 10;
    MP = 0;
    doesDMG = 5;

    standing = false;
    isMovingLeft = true;
    
    IMAGES_IDLE = [
        'img/wizard-saga/monsters/PNG/lizard/Idle1.png',
        'img/wizard-saga/monsters/PNG/lizard/Idle2.png',
        'img/wizard-saga/monsters/PNG/lizard/Idle3.png',
        'img/wizard-saga/monsters/PNG/lizard/Idle2.png'
    ];

    IMAGES_WALKING = [
        'img/wizard-saga/monsters/PNG/lizard/Walk1.png',
        'img/wizard-saga/monsters/PNG/lizard/Walk2.png', 
        'img/wizard-saga/monsters/PNG/lizard/Walk3.png', 
        'img/wizard-saga/monsters/PNG/lizard/Walk4.png', 
        'img/wizard-saga/monsters/PNG/lizard/Walk5.png', 
        'img/wizard-saga/monsters/PNG/lizard/Walk6.png'
    ];

    IMAGES_HURT = [
        'img/wizard-saga/monsters/PNG/lizard/Hurt1.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt1.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt1.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt2-light.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt2.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt2-light.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt2.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt2-light.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt1.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt1.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/lizard/Hurt1.png'
    ];

    IMAGES_DEAD = [
        'img/wizard-saga/monsters/PNG/lizard/Death1.png',
        'img/wizard-saga/monsters/PNG/lizard/Death2.png',
        'img/wizard-saga/monsters/PNG/lizard/Death3.png',
        'img/wizard-saga/monsters/PNG/lizard/Death4.png',
        'img/wizard-saga/monsters/PNG/lizard/Death5.png',
        'img/wizard-saga/monsters/PNG/lizard/Death6.png'
    ];

    constructor() {
        super().loadImage('img/wizard-saga/monsters/PNG/lizard/Idle1.png');
        //this.loadImages(this.IMAGES_IDLE);
        //this.animateIdle();
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animateWalkingEnemies(225);
        this.moveLeft(this.speed, 1000 / 60);

        this.posiX = 300 + Math.random() * 9500;
        this.posiY = canvasHeight - this.height + 43;
    }
}
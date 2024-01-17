class Demon extends MovableObject {
    width = 175;
    height = 175;
    
    hitBoxWidth = 35;
    hitBoxHeight = 60;
    hitBoxX = 90;
    hitBoxY = 70;

    speed = 0.5;
    LP = 25;
    MP = 0;
    doesDMG = 10;
    
    IMAGES_IDLE = [
        'img/wizard-saga/monsters/PNG/demon/Idle1.png',
        'img/wizard-saga/monsters/PNG/demon/Idle2.png',
        'img/wizard-saga/monsters/PNG/demon/Idle3.png',
        'img/wizard-saga/monsters/PNG/demon/Idle2.png'
    ];

    IMAGES_WALKING = [
        'img/wizard-saga/monsters/PNG/demon/Walk1.png',
        'img/wizard-saga/monsters/PNG/demon/Walk2.png', 
        'img/wizard-saga/monsters/PNG/demon/Walk3.png', 
        'img/wizard-saga/monsters/PNG/demon/Walk4.png', 
        'img/wizard-saga/monsters/PNG/demon/Walk5.png', 
        'img/wizard-saga/monsters/PNG/demon/Walk6.png'
    ];

    IMAGES_HURT = [
        'img/wizard-saga/monsters/PNG/demon/Hurt1.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt1.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt1.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt2-light.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt2.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt2-light.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt2.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt2-light.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt1.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt1.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/demon/Hurt1.png'
    ];

    IMAGES_DEAD = [
        'img/wizard-saga/monsters/PNG/demon/Death1.png',
        'img/wizard-saga/monsters/PNG/demon/Death2.png',
        'img/wizard-saga/monsters/PNG/demon/Death3.png',
        'img/wizard-saga/monsters/PNG/demon/Death4.png',
        'img/wizard-saga/monsters/PNG/demon/Death5.png',
        'img/wizard-saga/monsters/PNG/demon/Death6.png'
    ];

    constructor() {
        super().loadImage('img/wizard-saga/monsters/PNG/demon/Idle1.png');
        //this.loadImages(this.IMAGES_IDLE);
        //this.animateIdle();
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animateWalkingEnemies(175);
        this.moveLeft(this.speed, 1000 / 60);

        this.posiX = 900 + Math.random() * 10000;
        this.posiY = canvasHeight - this.height + 23;
    }

    removeFromMap() {
        this.toBeRemoved = true;
    }
}
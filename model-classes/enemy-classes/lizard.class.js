class Lizard extends MovableObject {
    width = 175;
    speed = 0.15 + Math.random() * 0.5;
    
    //IMAGES_IDLE = [
        // 'img/wizard-saga/monsters/PNG/lizard/Idle1.png',
        // 'img/wizard-saga/monsters/PNG/lizard/Idle2.png',
        // 'img/wizard-saga/monsters/PNG/lizard/Idle3.png',
        // 'img/wizard-saga/monsters/PNG/lizard/Idle2.png'
    //];

    IMAGES_WALKIN = [
        'img/wizard-saga/monsters/PNG/lizard/Walk1.png',
        'img/wizard-saga/monsters/PNG/lizard/Walk2.png', 
        'img/wizard-saga/monsters/PNG/lizard/Walk3.png', 
        'img/wizard-saga/monsters/PNG/lizard/Walk4.png', 
        'img/wizard-saga/monsters/PNG/lizard/Walk5.png', 
        'img/wizard-saga/monsters/PNG/lizard/Walk6.png', 
    ];

    constructor() {
        super().loadImage('img/wizard-saga/monsters/PNG/lizard/Idle1.png');
        //this.loadImages(this.IMAGES_IDLE);
        //this.animateIdle();
        this.loadImages(this.IMAGES_WALKIN);
        this.animateWalkinEnemies(225);
        this.moveLeft(this.speed, 1000 / 60);

        this.posiX = 300 + Math.random() * 500;
        this.posiY = canvasHeight - this.height + 43;
    }
}
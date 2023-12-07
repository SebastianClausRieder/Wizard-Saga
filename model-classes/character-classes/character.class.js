class Character extends MovableObject {
    width = 60;
    speedWalk = 0.8;
    speedRun = 2;
    world;

    walking_sound = new Audio('audio/walking.mp3');
    running_sound = new Audio('audio/walking.mp3');

    moving = false;
    walking = false;
    running =  false;

    IMAGES_IDLE = [
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
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

    IMAGES_WALK = [
        'img/wizard-saga/characters/Fire-Wizard/walk/walk-01.png',
        'img/wizard-saga/characters/Fire-Wizard/walk/walk-02.png',
        'img/wizard-saga/characters/Fire-Wizard/walk/walk-03.png',
        'img/wizard-saga/characters/Fire-Wizard/walk/walk-04.png',
        'img/wizard-saga/characters/Fire-Wizard/walk/walk-05.png',
        'img/wizard-saga/characters/Fire-Wizard/walk/walk-06.png'
    ];

    IMAGES_RUN = [
        'img/wizard-saga/characters/Fire-Wizard/run/run-01.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-02.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-03.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-04.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-05.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-06.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-07.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-08.png',
    ];

    constructor() {
        super().loadImage('img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_RUN);
        this.animateIdle();
        this.animateWalkinCharacter();
        this.animateRunCharacter();

        this.posiY = canvasHeight - this.height - 25;
    }

    animateIdle() {
        setInterval(() => {
            if (!this.moving) {
                let i = this.currentImageIdle % this.IMAGES_IDLE.length;
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageCache[path];
                this.currentImageIdle++;
            }
        }, 225);        
    }

    animateWalkinCharacter() {
        setInterval(() => {
            this.walking_sound.pause();
            this.walking_sound.volume = 0.2;
            if (this.world.keyboard.RIGHT && !this.running && this.posiX < this.world.lvl.lvl_end) {
                this.posiX += this.speedWalk;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            
            if (this.world.keyboard.LEFT && !this.running && this.posiX > 0) {
                this.posiX -= this.speedWalk;
                this.otherDirection = true;
                this.walking_sound.play();
            }

            if (this.posiX > 500) {
                this.world.cam_X = this.posiX - 500;
            }
        }, 1000 /60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {                
                let i = this.currentImageWalk % this.IMAGES_WALK.length;
                let path = this.IMAGES_WALK[i];
                this.img = this.imageCache[path];
                this.currentImageWalk++;
                this.moving = true;
                this.walking = true;
                this.running = false;
                this.currentImageIdle = 0;
            } else {
                this.walking_sound.currentTime = 0;
                if (!this.running) {
                    this.moving = false;
                    this.currentImageWalk = 0;
                    this.currentImageRun = 0;
                }
            }
        }, 125);         
    }

    animateRunCharacter() {
        setInterval(() => {
            this.running_sound.pause();
            this.running_sound.volume = 0.3;
            this.running_sound.playbackRate = 1.1;
            if (this.world.keyboard.RIGHT && this.world.keyboard.RUN && this.posiX < this.world.lvl.lvl_end) {
                this.posiX += this.speedRun;
                this.otherDirection = false;
                this.running_sound.play();
            }
            
            if (this.world.keyboard.LEFT && this.world.keyboard.RUN && this.posiX > 0) {
                this.posiX -= this.speedRun;
                this.otherDirection = true;
                this.running_sound.play();
            }

            if (this.posiX > 500) {
                this.world.cam_X = this.posiX - 500;
            }
        }, 1000 /60);

        setInterval(() => {
            if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.world.keyboard.RUN) {                
                let i = this.currentImageRun % this.IMAGES_RUN.length;
                let path = this.IMAGES_RUN[i];
                this.img = this.imageCache[path];
                this.currentImageRun++;
                this.moving = true;
                this.running = true;
                this.walking = false;
                this.currentImageIdle = 0;
            } else {
                if (!this.walking) {
                    this.moving = false;
                    this.currentImageRun = 0;
                    this.currentImageWalk = 0;
                }
            }
        }, 125);   

    }
}
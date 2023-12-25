class Character extends MovableObject {
    width = 200;

    hitBoxWidth = 50;
    hitBoxHeight = 70;
    hitBoxX = 30;
    hitBoxY = 30;

    speedWalk = 1.5;
    speedRun = 3;
    world;
    intervalSequenz = 0;

    LP = 20;
    MP = 100;

    walking_sound = new Audio('audio/walking.mp3');
    running_sound = new Audio('audio/walking.mp3');
    jumping_sound = new Audio('audio/jumping.mp3');

    moving = false;
    walking = false;
    running = false;
    jumping = false;
    hurts = false;
    playerDEAD = false;

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
        'img/wizard-saga/characters/Fire-Wizard/run/run-08.png'
    ];

    IMAGES_JUMP = [
        'img/wizard-saga/characters/Fire-Wizard/jump/jump-05.png',
        'img/wizard-saga/characters/Fire-Wizard/jump/jump-06.png'
    ];

    IMAGES_HURT = [
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-01.png'
    ];

    IMAGES_DEAD = [
        'img/wizard-saga/characters/Fire-Wizard/dead/Dead-01.png',
        'img/wizard-saga/characters/Fire-Wizard/dead/Dead-02.png',
        'img/wizard-saga/characters/Fire-Wizard/dead/Dead-03.png',
        'img/wizard-saga/characters/Fire-Wizard/dead/Dead-04.png',
        'img/wizard-saga/characters/Fire-Wizard/dead/Dead-05.png',
        'img/wizard-saga/characters/Fire-Wizard/dead/Dead-06.png',
    ];

    IMAGES_ATTACK1 = [
        'img/wizard-saga/characters/Fire-Wizard/first-attack/first-attack-01.png',
        'img/wizard-saga/characters/Fire-Wizard/first-attack/first-attack-02.png',
        'img/wizard-saga/characters/Fire-Wizard/first-attack/first-attack-03.png',
        'img/wizard-saga/characters/Fire-Wizard/first-attack/first-attack-04.png'
    ];

    IMAGES_ATTACK2 = [
        'img/wizard-saga/characters/Fire-Wizard/secound-attack/secound-attack-01.png',
        'img/wizard-saga/characters/Fire-Wizard/secound-attack/secound-attack-02.png',
        'img/wizard-saga/characters/Fire-Wizard/secound-attack/secound-attack-03.png',
        'img/wizard-saga/characters/Fire-Wizard/secound-attack/secound-attack-04.png'
    ];

    IMAGES_FIREBALLMOVE = [
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-01.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-02.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-03.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-04.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-05.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-06.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-07.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-08.png'
    ];

    IMAGES_FIREBALL = [
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-01.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-02.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-03.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-04.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-05.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-06.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-07.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-08.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-09.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-10.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-11.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-12.png'
    ];

    IMAGES_FIREBURST = [
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-01.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-02.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-03.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-04.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-05.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-06.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-07.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-08.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-09.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-10.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-11.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-12.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-13.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-14.png'
    ];


    constructor() {
        super().loadImage('img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK1);
        this.loadImages(this.IMAGES_ATTACK2);
        this.loadImages(this.IMAGES_FIREBALLMOVE);
        this.loadImages(this.IMAGES_FIREBALL);
        this.loadImages(this.IMAGES_FIREBURST);
        this.animateIdle();
        this.animateWalkingCharacter();
        this.animateRunCharacter();
        this.applyGravity();
        this.animateJumpingCharacter();
        this.jumpAnimation();
        // this.attackAnimation();
        // this.fireballAnimation();
        // this.fireburstAnimation();

        this.mainPosiY = canvasHeight - this.height - 25;
        this.posiY = canvasHeight - this.height - 25;
    }

    animateIdle() {
        setInterval(() => {
            if (!this.moving && !this.jumping && !this.hurts && !this.playerDEAD) {
                this.playIdleAnimation(this.IMAGES_IDLE);
                console.log('idle');
            }
        }, 225);
    }

    animateWalkingCharacter() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && !this.running && this.posiX < this.world.lvl.lvl_end && !this.playerDEAD) {
                this.posiX += this.speedWalk;
                this.otherDirection = false;
            }
            
            if (this.world.keyboard.LEFT && !this.running && this.posiX > 0 && !this.playerDEAD) {
                this.posiX -= this.speedWalk;
                this.otherDirection = true;
            }

            if (this.posiX > 500) {
                this.world.cam_X = this.posiX - 500;
            }
        }, 1000 /60);

        setInterval(() => {
            this.walking_sound.pause();
            this.walking_sound.volume = 0.2;
            if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && !this.running && !this.jumping && !this.hurts && !this.playerDEAD) {                
                this.playMoveAnimation(this.IMAGES_WALK);
                this.moving = true;
                this.walking = true;
                this.running = false;
                this.currentImageIdle = 0;
                this.walking_sound.play();
            } else {
                this.walking_sound.currentTime = 0;
                if (!this.running) {
                    this.moving = false;
                    this.currentImageWalk = 0;
                }
            }
        }, 125);         
    }

    animateRunCharacter() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.world.keyboard.RUN && this.posiX < this.world.lvl.lvl_end && !this.playerDEAD) {
                this.posiX += this.speedRun;
                this.otherDirection = false;
            }
            
            if (this.world.keyboard.LEFT && this.world.keyboard.RUN && this.posiX > 0) {
                this.posiX -= this.speedRun;
                this.otherDirection = true;
            }

            if (this.posiX > 500) {
                this.world.cam_X = this.posiX - 500;
            }
        }, 1000 /60);

        setInterval(() => {
            this.running_sound.pause();
            this.running_sound.volume = 0.3;
            this.running_sound.playbackRate = 1.1;
            if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.world.keyboard.RUN && !this.jumping && !this.hurts && !this.playerDEAD) {                
                this.playMoveAnimation(this.IMAGES_RUN);
                this.moving = true;
                this.running = true;
                this.walking = false;
                this.currentImageIdle = 0;
                this.running_sound.play();
            } else {
                if (!this.walking) {
                    this.moving = false;
                    this.running = false;
                    this.currentImageWalk = 0;
                }
            }
        }, 125);   
    }

    animateJumpingCharacter() {
        setInterval(() => {
            this.jumping_sound.playbackRate = 1;
            if (this.world.keyboard.JUMP && !this.isAboveGround() && !this.playerDEAD) {
                this.jump(18);
                this.jumping_sound.play();
            }
        }, 1000 / 60);
    }

    jumpAnimation() {
        setInterval(() => {
            if (this.gravitaSpeed > 0) {
                this.loadImage(this.IMAGES_JUMP[0]);
                this.jumping = true;
            } else if (this.gravitaSpeed < 0) {
                this.loadImage(this.IMAGES_JUMP[1]);
                this.jumping = true;
            }
        }, 1000 / 60);
    }

    animateHurts() {
        if (this.LP > 0) {
            this.hurts = true;
            const hurtsInterval = setInterval(() => {
                this.playActionAnimation(this.IMAGES_HURT);
                this.intervalSequenz++;
                console.log('hurts');
                if (this.intervalSequenz === this.IMAGES_HURT.length) {
                    clearInterval(hurtsInterval);
                    this.intervalSequenz = 0;
                    this.hurts = false;
                }
            }, 100);
        } else {
            this.playerDEAD = true;
            const deadInterval = setInterval(() => {
                this.playActionAnimation(this.IMAGES_DEAD);
                this.intervalSequenz++;
                console.log('dead');
                if (this.intervalSequenz === this.IMAGES_DEAD.length) {
                    clearInterval(deadInterval);
                    this.intervalSequenz = 0;
                }
            }, 200);
        }
    }

    // attackAnimation() {
    //         if (this.world.keyboard.ATTACK1) {
    //             this.playActionAnimation(this.IMAGES_ATTACK1);
    //         }
    // }
}
class SmallDragon extends MovableObject {
    width = 128;
    height = 128;

    hitBoxWidth = 65;
    hitBoxHeight = 30;
    hitBoxX = 45;
    hitBoxY = 50;

    speed = 0.5;
    LP = 30;
    MP = 0;
    doesDMG = 20;

    IMAGES_IDLE = [
        'img/wizard-saga/monsters/PNG/small_dragon/Idle1.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Idle2.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Idle3.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Idle2.png'
    ];

    IMAGES_WALKING = [
        'img/wizard-saga/monsters/PNG/small_dragon/Walk1.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Walk2.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Walk3.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Walk4.png',
    ];

    IMAGES_ATTACK = [
        'img/wizard-saga/monsters/PNG/small_dragon/Attack1.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Attack2.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Attack3.png'
    ];

    IMAGES_HURT = [
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt1.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt1.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt1.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt2-light.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt2.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt2-light.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt2.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt2-light.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt1.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt1.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt1-light.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Hurt1.png'
    ];

    IMAGES_DEAD = [
        'img/wizard-saga/monsters/PNG/small_dragon/Death1.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Death2.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Death3.png',
        'img/wizard-saga/monsters/PNG/small_dragon/Death4.png'
    ];

    constructor(posiX, placeToMove) {
        super().loadImage('img/wizard-saga/monsters/PNG/small_dragon/Idle1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animateIdle();
        this.checkPosition();
        this.randomAttack();

        if (placeToMove) {
            this.mainPosiX = posiX + Math.random() * 300;
        } else {
            this.mainPosiX = posiX;
        }
        this.posiX = this.mainPosiX;
        this.posiY = canvasHeight - this.height + 20;
        this.walkArea = 300;
    }

    randomAttack() {
        setInterval(() => {
            if (!this.attackDelay && !this.hurts) {
                this.attackDelay = true;
                const randomDelay = Math.floor(Math.random() * (8000 - 4000 + 1)) + 4000;
                setTimeout(() => {
                    this.doesDMG = 30;
                    this.hitBoxX = 15;
					this.hitBoxWidth = 95;
                    this.enemyAttack();
                }, randomDelay);
            }
        }, 250);
    }

    enemyAttack() {
        const enemyAttackInterV = setInterval(() => {
            this.playActionAnimation(this.IMAGES_ATTACK);
            this.attack = true;
            this.currentImageAttack++;
            this.stopWalkingEnemies();

            if (this.currentImageAttack >= this.IMAGES_ATTACK.length) {
                clearInterval(enemyAttackInterV);
                this.enemyDirection();
                this.doReset();
                this.resetImageCache();
            }
        }, 225);
    }

    doReset() {
        this.attack = false;
        this.attackDelay = false;
        this.doesDMG = 20;
        this.hitBoxX = 45;
        this.hitBoxWidth = 65;
    }
}
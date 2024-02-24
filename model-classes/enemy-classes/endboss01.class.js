class Endboss01 extends MovableObject {
    width = 175;
    height = 175;
    
    hitBoxWidth = 60;
    hitBoxHeight = 90;
    hitBoxX = 70;
    hitBoxY = 45;

    speed = 0.5;
    LP = 150;
    MP = 100;
    doesDMG = 30;

    endbossAttackInterV;
    endBoss = true;

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

    IMAGES_ATTACK = [
        'img/wizard-saga/monsters/PNG/medusa/Attack1.png',
        'img/wizard-saga/monsters/PNG/medusa/Attack2.png',
        'img/wizard-saga/monsters/PNG/medusa/Attack3.png',
        'img/wizard-saga/monsters/PNG/medusa/Attack4.png',
        'img/wizard-saga/monsters/PNG/medusa/Attack5.png',
        'img/wizard-saga/monsters/PNG/medusa/Attack6.png'
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
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animateIdle();
        this.checkPosition();

        this.mainPosiX = 9760
        this.posiX = this.mainPosiX;
        this.posiY = canvasHeight - this.height + 15;
    }

    /**
     * Calculate when Medusa will attack.
     */
    randomAttack() {
        this.endbossAttackInterV = setInterval(() => {
            if (!this.attackDelay && !this.hurts) {
                this.attackDelay = true;
                const randomDelay = Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500;
                setTimeout(() => {
                    this.enemyAttack();
                }, randomDelay);
            }
        }, 250);
    }

    /**
     * Causes Medusa to attack.
     */
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

    /**
     * Reset Image Caches after Attack.
     */
    doReset() {
        this.enemyDoesAttack = true;
        this.attack = false;
        this.attackDelay = false;
        this.doesDMG = 0;
    }
}
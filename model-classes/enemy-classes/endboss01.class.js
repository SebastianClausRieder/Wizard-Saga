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

        this.posiX = 9760;
        this.posiY = canvasHeight - this.height + 15;
    }

    animateIdle() {
        setInterval(() => {
                if (this.standing && !this.attack) {
                    this.playIdleAnimation(this.IMAGES_IDLE);
                }
        }, 225);
    }

    checkPosition() {
        this.bossWalkingInterval = setInterval(() => {
            const randomDelay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
            if (this.posiX <= 9600 && !this.isMovingRight) {
                this.letMoveRight(randomDelay);
            } else if (this.posiX >= 9750 && !this.isMovingLeft) {
                this.letMoveLeft(randomDelay);
            }
        }, 250);
    }

    letMoveRight (randomDelay) {
        this.isMovingRight = true;
        this.isMovingLeft = false;
        this.standing = true;
        this.stopWalkingBoss(this.movingLeftInterval);
        setTimeout(() => {
            this.currentImageIdle = 0;
            this.currentImageWalk = 0;
            if (this.hurts) {
                setTimeout(() => {
                    this.animateWalkingEnemies(225);
                    this.beginMoveRight();
                }, 1500);
            } else {
                this.animateWalkingEnemies(225);
                this.beginMoveRight()
             }
        }, randomDelay);
    }

    beginMoveRight() {
        this.standing = false;
        this.moveRight(this.speed, 1000 / 60)
    }

    letMoveLeft(randomDelay) {
        this.isMovingRight = false;
        this.isMovingLeft = true;
        this.standing = true;
        this.stopWalkingBoss(this.movingRightInterval);
        setTimeout(() => {
            this.currentImageIdle = 0;
            this.currentImageWalk = 0;
            if (this.hurts) {
                setTimeout(() => {
                    this.animateWalkingEnemies(225);
                    this.beginMoveLeft();
                }, 1500);
            } else {
                this.animateWalkingEnemies(225);
                this.beginMoveLeft();
            }
        }, randomDelay);
    }

    beginMoveLeft() {
        this.standing = false;
        this.moveLeft(this.speed, 1000 / 60);
    }

    endbossDirection() {
        if (this.isMovingLeft && !this.standing) {
            this.moveLeft(this.speed, 1000 / 60);
            this.animateWalkingEnemies(225);
        } else if (this.isMovingRight && !this.standing) {
            this.moveRight(this.speed, 1000 / 60);
            this.animateWalkingEnemies(225);
        }
    }

    stopWalkingBoss(movingInterval) {
        clearInterval(movingInterval);
        clearInterval(this.walkingInterval);

    }

    randomAttack() {
        setInterval(() => {
            if (!this.attackDelay && !this.hurts) {
                this.attackDelay = true;
                const randomDelay = Math.floor(Math.random() * (5000 - 2500 + 1)) + 2500;
                console.log(randomDelay);
                setTimeout(() => {
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
            console.log('enemy attack');

            if (this.currentImageAttack >= this.IMAGES_ATTACK.length) {
                clearInterval(enemyAttackInterV);
                this.enemyDoesAttack = true;
                this.endbossDirection();
                this.checkPosition();
                this.attack = false;
                this.attackDelay = false;
                this.doesDMG = 0;
                this.resetImageCache();
            }
        }, 225);
    }

    removeFromMap() {
        this.toBeRemoved = true;
    }
}
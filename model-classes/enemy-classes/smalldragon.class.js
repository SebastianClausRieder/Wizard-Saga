class SmallDragon extends MovableObject {
    width = 128;
    height = 128;

    hitBoxWidth = 65;
    hitBoxHeight = 30;
    hitBoxX = 45;
    hitBoxY = 50;

    speed = 0.5;
    LP = 5;
    MP = 100;
    doesDMG = 10;

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

    constructor(posiX) {
        super().loadImage('img/wizard-saga/monsters/PNG/small_dragon/Idle1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.checkPosition();
        this.randomAttack();

        this.mainPosiX = posiX + Math.random() * 600;
        this.posiX = this.mainPosiX;
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
        this.draogonWalkingInterval = setInterval(() => {
            const randomDelay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
            if (this.posiX <= this.mainPosiX && !this.isMovingRight) {
                this.letMoveRight(randomDelay);
            } else if (this.posiX >= this.mainPosiX + 300 && !this.isMovingLeft) {
                this.letMoveLeft(randomDelay);
            } else if (!this.isMovingLeft && !this.isMovingRight) {
                this.letMoveLeft(randomDelay);
            }
        }, 250);
    }

    letMoveRight(randomDelay) {
        this.isMovingRight = true;
        this.isMovingLeft = false;
        this.standing = true;
        this.stopWalkingBoss(this.movingLeftInterval);
        setTimeout(() => {
            this.otherDirection = true;
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
                this.otherDirection = false;
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
                const randomDelay = Math.floor(Math.random() * (8000 - 4000 + 1)) + 4000;
                setTimeout(() => {
                    this.doesDMG = 15;
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
                this.endbossDirection();
                this.checkPosition();
                this.attack = false;
                this.attackDelay = false;
                this.doesDMG = 10;
                this.hitBoxX = 45;
								this.hitBoxWidth = 65;
                this.resetImageCache();
            }
        }, 225);
    }
}
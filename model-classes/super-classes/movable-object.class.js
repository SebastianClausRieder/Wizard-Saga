class MovableObject extends DrawableObject {
    hitBoxWidth;
    hitBoxHeight;
    hitBoxX;
    hitBoxY;

    otherDirection = false;

    walkingInterval;
    movingInterval;

    speed = 0.1;

    gravitaSpeed = 0;
    acceleration = 1.5;

    LP;
    MP;
    doesDMG;

    firstChance = 0;
    secondChance = 0;
    thirdChance = 0;

    intervalSequenz = 0;

    jumping = false;
    hurts = false;
    dead = false;
    attack = false;
    toBeRemoved = false;

    world;

    animation() {
        this.moveLeft(0.1, 1000 / 60);
    }

    animateIdle() {
        setInterval(() => {
            this.playIdleAnimation(this.IMAGES_IDLE);
        }, 225);
    }

    animateWalkingEnemies(fps) {
        this.walkingInterval = setInterval(() => {
            this.playMoveAnimation(this.IMAGES_WALKING);
        }, fps);
    }

    playIdleAnimation(IMAGES) {
        let i = this.currentImageIdle % IMAGES.length;
        this.images(IMAGES, i);
        this.currentImageIdle++;
    }

    playMoveAnimation(IMAGES) {
        let i = this.currentImageWalk % IMAGES.length;
        this.images(IMAGES, i);
        this.currentImageWalk++;
    }

    playActionAnimation(IMAGES) {
        let i = this.currentImageAction % IMAGES.length;
        this.images(IMAGES, i);
        this.currentImageAction++;
    }

    images(IMAGES, i) {
        let path = IMAGES[i];
        this.img = this.imageCache[path];
    }

    moveRight() {

    }

    moveLeft(speed, fps) {
        this.movingInterval = setInterval(() => {
            this.posiX -= speed;
        }, fps);
    }

    jump(height) {
        this.gravitaSpeed = height;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.gravitaSpeed > 0) {
                this.posiY -= this.gravitaSpeed;
                this.gravitaSpeed -= this.acceleration;
            } else {
                this.posiY = this.mainPosiY;
                this.gravitaSpeed = 0;
                this.jumping = false;
            }
        }, 1000 / 30);
    }

    isAboveGround() {
        return this.posiY < this.mainPosiY
    }

    isColliding(mo) {
        return this.posiX + this.hitBoxX + this.hitBoxWidth > mo.posiX + mo.hitBoxX &&
            this.posiY + this.hitBoxY + this.hitBoxHeight > mo.posiY + mo.hitBoxY &&
            this.posiX + this.hitBoxX < mo.posiX + mo.hitBoxX + mo.hitBoxWidth &&
            this.posiY + this.hitBoxY < mo.posiY + mo.hitBoxY + mo.hitBoxHeight;
    }

    // Checken, ob du den Gegner von oben triffst
    isHittingFromAbove(mo) {
        return (
            this.posiY + this.hitBoxY < mo.posiY + mo.hitBoxY + mo.hitBoxHeight &&
            this.posiY + this.hitBoxY > mo.posiY &&
            this.posiX + this.hitBoxX < mo.posiX + mo.hitBoxX + mo.hitBoxWidth &&
            this.posiX + this.hitBoxX + this.hitBoxWidth > mo.posiX + mo.hitBoxX
        );
    }

    animateHurts(IMAGES_HURT) {
        this.hurts = true;
        const hurtsInterval = setInterval(() => {
            this.playActionAnimation(IMAGES_HURT);
            this.intervalSequenz++;
            console.log('hurts');
            if (this.intervalSequenz > IMAGES_HURT.length) {
                clearInterval(hurtsInterval);
                this.intervalSequenz = 0;
                this.currentImageAction = 0;
                this.hurts = false;
            }
        }, 100);
    }

    animateDeath(IMAGES_DEAD) {
        const deadInterval = setInterval(() => {
            this.playActionAnimation(IMAGES_DEAD);
            this.intervalSequenz++;
            console.log('Sequenz', this.intervalSequenz);
            if (this.intervalSequenz >= IMAGES_DEAD.length) {
                clearInterval(deadInterval);
                this.intervalSequenz = 0;
                this.currentImageAction = 0;
                console.log('Sequenz end', this.intervalSequenz);
            }
        }, 100);
    }

    stopWalkingEnemies() {
        clearInterval(this.walkingInterval);
        clearInterval(this.movingInterval);
    }

    dropItem() {

    }
}
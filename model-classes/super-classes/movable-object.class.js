class MovableObject extends DrawableObject {
    hitBoxWidth;
    hitBoxHeight;
    hitBoxX;
    hitBoxY;

    otherDirection = false;
    
    speed = 0.1;

    gravitaSpeed = 0;
    acceleration = 1.5;

    LP;
    MP;
    doesDMG;

    jumping;
    hurts;
    attack = false;

    animation() {
        this.moveLeft(0.1, 1000 / 60);
    }

    animateIdle() {
        setInterval(() => {
            this.playIdleAnimation(this.IMAGES_IDLE);
        }, 225);
    }

    animateWalkingEnemies(fps) {
        setInterval(() => {
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
        setInterval(() => {
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
        return  this.posiX + this.hitBoxX + this.hitBoxWidth > mo.posiX + mo.hitBoxX &&
                this.posiY + this.hitBoxY + this.hitBoxHeight > mo.posiY + mo.hitBoxY &&
                this.posiX + this.hitBoxX < mo.posiX + mo.hitBoxX &&
                this.posiY + this.hitBoxY < mo.posiY + mo.hitBoxY + mo.height + mo.hitBoxHeight;
    }
}
class MovableObject extends DrawableObject {
    hitBoxWidth;
    hitBoxHeight;
    hitBoxX;
    hitBoxY;

    otherDirection = false;

    walkingInterval;
    movingRightInterval;
    movingLeftInterval;

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
    falling = false;
    hurts = false;
    dead = false;
    attack = false;
    toBeRemoved = false;
    isMovingLeft = false;
    isMovingRight = false;
    standing = false;
    attackDelay = false;
    enemyDoesAttack = false;
    collidingPlatformLeft = false;
    collidingPlatformRight = false;

    firstChance = 0.5; // Höhere Chance für erste Variable
    secondChance = 0.3; // Mittlere Chance für zweite Variable
    thirdChance = 0.2; // Geringere Chance für dritte Variable


    world;

    animation() {
        this.moveLeft(0.1, 1000 / 60);
    }

    bgAnimation() {
        this.moveRight(0.03, 1000 / 60);
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

    resetImageCache() {
        this.currentImageAction = 0;
        this.currentImageAttack = 0;
        this.currentImageIdle = 0;
        this.currentImageWalk = 0;
    }

    moveRight(speed, fps) {
        this.movingRightInterval = setInterval(() => {
            this.posiX += speed;
        }, fps);
    }

    moveLeft(speed, fps) {
        this.movingLeftInterval = setInterval(() => {
            this.posiX -= speed;
        }, fps);
    }

    jump(height) {
        this.gravitaSpeed = height;
    }

    applyGravity() {
        const gravityInterV = setInterval(() => {
            if (this.isAboveGround() || this.gravitaSpeed > 0) {
                this.posiY -= this.gravitaSpeed;
                this.gravitaSpeed -= this.acceleration;
            } else {
                this.posiY = this.mainPosiY;
                this.gravitaSpeed = 0;
                this.falling = false;
            }

            if (!this.isAboveGround()) {
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

    isCollidingLeft(mo) {
        const charBottom = this.posiY + this.hitBoxY + this.hitBoxHeight;
        const platformTop = mo.posiY + mo.hitBoxY;
        const charRight = this.posiX + this.hitBoxX + this.hitBoxWidth;
        const platformLeft = mo.posiX + mo.hitBoxX;
    
        return (
            charBottom >= platformTop && // Charakter untere Kante über oder auf der Plattform oberen Kante
            this.posiY + this.hitBoxY < mo.posiY + mo.hitBoxY + mo.hitBoxHeight && // Charakter obere Kante unter oder auf der Plattform unteren Kante
            this.posiX + this.hitBoxX < platformLeft && // Charakter rechte Seite links von der Plattform
            charRight > platformLeft // Charakter rechte Seite rechts von der Plattform
        );
    }

    isCollidingRight(mo) {
        const charBottom = this.posiY + this.hitBoxY + this.hitBoxHeight;
        const platformTop = mo.posiY + mo.hitBoxY;
        const charLeft = this.posiX + this.hitBoxX;
        const platformRight = mo.posiX + mo.hitBoxX + mo.hitBoxWidth;
    
        return (
            charBottom >= platformTop && // Charakter untere Kante über oder auf der Plattform oberen Kante
            this.posiY + this.hitBoxY < mo.posiY + mo.hitBoxY + mo.hitBoxHeight && // Charakter obere Kante unter oder auf der Plattform unteren Kante
            charLeft < platformRight && // Charakter linke Seite links von der Plattform
            charLeft + this.hitBoxWidth > platformRight // Charakter rechte Seite rechts von der Plattform
        );
    }

    isHittingFromAbove(mo) {
        const charBottom = this.posiY + this.hitBoxY + this.hitBoxHeight;
        const enemyTop = mo.posiY + mo.hitBoxY;
        
        return (
            charBottom <= enemyTop && charBottom - mo.posiY >= 0 &&// Charakter untere Kante über Gegner obere Kante
            this.posiX + this.hitBoxX < mo.posiX + mo.hitBoxX + mo.hitBoxWidth &&
            this.posiX + this.hitBoxX + this.hitBoxWidth > mo.posiX + mo.hitBoxX
        );
    }

    animateHurts(IMAGES_HURT) {
        this.hurts = true;
        const hurtsInterval = setInterval(() => {
            this.playActionAnimation(IMAGES_HURT);
            this.intervalSequenz++;
            if (this.intervalSequenz > IMAGES_HURT.length) {
                clearInterval(hurtsInterval);
                this.intervalSequenz = 0;
                this.currentImageAction = 0;
                this.hurts = false;
            }
        }, 100);
    }

    animateDeath(IMAGES_DEAD) {
        this.dead = true;
        const deadInterval = setInterval(() => {
            this.playActionAnimation(IMAGES_DEAD);
            this.intervalSequenz++;
            if (this.intervalSequenz >= IMAGES_DEAD.length) {
                clearInterval(deadInterval);
                this.intervalSequenz = 0;
                this.currentImageAction = 0;
            }
        }, 100);
    }

    stopWalkingEnemies() {
        clearInterval(this.walkingInterval);
        clearInterval(this.movingRightInterval);
        clearInterval(this.movingLeftInterval);
    }

    // Item Drop

    firstVariable(IMAGE_ARRAY) {
        this.dropAnimation(IMAGE_ARRAY[0])
        this.value += 5;
        setTimeout(() => {
            this.itemDrop(IMAGE_ARRAY);
        }, 1500);
    }

    secondVariable(IMAGE_ARRAY) {
        this.dropAnimation(IMAGE_ARRAY[0])
        this.value += 10;
        setTimeout(() => {
            this.itemDrop(IMAGE_ARRAY);
        }, 1500);
    }

    thirdVariable(IMAGE_ARRAY) {
        this.dropAnimation(IMAGE_ARRAY[0])
        this.value += 20;
        setTimeout(() => {
            this.itemDrop(IMAGE_ARRAY);
        }, 1500);
    }

    dropAnimation(IMAGE) {
        this.loadImage(IMAGE);
        this.gravitaSpeed = 10;
        this.applyGravity();
    }

    itemDrop(IMAGES) {
        setInterval(() => {
            this.playActionAnimation(IMAGES);
        }, 250);
    }
}
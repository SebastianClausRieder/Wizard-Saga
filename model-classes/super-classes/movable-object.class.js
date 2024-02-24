class MovableObject extends DrawableObject {
    hitBoxWidth;
    hitBoxHeight;
    hitBoxX;
    hitBoxY;

    otherDirection = false;

    walkingInterval;
    movingRightInterval;
    movingLeftInterval;
    hurtsInterval;

    speed = 0.1;
    walkArea = 150;

    gravitaSpeed = 0;
    acceleration = 1.5;

    LP;
    MP;
    doesDMG;

    skill;
    currentSkillIcon;
    totemSkillIsLearnd = false;

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
    standing = true;
    endBoss = false;
    attackDelay = false;
    enemyDoesAttack = false;
    collidingPlatformLeft = false;
    collidingPlatformRight = false;
    collidedPlatform = false;
    onLoad = false;

    firstChance = 0.5; // Higher chance for first variable      \
    secondChance = 0.3; // Medium chance for second variable     > must add up to 1!
    thirdChance = 0.2; // Lower chance for third variable       /


    world;

    /**
     * Allows the object to move to the right.
     * @param {number} speed determines how fast the object is moving.
     * @param {number} fps speed of repetition rate.
     */
    moveRight(speed, fps) {
        this.movingRightInterval = setInterval(() => {
            this.posiX += speed;
        }, fps);
    }

    /**
     * Allows the object to move to the left.
     * @param {number} speed determines how fast the object is moving.
     * @param {number} fps speed of repetition rate.
     */
    moveLeft(speed, fps) {
        this.movingLeftInterval = setInterval(() => {
            this.posiX -= speed;
        }, fps);
    }

    /**
     * Checks what position the opponent is currently in and lets him continue in the right direction after taking a short break.
     */
    checkPosition() {
        setInterval(() => {
            const randomDelay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
            if (this.posiX <= this.mainPosiX && !this.isMovingRight) {
                this.letMoveRight(randomDelay);
            } else if (this.posiX >= this.mainPosiX + this.walkArea && !this.isMovingLeft) {
                this.letMoveLeft(randomDelay);
            } else if (!this.isMovingLeft && !this.isMovingRight) {
                this.letMoveLeft(randomDelay);
            }
        }, 250);
    }

    /**
     * Allows the opponent to continue moving to the right after their pause.
     * @param {number} randomDelay determines the duration of the break.
     */
    letMoveRight(randomDelay) {
        this.isMovingRight = true;
        this.isMovingLeft = false;
        this.standing = true;
        this.stopWalkingEnemies();
        setTimeout(() => {
            this.doOtherDirection('right');
            this.currentImageIdle = 0;
            this.currentImageWalk = 0;
            this.startMoving('Right');
        }, randomDelay);
    }

    /**
     * Starts the moving.
     */
    beginMoveRight() {
        this.standing = false;
        this.moveRight(this.speed, 1000 / 60)
    }

    /**
     * Allows the opponent to continue moving to the left after their pause.
     * @param {number} randomDelay determines the duration of the break.
     */
    letMoveLeft(randomDelay) {
        this.isMovingRight = false;
        this.isMovingLeft = true;
        this.standing = true;
        this.stopWalkingEnemies();
        setTimeout(() => {
            this.doOtherDirection('left');
            this.currentImageIdle = 0;
            this.currentImageWalk = 0;
            this.startMoving('Left');
        }, randomDelay);
    }

    /**
     * Starts the moving.
     */
    beginMoveLeft() {
        this.standing = false;
        this.moveLeft(this.speed, 1000 / 60);
    }

    /**
     * Changes the direction in which the opponent moves.
     * @param {string} moveDirection current move direction.
     */
    doOtherDirection(moveDirection) {
        if (this.endBoss) {

        } else {
            if (moveDirection == 'right') {
                this.otherDirection = true;
            } else {
                this.otherDirection = false;
            }
        }
    }

    /**
     * Lets the opponent go in the right direction.
     * @param {string} moveDirection 
     */
    startMoving(moveDirection) {
        if (this.hurts) {
            setTimeout(() => {
                this.animateWalkingEnemies(225);
                this[`beginMove${moveDirection}`]();
            }, 2000);
        } else {
            this.animateWalkingEnemies(225);
            this[`beginMove${moveDirection}`]();
        }
    }

    /**
     * Stop all enemy movement animations.
     */
    stopWalkingEnemies() {
        clearInterval(this.walkingInterval);
        clearInterval(this.movingRightInterval);
        clearInterval(this.movingLeftInterval);
    }

    /**
     * Checks which direction the opponent ran before receiving or dealing an attack.
     */
    enemyDirection() {
        if (this.isMovingLeft && !this.standing) {
            this.moveLeft(this.speed, 1000 / 60);
            this.animateWalkingEnemies(225);
        } else if (this.isMovingRight && !this.standing) {
            this.moveRight(this.speed, 1000 / 60);
            this.animateWalkingEnemies(225);
        }
    }

    /**
     * Makes the character jump.
     * @param {number} height of Jump.
     */
    jump(height) {
        this.gravitaSpeed = height;
    }

    /**
     * Applies gravity.
     */
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

    /**
     * Checks whether you are higher than the main height.
     * @returns true or false.
     */
    isAboveGround() {
        return this.posiY < this.mainPosiY
    }

    /**
     * Checks whether you collided with an object.
     * @param {object} mo object you collided with.
     * @returns true or false.
     */
    isColliding(mo) {
        return this.posiX + this.hitBoxX + this.hitBoxWidth > mo.posiX + mo.hitBoxX &&
            this.posiY + this.hitBoxY + this.hitBoxHeight > mo.posiY + mo.hitBoxY &&
            this.posiX + this.hitBoxX < mo.posiX + mo.hitBoxX + mo.hitBoxWidth &&
            this.posiY + this.hitBoxY < mo.posiY + mo.hitBoxY + mo.hitBoxHeight;
    }

    /**
     * Checks whether you collided with an rock wall from left.
     * @param {object} mo object you collided with.
     * @returns true or false.
     */
    isCollidingLeft(mo) {
        const charBottom = this.posiY + this.hitBoxY + this.hitBoxHeight;
        const platformTop = mo.posiY + mo.hitBoxY;
        const charRight = this.posiX + this.hitBoxX + this.hitBoxWidth;
        const platformLeft = mo.posiX + mo.hitBoxX;
    
        return (
            charBottom >= platformTop && // Character bottom edge above or on the platform top edge
            this.posiY + this.hitBoxY < mo.posiY + mo.hitBoxY + mo.hitBoxHeight && // Character top edge under or on the platform bottom edge
            this.posiX + this.hitBoxX < platformLeft && // Character right side to the left of the platform
            charRight > platformLeft // Character right side to the right of the platform
        );
    }

    /**
     * Checks whether you collided with an rock wall from right.
     * @param {object} mo object you collided with.
     * @returns true or false.
     */
    isCollidingRight(mo) {
        const charBottom = this.posiY + this.hitBoxY + this.hitBoxHeight;
        const platformTop = mo.posiY + mo.hitBoxY;
        const charLeft = this.posiX + this.hitBoxX;
        const platformRight = mo.posiX + mo.hitBoxX + mo.hitBoxWidth;
    
        return (
            charBottom >= platformTop && // Character bottom edge above or on the platform top edge
            this.posiY + this.hitBoxY < mo.posiY + mo.hitBoxY + mo.hitBoxHeight && // Character top edge under or on the platform bottom edge
            charLeft < platformRight && // Charakter linke Seite links von der Plattform
            charLeft + this.hitBoxWidth > platformRight // Character right side to the right of the platform
        );
    }

    /**
     * Checks whether you collided with an enemy from above.
     * @param {object} mo object you collided with.
     * @returns true or false.
     */
    isHittingFromAbove(mo) {
        const charBottom = this.posiY + this.hitBoxY + this.hitBoxHeight;
        const enemyTop = mo.posiY + mo.hitBoxY;
        
        return (
            charBottom <= enemyTop && charBottom - mo.posiY >= 0 && // Character bottom edge over opponent top edge
            this.posiX + this.hitBoxX < mo.posiX + mo.hitBoxX + mo.hitBoxWidth &&
            this.posiX + this.hitBoxX + this.hitBoxWidth > mo.posiX + mo.hitBoxX
        );
    }

    /**
     * Checks whether you are standing under a platform.
     * @param {object} platform object you collided with.
     * @returns true or false.
     */
    isInPosiXFromPlatform(platform) {
        return (
            this.posiX + this.hitBoxX + this.hitBoxWidth >= platform.posiX + platform.hitBoxX &&
            this.posiX + this.hitBoxX <= platform.posiX + platform.hitBoxX + platform.hitBoxWidth
        );
    }

    /**
     * Checks whether you are standing on a platform.
     * @param {object} platform object you collided with.
     * @returns true or false.
     */
    isOverThePlatform(platform) {
        const charBottom = this.posiY + this.hitBoxY + this.hitBoxHeight;
        const platformTop = platform.posiY + platform.hitBoxY;

        return charBottom <= platformTop
    }

    /**
     * Plays the hurts animation.
     * @param {array} IMAGES_HURT for the hurts Animation.
     */
    animateHurts(IMAGES_HURT) {
        this.hurts = true;
        this.hurtsInterval = setInterval(() => {
            this.playActionAnimation(IMAGES_HURT);
            this.intervalSequenz++;
            if (this.intervalSequenz > IMAGES_HURT.length) {
                this.cancelHurts();
            }
        }, 100);
    }

    /**
     * Cancels the hurts animation.
     */
    cancelHurts() {
        clearInterval(this.hurtsInterval);
        this.intervalSequenz = 0;
        this.currentImageAction = 0;
        this.hurts = false;
    }

    /**
     * Plays the death animation.
     * @param {array} IMAGES_DEAD for the death Animation.
     */
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

    /**
     * Gives defeated enemies the status "toBeRemoved = true" so that the system knows that they can be deleted from the array.
     */
    removeFromMap() {
        this.toBeRemoved = true;
    }

    // Item Drop

    /**
     * Determines the value of the item based on the drop chance.
     * @param {array} IMAGE_ARRAY Item Array
     */
    firstVariable(IMAGE_ARRAY) {
        this.value += 5;
        this.dropItem(IMAGE_ARRAY);
    }

    /**
     * Determines the value of the item based on the drop chance.
     * @param {array} IMAGE_ARRAY Item Array
     */
    secondVariable(IMAGE_ARRAY) {
        this.value += 10;
        this.dropItem(IMAGE_ARRAY);
    }

    /**
     * Determines the value of the item based on the drop chance.
     * @param {array} IMAGE_ARRAY Item Array
     */
    thirdVariable(IMAGE_ARRAY) {
        this.value += 20;
        this.dropItem(IMAGE_ARRAY);
    }

    /**
     * Starts the drop animation.
     * @param {array} IMAGE_ARRAY Item Array
     */
    dropItem(IMAGE_ARRAY) {
        this.dropAnimation(IMAGE_ARRAY[0])
        setTimeout(() => {
            this.itemDrop(IMAGE_ARRAY);
        }, 1500);
    }

    /**
     * Drop Animation.
     * @param {string} IMAGE single image for the drop animation.
     */
    dropAnimation(IMAGE) {
        this.loadImage(IMAGE);
        this.gravitaSpeed = 10;
        this.applyGravity();
    }

    /**
     * Plays the item animation.
     * @param {array} IMAGES Item Array
     */
    itemDrop(IMAGES) {
        setInterval(() => {
            this.playActionAnimation(IMAGES);
        }, 250);
    }

    // Audio

    /**
     * Plays a sound.
     * @param {audio} sound what will Played.
     * @param {number} speed in which the sound is played.
     */
    playAudio(sound, speed) {
        sound.pause();
        sound.volume = 1;
        sound.playbackRate = speed;
        sound.play();
    }
}
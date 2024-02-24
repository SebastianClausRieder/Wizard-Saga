class DrawableObject {
    posiX = 80;
    posiY;

    mainPosiY;

    width = 60;
    height = 60;

    img;
    imageCache = {};
    currentImageIdle = 0;
    currentImageWalk = 0;
    currentImageAction = 0;
    currentImageAttack = 0;

    enemyClasses = [Lizard, Demon, SmallDragon, Endboss01];
    attackClasses = [CharAttack1, CharAttack2, CharAttackFireball, CharAttackFireburst];
    itemClasses = [BlueMineral, RedMineral, BluePotion, RedPotion, Star];
    platformClasses = [Platform01, Platform02, Platform03, Platform04Wall, Platform05];
    usableObjectClasses = [UsableObjectDoor, UsableObjectChest, UsableObjectTotem];

    world;

    /**
     * Loads the default image of the object.
     * @param {string} path to the Image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads the array of objects.
     * @param {array} imageArray from the Object.
     */
    loadImages(imageArray) {
        imageArray.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Draws all objects into the canvas.
     * @param {context} ctx context from Canvas.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.posiX, this.posiY, this.width, this.height);
    }

    /**
     * Draws a frame around certain objects.
     * @param {context} ctx context from Canvas.
     */
    drawFrame(ctx) {
        if (this instanceof Character || this.isPlatformInstance(this) || this.isAttackInstance(this) || this.isEnemyInstance(this) || this.isItemInstance(this) || this.isUsableObjectInstance(this)) {
        
            // Voller Rahmen Original Bild
            ctx.beginPath();
            ctx.lineWidth = '6';
            ctx.strokeStyle = 'green';
            ctx.rect(this.posiX, this.posiY, this.width, this.height);
            ctx.stroke();

            // // Voller Rahmen HitBox
            // ctx.beginPath();
            // ctx.lineWidth = '4';
            // ctx.strokeStyle = 'yellow';
            // ctx.rect(this.posiX + this.hitBoxX, this.posiY + this.hitBoxY, this.hitBoxWidth, this.hitBoxHeight);
            // // ctx.rect(this.posiX, this.hitBoxWidth, this.posiY, this.hitBoxHeight);
            // ctx.stroke();

            // Linke Seite (z.B. rot)
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red'; // Linke Seite: Hier die gewünschte Farbe für die linke Seite des Characters
            ctx.moveTo(this.posiX + this.hitBoxX, this.posiY + this.hitBoxY);
            ctx.lineTo(this.posiX + this.hitBoxX, this.posiY + this.hitBoxY + this.hitBoxHeight);
            ctx.stroke();
        
            // Rechte Seite (z.B. blau)
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue'; // Rechte Seite: Hier die gewünschte Farbe für die rechte Seite des Characters
            ctx.moveTo(this.posiX + this.hitBoxX + this.hitBoxWidth, this.posiY + this.hitBoxY);
            ctx.lineTo(this.posiX + this.hitBoxX + this.hitBoxWidth, this.posiY + this.hitBoxY + this.hitBoxHeight);
            ctx.stroke();

            // Obere Seite (z.B. orange)
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'orange';
            ctx.moveTo(this.posiX + this.hitBoxX, this.posiY + this.hitBoxY);
            ctx.lineTo(this.posiX + this.hitBoxX + this.hitBoxWidth, this.posiY + this.hitBoxY);
            ctx.stroke();
        
            // Untere Seite (z.B. purple)
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'purple';
            ctx.moveTo(this.posiX + this.hitBoxX, this.posiY + this.hitBoxY + this.hitBoxHeight);
            ctx.lineTo(this.posiX + this.hitBoxX + this.hitBoxWidth, this.posiY + this.hitBoxY + this.hitBoxHeight);
            ctx.stroke();
        }
    }

    /**
     * Loops through an array and ...
     * @returns the classes in it.
     * @param {class} obj is class from drawable objects.
     */
    isAttackInstance(obj) {
        return this.attackClasses.some(attackClass => obj instanceof attackClass);
    }

    /**
     * Loops through an array and ...
     * @returns the classes in it.
     * @param {class} obj is class from drawable objects.
     */
    isEnemyInstance(obj) {
        return this.enemyClasses.some(enemyClass => obj instanceof enemyClass);
    }

    /**
     * Loops through an array and ...
     * @returns the classes in it.
     * @param {class} obj is class from drawable objects.
     */
    isItemInstance(obj) {
        return this.itemClasses.some(itemClass => obj instanceof itemClass);
    }

    /**
     * Loops through an array and ...
     * @returns the classes in it.
     * @param {class} obj is class from drawable objects.
     */
    isPlatformInstance(obj) {
        return this.platformClasses.some(platformClass => obj instanceof platformClass);
    }

    /**
     * Loops through an array and ...
     * @returns the classes in it.
     * @param {class} obj is class from drawable objects.
     */
    isUsableObjectInstance(obj) {
        return this.usableObjectClasses.some(usableObjectClass => obj instanceof usableObjectClass);
    }

    /**
     * Draw how many of the listed items you have.
     * @param {context} ctx context from Canvas.
     * @param {number} redMineral 
     * @param {number} blueMineral 
     * @param {number} redPotion 
     * @param {number} bluePotion 
     */
    drawText(ctx, redMineral, blueMineral, redPotion, bluePotion) {
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'gray';

        ctx.fillText(`${redMineral}`, 60, 122);
        ctx.fillText(`${blueMineral}`, 145, 122);
        ctx.fillText(`${redPotion}`, 305, 58);
        ctx.fillText(`${bluePotion}`, 305, 88);
    }

    /**
     * Draws the life bar and/or the mana bar.
     * @param {number} percentage from your Health or Mana Points.
     * @param {Array} BAR is an Image Array from your Health or Mana Bar.
     */
    setPercentage(percentage, BAR) {
        let path = this.resolveImageIndex(percentage, BAR);
        this.img = this.imageCache[path];
    }

    /**
     * Draws the life bar and/or the mana bar.
     * @param {number} percentage from your Health or Mana Points.
     * @param {Array} BAR is an Image Array from your Health or Mana Bar.
     * @returns What capacity the bar should have.
     */
    resolveImageIndex(percentage, BAR) {
        if (percentage > 0 && percentage <= 100) {
            return BAR[Math.floor((20 * percentage) / 100)];
        } else if (percentage <= 0) {
            return BAR[0];
        }
    }

    // animation() {
    //     this.moveLeft(0.1, 1000 / 60);
    // }

    /**
     * Makes the background clouds move to the right.
     */
    bgAnimation() {
        this.moveRight(0.03, 1000 / 60);
    }

    /**
     * Controls the Idel function.
     */
    animateIdle() {
        setInterval(() => {
            if (this.standing && !this.attack) {
                this.playIdleAnimation(this.IMAGES_IDLE);
            }
        }, 225);
    }

    /**
     * Starts the enemy's movement animation.
     * @param {number} fps speed of repetition rate.
     */
    animateWalkingEnemies(fps) {
        this.walkingInterval = setInterval(() => {
                this.playMoveAnimation(this.IMAGES_WALKING);
        }, fps);
    }

    /**
     * Plays the idle animationd.
     * @param {array} IMAGES array of Idle.
     */
    playIdleAnimation(IMAGES) {
        let i = this.currentImageIdle % IMAGES.length;
        this.images(IMAGES, i);
        this.currentImageIdle++;
    }

    /**
     * Plays the move animationd.
     * @param {array} IMAGES array of Move.
     */
    playMoveAnimation(IMAGES) {
        let i = this.currentImageWalk % IMAGES.length;
        this.images(IMAGES, i);
        this.currentImageWalk++;
    }

    /**
     * Plays the action animations.
     * @param {array} IMAGES of Action.
     */
    playActionAnimation(IMAGES) {
        let i = this.currentImageAction % IMAGES.length;
        this.images(IMAGES, i);
        this.currentImageAction++;
    }

    /**
     * Loads the individual frames of an animation into an image cache
     * @param {array} IMAGES from the Animation.
     * @param {index} i index from the Array.
     */
    images(IMAGES, i) {
        let path = IMAGES[i];
        this.img = this.imageCache[path];
    }

    /**
     * Resets all image caches.
     */
    resetImageCache() {
        this.currentImageAction = 0;
        this.currentImageAttack = 0;
        this.currentImageIdle = 0;
        this.currentImageWalk = 0;
    }

    // Skills

    usable = false;
    unusable = false;

    /**
     * Check whether there is still enough mana available for the skill and gray it out if this is not the case.
     * @param {number} withULM with Use less Mana.
     * @param {number} withoutULM without Use less Mana.
     * @param {string} skillImage default Image.
     * @param {string} skillImageDark dark default Image.
     */
    characterHaveEnoughMana(withULM, withoutULM, skillImage, skillImageDark) {
        setInterval(() => {
            if (this.world.character.useLessManaActive) {
                if (this.world.character.MP >= withULM) {
                    this.setSkillImage(skillImage);
                } else {
                    this.setSkillImageDark(skillImageDark);
                }
            } else if (this.world.character.MP >= withoutULM) {
                this.setSkillImage(skillImage);
            } else {
                this.setSkillImageDark(skillImageDark);
            }
        }, 100);
    }

    /**
     * Check whether there are enough minerals available to use the skill and gray it out if this is not the case.
     * @param {number} consumption of the skill.
     * @param {string} skillImage default Image.
     * @param {string} skillImageDark dark default Image.
     */
    characterHaveEnoughBlueMinerals(consumption, skillImage, skillImageDark) {
        setInterval(() => {
            if (this.world.blueMineralStatusBar.collectedBlueMineral >= consumption) {
                this.setSkillImage(skillImage);
            } else {
                this.setSkillImageDark(skillImageDark);
            }
        }, 100);
    }

    /**
     * Check whether there are enough minerals available to use the skill and gray it out if this is not the case.
     * @param {number} consumption of the skill.
     * @param {string} skillImage default Image.
     * @param {string} skillImageDark dark default Image.
     */
    characterHaveEnoughRedMinerals(consumption, skillImage, skillImageDark) {
        setInterval(() => {
            if (this.world.redMineralStatusBar.collectedRedMineral >= consumption) {
                this.setSkillImage(skillImage);
            } else {
                this.setSkillImageDark(skillImageDark);
            }
        }, 100);
    }

    /**
     * Load the current Skill Icon.
     * @param {string} skillImage default Image.
     */
    setSkillImage(skillImage) {
        if (!this.usable) {
            this.usable = true; this.unusable = false;
            this.currentSkillIcon = skillImage;
            this.loadImage(skillImage);
        }
    }

    /**
     * Load the current Skill Icon.
     * @param {string} skillImageDark dark default Image.
     */
    setSkillImageDark(skillImageDark) {
        if (!this.unusable) {
            this.unusable = true; this.usable = false;
            this.currentSkillIcon = skillImageDark;
            this.loadImage(skillImageDark);
        }
    }
}
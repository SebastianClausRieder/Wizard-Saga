class WorldTwo {
    world;

    /**
     * Checks if you jump on a Lizard.
     */
    checkJumpOnLizard() {
        this.world.lvl.enemies.forEach((enemy) => {
            if (enemy instanceof Lizard) {
                if (this.world.character.isHittingFromAbove(enemy) && !enemy.dead && !this.world.character.hurts && this.world.character.posiY >= 335) {
                    enemy.stopWalkingEnemies();
                    enemy.LP = 0;
                    enemy.intervalSequenz = 0;
                    this.world.isEnemyDead(enemy);
                }
            }
        });
    }

    /**
     * Checks whether you have collided with a platform.
     */
    checkIsCollidingPlatform() {
        let collidingPlatform = false;

        this.world.lvl.platformsFG.forEach((platform) => {
            if (this.world.character.isCollidingLeft(platform)) {
                collidingPlatform = true;
                this.world.character.collidingPlatformLeft = true;
            } else if (!collidingPlatform) {
                this.world.character.collidingPlatformLeft = false;
            }

            if (this.world.character.isCollidingRight(platform)) {
                collidingPlatform = true;
                this.world.character.collidingPlatformRight = true;
            } else if (!collidingPlatform) {
                this.world.character.collidingPlatformRight = false;
            }
        });
    }

    /**
     * Checks from where you touch a platform.
     * @param {class} platform class.
     * @returns true or false.
     */
    checkPlatformCollision(platform) {
        if (this.world.character.isHittingFromAbove(platform)) {
            this.world.character.mainPosiY = platform.posiY - platform.hitBoxY - 70;
            return true;
        } else if (this.world.character.isInPosiXFromPlatform(platform) && this.world.character.isOverThePlatform(platform)) {
            this.world.character.mainPosiY = platform.posiY - platform.hitBoxY - 70;
            return true;
        } else if (this.world.character.isInPosiXFromPlatform(platform)) {
            return true;
        }
        return false;
    }
    
    /**
     * Checks whether you jump onto a platform.
     */
    checkJumpOnPlatform() {
        let onPlatform = false;
    
        this.world.lvl.platformsBG.forEach((platform) => {
            if (this.checkPlatformCollision(platform)) {
                onPlatform = true;
            }
        });
    
        this.world.lvl.platformsFG.forEach((platform) => {
            if (this.checkPlatformCollision(platform)) {
                onPlatform = true;
            }
        });
    
        if (!onPlatform && !this.world.character.jumping) {
            this.world.character.mainPosiY = canvasHeight - this.world.character.height - 25;
        }
    }

    /**
     * Checks which attack key was pressed.
     */
    checkUseAttackKey() {
        this.meleeAttack1();
        this.meleeAttack2();
        this.magicAttack1();
        this.magicAttack2();
        
        this.world.medusaAttack();
    }

    /**
     * Performs the first Melee Attack.
     */
    meleeAttack1() {
        if (this.world.keyboard.ATTACK1 && !this.world.keyboard.keyIsHold_ATTACK1 && !this.world.character.attack && !this.world.character.onLoad) {
            this.world.keyboard.keyIsHold_ATTACK1 = true;
            this.world.character.comboAttack = true;
            let attack1 = new CharAttack1(this.world.character.posiX, this.world.character.posiY, this.world.character.otherDirection);
            this.world.charATK.push(attack1);
            this.showSkillDelay();
            this.world.character.attackAnimation(this.world.character.IMAGES_ATTACK1);
            this.world.character.doesDMG = 5;
            this.world.character.meleeHit1_sound.currentTime = 0;
            this.world.moveableObject.playAudio(this.world.character.meleeHit1_sound, 0.9);
            this.world.checkHitEnemy();
        }
    }

    /**
     * Performs the second Melee Attack.
     */
    meleeAttack2() {
        if (this.world.keyboard.ATTACK2 && this.world.character.comboAttack && !this.world.keyboard.keyIsHold_ATTACK2) {
            this.world.keyboard.keyIsHold_ATTACK2 = true;
            setTimeout(() => {
                this.world.character.secondAttack = true;
                let attack2 = new CharAttack2(this.world.character.posiX, this.world.character.posiY, this.world.character.otherDirection);
                this.world.charATK.push(attack2);
                this.showSkillDelay();
                this.world.character.attackAnimation(this.world.character.IMAGES_ATTACK2);
                this.world.character.doesDMG = 10;
                this.world.character.meleeHit2_sound.currentTime = 0;
                this.world.moveableObject.playAudio(this.world.character.meleeHit2_sound, 0.9);
                this.world.checkHitEnemy();
            }, 250);
        }
    }

    /**
     * Performs the first Magic Attack.
     */
    magicAttack1() {
        if (this.world.keyboard.MAGIC1 && !this.world.keyboard.keyIsHold_MAGIC1 && !this.world.fireballFly && !this.world.character.attack && !this.world.character.onLoad) {
            if (this.world.character.useLessManaActive) {
                if (this.world.character.MP >= 5) {
                    this.useFireball();
                }
            } else if (this.world.character.MP >= 10) {
                this.useFireball();
            }
        }
    }

    /**
     * Animates Fireball move.
     */
    useFireball() {
        this.world.keyboard.keyIsHold_MAGIC1 = true;
        this.world.character.fireballAttack = true;
        this.world.fireballFly = true;
        this.world.characterTwo.useMana(10);
        this.world.manaStatusBar.setPercentage(this.world.character.MP, this.world.manaStatusBar.MANA_BAR);
        this.showSkillDelay();
        this.world.character.fireball1_sound.currentTime = 0;
        this.world.moveableObject.playAudio(this.world.character.fireball1_sound, 0.9);
        this.world.character.attackAnimation(this.world.character.IMAGES_FIREBALLMOVE);
    }

    /**
     * Animated Fireball fly
     */
    fireball() {
        let fireball = new CharAttackFireball(this.world.character.posiX, this.world.character.posiY, this.world.character.otherDirection);
        fireball.world = this.world;
        this.world.charATK.push(fireball);
        this.world.character.doesDMG = 15;
        this.world.character.fireball2_sound.currentTime = 0;
        this.world.moveableObject.playAudio(this.world.character.fireball2_sound, 1.2);
    }

    /**
     * Performs the second Magic Attack.
     */
    magicAttack2() {
        if (this.world.keyboard.MAGIC2 && !this.world.keyboard.keyIsHold_MAGIC2 && !this.world.character.attack && !this.world.character.onLoad) {
            if (this.world.character.useLessManaActive) {
                if (this.world.character.MP >= 10) {
                    this.useFireburst();
                }
            } else if (this.world.character.MP >= 20) {
                this.useFireburst();
            }
        }
    }

    /**
     * Animated Fireburst.
     */
    useFireburst() {
        this.world.keyboard.keyIsHold_MAGIC2 = true;
        let fireburst = new CharAttackFireburst(this.world.character.posiX, this.world.character.posiY, this.world.character.otherDirection);
        this.world.charATK.push(fireburst);
        this.showSkillDelay();
        this.world.character.attackAnimation(this.world.character.IMAGES_FIREBURST);
        this.world.character.doesDMG = 20;
        this.world.characterTwo.useMana(20);
        this.world.manaStatusBar.setPercentage(this.world.character.MP, this.world.manaStatusBar.MANA_BAR);
        this.world.character.fireburst_sound.currentTime = 0;
        this.world.moveableObject.playAudio(this.world.character.fireburst_sound, 2);
        this.world.checkHitEnemy();
    }

    /**
     * Shows the skill delay.
     */
    showSkillDelay() {
        this.world.charSkills[0].loadImage('img/wizard-saga/skill-icon/wizard-skills/meleeattack/meleeattack1-icon-dark.png');
        this.world.charSkills[1].loadImage('img/wizard-saga/skill-icon/wizard-skills/meleeattack/meleeattack2-icon-dark.png');
        this.world.charSkills[2].loadImage('img/wizard-saga/skill-icon/wizard-skills/fireball/fireball-icon-dark.png');
        this.world.charSkills[3].loadImage('img/wizard-saga/skill-icon/wizard-skills/fireburst/fireburst-icon-dark.png');
    }

    /**
     * Checks whether you can touch a useful object.
     */
    checkCollidingUsableObject() {
        this.world.lvl.usableObject.forEach((object) => {
            if (object instanceof UsableObjectDoor) {
                this.useDoor(object);
            } else if (object instanceof UsableObjectTotem) {
                this.learnSkill(object);
            }
        });
    }

    /**
     * Lets you use a door.
     * @param {class} object class.
     */
    useDoor(object) {
        if (this.world.character.isColliding(object) && this.world.keyboard.UP && !this.world.keyboard.keyIsHold_UP) {
            this.world.keyboard.keyIsHold_UP = true;
            this.world.character.onLoad = true;
            let newLoadSequenz = new LoadSequenz(this.world);
            this.world.loadSequenz.push(newLoadSequenz);
            this.world.loadSequenz[0].startLoadSequenz();
            setTimeout(() => {
                if (!this.world.inCave) {
                    this.goInCave();
                } else {
                    this.goOutFromCave();
                }
            }, 1500);
        }
    }

    /**
     * Go in the Cave.
     */
    goInCave() {
        this.world.inCave = true;
        this.world.itemDrop = [];
        this.world.lvl = createLvl1Cave();
        this.loadItemOnArea();
        this.world.character.moveCamPosiY = -100;
        this.world.loadSequenz[0].endLoadSequenz();
    }

    /**
     * Go out from the Cave.
     */
    goOutFromCave() {
        this.world.inCave = false;
        this.world.itemDrop = [];
        this.world.lvl = createLvl1();
        this.loadItemOnArea();
        this.world.character.moveCamPosiY = 250;
        this.world.loadSequenz[0].endLoadSequenz();
    }

    /**
     * Checks whether you are standing in front of a totem and let you learn an Skill.
     * @param {class} object class.
     */
    learnSkill(object) {
        if (this.world.character.isColliding(object) && this.world.keyboard.UP && !this.world.keyboard.keyIsHold_UP && !object.totemSkillIsLearnd) {
            this.world.keyboard.keyIsHold_UP = true;
            object.totemSkillIsLearnd = true;
            object.world = this.world;
            object.learnNewSkill();
        }
    }

    /**
     * Loads random items in the world.
     */
    loadItemOnArea() {
        this.world.lvl.itemsOnArea.forEach((item) => {
            this.world.itemDrop.push(item);
        });
    }

    /**
     * Checks whether the background music is on or off.
     */
    playBGMusic() {
        this.world.backgroundMusicInterV = setInterval(() => {
            if (this.world.backgroundMusic) {
                this.playMusic();
            }
        }, 125);
    }

    /**
     * Plays the background music.
     */
    playMusic() {
        if (this.world.inCave) {
            this.musicInCave();
        } else {
            this.musicInWorld();
        }
    }

    /**
     * Background Music in Cave.
     */
    musicInCave() {
        this.world.background_sound.pause();
        this.world.background_cave.volume = 0.1;
        this.world.background_cave.playbackRate = 0.5;
        this.world.background_cave.play();
    }

    /**
     * Background Music in world.
     */
    musicInWorld() {
        this.world.background_cave.pause();
        this.world.background_sound.volume = 0.2;
        this.world.background_sound.playbackRate = 1;
        this.world.background_sound.play();
    }
}
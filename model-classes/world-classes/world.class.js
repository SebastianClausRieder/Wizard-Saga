class World {
    lvl = createLvl1();
    inCave = false;

    worldTwo = new WorldTwo();
    drawableObject = new DrawableObject();
    moveableObject = new MovableObject();

    lifeStatusBar = new LifeStatusBar();
    manaStatusBar = new ManaStatusBar();
    blueMineralStatusBar = new BlueMineralStatusBar();
    redMineralStatusBar = new RedMineralStatusBar();
    bluePotionStatusBar = new BluePotionStatusBar();
    redPotionStatusBar = new RedPotionStatusBar();
    
    character = new Character(this);
    characterTwo = new CharacterTwo();
    charSkills = [
        new MeleeAttack1(this),
        new MeleeAttack2(this),
        new Fireball(this),
        new Fireburst(this),
        new UseLessMana(this),
        new Defender(this),
        new BluePotionUse(this),
        new RedPotionUse(this)
    ];
    charATK = [];
    enemyATK = [];
    itemDrop = [];
    loadSequenz = [];

    background_sound = new Audio('audio/background-music-02.mp3');
    background_cave = new Audio('audio/background-cave.mp3');

    backgroundMusicInterV;
    backgroundMusic = true;

    canvas;
    ctx;
    keyboard;
    cam_X;
    cam_Y;

    fireballFly = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollosins();
        this.worldTwo.loadItemOnArea();
        this.worldTwo.playBGMusic();
    }

    /**
     * Start a few checks.
     */
    checkCollosins() {
        setInterval(() => {
            this.checkCollosinWithEnemy();
            this.worldTwo.checkJumpOnLizard();
            this.worldTwo.checkUseAttackKey();
            this.checkEarnItem();
            this.worldTwo.checkIsCollidingPlatform();
            this.worldTwo.checkJumpOnPlatform();
            this.worldTwo.checkCollidingUsableObject();
            this.enemyCollidingPlatform();
        }, 1000 / 60);
    }

    /**
     * Checks collision with opponent.
     */
    checkCollosinWithEnemy() {
        if (!this.character.hurts && !this.character.dead) {
            this.lvl.enemies.forEach((enemy) => {
                if (enemy instanceof UsableObjectChest) {

                } else {
                    if (this.character.isColliding(enemy) && !enemy.dead) {
                        this.characterTwo.getDMG(enemy.doesDMG);
                        this.lifeStatusBar.setPercentage(this.character.LP, this.lifeStatusBar.LIFE_BAR);
                        this.hitCharacter();
                    }
                }
            });
        }
    }

    /**
     * Checks whether your LP are running low.
     * @param {class} enemy that you collided with.
     */
    hitCharacter(enemy) {
        if (this.character.LP > 0) {
            this.moveableObject.playAudio(this.character.hurt_sound, 1);
            this.character.animateHurts(this.character.IMAGES_HURT);
        } else {
            this.moveableObject.playAudio(this.character.death_sound, 1);
            this.character.resetImageCache();
            this.character.animateDeath(this.character.IMAGES_DEAD);
            setTimeout(() => {
                this.drawEndScreen(true);
            }, 3000);
        }
    }

    /**
     * Checks whether Medusa's "doesAttack" is true and then starts the Stone Blow Attack.
     */
    medusaAttack() {
        this.lvl.enemies.forEach(enemy => {
            if (enemy instanceof Endboss01) {
                if (enemy.enemyDoesAttack) {
                    enemy.enemyDoesAttack = false;
                    this.stoneBlowBegin(enemy);
                }
            }
        });
    }

    /**
     * The Stone Blow attack begins.
     * @param {class} enemy class from Medusa.
     */
    stoneBlowBegin(enemy) {
        let enemyAttack = new StoneBlow(this.character.posiX, this.character.posiY);
        enemyAttack.world = this;
        this.enemyATK.push(enemyAttack);
        this.character.LP -= 20;
        this.lifeStatusBar.setPercentage(this.character.LP, this.lifeStatusBar.LIFE_BAR);
        this.hitCharacter(enemy);
    }

    /**
     * Checks whether you hit an opponent with a skill.
     */
    checkHitEnemy() {
        this.lvl.enemies.forEach((enemy, index) => {
            if (this.charATK[0] instanceof CharAttackFireball) {
                if (this.charATK[0].isColliding(enemy) && !enemy.dead && !enemy.hurts) {
                    this.whatsHitet(enemy);
                }
            } else if (enemy instanceof UsableObjectChest && this.charATK[0] instanceof CharAttack1) {
                if (this.charATK[0].isColliding(enemy) && !enemy.dead && !enemy.hurts) {
                    this.whatsHitet(enemy);
                }
            } else {
                if (this.charATK[0].isColliding(enemy) && !enemy.dead) {
                    this.whatsHitet(enemy);
                }
            }
        });
    }

    /**
     * Checks whether you hit an enemy or a box.
     * @param {class} enemy class.
     */
    whatsHitet(enemy) {
        if (enemy instanceof UsableObjectChest) {
            this.openChest(enemy);
        } else {
            this.hitEnemy(enemy);
        }
    }

    /**
     * Opens the chest you hit.
     * @param {class} enemy is an Chest.
     */
    openChest(enemy) {
        enemy.loadImage('img/wizard-saga/platforms/PNG/Details/chest-open.png');
        if (!enemy.dead) {
            enemy.dead = true;
            setTimeout(() => {
                    let item = this.whatItemDrop(enemy);
                    enemy.removeFromMap();
                    this.lvl.enemies = this.lvl.enemies.filter(enemy => !enemy.toBeRemoved);
                    this.itemDrop.push(item);
            }, 2000);
        }
    }

    /**
     * Check whether the opponent still has enough life points and take further action.
     * @param {class} enemy class.
     */
    hitEnemy(enemy) {
        enemy.stopWalkingEnemies();
        enemy.LP -= this.character.doesDMG;
        enemy.intervalSequenz = 0;
        if (enemy.LP > 0 && !enemy.hurts) {
            this.isEnemyLPnotZero(enemy);
        } else if (enemy.LP <= 0) {
            enemy.dead = true;
            this.isEnemyDead(enemy);
        }
    }

    /**
     * Starts the hurts animation.
     * @param {class} enemy class.
     */
    isEnemyLPnotZero(enemy) {
        enemy.animateHurts(enemy.IMAGES_HURT);
        setTimeout(() => {
            if (!enemy.dead) {
                enemy.enemyDirection();
            }
        }, 1500);
    }

    /**
     * Starts the dead animation and remove the enemy from map.
     * @param {class} enemy class.
     */
    isEnemyDead(enemy) {
        enemy.cancelHurts();
        enemy.animateDeath(enemy.IMAGES_DEAD);
        setTimeout(() => {
            let item = this.whatItemDrop(enemy);
            enemy.removeFromMap();
            this.lvl.enemies = this.lvl.enemies.filter(enemy => !enemy.toBeRemoved);
            this.itemDrop.push(item);
        }, 2000);
    }

    /**
     * Checks which enemy was killed and drops an item accordingly.
     * @param {class} enemy class.
     * @returns the item to be dropped.
     */
    whatItemDrop(enemy) {
        if (enemy instanceof Lizard) {
            return new BlueMineral(enemy.posiX, enemy.posiY, 0.5, 0.3, 0.2);
        } else if (enemy instanceof Demon) {
            return new BlueMineral(enemy.posiX, enemy.posiY, 0.1, 0.6, 0.3);
        } else if (enemy instanceof SmallDragon) {
            return new RedMineral(enemy.posiX, enemy.posiY - 35, 1, '');
        } else if (enemy instanceof UsableObjectChest) {
            return new BluePotion(enemy.posiX, enemy.posiY, 1);
        } else if (enemy instanceof Endboss01) {
            return new Star();
        } else {
            return new BlueMineral(enemy.posiX, enemy.posiY, 0.5, 0.3, 0.2);
        }
    }

    /**
     * Checks what you have looted and initiates further steps.
     */
    checkEarnItem() {
        this.itemDrop.forEach((item, index) => {
            if (this.character.isColliding(item)) {
                if (item instanceof BlueMineral) {
                    this.blueMineralStatusBar.collectBlueMineral(item.value);
                } else if (item instanceof RedMineral) {
                    this.redMineralStatusBar.collectRedMineral(item.value);
                } else if (item instanceof BluePotion) {
                    this.bluePotionStatusBar.collectBluePotion();
                } else if (item instanceof RedPotion) {
                    this.redPotionStatusBar.collectRedPotion();
                } else if (item instanceof Star) {
                    setTimeout(() => {
                        this.drawEndScreen(false);
                    }, 3000);
                }
                this.itemDrop.splice(index, 1);
            }
        });
    }

    /**
     * Checks whether an opponent has collided with a platform.
     */
    enemyCollidingPlatform() {
        this.lvl.enemies.forEach((enemy) => {
            if (enemy instanceof Demon) {
                this.lvl.platformsFG.forEach((platform) => {
                    if (enemy.isCollidingLeft(platform) && !enemy.collidedPlatform) {
                        enemy.collidedPlatform = true;
                        this.letMoveLeft(enemy);
                        setTimeout(() => { enemy.collidedPlatform = false; }, 2000);
                    } else if (enemy.isCollidingRight(platform) && !enemy.collidedPlatform) {
                        enemy.collidedPlatform = true;
                        this.letMoveRight(enemy);
                        setTimeout(() => { enemy.collidedPlatform = false; }, 2000);
                    }
                });
            }
        });
    }

    /**
     * Causes the opponent to move left after a collision.
     * @param {class} enemy class.
     */
    letMoveLeft(enemy) {
        clearInterval(enemy.movingRightInterval);
        clearInterval(enemy.walkingInterval);
        enemy.otherDirection = false;
        enemy.isMovingLeft = true;
        enemy.isMovingRight = false;
        enemy.resetImageCache();
        enemy.enemyDirection();
    }

    /**
     * Causes the opponent to move right after a collision.
     * @param {class} enemy class.
     */
    letMoveRight(enemy) {
        clearInterval(enemy.movingLeftInterval);
        clearInterval(enemy.walkingInterval);
        enemy.otherDirection = true;
        enemy.isMovingLeft = false;
        enemy.isMovingRight = true;
        enemy.resetImageCache();
        enemy.enemyDirection();
    }

    /**
     * Draws the EndScreen.
     * @param {boolean} dead true or false.
     */
    drawEndScreen(dead) {
        clearAllIntervals();
        this.character.endFight_sound.pause();
        this.background_sound.pause();
        this.background_cave.pause();
        element('endMonitor').classList.remove('d-none');
        showEndScreen(dead);
    }

    /**
     * Gives classes the world variable.
     */
    setWorld() {
        this.worldTwo.world = this;
        this.character.world = this;
        this.characterTwo.world = this;
        this.drawableObject.world = this;
        this.moveableObject.world = this;
    }

    /**
     * Draw all Objects in the Game on the Canvas.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(-this.cam_X, -this.cam_Y);
        
        this.addObjectsToMap(this.lvl.bgMountens01);
        this.addObjectsToMap(this.lvl.behindObjects);
        this.addObjectsToMap(this.lvl.platformsBG);
        this.addObjectsToMap(this.lvl.beforObjects);
        this.addObjectsToMap(this.lvl.cloud01);
        this.addObjectsToMap(this.lvl.path01);
        this.addObjectsToMap(this.lvl.usableObject);
        
        this.addObjectsToMap(this.lvl.enemies);
        
        this.addToMap(this.character);
        this.addObjectsToMap(this.charATK);
        this.addObjectsToMap(this.enemyATK);

        this.addObjectsToMap(this.itemDrop);
        this.addObjectsToMap(this.lvl.platformsFG);

        this.ctx.translate(this.cam_X, this.cam_Y);
       
        // <--- place for fixed objects --->

        this.addToMap(this.lifeStatusBar);
        this.addToMap(this.manaStatusBar);
        this.addToMap(this.redMineralStatusBar);
        this.addToMap(this.blueMineralStatusBar);
        this.addToMap(this.redPotionStatusBar);
        this.addToMap(this.bluePotionStatusBar);
        this.addObjectsToMap(this.charSkills);
        
        this.addObjectsToMap(this.loadSequenz);

        // <--- place for fixed objects endes --->

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    /**
     * Add objects to the Map.
     * @param {objects} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            if (!o.toBeRemoved) {
                this.addToMap(o);
            }
        });
    }

    /**
     * Add one object to the Map.
     * @param {object} mo 
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.mirroredImage(mo);
        }

        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);
        if (mo instanceof RedMineralStatusBar || mo instanceof BlueMineralStatusBar || mo instanceof RedPotionStatusBar || mo instanceof BluePotionStatusBar) {
            mo.drawText(this.ctx, this.redMineralStatusBar.collectedRedMineral, this.blueMineralStatusBar.collectedBlueMineral, this.redPotionStatusBar.collectedRedPotion, this.bluePotionStatusBar.collectedBluePotion);
        }

        if (mo.otherDirection) {
            this.standartImage(mo);
        }
    }

    /**
     * Reflects the objects.
     * @param {object} mo 
     */
    mirroredImage(mo) {
        this.ctx.save();
        if (mo instanceof Character) {
            this.ctx.translate(mo.img.width - 85, 0);
        } else if (mo instanceof SmallDragon) {
            this.ctx.translate(mo.img.width + 20, 0);
        } else if (mo instanceof Demon) {
            this.ctx.translate(mo.img.width - 35, 0);
        }
        this.ctx.scale(-1, 1);
        mo.posiX = mo.posiX * -1;
    }

    /**
     * Restores the default direction.
     * @param {object} mo 
     */
    standartImage(mo) {
        this.ctx.restore();
        mo.posiX = mo.posiX * -1;
    }
}
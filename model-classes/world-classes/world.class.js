class World {
    lvl = createLvl1();
    inCave = false;

    drawableObject = new DrawableObject();
    moveableObject = new MovableObject();
    
    character = new Character();
    charSkills = [   // skills
        new MeleeAttack1(),
        new MeleeAttack2(),
        new Fireball(),
        new Fireburst(),
        new UseLessMana(),
        new Defender(),
        new BluePotionUse(),
        new RedPotionUse()
    ];
    charATK = [];
    enemyATK = [];
    itemDrop = [];
    loadSequenz = [];

    background_sound = new Audio('audio/background-music-02.mp3');
    background_cave = new Audio('audio/background-cave.mp3');

    backgroundMusicInterV;

    canvas;
    ctx;
    keyboard;
    cam_X;
    cam_Y;

    lifeStatusBar = new LifeStatusBar();
    manaStatusBar = new ManaStatusBar();
    blueMineralStatusBar = new BlueMineralStatusBar();
    redMineralStatusBar = new RedMineralStatusBar();
    bluePotionStatusBar = new BluePotionStatusBar();
    redPotionStatusBar = new RedPotionStatusBar();

    fireballFly = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollosins();
        this.loadItemOnArea();
        this.playBGMusic();
    }

    checkCollosins() {
        setInterval(() => {
            this.checkCollosinWithEnemy();
            this.checkJumpOnLizard();
            this.checkUseAttackKey();
            this.checkEarnItem();
            this.checkIsCollidingPlatform();
            this.checkJumpOnPlatform();
            this.checkCollidingUsableObject();
            this.enemyCollidingPlatform();
        }, 1000 / 60);
    }

    checkCollosinWithEnemy() {
        if (!this.character.hurts && !this.character.dead) {
            this.lvl.enemies.forEach((enemy) => {
                if (enemy instanceof UsableObjectChest) {

                } else {
                    if (this.character.isColliding(enemy) && !enemy.dead) {
                        this.character.getDMG(enemy.doesDMG);
                        this.lifeStatusBar.setPercentage(this.character.LP, this.lifeStatusBar.LIFE_BAR);
                        this.hitCharacter();
                    }
                }
            });
        }
    }

    checkJumpOnLizard() {
        this.lvl.enemies.forEach((enemy) => {
            if (enemy instanceof Lizard) {
                if (this.character.isHittingFromAbove(enemy) && !enemy.dead && !this.character.hurts && this.character.posiY >= 335) {
                    enemy.stopWalkingEnemies();
                    enemy.LP = 0;
                    enemy.intervalSequenz = 0;
                    this.isEnemyDead(enemy);
                }
            }
        });
    }

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

    checkUseAttackKey() {
        this.meleeAttack1();
        this.meleeAttack2();
        this.magicAttack1();
        this.magicAttack2();
        
        this.medusaAttack();
    }

    meleeAttack1() {
        if (this.keyboard.ATTACK1 && !this.keyboard.keyIsHold_ATTACK1 && !this.character.attack && !this.character.onLoad) {
            this.keyboard.keyIsHold_ATTACK1 = true;
            this.character.comboAttack = true;
            let attack1 = new CharAttack1(this.character.posiX, this.character.posiY, this.character.otherDirection);
            this.charATK.push(attack1);
            this.showSkillDelay();
            this.character.attackAnimation(this.character.IMAGES_ATTACK1);
            this.character.doesDMG = 5;
            this.moveableObject.playAudio(this.character.meleeHit1_sound, 0.9);
            this.checkHitEnemy();
        }
    }

    meleeAttack2() {
        if (this.keyboard.ATTACK2 && this.character.comboAttack && !this.keyboard.keyIsHold_ATTACK2) {
            this.keyboard.keyIsHold_ATTACK2 = true;
            setTimeout(() => {
                this.character.secondAttack = true;
                let attack2 = new CharAttack2(this.character.posiX, this.character.posiY, this.character.otherDirection);
                this.charATK.push(attack2);
                this.showSkillDelay();
                this.character.attackAnimation(this.character.IMAGES_ATTACK2);
                this.character.doesDMG = 10;
                this.moveableObject.playAudio(this.character.meleeHit2_sound, 0.9);
                this.checkHitEnemy();
            }, 250);
        }
    }

    magicAttack1() {
        if (this.keyboard.MAGIC1 && !this.keyboard.keyIsHold_MAGIC1 && !this.fireballFly && !this.character.attack && !this.character.onLoad) {
            if (this.character.useLessManaActive) {
                if (this.character.MP >= 5) {
                    this.useFireball();
                }
            } else if (this.character.MP >= 10) {
                this.useFireball();
            }
        }
    }

    useFireball() {
        this.keyboard.keyIsHold_MAGIC1 = true;
        this.character.fireballAttack = true;
        this.fireballFly = true;
        this.character.useMana(10);
        this.manaStatusBar.setPercentage(this.character.MP, this.manaStatusBar.MANA_BAR);
        this.showSkillDelay();
        this.moveableObject.playAudio(this.character.fireball1_sound, 0.9);
        this.character.attackAnimation(this.character.IMAGES_FIREBALLMOVE);
    }

    fireball() {
        let fireball = new CharAttackFireball(this.character.posiX, this.character.posiY, this.character.otherDirection);
        fireball.world = this;
        this.charATK.push(fireball);
        this.character.doesDMG = 15;
        this.moveableObject.playAudio(this.character.fireball2_sound, 1.2);
    }

    magicAttack2() {
        if (this.keyboard.MAGIC2 && !this.keyboard.keyIsHold_MAGIC2 && !this.character.attack && !this.character.onLoad) {
            if (this.character.useLessManaActive) {
                if (this.character.MP >= 10) {
                    this.useFireburst();
                }
            } else if (this.character.MP >= 20) {
                this.useFireburst();
            }
        }
    }

    useFireburst() {
        this.keyboard.keyIsHold_MAGIC2 = true;
        let fireburst = new CharAttackFireburst(this.character.posiX, this.character.posiY, this.character.otherDirection);
        this.charATK.push(fireburst);
        this.showSkillDelay();
        this.character.attackAnimation(this.character.IMAGES_FIREBURST);
        this.character.doesDMG = 20;
        this.character.useMana(20);
        this.manaStatusBar.setPercentage(this.character.MP, this.manaStatusBar.MANA_BAR);
        this.moveableObject.playAudio(this.character.fireburst_sound, 2);
        this.checkHitEnemy();
    }

    showSkillDelay() {
        this.charSkills[0].loadImage('img/wizard-saga/skill-icon/wizard-skills/meleeattack/meleeattack1-icon-dark.png');
        this.charSkills[1].loadImage('img/wizard-saga/skill-icon/wizard-skills/meleeattack/meleeattack2-icon-dark.png');
        this.charSkills[2].loadImage('img/wizard-saga/skill-icon/wizard-skills/fireball/fireball-icon-dark.png');
        this.charSkills[3].loadImage('img/wizard-saga/skill-icon/wizard-skills/fireburst/fireburst-icon-dark.png');
    }

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
		
    stoneBlowBegin(enemy) {
        let enemyAttack = new StoneBlow(this.character.posiX, this.character.posiY);
        enemyAttack.world = this;
        this.enemyATK.push(enemyAttack);
        this.character.LP -= 20;
        this.lifeStatusBar.setPercentage(this.character.LP, this.lifeStatusBar.LIFE_BAR);
        this.hitCharacter(enemy);
    }

    checkHitEnemy() {
        this.lvl.enemies.forEach((enemy, index) => {
            if (this.charATK[0] instanceof CharAttackFireball) {
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

    whatsHitet(enemy) {
        if (enemy instanceof UsableObjectChest) {
            this.hitChest(enemy);
        } else {
            this.hitEnemy(enemy);
        }
    }

    hitChest(enemy) {
        enemy.loadImage('img/wizard-saga/platforms/PNG/Details/chest-open.png');
        setTimeout(() => {
            let item = this.whatItemDrop(enemy);
            enemy.removeFromMap();
            this.lvl.enemies = this.lvl.enemies.filter(enemy => !enemy.toBeRemoved);
            this.itemDrop.push(item);
        }, 2000);
    }

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

    isEnemyLPnotZero(enemy) {
        enemy.animateHurts(enemy.IMAGES_HURT);
        setTimeout(() => {
            enemy.enemyDirection();
        }, 1500);
    }

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

    checkIsCollidingPlatform() {
        let collidingPlatform = false;

        this.lvl.platformsFG.forEach((platform) => {
            if (this.character.isCollidingLeft(platform)) {
                collidingPlatform = true;
                this.character.collidingPlatformLeft = true;
            } else if (!collidingPlatform) {
                this.character.collidingPlatformLeft = false;
            }

            if (this.character.isCollidingRight(platform)) {
                collidingPlatform = true;
                this.character.collidingPlatformRight = true;
            } else if (!collidingPlatform) {
                this.character.collidingPlatformRight = false;
            }
        });
    }

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

    letMoveLeft(enemy) {
        clearInterval(enemy.movingRightInterval);
        clearInterval(enemy.walkingInterval);
        enemy.otherDirection = false;
        enemy.isMovingLeft = true;
        enemy.isMovingRight = false;
        enemy.resetImageCache();
        enemy.enemyDirection();
    }

    letMoveRight(enemy) {
        clearInterval(enemy.movingLeftInterval);
        clearInterval(enemy.walkingInterval);
        enemy.otherDirection = true;
        enemy.isMovingLeft = false;
        enemy.isMovingRight = true;
        enemy.resetImageCache();
        enemy.enemyDirection();
    }

    checkPlatformCollision(platform) {
        if (this.character.isHittingFromAbove(platform)) {
            this.character.mainPosiY = platform.posiY - platform.hitBoxY - 70;
            return true;
        } else if (this.character.isInPosiXFromPlatform(platform) && this.character.isOverThePlatform(platform)) {
            this.character.mainPosiY = platform.posiY - platform.hitBoxY - 70;
            return true;
        } else if (this.character.isInPosiXFromPlatform(platform)) {
            return true;
        }
        return false;
    }
    
    checkJumpOnPlatform() {
        let onPlatform = false;
    
        this.lvl.platformsBG.forEach((platform) => {
            if (this.checkPlatformCollision(platform)) {
                onPlatform = true;
            }
        });
    
        this.lvl.platformsFG.forEach((platform) => {
            if (this.checkPlatformCollision(platform)) {
                onPlatform = true;
            }
        });
    
        if (!onPlatform && !this.character.jumping) {
            this.character.mainPosiY = canvasHeight - this.character.height - 25;
        }
    }

    checkCollidingUsableObject() {
        this.lvl.usableObject.forEach((object) => {
            if (object instanceof UsableObjectDoor) {
                this.useDoor(object);
            } else if (object instanceof UsableObjectTotem) {
                this.learnSkill(object);
            }
        });
    }

    useDoor(object) {
        if (this.character.isColliding(object) && this.keyboard.UP && !this.keyboard.keyIsHold_UP) {
            this.keyboard.keyIsHold_UP = true;
            this.character.onLoad = true;
            let newLoadSequenz = new LoadSequenz(this);
            this.loadSequenz.push(newLoadSequenz);
            this.loadSequenz[0].startLoadSequenz();
            setTimeout(() => {
                if (!this.inCave) {
                    this.goInCave();
                } else {
                    this.goOutFromCave();
                }
            }, 1500);
        }
    }

    goInCave() {
        this.inCave = true;
        this.itemDrop = [];
        this.lvl = createLvl1Cave();
        this.loadItemOnArea();
        this.character.moveCamPosiY = 1;
        this.loadSequenz[0].endLoadSequenz();
    }

    goOutFromCave() {
        this.inCave = false;
        this.itemDrop = [];
        this.lvl = createLvl1();
        this.loadItemOnArea();
        this.character.moveCamPosiY = 250;
        this.loadSequenz[0].endLoadSequenz();
    }

    learnSkill(object) {
        if (this.character.isColliding(object) && this.keyboard.UP && !this.keyboard.keyIsHold_UP && !object.totemSkillIsLearnd) {
            this.keyboard.keyIsHold_UP = true;
            object.totemSkillIsLearnd = true;
            object.world = this;
            object.learnNewSkill();
        }
    }

    loadItemOnArea() {
        this.lvl.itemsOnArea.forEach((item) => {
            this.itemDrop.push(item);
        });
    }

    setWorld() {
        this.character.world = this;
        this.drawableObject.world = this;
        this.moveableObject.world = this;
    }

    playBGMusic() {
        this.backgroundMusicInterV = setInterval(() => {
            if (this.inCave) {
                this.musicInCave();
            } else {
                this.musicInWorld();
            }
        }, 125);
    }

    musicInCave() {
        this.background_sound.pause();
        this.background_cave.volume = 0.1;
        this.background_cave.playbackRate = 0.5;
        this.background_cave.play();
    }

    musicInWorld() {
        this.background_cave.pause();
        this.background_sound.volume = 0.2;
        this.background_sound.playbackRate = 1;
        this.background_sound.play();
    }

    drawEndScreen(dead) {
        clearAllIntervals();
        this.character.endFight_sound.pause();
        this.background_sound.pause();
        this.background_cave.pause();
        element('endMonitor').classList.remove('d-none');
        showEndScreen(dead);
    }

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

    addObjectsToMap(objects) {
        objects.forEach(o => {
            if (!o.toBeRemoved) {
                this.addToMap(o);
            }
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.mirroredImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo instanceof RedMineralStatusBar || mo instanceof BlueMineralStatusBar || mo instanceof RedPotionStatusBar || mo instanceof BluePotionStatusBar) {
            mo.drawText(this.ctx, this.redMineralStatusBar.collectedRedMineral, this.blueMineralStatusBar.collectedBlueMineral, this.redPotionStatusBar.collectedRedPotion, this.bluePotionStatusBar.collectedBluePotion);
        }

        if (mo.otherDirection) {
            this.standartImage(mo);
        }
    }

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

    standartImage(mo) {
        this.ctx.restore();
        mo.posiX = mo.posiX * -1;
    }
}
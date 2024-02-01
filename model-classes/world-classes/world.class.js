class World {
    lvl = lvl1Cave;
    inCave = false;

    drawableObject = new DrawableObject();
    moveableObject = new MovableObject();
    
    character = new Character();
    charATK = [];
    enemyATK = [];
    itemDrop = [];
    loadSequenz = [];


    canvas;
    ctx;
    keyboard;
    cam_X;
    cam_Y;

    lifeStatusBar = new LifeStatusBar();
    manaStatusBar = new ManaStatusBar();
    blueMineralStatusBar = new BlueMineralStatusBar();
    redMineralStatusBar = new RedMineralStatusBar();

    fireballFly = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollosins();
    }

    checkCollosins() {
        setInterval(() => {
            this.checkCollosinWithEnemy();
            this.checkJumpOnLizard();
            this.checkUseAttackKey();
            this.checkEarnMineral();
            this.checkIsCollidingPlatform();
            this.checkJumpOnPlatform();
            this.checkCollidingUsableObject();
        }, 1000 / 60);
    }

    checkCollosinWithEnemy() {
        if (!this.character.hurts && !this.character.dead) {
            this.lvl.enemies.forEach((enemy) => {
                if (enemy instanceof UsableObjectChest) {

                } else {
                    if (this.character.isColliding(enemy) && !enemy.dead) {
                        this.character.LP -= enemy.doesDMG;
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
                if (this.character.isHittingFromAbove(enemy) && !enemy.dead && !this.character.hurts) {
                    enemy.stopWalkingEnemies();
                    enemy.LP = 0;
                    enemy.intervalSequenz = 0;
                    this.isEnemyDead(enemy);
                }
            }
        });
    }

    hitCharacter() {
        if (this.character.LP > 0) {
            this.character.animateHurts(this.character.IMAGES_HURT);
        } else {
            this.character.resetImageCache();
            this.character.animateDeath(this.character.IMAGES_DEAD);
            setTimeout(() => {
                console.log('you are dead');
            }, 5000);
        }
    }

    checkUseAttackKey() {
        this.meleeAttack1();
        this.meleeAttack2();
        this.magicAttack1();
        this.magicAttack2();
        this.enemyAttack();
    }

    meleeAttack1() {
        if (this.keyboard.ATTACK1 && !this.keyboard.keyIsHold_ATTACK1 && !this.character.attack && !this.character.onLoad) {
            this.keyboard.keyIsHold_ATTACK1 = true;
            this.character.comboAttack = true;
            let attack1 = new CharAttack1(this.character.posiX, this.character.posiY, this.character.otherDirection);
            this.charATK.push(attack1);
            this.character.attackAnimation(this.character.IMAGES_ATTACK1);
            this.character.doesDMG = 5;
            this.checkHitEnemy();
        }
    }

    meleeAttack2() {
        if (this.keyboard.ATTACK2 && this.character.comboAttack && !this.keyboard.keyIsHold_ATTACK2) {
            this.keyboard.keyIsHold_ATTACK2 = true;
            setTimeout(() => {
                let attack2 = new CharAttack2(this.character.posiX, this.character.posiY, this.character.otherDirection);
                this.charATK.push(attack2);
                this.character.attackAnimation(this.character.IMAGES_ATTACK2);
                this.character.doesDMG = 10;
                this.checkHitEnemy();
            }, 250);
        }
    }

    magicAttack1() {
        if (this.keyboard.MAGIC1 && !this.keyboard.keyIsHold_MAGIC1 && !this.fireballFly && this.character.MP >= 15 && !this.character.attack && !this.character.onLoad) {
            this.keyboard.keyIsHold_MAGIC1 = true;
            this.character.fireballAttack = true;
            this.fireballFly = true;
            this.character.MP -= 15;
            this.manaStatusBar.setPercentage(this.character.MP, this.manaStatusBar.MANA_BAR);
            this.character.attackAnimation(this.character.IMAGES_FIREBALLMOVE);
        }
    }

    fireball() {
        let fireball = new CharAttackFireball(this.character.posiX, this.character.posiY, this.character.otherDirection);
        fireball.world = this;
        this.charATK.push(fireball);
        this.character.doesDMG = 15;
    }

    magicAttack2() {
        if (this.keyboard.MAGIC2 && !this.keyboard.keyIsHold_MAGIC2 && this.character.MP >= 20 && !this.character.attack && !this.character.onLoad) {
            this.keyboard.keyIsHold_MAGIC2 = true;
            let fireburst = new CharAttackFireburst(this.character.posiX, this.character.posiY, this.character.otherDirection);
            this.charATK.push(fireburst);
            this.character.attackAnimation(this.character.IMAGES_FIREBURST);
            this.character.doesDMG = 20;
            this.character.MP -= 20;
            this.manaStatusBar.setPercentage(this.character.MP, this.manaStatusBar.MANA_BAR);
            this.checkHitEnemy();
        }
    }

    enemyAttack() {
        this.lvl.enemies.forEach(enemy => {
            if (enemy instanceof Endboss01) {
                if (enemy.enemyDoesAttack) {
                    enemy.enemyDoesAttack = false;
                    this.stoneBlowBegin();
                }
            }
        });
    }
		
    stoneBlowBegin() {
        let enemyAttack = new StoneBlow(this.character.posiX, this.character.posiY);
        enemyAttack.world = this;
        this.enemyATK.push(enemyAttack);
        this.character.LP -= 20;
        this.lifeStatusBar.setPercentage(this.character.LP, this.lifeStatusBar.LIFE_BAR);
        this.hitCharacter();
    }

    checkHitEnemy() {
        this.lvl.enemies.forEach((enemy, index) => {
            if (this.charATK[0].isColliding(enemy) && !enemy.hurts && !enemy.dead) {
                this.whatsHitet(enemy);
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
        if (enemy.LP > 0) {
            this.isEnemyLPnotZero(enemy);
        } else {
            this.isEnemyDead(enemy);
        }
    }

    isEnemyLPnotZero(enemy) {
        enemy.animateHurts(enemy.IMAGES_HURT);
        setTimeout(() => {
            if (enemy instanceof Endboss01) {
                enemy.endbossDirection();
                enemy.checkPosition();
            } else {
                enemy.animateWalkingEnemies(225);
                enemy.moveLeft(enemy.speed, 1000 / 60);
            }
        }, 1500);
    }

    isEnemyDead(enemy) {
        enemy.dead = true;
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
            return new BlueMineral(enemy.posiX, enemy.posiY);
        } else if (enemy instanceof Demon) {
            return new RedMineral(enemy.posiX, enemy.posiY);
        } else if (enemy instanceof UsableObjectChest) {
            return new BluePotion(enemy.posiX, enemy.posiY);
        } else {
            return new RedMineral(enemy.posiX, enemy.posiY);
        }
    }

    checkEarnMineral() {
        this.itemDrop.forEach((item, index) => {
            if (this.character.isColliding(item)) {
                if (item instanceof BlueMineral) {
                    this.blueMineralStatusBar.collectBlueMineral(item.value);
                } else if (item instanceof RedMineral) {
                    this.redMineralStatusBar.collectRedMineral(item.value);
                } else if (item instanceof BluePotion) {
                    
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
            }
        });
    }

    useDoor(object) {
        if (this.character.isColliding(object) && this.keyboard.UP && !this.keyboard.keyIsHold_UP) {
            this.keyboard.keyIsHold_UP = true;
            this.character.onLoad = true;
            let newLoadSequenz = new LoadSequenz(this.cam_X, this.cam_Y, this);
            this.loadSequenz.push(newLoadSequenz);
            this.loadSequenz[0].startLoadSequenz();
            setTimeout(() => {
                if (!this.inCave) {
                    this.gosInCave();
                } else {
                    this.gosOutFromCave();
                }
            }, 1500);
        }
    }

    gosInCave() {
        this.inCave = true;
        this.lvl = lvl1Cave;
        this.character.moveCamPosiY = 1;
        this.loadSequenz[0].endLoadSequenz();
    }

    gosOutFromCave() {
        this.inCave = false;
        this.lvl = lvl1;
        this.character.moveCamPosiY = 250;
        this.loadSequenz[0].endLoadSequenz();
    }

    openTreasure(object) {

    }

    setWorld() {
        this.character.world = this;
        this.drawableObject.world = this;
        this.moveableObject.world = this;
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
        this.addObjectsToMap(this.lvl.platformsFG);
       
        this.ctx.translate(this.cam_X, this.cam_Y);
        // <--- place vor fixed objects --->

        this.addToMap(this.lifeStatusBar);
        this.addToMap(this.manaStatusBar);
        this.addToMap(this.redMineralStatusBar);
        this.addToMap(this.blueMineralStatusBar);

        // <--- place vor fixed objects endes --->
        this.ctx.translate(-this.cam_X, -this.cam_Y);
        
        this.addObjectsToMap(this.lvl.enemies);
        
        this.addToMap(this.character);
        this.addObjectsToMap(this.charATK);
        this.addObjectsToMap(this.enemyATK);

        this.addObjectsToMap(this.itemDrop);

        this.addObjectsToMap(this.loadSequenz);

        this.ctx.translate(this.cam_X, this.cam_Y);

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
        if (mo instanceof RedMineralStatusBar || mo instanceof BlueMineralStatusBar) {
            mo.drawText(this.ctx, this.redMineralStatusBar.collectedRedMineral, this.blueMineralStatusBar.collectedBlueMineral);
        }

        if (mo.otherDirection) {
            this.standartImage(mo);
        }
    }

    mirroredImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.img.width - 85, 0);
        this.ctx.scale(-1, 1);
        mo.posiX = mo.posiX * -1;
    }

    standartImage(mo) {
        this.ctx.restore();
        mo.posiX = mo.posiX * -1;
    }
}
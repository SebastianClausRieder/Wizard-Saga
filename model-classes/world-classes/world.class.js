class World {
    lvl = lvl1;

    drawableObject = new DrawableObject();
    moveableObject = new MovableObject();
    
    character = new Character();
    charATK = [];
    itemDrop = [];

    canvas;
    ctx;
    keyboard;
    cam_X;

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
            this.checkUseAttackKey();
        }, 100);
    }

    checkCollosinWithEnemy() {
        if (!this.character.hurts && !this.character.playerDEAD) {
            this.lvl.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy) && !enemy.toBeRemoved) {
                    this.character.LP -= enemy.doesDMG;
                    this.lifeStatusBar.setPercentage(this.character.LP, this.lifeStatusBar.LIFE_BAR);
                    if (this.character.LP > 0) {
                        this.character.animateHurts(this.character.IMAGES_HURT);
                    } else {
                        this.character.animateDeath(this.character.IMAGES_DEAD);
                        setTimeout(() => {
                            console.log('you are dead');
                        }, 5000);
                    }
                }
            });
        }
    }

    checkUseAttackKey() {
        this.meleeAttack1();
        this.meleeAttack2();
        this.magicAttack1();
        this.magicAttack2();
    }

    meleeAttack1() {
        if (this.keyboard.ATTACK1 && !this.keyboard.keyIsHold_ATTACK1 && !this.character.attack) {
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
        if (this.keyboard.MAGIC1 && !this.keyboard.keyIsHold_MAGIC1 && !this.fireballFly && this.character.MP >= 20) {
            this.keyboard.keyIsHold_MAGIC1 = true;
            this.character.fireballAttack = true;
            this.fireballFly = true;
            this.character.MP -= 20;
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
        if (this.keyboard.MAGIC2 && !this.keyboard.keyIsHold_MAGIC2 && this.character.MP >= 25) {
            this.keyboard.keyIsHold_MAGIC2 = true;
            let fireburst = new CharAttackFireburst(this.character.posiX, this.character.posiY, this.character.otherDirection);
            this.charATK.push(fireburst);
            this.character.attackAnimation(this.character.IMAGES_FIREBURST);
            this.character.doesDMG = 20;
            this.character.MP -= 25;
            this.manaStatusBar.setPercentage(this.character.MP, this.manaStatusBar.MANA_BAR);
            this.checkHitEnemy();
        }
    }

    checkHitEnemy() {
        this.lvl.enemies.forEach((enemy, index) => {
            if (this.charATK[0].isColliding(enemy) && !enemy.dead) {
                enemy.stopWalkingEnemies();
                enemy.LP -= this.character.doesDMG;
                enemy.intervalSequenz = 0;
                if (enemy.LP > 0) {
                    enemy.animateHurts(enemy.IMAGES_HURT);
                    setTimeout(() => {
                        enemy.animateWalkingEnemies(225);
                        enemy.moveLeft(enemy.speed, 1000 / 60);
                    }, 1500);
                } else {
                    enemy.dead = true;
                    enemy.animateDeath(enemy.IMAGES_DEAD);
                    setTimeout(() => {
                        let item = new BlueMineral(enemy.posiX, enemy.posiY);
                        enemy.removeFromMap();
                        this.lvl.enemies = this.lvl.enemies.filter(enemy => !enemy.toBeRemoved);
                        this.itemDrop.push(item);
                    }, 2000);
                }
            }
        });
    }

    checkEarnMineral() {
        setInterval(() => {
            this.lvl.mineralsforEach((mineral) => {
                if (this.character.isColliding(mineral)) {
                    this.co
                }
            });
        }, 200);
    }

    setWorld() {
        this.character.world = this;
        this.drawableObject.world = this;
        this.moveableObject.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(-this.cam_X, 0);
        
        this.addObjectsToMap(this.lvl.bgMountens01);
        this.addObjectsToMap(this.lvl.cloud01);
        this.addObjectsToMap(this.lvl.path01);
       
        this.ctx.translate(this.cam_X, 0);
        // <--- place vor fixed objects --->

        this.addToMap(this.lifeStatusBar);
        this.addToMap(this.manaStatusBar);
        this.addToMap(this.redMineralStatusBar);
        this.addToMap(this.blueMineralStatusBar);

        // <--- place vor fixed objects endes --->
        this.ctx.translate(-this.cam_X, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.charATK);
        
        this.addObjectsToMap(this.lvl.enemies);
        this.addObjectsToMap(this.itemDrop);

        this.ctx.translate(this.cam_X, 0);

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
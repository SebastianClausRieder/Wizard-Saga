class World {
    lvl = lvl1;
    
    character = new Character();

    canvas;
    ctx;
    keyboard;
    cam_X;

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
            if (!this.character.hurts && !this.character.playerDEAD) {
                this.lvl.enemies.forEach((enemy) => {
                    if (this.character.isColliding(enemy)) {
                        this.character.LP -= enemy.doesDMG;
                        this.character.animateHurts();
                    }
                });
            }
        }, 200);
    }

    setWorld() {
        this.character.world = this;
        // this.bgMountens01.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(-this.cam_X, 0);
        
        this.addObjectsToMap(this.lvl.bgMountens01);
       
        this.addObjectsToMap(this.lvl.cloud01);

        this.addObjectsToMap(this.lvl.path01);
       
        this.addToMap(this.character);
        
        this.addObjectsToMap(this.lvl.enemies);

        this.ctx.translate(this.cam_X, 0);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.mirroredImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

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
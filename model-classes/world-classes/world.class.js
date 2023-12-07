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
            this.ctx.save();
            this.ctx.translate(mo.img.width, 0);
            this.ctx.scale(-1, 1);
            mo.posiX = mo.posiX * -1;
        }

        this.ctx.drawImage(mo.img, mo.posiX, mo.posiY, mo.width, mo.height);

        if (mo.otherDirection) {
            this.ctx.restore();
            mo.posiX = mo.posiX * -1;
        }
    }
}
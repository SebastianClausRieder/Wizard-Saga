class World {
    bgMountens01 = [
        new BGMounten01('img/wizard-saga/mountains/m1/1.png', 0, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/2.png', 0, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/3.png', 0, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/4.png', 0, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/5.png', 0, 0),
    ];
    cloud01 = new CloudBlack01();
    path01 = new PathGreen01();
    character = new Character();
    enemies = [
        new Lizard(),
        new Lizard(),
        new Lizard(),
    ];
    canvas;
    ctx

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.addObjectsToMap(this.bgMountens01);
       
        this.addToMap(this.cloud01);

        this.addToMap(this.path01);
       
        this.addToMap(this.character);
        
        this.addObjectsToMap(this.enemies);

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
        this.ctx.drawImage(mo.img, mo.posiX, mo.posiY, mo.width, mo.height);
    }
}
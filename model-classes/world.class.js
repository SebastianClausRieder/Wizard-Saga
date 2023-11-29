class World {
    character = new Character();
    enemies = [
        new Lizard(),
        new Lizard(),
        new Lizard(),
    ];
    cloud = new CloudBlack1();
    canvas;
    ctx

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.character.img, this.character.posiX, this.character.posiY, this.character.width, this.character.height);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.posiX, enemy.posiY, enemy.width, enemy.height);
        });
        this.ctx.drawImage(this.cloud.img, this.cloud.posiX, this.cloud.posiY, this.cloud.width, this.cloud.height);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }
}
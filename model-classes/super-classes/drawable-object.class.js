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
    
    collectedRedMineral = 0;

    enemyClasses = [Lizard, Demon, Endboss01];
    attackClasses = [CharAttack1, CharAttack2, CharAttackFireball, CharAttackFireburst];
    itemClasses = [BlueMineral, RedMineral];

    world;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(imageArray) {
        imageArray.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.posiX, this.posiY, this.width, this.height);
        // ctx.drawImage(this.img, 0, 0, this.img.width,    this.img.height,     // source rectangle
        //            0, 0, this.canvas.width, this.canvas.height); // destination rectangle
    }

    drawFrame(ctx) {
        if (this instanceof Character || this.isAttackInstance(this) || this.isEnemyInstance(this) || this.isItemInstance(this)) {
        
            // Voller Rahmen Original Bild
            ctx.beginPath();
            ctx.lineWidth = '6';
            ctx.strokeStyle = 'green';
            ctx.rect(this.posiX, this.posiY, this.width, this.height);
            ctx.stroke();

            // Voller Rahmen HitBox
            ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.strokeStyle = 'yellow';
            ctx.rect(this.posiX + this.hitBoxX, this.posiY + this.hitBoxY, this.hitBoxWidth, this.hitBoxHeight);
            // ctx.rect(this.posiX, this.hitBoxWidth, this.posiY, this.hitBoxHeight);
            ctx.stroke();

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
        }
    }

    isAttackInstance(obj) {
        return this.attackClasses.some(attackClass => obj instanceof attackClass);
    }

    isEnemyInstance(obj) {
        return this.enemyClasses.some(enemyClass => obj instanceof enemyClass);
    }

    isItemInstance(obj) {
        return this.itemClasses.some(itemClass => obj instanceof itemClass);
    }

    drawText(ctx, redMineral, blueMineral) {
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'black';

        ctx.fillText(`${redMineral}`, 60, 122);
        ctx.fillText(`${blueMineral}`, 145, 122);
    }

    setPercentage(percentage, BAR) {
        let path = this.resolveImageIndex(percentage, BAR);
        this.img = this.imageCache[path];
    }

    resolveImageIndex(percentage, BAR) {
        if (percentage > 0 && percentage <= 100) {
            return BAR[Math.floor((20 * percentage) / 100)];
        } else if (percentage <= 0) {
            return BAR[0];
        }
    }
}
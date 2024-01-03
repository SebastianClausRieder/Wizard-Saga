class DrawableObject {
    posiX = 80;
    posiY;

    mainPosiY;

    width = 60;
    height = null;

    img;
    imageCache = {};
    currentImageIdle = 0;
    currentImageWalk = 0;
    currentImageAction = 0;
    currentImageAttack = 0;
    
    collectedRedMineral = 0;

    enemyClasses = [Lizard, Endboss01];

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;

        this.height = (this.width * this.img.height) / this.img.width;
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
    }

    drawFrame(ctx) {
        if (this instanceof Character || this.isEnemyInstance(this)) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.posiX + this.hitBoxX, this.posiY + this.hitBoxY, this.hitBoxWidth, this.hitBoxHeight);
            ctx.stroke();
        }
    }

    drawText(ctx, redMineral, blueMineral) {
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'black';

        ctx.fillText(`${redMineral}`, 60, 122);
        ctx.fillText(`${blueMineral}`, 145, 122);
    }

    isEnemyInstance(obj) {
        return this.enemyClasses.some(enemyClass => obj instanceof enemyClass);
    }

    setPercentage(percentage, BAR) {
        let path = this.resolveImageIndex(percentage, BAR);
        this.img = this.imageCache[path];
    }

    resolveImageIndex(percentage, BAR) {
        if (percentage >= 100) {
            return BAR[20];
        } else if (percentage == 95) {
            return BAR[19];
        } else if (percentage == 90) {
            return BAR[18];
        } else if (percentage == 85) {
            return BAR[17];
        } else if (percentage == 80) {
            return BAR[16];
        } else if (percentage == 75) {
            return BAR[15];
        } else if (percentage == 70) {
            return BAR[14];
        } else if (percentage == 65) {
            return BAR[13];
        } else if (percentage == 60) {
            return BAR[12];
        } else if (percentage == 55) {
            return BAR[11];
        } else if (percentage == 50) {
            return BAR[10];
        } else if (percentage == 45) {
            return BAR[9];
        } else if (percentage == 40) {
            return BAR[8];
        } else if (percentage == 35) {
            return BAR[7];
        } else if (percentage == 30) {
            return BAR[6];
        } else if (percentage == 25) {
            return BAR[5];
        } else if (percentage == 20) {
            return BAR[4];
        } else if (percentage == 15) {
            return BAR[3];
        } else if (percentage == 10) {
            return BAR[2];
        } else if (percentage == 5) {
            return BAR[1];
        } else if (percentage == 0) {
            return BAR[0];
        }
    }

    collectMineral(color, number) {        
        if (color == 'blue') {
            this.collectedBlueMineral += number;
        } else {
            this.collectedRedMineral += number;
        }
    }
}
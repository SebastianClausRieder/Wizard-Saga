class Platform01 extends MovableObject {
    hitBoxWidth = 220;
    hitBoxHeight = 90;
    hitBoxX = 15;
    hitBoxY = 15;

    constructor(imagePath, imageW, imageH, imageX, imageY) {
        super().loadImage(imagePath);
        
        this.width = imageW;
        this.height = imageH;

        this.posiX = imageX;
        this.posiY = imageY;
    }
}

class Platform02 extends MovableObject {
    hitBoxWidth = 290;
    hitBoxHeight = 150;
    hitBoxX = 7;
    hitBoxY = 15;

    constructor(imagePath, imageW, imageH, imageX, imageY) {
        super().loadImage(imagePath);
        
        this.width = imageW;
        this.height = imageH;

        this.posiX = imageX;
        this.posiY = imageY;
    }
}

class Platform03 extends MovableObject {
    hitBoxWidth = 57;
    hitBoxHeight = 25;
    hitBoxX = 3;
    hitBoxY = 8;

    constructor(imagePath, imageW, imageH, imageX, imageY) {
        super().loadImage(imagePath);
        
        this.width = imageW;
        this.height = imageH;

        this.posiX = imageX;
        this.posiY = imageY;
    }
}

class Platform04Wall extends MovableObject {
    hitBoxWidth = 605;
    hitBoxHeight = 470;
    hitBoxX = 7;
    hitBoxY = 15;

    constructor(imagePath, imageW, imageH, imageX, imageY) {
        super().loadImage(imagePath);
        
        this.width = imageW;
        this.height = imageH;

        this.posiX = imageX;
        this.posiY = imageY;
    }
}
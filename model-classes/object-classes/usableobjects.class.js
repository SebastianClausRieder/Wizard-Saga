class UsableObjectDoor extends MovableObject {
    hitBoxWidth = 2;
    hitBoxHeight = 85;
    hitBoxX = 63;
    hitBoxY = 25;

    constructor(imagePath, imageW, imageH, imageX, imageY) {
        super().loadImage(imagePath);
        
        this.width = imageW;
        this.height = imageH;

        this.posiX = imageX;
        this.posiY = imageY;
    }
}
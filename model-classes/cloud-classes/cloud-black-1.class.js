class CloudBlack01 extends MovableObject {
    width = 272;

    constructor(imagePath) {
        super().loadImage(imagePath);
        
        this.posiX = Math.random() * 1000;
        this.posiY = 25 + Math.random() * 50;

        this.animation();
    }
}
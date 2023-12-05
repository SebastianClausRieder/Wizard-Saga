class BGMounten01 extends MovableObject {
    width = 1000;
    height = 500;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);

        this.posiX = x;
        this.posiY = y;
    }
}
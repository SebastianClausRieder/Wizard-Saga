class PathGreen01 extends MovableObject {
    width = 160;
    height = 80;

    constructor(imagePath, x) {
        super().loadImage(imagePath);

        this.posiX = x;
        this.posiY = canvasHeight - this.height + 35;
    }
}
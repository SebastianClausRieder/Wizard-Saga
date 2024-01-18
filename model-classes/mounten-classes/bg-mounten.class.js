class BGMounten01 extends MovableObject {
    width = 1000;
    height = 500;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);

        this.posiX = x;
        this.posiY = y;

        if (imagePath == "img/wizard-saga/mountains/m1/2.png") {
            this.posiX = x - 50;
            this.bgAnimation();
        }
    }
}
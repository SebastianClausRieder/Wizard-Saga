class Cloud01 extends MovableObject {
    width = 200;
    height = 45;
    
    speed = 0.10 + Math.random() * 0.2;

    constructor(imagePath) {
        super().loadImage(imagePath);
        
        this.posiX = Math.random() * 10000;
        this.posiY = 25 + Math.random() * 100;

        /**
         * Makes the clouds move behind the mountains.
         */
        if (imagePath.includes('Shape7/cloud_shape7_1.png')) {
            this.moveRight(this.speed, 1000 / 60);
        } else {
            this.moveLeft(this.speed, 1000 / 60);
        }
    }
}
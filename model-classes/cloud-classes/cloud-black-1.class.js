class CloudBlack01 extends MovableObject {
    width = 272;
    height = 62;

    constructor() {
        super().loadImage('img/wizard-saga/clouds/PNG/Clouds_black/Shape2/cloud_shape2_1.png');
        
        this.posiX = Math.random() * 1000;
        this.posiY = 25 + Math.random() * 50;

        this.animation();
    }
}
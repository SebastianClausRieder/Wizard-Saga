class Star extends MovableObject {
    width = 45;
    height = 45;

    hitBoxWidth = 41;
    hitBoxHeight = 41;
    hitBoxX = 2;
    hitBoxY = 2;

    posiX = 10000;
    posiY = 300;
    
    IMAGE_STAR = [
        'img/wizard-saga/platforms/PNG/Items/000_0019_star1.png',
        'img/wizard-saga/platforms/PNG/Items/000_0019_star1.png',
        'img/wizard-saga/platforms/PNG/Items/000_0019_star1.png',
        'img/wizard-saga/platforms/PNG/Items/000_0019_star1.png',
        'img/wizard-saga/platforms/PNG/Items/000_0019_star1.png',
        'img/wizard-saga/platforms/PNG/Items/000_0019_star1.png',
        'img/wizard-saga/platforms/PNG/Items/000_0019_star1.png',
        'img/wizard-saga/platforms/PNG/Items/000_0019_star1.png',
        'img/wizard-saga/platforms/PNG/Items/000_0019_star1.png',
        'img/wizard-saga/platforms/PNG/Items/000_0019_star1.png',
        'img/wizard-saga/platforms/PNG/Items/000_0019_star1.png',
        'img/wizard-saga/platforms/PNG/Items/000_0018_star2.png',
        'img/wizard-saga/platforms/PNG/Items/000_0017_star3.png',
        'img/wizard-saga/platforms/PNG/Items/000_0016_star4.png',
        'img/wizard-saga/platforms/PNG/Items/000_0015_star5.png',
        'img/wizard-saga/platforms/PNG/Items/000_0014_star6.png',
        'img/wizard-saga/platforms/PNG/Items/000_0013_star7.png',
        'img/wizard-saga/platforms/PNG/Items/000_0012_star8.png',
        'img/wizard-saga/platforms/PNG/Items/000_0011_star9.png',
        'img/wizard-saga/platforms/PNG/Items/000_0010_star10.png'
    ];
    
    constructor() {
        super().loadImage('img/wizard-saga/platforms/PNG/Items/000_0019_star1.png');
        this.loadImages(this.IMAGE_STAR);

        this.rotateStar();
    }

    /**
     * Let the Start Rotate.
     */
    rotateStar() {
        setInterval(() => {
            this.playActionAnimation(this.IMAGE_STAR);
        }, 155);
    }
}
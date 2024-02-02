class LoadSequenz extends MovableObject {
    width = 1000;
    height = 530;

    world;

    IMAGE_STARTLOADSEQUENZ = [
        'img/wizard-saga/loadsequenz/loadsequenz00.png',
        'img/wizard-saga/loadsequenz/loadsequenz01.png',
        'img/wizard-saga/loadsequenz/loadsequenz02.png',
        'img/wizard-saga/loadsequenz/loadsequenz03.png',
        'img/wizard-saga/loadsequenz/loadsequenz04.png',
        'img/wizard-saga/loadsequenz/loadsequenz05.png',
        'img/wizard-saga/loadsequenz/loadsequenz06.png',
        'img/wizard-saga/loadsequenz/loadsequenz07.png',
        'img/wizard-saga/loadsequenz/loadsequenz08.png',
        'img/wizard-saga/loadsequenz/loadsequenz09.png',
        'img/wizard-saga/loadsequenz/loadsequenz10.png'
    ];

    IMAGE_ENDLOADSEQUENZ = [
        'img/wizard-saga/loadsequenz/loadsequenz10.png',
        'img/wizard-saga/loadsequenz/loadsequenz09.png',
        'img/wizard-saga/loadsequenz/loadsequenz08.png',
        'img/wizard-saga/loadsequenz/loadsequenz07.png',
        'img/wizard-saga/loadsequenz/loadsequenz06.png',
        'img/wizard-saga/loadsequenz/loadsequenz05.png',
        'img/wizard-saga/loadsequenz/loadsequenz04.png',
        'img/wizard-saga/loadsequenz/loadsequenz03.png',
        'img/wizard-saga/loadsequenz/loadsequenz02.png',
        'img/wizard-saga/loadsequenz/loadsequenz01.png',
        'img/wizard-saga/loadsequenz/loadsequenz00.png'
    ];

    constructor(cam_X, cam_Y, world) {
        super().loadImage('img/wizard-saga/loadsequenz/loadsequenz00.png');
        this.loadImages(this.IMAGE_STARTLOADSEQUENZ);
        this.loadImages(this.IMAGE_ENDLOADSEQUENZ);

        this.posiX = cam_X;
        this.posiY = cam_Y;

        this.world = world;
    }

    startLoadSequenz() {
        const startLoadSequenzInterV = setInterval(() => {
            this.playActionAnimation(this.IMAGE_STARTLOADSEQUENZ);
            this.currentImageAction++;
            if (this.currentImageAction >= this.IMAGE_STARTLOADSEQUENZ.length) {
                clearInterval(startLoadSequenzInterV);
                this.currentImageAction = 0;
            }
        }, 125);
    }

    endLoadSequenz() {
        const endLoadSequenzInterV = setInterval(() => {
            this.playActionAnimation(this.IMAGE_ENDLOADSEQUENZ);
            this.currentImageAction++;
            if (this.currentImageAction >= this.IMAGE_ENDLOADSEQUENZ.length) {
                clearInterval(endLoadSequenzInterV);
                this.currentImageAction = 0;
                this.world.character.onLoad = false;
                this.world.loadSequenz = [];
            }
        }, 125);
    }
}
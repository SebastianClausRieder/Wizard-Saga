class PathGreen01 extends MovableObject {
    width = 160;
    X = 0;
    pathCache = [];

    PATH_IMAGES = [
        'img/wizard-saga/paths/finish-paths/green-path01.png',
        'img/wizard-saga/paths/finish-paths/green-path01.png',
        'img/wizard-saga/paths/finish-paths/green-path01.png',
        'img/wizard-saga/paths/finish-paths/green-path01.png',
        'img/wizard-saga/paths/finish-paths/green-path01.png',
        'img/wizard-saga/paths/finish-paths/green-path01.png',
        'img/wizard-saga/paths/finish-paths/green-path01.png'
    ];

    constructor() {
        super().loadImage('img/wizard-saga/paths/finish-paths/green-path01.png');
        //this.loadPath(this.PATH_IMAGES);

        this.posiY = canvasHeight - this.height;
    }

    loadPath(pathArray) {
        pathArray.forEach((pathImage) => {
            let img = new Image();
            img.src = pathImage;
            this.pathCache.push(img);
            this.posiX = this.X;
            this.X += this.width;
        });
    }
}


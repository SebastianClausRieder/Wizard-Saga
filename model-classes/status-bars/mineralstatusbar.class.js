class RedMineralStatusBar extends DrawableObject {
    width = 30;
    height = 30;
    collectedRedMineral = 0;

    constructor() {
        super().loadImage('img/wizard-saga/minerals/PNG/Transperent/Icon3.png');
        this.posiX = 25;
        this.posiY = 100;
    }

    collectRedMineral(number) {
        this.collectedRedMineral += number;
    }
}

class BlueMineralStatusBar extends DrawableObject {
    width = 30;
    height = 30;
    collectedBlueMineral = 0;

    constructor() {
        super().loadImage('img/wizard-saga/minerals/PNG/Transperent/Icon42.png');
        this.posiX = 110;
        this.posiY = 100;
    }

    collectBlueMineral(number) {
        this.collectedBlueMineral += number;
    }
}
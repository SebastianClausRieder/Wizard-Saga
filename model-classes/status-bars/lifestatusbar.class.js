class LifeStatusBar extends DrawableObject {
    width = 250;
    height = 50;
    
    LIFE_BAR = [
        'img/wizard-saga/statusbars/life-bar/life-bar-00.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-05.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-10.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-15.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-20.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-25.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-30.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-35.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-40.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-45.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-50.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-55.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-60.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-65.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-70.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-75.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-80.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-85.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-90.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-95.png',
        'img/wizard-saga/statusbars/life-bar/life-bar-100.png'
    ];

    constructor() {
        super().loadImage('img/wizard-saga/statusbars/life-bar/life-bar-100.png');
        this.loadImages(this.LIFE_BAR);
        this.setPercentage(100, this.LIFE_BAR);
        this.posiX = 25;
        this.posiY = 25;
    }
}
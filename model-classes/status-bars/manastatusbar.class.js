class ManaStatusBar extends DrawableObject {
    width = 240;
    
    MANA_BAR = [
        'img/wizard-saga/statusbars/mana-bar/mana-bar-00.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-05.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-10.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-15.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-20.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-25.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-30.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-35.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-40.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-45.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-50.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-55.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-60.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-65.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-70.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-75.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-80.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-85.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-90.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-95.png',
        'img/wizard-saga/statusbars/mana-bar/mana-bar-100.png'
    ];

    constructor() {
        super().loadImage('img/wizard-saga/statusbars/mana-bar/mana-bar-100.png');
        this.loadImages(this.MANA_BAR);
        this.setPercentage(100, this.MANA_BAR);
        this.posiX = 35;
        this.posiY = 55;
    }
}
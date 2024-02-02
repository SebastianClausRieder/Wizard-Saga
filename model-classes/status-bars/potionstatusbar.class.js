class RedPotionStatusBar extends DrawableObject {
    width = 30;
    height = 30;
    collectedRedPotion = 0;

    constructor() {
        super().loadImage('img/wizard-saga/potions/PNG/Transperent/Icon1.png');
        this.posiX = 270;
        this.posiY = 35;
    }

    collectRedPotion() {
        this.collectedRedPotion++;
    }
}

class BluePotionStatusBar extends DrawableObject {
    width = 30;
    height = 30;
    collectedBluePotion = 0;

    constructor() {
        super().loadImage('img/wizard-saga/potions/PNG/Transperent/Icon3.png');
        this.posiX = 270;
        this.posiY = 65;
    }

    collectBluePotion() {
        this.collectedBluePotion++;
    }
}
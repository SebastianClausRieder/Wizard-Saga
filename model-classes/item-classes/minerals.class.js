class BlueMineral extends MovableObject {
    width = 32;
    height = 32;

    hitBoxWidth = 30;
    hitBoxHeight = 30;
    hitBoxX = 1;
    hitBoxY = 2;

    value = 0;

    IMAGES_BLUE_M1 = [
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon33-light.png'
    ];

    IMAGES_BLUE_M2 = [
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon20-light.png'
    ];

    IMAGES_BLUE_M3 = [
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon40-light.png'
    ];

    constructor(NPCposiX, NPCposiY, dropRatA, dropRatB, dropRatC) {
        super().loadImage('img/wizard-saga/characters/empty-box.png');
        this.loadImages(this.IMAGES_BLUE_M1);
        this.loadImages(this.IMAGES_BLUE_M2);
        this.loadImages(this.IMAGES_BLUE_M3);
        this.posiX = NPCposiX + 75;
        this.posiY = NPCposiY + 90;

        this.firstChance = dropRatA;
        this.secondChance = dropRatB;
        this.thirdChance = dropRatC;
        
        this.mainPosiY = canvasHeight - this.height - 25;

        if (dropRatA <= 0) {
            this.drawMineral(dropRatB);
        } else {
            this.executeRandomAction();
        }
    }

    drawMineral(lvl) {
        if (lvl == "M1") { this.value = 5 }
        if (lvl == "M2") { this.value = 10 }
        if (lvl == "M3") { this.value = 20 }

        const IMAGE_ARRAY_Variable = `IMAGES_BLUE_${lvl}`;
        const IMAGE_ARRAY = this[IMAGE_ARRAY_Variable];
        this.itemDrop(IMAGE_ARRAY);
    }

    executeRandomAction() {
        const randomNumber = Math.random();

        if (randomNumber < this.firstChance) {
            this.firstVariable(this.IMAGES_BLUE_M1, this.color);
        } else if (randomNumber < this.secondChance + this.firstChance) {
            this.secondVariable(this.IMAGES_BLUE_M2, this.color);
        } else if (randomNumber < this.thirdChance + this.secondChance + this.firstChance) {
            this.thirdVariable(this.IMAGES_BLUE_M3, this.color);
        }
    }
}

class RedMineral extends MovableObject {
    width = 32;
    height = 32;

    hitBoxWidth = 30;
    hitBoxHeight = 30;
    hitBoxX = 1;
    hitBoxY = 2;

    value = 0;

    IMAGES_RED_M1 = [
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon25-light.png'
    ];

    IMAGES_RED_M2 = [
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon12-light.png'
    ];

    IMAGES_RED_M3 = [
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3.png',
        'img/wizard-saga/minerals/PNG/Transperent/Icon3-light.png'
    ];

    constructor(NPCposiX, NPCposiY, ID, ilvl) {
        super().loadImage('img/wizard-saga/characters/empty-box.png');
        this.loadImages(this.IMAGES_RED_M1);
        this.loadImages(this.IMAGES_RED_M2);
        this.loadImages(this.IMAGES_RED_M3);
        this.posiX = NPCposiX + 75;
        this.posiY = NPCposiY + 90;
        
        this.mainPosiY = canvasHeight - this.height - 25;

        if (ID <= 0) {
            this.drawMineral(ilvl);
        } else {
            this.executeRandomAction();
        }
    }

    drawMineral(lvl) {
        if (lvl == "M1") { this.value = 5 }
        if (lvl == "M2") { this.value = 10 }
        if (lvl == "M3") { this.value = 20 }

        const IMAGE_ARRAY_Variable = `IMAGES_RED_${lvl}`;
        const IMAGE_ARRAY = this[IMAGE_ARRAY_Variable];
        this.itemDrop(IMAGE_ARRAY);
    }

    executeRandomAction() {
        const randomNumber = Math.random();

        if (randomNumber < this.firstChance) {
            this.firstVariable(this.IMAGES_RED_M1);
        } else if (randomNumber < this.secondChance + this.firstChance) {
            this.secondVariable(this.IMAGES_RED_M2);
        } else if (randomNumber < this.thirdChance + this.secondChance + this.firstChance) {
            this.thirdVariable(this.IMAGES_RED_M3);
        }
    }
}
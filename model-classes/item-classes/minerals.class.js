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

    constructor(NPCposiX, NPCposiY) {
        super().loadImage('img/wizard-saga/characters/empty-box.png');
        this.loadImages(this.IMAGES_BLUE_M1);
        this.loadImages(this.IMAGES_BLUE_M2);
        this.loadImages(this.IMAGES_BLUE_M3);
        this.posiX = NPCposiX + 75;
        this.posiY = NPCposiY + 90;
        
        this.mainPosiY = canvasHeight - this.height - 25;

        this.executeRandomAction();
    }

    executeRandomAction() {
        const randomNumber = Math.random();
        console.log('randomNumber', randomNumber);

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

    constructor(NPCposiX, NPCposiY) {
        super().loadImage('img/wizard-saga/characters/empty-box.png');
        this.loadImages(this.IMAGES_RED_M1);
        this.loadImages(this.IMAGES_RED_M2);
        this.loadImages(this.IMAGES_RED_M3);
        this.posiX = NPCposiX + 75;
        this.posiY = NPCposiY + 90;
        
        this.mainPosiY = canvasHeight - this.height - 25;

        this.executeRandomAction();
    }

    executeRandomAction() {
        const randomNumber = Math.random();
        console.log('randomNumber', randomNumber);

        if (randomNumber < this.firstChance) {
            this.firstVariable(this.IMAGES_RED_M1);
        } else if (randomNumber < this.secondChance + this.firstChance) {
            this.secondVariable(this.IMAGES_RED_M2);
        } else if (randomNumber < this.thirdChance + this.secondChance + this.firstChance) {
            this.thirdVariable(this.IMAGES_RED_M3);
        }
    }
}
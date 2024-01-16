class BlueMineral extends MovableObject {
    width = 32;
    height = 32;

    hitBoxWidth = 30;
    hitBoxHeight = 30;
    hitBoxX = 1;
    hitBoxY = 2;

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

        this.firstChance = 0.6; // Höhere Chance für erste Variable
        this.secondChance = 0.4; // Mittlere Chance für zweite Variable
        this.thirdChance = 0.2; // Geringere Chance für dritte Variable

        this.executeRandomAction();
    }

    executeRandomAction() {
        const randomNumber = Math.random();

        if (randomNumber < this.firstChance) {
            this.firstVariable();
        } else if (randomNumber < this.secondChance + this.firstChance) {
            this.secondVariable();
        } else if (randomNumber < this.thirdChance + this.secondChance + this.firstChance) {
            this.thirdVariable();
        }
    }

    firstVariable() {
        this.dropAnimation(this.IMAGES_BLUE_M1[0])
        setTimeout(() => {
            this.blueMineralDrop(this.IMAGES_BLUE_M1);
        }, 1500);
    }

    secondVariable() {
        this.dropAnimation(this.IMAGES_BLUE_M2[0])
        setTimeout(() => {
            this.blueMineralDrop(this.IMAGES_BLUE_M2);
        }, 1500);
    }

    thirdVariable() {
        this.dropAnimation(this.IMAGES_BLUE_M3[0])
        setTimeout(() => {
            this.blueMineralDrop(this.IMAGES_BLUE_M3);
        }, 1500);
    }

    dropAnimation(IMAGE) {
        this.loadImage(IMAGE);
        this.gravitaSpeed = 10;
        this.applyGravity();
    }

    blueMineralDrop(IMAGES) {
        setInterval(() => {
            this.playActionAnimation(IMAGES);
        }, 250);
    }
}
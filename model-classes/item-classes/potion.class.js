class BluePotion extends MovableObject {
    width = 32;
    height = 32;

    hitBoxWidth = 30;
    hitBoxHeight = 30;
    hitBoxX = 1;
    hitBoxY = 2;

    value = 100;

    IMAGES_BLUE_POTION = [
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon3-light.png'
    ];

    constructor(NPCposiX, NPCposiY, ID) {
        super().loadImage('img/wizard-saga/characters/empty-box.png');
        this.loadImages(this.IMAGES_BLUE_POTION);
        this.posiX = NPCposiX + 15;
        this.posiY = NPCposiY + 20;
        
        this.mainPosiY = NPCposiY + 20;

        if (ID <= 0) {
            this.itemDrop(this.IMAGES_BLUE_POTION);
        } else {
            this.dropItem(this.IMAGES_BLUE_POTION);
        }
    }
}

class RedPotion extends MovableObject {
    width = 32;
    height = 32;

    hitBoxWidth = 30;
    hitBoxHeight = 30;
    hitBoxX = 1;
    hitBoxY = 2;

    value = 50;

    IMAGES_RED_POTION = [
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1.png',
        'img/wizard-saga/potions/PNG/Transperent/Icon1-light.png'
    ];

    constructor(NPCposiX, NPCposiY, ID) {
        super().loadImage('img/wizard-saga/characters/empty-box.png');
        this.loadImages(this.IMAGES_RED_POTION);
        this.posiX = NPCposiX + 15;
        this.posiY = NPCposiY + 20;
        
        this.mainPosiY = NPCposiY + 20;

        if (ID <= 0) {
            this.itemDrop(this.IMAGES_RED_POTION);
        } else {
            this.dropItem(this.IMAGES_RED_POTION);
        }
    }
}
class StoneBlow extends MovableObject {
    width = 128;
    height = 128;

    hitBoxWidth = 35;
    hitBoxHeight = 70;
    hitBoxX = 15;
    hitBoxY = 10;

    world;

    IMAGES_STONE_BLOW = [
        'img/wizard-saga/monsters/PNG/medusa/Stone1.png',
        'img/wizard-saga/monsters/PNG/medusa/Stone2.png',
        'img/wizard-saga/monsters/PNG/medusa/Stone3.png',
        'img/wizard-saga/monsters/PNG/medusa/Stone4.png',
        'img/wizard-saga/monsters/PNG/medusa/Stone5.png',
        'img/wizard-saga/monsters/PNG/medusa/Stone6.png',
        'img/wizard-saga/monsters/PNG/medusa/Stone7.png',
        'img/wizard-saga/monsters/PNG/medusa/Stone8.png'
    ];

    constructor(charPosiX, charPosiY) {
        super().loadImage('img/wizard-saga/characters/empty-box.png');
        this.loadImages(this.IMAGES_STONE_BLOW);
        this.posiX = charPosiX;
        this.posiY = charPosiY;

        this.stoneBlow();
    }

    stoneBlow() {
        const stoneBlowInterV = setInterval(() => {
                this.playActionAnimation(this.IMAGES_STONE_BLOW);
                this.currentImageAttack++;
                if (this.currentImageAttack >= this.IMAGES_STONE_BLOW.length) {
                        clearInterval(stoneBlowInterV);
                        this.currentImageAttack = 0;
                        this.currentImageAction = 0;
                        this.world.enemyATK = [];
                }
        }, 125);
    }
}
class CharAttack1 extends MovableObject {
    width = 200;
    height = 100;

    hitBoxWidth = 50;
    hitBoxHeight = 70;
    hitBoxX = 65;
    hitBoxY = 30;

    constructor(charPosiX, charPosiY, charDirection) {
        super().loadImage('img/wizard-saga/characters/empty-box.png');
        this.posiX = charPosiX;
        this.posiY = charPosiY;

        if (charDirection) {
            this.hitBoxX = this.hitBoxX - this.hitBoxWidth - 20;
        }
    }
}

class CharAttack2 extends MovableObject {
    width = 200;
    height = 100;

    hitBoxWidth = 60;
    hitBoxHeight = 70;
    hitBoxX = 65;
    hitBoxY = 30;

    constructor(charPosiX, charPosiY, charDirection) {
        super().loadImage('img/wizard-saga/characters/empty-box.png');
        this.posiX = charPosiX;
        this.posiY = charPosiY;

        if (charDirection) {
            this.hitBoxX = this.hitBoxX - this.hitBoxWidth - 20;
        }
    }
}

class CharAttackFireball extends MovableObject {
    width = 65;
    height = 65;

    hitBoxWidth = 35;
    hitBoxHeight = 70;
    hitBoxX = 15;
    hitBoxY = 10;

    speedFly = 25;

    world;

    IMAGES_FIREBALL = [
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-01.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-02.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-03.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-04.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-05.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-06.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-07.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-08.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-09.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-10.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-11.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-12.png'
    ];

    constructor(charPosiX, charPosiY, charDirection) {
        super().loadImage('img/wizard-saga/characters/Fire-Wizard/fireball-attack/Fireball-attack-01.png');
        this.loadImages(this.IMAGES_FIREBALL);
        this.posiX = charPosiX + 55;
        this.posiY = charPosiY + 18;
        this.otherDirection = charDirection;

        if (charDirection) {
            this.posiX += 20;
        }

        this.flyingFireball();
    }

    flyingFireball() {
        const fireballAnimation = setInterval(() => {
            this.playActionAnimation(this.IMAGES_FIREBALL);
            if (this.otherDirection) {
                this.posiX -= this.speedFly;
            } else {
                this.posiX += this.speedFly;
            }
            this.currentImageAttack++;
            this.world.checkHitEnemy();

            if (this.currentImageAttack >= this.IMAGES_FIREBALL.length) {
                clearInterval(fireballAnimation);
                this.world.fireballFly = false;
                this.currentImageAttack = 0;
                this.currentImageAction = 0;
                this.currentImageIdle = 0;
                this.world.character.doesDMG = 0;
                this.world.charATK = [];
            }
        }, 100);
    }
}

class CharAttackFireburst extends MovableObject {
    width = 200;
    height = 100;

    hitBoxWidth = 100;
    hitBoxHeight = 70;
    hitBoxX = 65;
    hitBoxY = 30;

    constructor(charPosiX, charPosiY, charDirection) {
        super().loadImage('img/wizard-saga/characters/empty-box.png');
        this.posiX = charPosiX;
        this.posiY = charPosiY;

        if (charDirection) {
            this.hitBoxX = this.hitBoxX - this.hitBoxWidth - 20;
        }
    }
}

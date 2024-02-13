class MeleeAttack1 extends MovableObject {
    width = 35;
    height = 35;

    posiX = 870;

    constructor() {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/meleeattack/meleeattack1-icon.png');

        this.posiY = canvasHeight - this.height + 23;
    }
}

class MeleeAttack2 extends MovableObject {
    width = 35;
    height = 35;

    posiX = 910;

    constructor() {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/meleeattack/meleeattack2-icon.png');

        this.posiY = canvasHeight - this.height + 23;
    }
}

class Fireball extends MovableObject {
    width = 35;
    height = 35;

    posiX = 750;

    constructor() {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/fireball/fireball-icon.png');

        this.posiY = canvasHeight - this.height + 23;
    }
}

class Fireburst extends MovableObject {
    width = 35;
    height = 35;

    posiX = 790;

    constructor() {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/fireburst/fireburst-icon.png');

        this.posiY = canvasHeight - this.height + 23;
    }
}

class UseLessMana extends MovableObject {
    width = 35;
    height = 35;

    posiX = 830;

    IMAGE_USELESSMANA = [
        'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-10.png',
        'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-09.png',
        'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-08.png',
        'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-07.png',
        'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-06.png',
        'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-05.png',
        'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-04.png',
        'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-03.png',
        'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-02.png',
        'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-01.png'
    ];

    constructor() {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-dark.png');
        this.loadImages(this.IMAGE_USELESSMANA);

        this.posiY = canvasHeight - this.height + 23;
    }

    activateUseLessMana(world) {
        this.playActionAnimation(this.IMAGE_USELESSMANA);
        const useLessManaInterV = setInterval(() => {
            this.playActionAnimation(this.IMAGE_USELESSMANA);

            if (this.currentImageAction > this.IMAGE_USELESSMANA.length) {
                clearInterval(useLessManaInterV);
                this.currentImageAction = 0;
                this.loadImage('img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon.png');
                world.character.useLessManaActive = false;
            }
        }, 1000);
    }
}

class Defender extends MovableObject {
    width = 35;
    height = 35;

    posiX = 950;

    IMAGE_DEFENDER = [
        'img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-10.png',
        'img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-09.png',
        'img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-08.png',
        'img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-07.png',
        'img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-06.png',
        'img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-05.png',
        'img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-04.png',
        'img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-03.png',
        'img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-02.png',
        'img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-01.png'
    ];

    constructor() {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-dark.png');
        this.loadImages(this.IMAGE_DEFENDER);

        this.posiY = canvasHeight - this.height + 23;
    }

    activateDefender(world) {
        this.playActionAnimation(this.IMAGE_DEFENDER);
        const defenderInterV = setInterval(() => {
            this.playActionAnimation(this.IMAGE_DEFENDER);

            if (this.currentImageAction > this.IMAGE_DEFENDER.length) {
                clearInterval(defenderInterV);
                this.currentImageAction = 0;
                this.loadImage('img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon.png');
                world.character.defenderActive = false;
            }
        }, 1000);
    }
}
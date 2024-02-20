class MeleeAttack1 extends MovableObject {
    width = 45;
    height = 45;

    posiX = 850;

    world;

    constructor(world) {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/meleeattack/meleeattack1-icon.png');

        this.posiY = canvasHeight - this.height + 25;
        this.world = world;

        canvas.addEventListener('touchstart', this.handleTouchStart.bind(this));
        canvas.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }

    handleTouchStart(event) {
        const touchX = event.touches[0].clientX - canvas.getBoundingClientRect().left;
        const touchY = event.touches[0].clientY - canvas.getBoundingClientRect().top;
    
        const { x, y } = convertTouchCoordinates(touchX, touchY);
    
        if (x >= this.posiX && x <= this.posiX + this.width &&
            y >= this.posiY && y <= this.posiY + this.height) {
            this.world.keyboard.ATTACK1 = true;
        }
    }

    handleTouchEnd(event) {
        this.world.keyboard.ATTACK1 = false;
        this.world.keyboard.keyIsHold_ATTACK1 = false;
    }
}

class MeleeAttack2 extends MovableObject {
    width = 45;
    height = 45;

    posiX = 900;

    world;

    constructor(world) {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/meleeattack/meleeattack2-icon.png');

        this.posiY = canvasHeight - this.height + 25;
        this.world = world;

        canvas.addEventListener('touchstart', this.handleTouchStart.bind(this));
        canvas.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }

    handleTouchStart(event) {
        const touchX = event.touches[0].clientX - canvas.getBoundingClientRect().left;
        const touchY = event.touches[0].clientY - canvas.getBoundingClientRect().top;
    
        const { x, y } = convertTouchCoordinates(touchX, touchY);
    
        if (x >= this.posiX && x <= this.posiX + this.width &&
            y >= this.posiY && y <= this.posiY + this.height) {
            this.world.keyboard.ATTACK2 = true;
        }
    }

    handleTouchEnd(event) {
        this.world.keyboard.ATTACK2 = false;
        this.world.keyboard.keyIsHold_ATTACK2 = false;
    }
}

class Fireball extends MovableObject {
    width = 45;
    height = 45;

    posiX = 700;

    world;

    constructor(world) {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/fireball/fireball-icon-dark.png');
        this.currentSkillIcon = 'img/wizard-saga/skill-icon/wizard-skills/fireball/fireball-icon-dark.png';

        this.posiY = canvasHeight - this.height + 25;
        this.world = world;

        this.characterHaveEnoughMana(5, 10, 'img/wizard-saga/skill-icon/wizard-skills/fireball/fireball-icon.png', 'img/wizard-saga/skill-icon/wizard-skills/fireball/fireball-icon-dark.png');

        canvas.addEventListener('touchstart', this.handleTouchStart.bind(this));
        canvas.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }

    handleTouchStart(event) {
        const touchX = event.touches[0].clientX - canvas.getBoundingClientRect().left;
        const touchY = event.touches[0].clientY - canvas.getBoundingClientRect().top;
    
        const { x, y } = convertTouchCoordinates(touchX, touchY);
    
        if (x >= this.posiX && x <= this.posiX + this.width &&
            y >= this.posiY && y <= this.posiY + this.height) {
            this.world.keyboard.MAGIC1 = true;
        }
    }

    handleTouchEnd(event) {
        this.world.keyboard.MAGIC1 = false;
        this.world.keyboard.keyIsHold_MAGIC1 = false;
    }
}

class Fireburst extends MovableObject {
    width = 45;
    height = 45;

    posiX = 750;

    world;

    constructor(world) {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/fireburst/fireburst-icon-dark.png');
        this.currentSkillIcon = 'img/wizard-saga/skill-icon/wizard-skills/fireburst/fireburst-icon-dark.png';

        this.posiY = canvasHeight - this.height + 25;
        this.world = world;

        this.characterHaveEnoughMana(10, 20, 'img/wizard-saga/skill-icon/wizard-skills/fireburst/fireburst-icon.png', 'img/wizard-saga/skill-icon/wizard-skills/fireburst/fireburst-icon-dark.png');

        canvas.addEventListener('touchstart', this.handleTouchStart.bind(this));
        canvas.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }

    handleTouchStart(event) {
        const touchX = event.touches[0].clientX - canvas.getBoundingClientRect().left;
        const touchY = event.touches[0].clientY - canvas.getBoundingClientRect().top;
    
        const { x, y } = convertTouchCoordinates(touchX, touchY);
    
        if (x >= this.posiX && x <= this.posiX + this.width &&
            y >= this.posiY && y <= this.posiY + this.height) {
            this.world.keyboard.MAGIC2 = true;
        }
    }

    handleTouchEnd(event) {
        this.world.keyboard.MAGIC2 = false;
        this.world.keyboard.keyIsHold_MAGIC2 = false;
    }
}

class UseLessMana extends MovableObject {
    width = 45;
    height = 45;

    posiX = 800;

    world;

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

    constructor(world) {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-dark.png');
        this.currentSkillIcon = 'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-dark.png';
        this.loadImages(this.IMAGE_USELESSMANA);

        this.posiY = canvasHeight - this.height + 25;
        this.world = world;

        this.characterHaveEnoughBlueMinerals(100, 'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon.png', 'img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon-dark.png');

        canvas.addEventListener('touchstart', this.handleTouchStart.bind(this));
        canvas.addEventListener('touchend', this.handleTouchEnd.bind(this));
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

    handleTouchStart(event) {
        const touchX = event.touches[0].clientX - canvas.getBoundingClientRect().left;
        const touchY = event.touches[0].clientY - canvas.getBoundingClientRect().top;
    
        const { x, y } = convertTouchCoordinates(touchX, touchY);
    
        if (x >= this.posiX && x <= this.posiX + this.width &&
            y >= this.posiY && y <= this.posiY + this.height) {
            this.world.keyboard.USELESSMANA = true;
        }
    }

    handleTouchEnd(event) {
        this.world.keyboard.USELESSMANA = false;
        this.world.keyboard.keyIsHold_USELESSMANA = false;
    }
}

class Defender extends MovableObject {
    width = 45;
    height = 45;

    posiX = 950;

    world;

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

    constructor(world) {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-dark.png');
        this.loadImages(this.IMAGE_DEFENDER);

        this.posiY = canvasHeight - this.height + 25;
        this.world = world;

        this.characterHaveEnoughRedMinerals(50, 'img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon.png', 'img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon-dark.png');

        canvas.addEventListener('touchstart', this.handleTouchStart.bind(this));
        canvas.addEventListener('touchend', this.handleTouchEnd.bind(this));
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

    handleTouchStart(event) {
        const touchX = event.touches[0].clientX - canvas.getBoundingClientRect().left;
        const touchY = event.touches[0].clientY - canvas.getBoundingClientRect().top;
    
        const { x, y } = convertTouchCoordinates(touchX, touchY);
    
        if (x >= this.posiX && x <= this.posiX + this.width &&
            y >= this.posiY && y <= this.posiY + this.height) {
            this.world.keyboard.DEFENDER = true;
        }
    }

    handleTouchEnd(event) {
        this.world.keyboard.DEFENDER = false;
        this.world.keyboard.keyIsHold_DEFENDER = false;
    }
}

class BluePotionUse extends MovableObject {
    width = 45;
    height = 45;

    posiX = 950;

    world;

    constructor(world) {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/use-blue-potion.png');

        this.posiY = canvasHeight - this.height - 30;
        this.world = world;

        canvas.addEventListener('touchstart', this.handleTouchStart.bind(this));
        canvas.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }

    handleTouchStart(event) {
        const touchX = event.touches[0].clientX - canvas.getBoundingClientRect().left;
        const touchY = event.touches[0].clientY - canvas.getBoundingClientRect().top;
    
        const { x, y } = convertTouchCoordinates(touchX, touchY);
    
        if (x >= this.posiX && x <= this.posiX + this.width &&
            y >= this.posiY && y <= this.posiY + this.height) {
            this.world.keyboard.BLUEPOTION = true;
        }
    }

    handleTouchEnd(event) {
        this.world.keyboard.BLUEPOTION = false;
        this.world.keyboard.keyIsHold_BLUEPOTION = false;
    }
}

class RedPotionUse extends MovableObject {
    width = 45;
    height = 45;

    posiX = 950;

    world;

    constructor(world) {
        super().loadImage('img/wizard-saga/skill-icon/wizard-skills/use-red-potion.png');

        this.posiY = canvasHeight - this.height - 85;
        this.world = world;

        canvas.addEventListener('touchstart', this.handleTouchStart.bind(this));
        canvas.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }

    handleTouchStart(event) {
        const touchX = event.touches[0].clientX - canvas.getBoundingClientRect().left;
        const touchY = event.touches[0].clientY - canvas.getBoundingClientRect().top;
    
        const { x, y } = convertTouchCoordinates(touchX, touchY);
    
        if (x >= this.posiX && x <= this.posiX + this.width &&
            y >= this.posiY && y <= this.posiY + this.height) {
            this.world.keyboard.REDPOTION = true;
        }
    }

    handleTouchEnd(event) {
        this.world.keyboard.REDPOTION = false;
        this.world.keyboard.keyIsHold_REDPOTION = false;
    }
}
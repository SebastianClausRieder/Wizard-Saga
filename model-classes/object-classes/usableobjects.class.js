class UsableObjectDoor extends MovableObject {
    hitBoxWidth = 20;
    hitBoxHeight = 85;
    hitBoxX = 60;
    hitBoxY = 25;

    constructor(imagePath, imageW, imageH, imageX, imageY) {
        super().loadImage(imagePath);
        
        this.width = imageW;
        this.height = imageH;

        this.posiX = imageX;
        this.posiY = imageY;
    }
}

class UsableObjectChest extends MovableObject {
    hitBoxWidth = 25;
    hitBoxHeight = 25;
    hitBoxX = 20;
    hitBoxY = 20;

    constructor(imagePath, imageW, imageH, imageX, imageY) {
        super().loadImage(imagePath);
        
        this.width = imageW;
        this.height = imageH;

        this.posiX = imageX;
        this.posiY = imageY;
    }
}

class UsableObjectTotem extends MovableObject {
    hitBoxWidth = 2;
    hitBoxHeight = 85;
    hitBoxX = 63;
    hitBoxY = 25;

    world;

    constructor(imagePath, imageW, imageH, imageX, imageY, skill) {
        super().loadImage(imagePath);
        
        this.width = imageW;
        this.height = imageH;

        this.posiX = imageX;
        this.posiY = imageY;

        this.skill = skill;
    }

    /**
     * Lets the character learn a new skill.
     */
    learnNewSkill() {
        if (this.skill == 'use less Mana') {
            this.loadImage('img/wizard-saga/area-objects/caveObjects01/PNG/Objects_separately/128/Dark_totem_dark_shadow3_light.png');
            this.world.charSkills[4].loadImage('img/wizard-saga/skill-icon/wizard-skills/uselessmana/uselessmana-icon.png');
            this.world.characterTwo.skillUseLessMana = true;
        } else if (this.skill == 'Defender') {
            this.loadImage('img/wizard-saga/area-objects/caveObjects01/PNG/Objects_separately/128/Dark_totem_dark_shadow2_light.png');
            this.world.charSkills[5].loadImage('img/wizard-saga/skill-icon/wizard-skills/defender/defender-icon.png');
            this.world.characterTwo.skillDefender = true;
        }
    }
}
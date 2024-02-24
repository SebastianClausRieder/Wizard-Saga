class CharacterTwo extends MovableObject {
    world;

    skillUseLessMana = false;
    skillDefender = false;
    useLessManaActive = false;
    defenderActive = false;

    bluePotionDelay = false;
    redPotionDelay = false;

    constructor() {
        super();
        this.useLessMana();
        this.defender();
        this.usePotion();
    }

    /**
     * Checks whether the skill Use less Mana was executed.
     */
    useLessMana() {
        setInterval(() => {
            if (this.world.keyboard.USELESSMANA && !this.world.keyboard.keyIsHold_USELESSMANA && this.d && !this.useLessManaActive && this.world.blueMineralStatusBar.collectedBlueMineral >= 100) {
                this.world.keyboard.keyIsHold_USELESSMANA = true;
                this.useLessManaActive = true;
                this.world.blueMineralStatusBar.collectedBlueMineral -= 100;
                this.world.charSkills[4].activateUseLessMana(this.world);
            }
        }, 1000 / 60);
    }

    /**
     * Checks whether Use less Mana is active and thus regulates the mana consumption when using a magic skill.
     * @param {number} consumption Mana by using a Magic Skill.
     */
    useMana(consumption) {
        if (this.useLessManaActive) {
            this.MP -= consumption / 2;
        } else {
            this.MP -= consumption;
        }
    }

    /**
     * Checks whether the skill Defender was executed.
     */
    defender() {
        setInterval(() => {
            if (this.world.keyboard.DEFENDER && !this.world.keyboard.keyIsHold_DEFENDER && this.skillDefender && !this.defenderActive && this.world.redMineralStatusBar.collectedRedMineral >= 50) {
                this.world.keyboard.keyIsHold_DEFENDER = true;
                this.defenderActive = true;
                this.world.redMineralStatusBar.collectedRedMineral -= 50;
                this.world.charSkills[5].activateDefender(this.world);
            }
        }, 1000 / 60);
    }

    /**
     * Checks whether Defender is active and thus regulates the DMG consumption when hitet by an Enemy.
     * @param {number} DMG consumtion by geting DMG.
     */
    getDMG(DMG) {
        if (this.defenderActive) {
            this.LP -= DMG / 2;
        } else {
            this.LP -= DMG;
        }
    }

    /**
     * Check whether and which potion you want to use.
     */
    usePotion() {
        setInterval(() => {
            if (this.world.keyboard.BLUEPOTION && !this.world.keyboard.keyIsHold_BLUEPOTION && !this.bluePotionDelay && this.world.bluePotionStatusBar.collectedBluePotion >= 1) {
                this.useBluePotion();
            }

            if (this.world.keyboard.REDPOTION && !this.world.keyboard.keyIsHold_REDPOTION && !this.redPotionDelay && this.world.redPotionStatusBar.collectedRedPotion >= 1) {
                this.useRedPotion();
            }
        }, 1000 / 60);
    }

    /**
     * Makes you drink a blue potion and gives it a 30 second delay.
     */
    useBluePotion() {
        this.world.keyboard.keyIsHold_BLUEPOTION = true;
        this.world.charSkills[6].loadImage('img/wizard-saga/skill-icon/wizard-skills/use-blue-potion-dark.png');
        this.drinkPotion('blue');
        setTimeout(() => {
            this.world.charSkills[6].loadImage('img/wizard-saga/skill-icon/wizard-skills/use-blue-potion.png');
            this.bluePotionDelay = false;
        }, 30000);
    }

    /**
     * Makes you drink a red potion and gives it a 30 second delay.
     */
    useRedPotion() {
        this.world.keyboard.keyIsHold_REDPOTION = true;
        this.world.charSkills[7].loadImage('img/wizard-saga/skill-icon/wizard-skills/use-red-potion-dark.png');
        this.drinkPotion('red');
        setTimeout(() => {
            this.world.charSkills[7].loadImage('img/wizard-saga/skill-icon/wizard-skills/use-red-potion.png');
            this.redPotionDelay = false;
        }, 30000);
    }

    /**
     * Gives you back 100 mana or 100 health depending on which potion you drank.
     * @param {string} potion Blue or Red Potion.
     */
    drinkPotion(potion) {
        if (potion == 'blue') {
            this.world.bluePotionStatusBar.collectedBluePotion -= 1;
            this.world.character.MP = 100;
            this.world.manaStatusBar.setPercentage(this.world.character.MP, this.world.manaStatusBar.MANA_BAR);
        } else if (potion == 'red') {
            this.world.redPotionStatusBar.collectedRedPotion -= 1;
            this.world.character.LP = 100;
            this.world.lifeStatusBar.setPercentage(this.world.character.LP, this.world.lifeStatusBar.LIFE_BAR);
        }
    }
}
class Character extends MovableObject {
    width = 200;
    height = 100;

    hitBoxWidth = 20;
    hitBoxHeight = 60;
    hitBoxX = 45;
    hitBoxY = 35;

    speedWalk = 2;
    speedRun = 3;
    world;
    moveCamPosiY = 250;

    LP = 100;
    MP = 0;
    doesDMG = 0;

    walking_sound = new Audio('audio/walking.mp3');
    running_sound = new Audio('audio/walking.mp3');
    jumping_sound = new Audio('audio/jumping.mp3');
    meleeHit1_sound = new Audio('audio/sword-swing.mp3');
    meleeHit2_sound = new Audio('audio/sword-stab.mp3');
    fireball1_sound = new Audio('audio/fireball-cast.mp3');
    fireball2_sound = new Audio('audio/fireball-fly.mp3');
    fireburst_sound = new Audio('audio/fireburst.mp3');
    hurt_sound = new Audio('audio/hurt.mp3');
    death_sound = new Audio('audio/death.mp3');
    endFight_sound = new Audio('audio/bossfight-begin.mp3');

    endFightInterV;

    moving = false;
    walking = false;
    running = false;
    attack = false;

    secondAttack = false;
    skillUseLessMana = false;
    skillDefender = false;
    useLessManaActive = false;
    defenderActive = false;

    bluePotionDelay = false;
    redPotionDelay = false;

    IMAGES_IDLE = [
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-02.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-03.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-04.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-05.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-06.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-07.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png',
        'img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png'
    ];

    IMAGES_WALK = [
        'img/wizard-saga/characters/Fire-Wizard/walk/walk-01.png',
        'img/wizard-saga/characters/Fire-Wizard/walk/walk-02.png',
        'img/wizard-saga/characters/Fire-Wizard/walk/walk-03.png',
        'img/wizard-saga/characters/Fire-Wizard/walk/walk-04.png',
        'img/wizard-saga/characters/Fire-Wizard/walk/walk-05.png',
        'img/wizard-saga/characters/Fire-Wizard/walk/walk-06.png'
    ];

    IMAGES_RUN = [
        'img/wizard-saga/characters/Fire-Wizard/run/run-01.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-02.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-03.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-04.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-05.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-06.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-07.png',
        'img/wizard-saga/characters/Fire-Wizard/run/run-08.png'
    ];

    IMAGES_JUMP = [
        'img/wizard-saga/characters/Fire-Wizard/jump/jump-05.png',
        'img/wizard-saga/characters/Fire-Wizard/jump/jump-06.png'
    ];

    IMAGES_HURT = [
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-02.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-01.png',
        'img/wizard-saga/characters/Fire-Wizard/hurts/hurts-light-01.png'
    ];

    IMAGES_DEAD = [
        'img/wizard-saga/characters/Fire-Wizard/dead/Dead-01.png',
        'img/wizard-saga/characters/Fire-Wizard/dead/Dead-02.png',
        'img/wizard-saga/characters/Fire-Wizard/dead/Dead-03.png',
        'img/wizard-saga/characters/Fire-Wizard/dead/Dead-04.png',
        'img/wizard-saga/characters/Fire-Wizard/dead/Dead-05.png',
        'img/wizard-saga/characters/Fire-Wizard/dead/Dead-06.png',
    ];

    IMAGES_ATTACK1 = [
        'img/wizard-saga/characters/Fire-Wizard/first-attack/first-attack-01.png',
        'img/wizard-saga/characters/Fire-Wizard/first-attack/first-attack-02.png',
        'img/wizard-saga/characters/Fire-Wizard/first-attack/first-attack-03.png',
        'img/wizard-saga/characters/Fire-Wizard/first-attack/first-attack-04.png'
    ];

    IMAGES_ATTACK2 = [
        'img/wizard-saga/characters/Fire-Wizard/second-attack/second-attack-01.png',
        'img/wizard-saga/characters/Fire-Wizard/second-attack/second-attack-02.png',
        'img/wizard-saga/characters/Fire-Wizard/second-attack/second-attack-03.png',
        'img/wizard-saga/characters/Fire-Wizard/second-attack/second-attack-04.png'
    ];

    IMAGES_FIREBALLMOVE = [
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-01.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-02.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-03.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-04.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-05.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-06.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-07.png',
        'img/wizard-saga/characters/Fire-Wizard/fireball-move/Fireball-move-08.png'
    ];

    IMAGES_FIREBURST = [
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-01.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-02.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-03.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-04.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-05.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-06.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-07.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-08.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-09.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-10.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-11.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-12.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-13.png',
        'img/wizard-saga/characters/Fire-Wizard/fireburst/Fireburst-14.png'
    ];


    constructor() {
        super().loadImage('img/wizard-saga/characters/Fire-Wizard/idle/idle-01.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK1);
        this.loadImages(this.IMAGES_ATTACK2);
        this.loadImages(this.IMAGES_FIREBALLMOVE);
        this.loadImages(this.IMAGES_FIREBURST);
        this.animateIdle();
        this.animateWalkingCharacter();
        this.animateRunCharacter();
        this.camPosition();
        this.applyGravity();
        this.animateJumpingCharacter();
        this.jumpAnimation();
        this.checkCharPosiX();
        this.useLessMana();
        this.defender();
        this.usePotion();

        this.mainPosiY = canvasHeight - this.height - 25;
        this.posiY = canvasHeight - this.height - 25;
        this.posiX = 50;
    }

    animateIdle() {
        setInterval(() => {
            if (!this.moving && !this.falling && !this.hurts && !this.dead && !this.attack) {
                this.playIdleAnimation(this.IMAGES_IDLE);
            }
        }, 225);
    }

    animateWalkingCharacter() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && !this.running && this.posiX < this.world.lvl.lvl_end && !this.dead && !this.attack && !this.onLoad && !this.collidingPlatformLeft) {
                this.posiX += this.speedWalk;
                this.otherDirection = false;
            }
            
            if (this.world.keyboard.LEFT && !this.running && this.posiX > 0 && !this.dead && !this.attack && !this.onLoad && !this.collidingPlatformRight) {
                this.posiX -= this.speedWalk;
                this.otherDirection = true;
            }
        }, 1000 /60);

        setInterval(() => {
            this.walking_sound.pause();
            this.walking_sound.volume = 0.2;
            this.running_sound.playbackRate = 1.1;
            if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && !this.running && !this.falling && !this.hurts && !this.dead && !this.attack && !this.onLoad && (!this.collidingPlatformLeft || !this.collidingPlatformRight)) {                
                this.playMoveAnimation(this.IMAGES_WALK);
                this.manageWalk();
            } else {
                this.walking_sound.currentTime = 0;
                if (!this.running) {
                    this.moving = false;
                    this.currentImageWalk = 0;
                }
            }
        }, 125);
    }

    manageWalk() {
        this.moving = true;
        this.walking = true;
        this.running = false;
        this.currentImageIdle = 0;
        this.walking_sound.play();
    }

    animateRunCharacter() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.world.keyboard.RUN && this.posiX < this.world.lvl.lvl_end && !this.dead && !this.attack && !this.onLoad && !this.collidingPlatformLeft) {
                this.posiX += this.speedRun;
                this.otherDirection = false;
            }
            
            if (this.world.keyboard.LEFT && this.world.keyboard.RUN && this.posiX > 0 && !this.dead && !this.attack && !this.onLoad && !this.collidingPlatformRight) {
                this.posiX -= this.speedRun;
                this.otherDirection = true;
            }
        }, 1000 /60);

        setInterval(() => {
            this.running_sound.pause();
            this.running_sound.volume = 0.3;
            this.running_sound.playbackRate = 1.1;
            if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.world.keyboard.RUN && !this.falling && !this.hurts && !this.dead && !this.attack && !this.onLoad && (!this.collidingPlatformLeft || !this.collidingPlatformRight)) {                
                this.playMoveAnimation(this.IMAGES_RUN);
                this.manageRun();
            } else {
                if (!this.walking) {
                    this.moving = false;
                    this.running = false;
                    this.currentImageWalk = 0;
                }
            }
        }, 125);   
    }

    manageRun() {
        this.moving = true;
        this.running = true;
        this.walking = false;
        this.currentImageIdle = 0;
        this.running_sound.play();
    }

    camPosition() {
        setInterval(() => {
            if (this.posiX > 500) {
                this.world.cam_X = this.posiX - 500;
            } else { this.world.cam_X = 0;}
    
            if (this.posiY < this.moveCamPosiY) {
                this.world.cam_Y = this.posiY - this.moveCamPosiY;
            } else { this.world.cam_Y = 0;}
        }, 1000 / 60);
    }

    animateJumpingCharacter() {
        setInterval(() => {
            this.jumping_sound.playbackRate = 1;
            if (this.world.keyboard.JUMP && !this.isAboveGround() && !this.dead && !this.attack && !this.onLoad && !this.world.keyboard.keyIsHold_JUMP) {
                this.jump(18);
                this.jumping_sound.play();
                this.world.keyboard.keyIsHold_JUMP = true;
            }
        }, 1000 / 60);
    }

    jumpAnimation() {
        setInterval(() => {
            if (this.gravitaSpeed > 0) {
                this.loadImage(this.IMAGES_JUMP[0]);
                this.falling = true;
            } else if (this.gravitaSpeed < 0) {
                this.loadImage(this.IMAGES_JUMP[1]);
                this.falling = true;
                this.jumping = true;
            }
        }, 1000 / 60);
    }

    attackAnimation(IMAGES) {
        const attack = setInterval(() => {
            this.playActionAnimation(IMAGES);
            this.attack = true;
            this.currentImageAttack++;
            
            if (this.currentImageAttack >= IMAGES.length) {
                clearInterval(attack);
                this.doReset();
                this.isItAnComboAttack();
                this.resetSkillImage();
                this.isItAnFireballAttack();
            }
        }, 125);
    }

    doReset() {
        this.attack = false;
        this.doesDMG = 0;
        this.currentImageAttack = 0;
        this.currentImageAction = 0;
        this.currentImageIdle = 0;
        this.world.charATK = [];
    }

    isItAnComboAttack() {
        if (this.comboAttack) {
            this.comboAttack = false;
        } else {
            this.secondAttack = false;
        }
    }

    isItAnFireballAttack() {
        if (this.fireballAttack) {
            this.fireballAttack = false;
            this.world.fireball();
        }
    }

    resetSkillImage() {
        if (!this.fireballAttack && !this.secondAttack) {
            this.world.charSkills[0].loadImage('img/wizard-saga/skill-icon/wizard-skills/meleeattack/meleeattack1-icon.png');
            this.world.charSkills[1].loadImage('img/wizard-saga/skill-icon/wizard-skills/meleeattack/meleeattack2-icon.png');
            this.world.charSkills[2].loadImage('img/wizard-saga/skill-icon/wizard-skills/fireball/fireball-icon.png');
            this.world.charSkills[3].loadImage('img/wizard-saga/skill-icon/wizard-skills/fireburst/fireburst-icon.png');
        }
    }

    checkCharPosiX() {
        setInterval(() => {
            if (this.posiX >= 9500) {
                world.lvl.enemies.forEach(enemy => {
                    if (enemy instanceof Endboss01) {
                        this.playEndSound();
                        enemy.randomAttack();
                    }
                });
            }
        }, 125);
    }

    playEndSound() {
        clearInterval(this.world.backgroundMusicInterV);
        this.endFightInterV = setInterval(() => {
            this.endFight_sound.volume = 0.5;
            this.endFight_sound.playbackRate = 1;
            this.endFight_sound.play();
        }, 125);
    }

    useLessMana() {
        setInterval(() => {
            if (this.world.keyboard.USELESSMANA && !this.world.keyboard.keyIsHold_USELESSMANA && this.skillUseLessMana && !this.useLessManaActive && this.world.blueMineralStatusBar.collectedBlueMineral >= 100) {
                this.world.keyboard.keyIsHold_USELESSMANA = true;
                this.useLessManaActive = true;
                this.world.blueMineralStatusBar.collectedBlueMineral -= 100;
                this.world.charSkills[4].activateUseLessMana(this.world);
            }
        }, 1000 / 60);
    }

    useMana(consumption) {
        if (this.useLessManaActive) {
            this.MP -= consumption / 2;
        } else {
            this.MP -= consumption;
        }
    }

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

    getDMG(DMG) {
        if (this.defenderActive) {
            this.LP -= DMG / 2;
        } else {
            this.LP -= DMG;
        }
    }

    usePotion() {
        setInterval(() => {
            if (this.world.keyboard.BLUEPOTION && !this.world.keyboard.keyIsHold_BLUEPOTION && !this.bluePotionDelay && this.world.bluePotionStatusBar.collectedBluePotion >= 1) {
                this.world.keyboard.keyIsHold_BLUEPOTION = true;
                this.world.charSkills[6].loadImage('img/wizard-saga/skill-icon/wizard-skills/use-blue-potion-dark.png');
                this.drinkPotion('blue');
                setTimeout(() => {
                    this.world.charSkills[6].loadImage('img/wizard-saga/skill-icon/wizard-skills/use-blue-potion.png');
                    this.bluePotionDelay = false;
                }, 30000);
            }

            if (this.world.keyboard.REDPOTION && !this.world.keyboard.keyIsHold_REDPOTION && !this.redPotionDelay && this.world.redPotionStatusBar.collectedRedPotion >= 1) {
                this.world.keyboard.keyIsHold_REDPOTION = true;
                this.world.charSkills[7].loadImage('img/wizard-saga/skill-icon/wizard-skills/use-red-potion-dark.png');
                this.drinkPotion('red');
                setTimeout(() => {
                    this.world.charSkills[7].loadImage('img/wizard-saga/skill-icon/wizard-skills/use-red-potion.png');
                    this.redPotionDelay = false;
                }, 30000);
            }
        }, 1000 / 60);
    }

    drinkPotion(potion) {
        if (potion == 'blue') {
            this.world.bluePotionStatusBar.collectedBluePotion -= 1;
            this.MP = 100;
            this.world.manaStatusBar.setPercentage(this.MP, this.world.manaStatusBar.MANA_BAR);
        } else if (potion == 'red') {
            this.world.redPotionStatusBar.collectedRedPotion -= 1;
            this.LP = 100;
            this.world.lifeStatusBar.setPercentage(this.LP, this.world.lifeStatusBar.LIFE_BAR);
        }
    }
}
class Lizard extends MovableObject {
    
    constructor() {
        super().loadImage('img/wizard-saga/monsters/PNG/lizard/Idle1.png');

        this.posiX = 200 + Math.random() * 500;
    }
}
class Objects extends MovableObject {

    constructor(imagePath, imageW, imageH, imageX, imageY) {
        super().loadImage(imagePath);
        
        this.width = imageW;
        this.height = imageH;

        this.posiX = imageX;
        this.posiY = imageY;
    }
}

class ObjectTorch extends MovableObject {

    IMAGE_TORCH1 = [
        'img/wizard-saga/platforms/PNG/Details/torch1_1.png',
        'img/wizard-saga/platforms/PNG/Details/torch1_2.png',
        'img/wizard-saga/platforms/PNG/Details/torch1_3.png',
        'img/wizard-saga/platforms/PNG/Details/torch1_4.png'
    ];

    IMAGE_TORCH2 = [
        'img/wizard-saga/platforms/PNG/Details/torch2_1.png',
        'img/wizard-saga/platforms/PNG/Details/torch2_2.png',
        'img/wizard-saga/platforms/PNG/Details/torch2_3.png',
        'img/wizard-saga/platforms/PNG/Details/torch2_4.png'
    ];

    IMAGE_TORCH3 = [
        'img/wizard-saga/platforms/PNG/Details/torch3_1.png',
        'img/wizard-saga/platforms/PNG/Details/torch3_2.png',
        'img/wizard-saga/platforms/PNG/Details/torch3_3.png',
        'img/wizard-saga/platforms/PNG/Details/torch3_4.png'
    ];

    constructor(imagePath, imageW, imageH, imageX, imageY) {
        super().loadImage(imagePath);
        this.loadImages(this.IMAGE_TORCH1);
        this.loadImages(this.IMAGE_TORCH2);
        this.loadImages(this.IMAGE_TORCH3);
        
        this.width = imageW;
        this.height = imageH;

        this.posiX = imageX;
        this.posiY = imageY;

        this.torchAnimation(imagePath);
    }

    /**
     * Checks which torch needs to be animated.
     * @param {string} imagePath to the right lighting.
     */
    torchAnimation(imagePath) {
        if (imagePath.includes('torch1_1.png')) {
            this.startTorchAnimation(this.IMAGE_TORCH1);
        } else if (imagePath.includes('torch2_1.png')) {
            this.startTorchAnimation(this.IMAGE_TORCH2);
        } else {
            this.startTorchAnimation(this.IMAGE_TORCH3);
        }
    }

    /**
     * Starts the torch animation.
     * @param {array} imageArray from the torch.
     */
    startTorchAnimation(imageArray) {
        const torchInterV = setInterval(() => {
            this.playActionAnimation(imageArray);
        }, 125);
    }
}
class MovableObject {
    posiX = 80;
    posiY;

    width = 60;
    height = null;

    img;
    imageCache = {};
    currentImageIdle = 0;
    currentImageWalk = 0;
    currentImageRun = 0;
    otherDirection = false;
    
    speed = 0.1;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;

        this.height = (this.width * this.img.height) / this.img.width;
    }

    loadImages(imageArray) {
        imageArray.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    animation() {
        this.moveLeft(0.1, 1000 / 60);
    }

    animateIdle() {
        setInterval(() => {
            let i = this.currentImageIdle % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImageIdle++;
        }, 225);
    }

    animateWalkinEnemies(ri) {
        setInterval(() => {
            let i = this.currentImageWalk % this.IMAGES_WALKIN.length;
            let path = this.IMAGES_WALKIN[i];
            this.img = this.imageCache[path];
            this.currentImageWalk++;
        }, ri);
    }

    moveRight() {

    }

    moveLeft(speed, ri) {
        setInterval(() => {
            this.posiX -= speed;
        }, ri);
    }

    jump() {
        
    }
}
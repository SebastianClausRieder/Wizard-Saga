class MovableObject {
    posiX = 80;
    posiY;

    width = 60;
    height = null;

    img;
    imageCache = {};
    currentImage = 0;
    
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
        this.moveLeft();
    }

    animateIdle() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 225);
    }

    animateWalkin() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKIN.length;
            let path = this.IMAGES_WALKIN[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 225);
    }

    moveRight() {

    }

    moveLeft() {
        setInterval(() => {
            this.posiX -= this.speed;
        }, 1000 / 60);
    }

    jump() {
        
    }
}
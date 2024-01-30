class Level {
    bgMountens01;
    cloud01;
    objects;
    usableObject;
    platformsBG;
    path01;
    platformsFG;
    enemies;
    lvl_end = 10000;

    constructor(bgMountens01, cloud01, objects, usableObject, platformsBG, path01, platformsFG, enemies) {
        this.bgMountens01 = bgMountens01;
        this.cloud01 = cloud01;
        this.objects = objects;
        this.usableObject = usableObject;
        this.platformsBG = platformsBG;
        this.path01 = path01;
        this.platformsFG = platformsFG;
        this.enemies = enemies;
    }
}
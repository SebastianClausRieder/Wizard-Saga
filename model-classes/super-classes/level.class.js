class Level {
    bgMountens01;
    cloud01;
    objects;
    path01;
    enemies;
    platforms;
    lvl_end = 10000;

    constructor(bgMountens01, cloud01, objects, path01, enemies, platforms) {
        this.bgMountens01 = bgMountens01;
        this.cloud01 = cloud01;
        this.objects = objects;
        this.path01 = path01;
        this.enemies = enemies;
        this.platforms = platforms;
    }
}
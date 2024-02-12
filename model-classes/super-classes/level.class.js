class Level {
    bgMountens01;
    cloud01;
    behindObjects;
    beforObjects;
    usableObject;
    itemsOnArea;
    platformsBG;
    path01;
    platformsFG;
    enemies;
    lvl_end = 10000;

    constructor(bgMountens01, cloud01, behindObjects, beforObjects, usableObject, itemsOnArea, platformsBG, path01, platformsFG, enemies) {
        this.bgMountens01 = bgMountens01;
        this.cloud01 = cloud01;
        this.behindObjects = behindObjects;
        this.beforObjects = beforObjects;
        this.usableObject = usableObject;
        this.itemsOnArea = itemsOnArea;
        this.platformsBG = platformsBG;
        this.path01 = path01;
        this.platformsFG = platformsFG;
        this.enemies = enemies;
    }
}
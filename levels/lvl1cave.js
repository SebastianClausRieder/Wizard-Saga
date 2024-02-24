/**
 * Load bgMounten01 Cave.
 */
const bgMountenCave = [];
const mountainCountCave = 11;
const mountainDistanceIncrementCave = 959;

for (let j = 1; j <= 6; j++) {
    for (let i = 0; i < mountainCountCave; i++) {
        const mountain = new BGMounten01(`img/wizard-saga/platforms/PNG/Background/Pale/cave${j}.png`, i * mountainDistanceIncrementCave, 0);
        bgMountenCave.push(mountain);
    }
}

/**
 * Load path01 Cave.
 */
const myPathsCave = [];
const pathCountCave = 66;
const pathDistanceIncrementCave = 159;

for (let i = 0; i < pathCountCave; i++) {
    const path = new PathGreen01(`img/wizard-saga/paths/finish-paths/cave-path.png`, i * pathDistanceIncrementCave);
    myPathsCave.push(path);
}

/**
 * Creates everything that belongs to level 1 Cave.
 * @returns the Level.
 */
function createLvl1Cave() {
    return new Level(
        bgMountenCave,
        [   // cloud01

        ],
        [   // behindObjects (imagePath, imageW, imageH, imageX, imageY)
            new Objects('img/wizard-saga/platforms/PNG/Details/lava_drop1_1.png', 128, 128, 2812, 350),
            new Objects('img/wizard-saga/platforms/PNG/Details/lava_drop1_1.png', 128, 128, 6648, 350),
            new Objects('img/wizard-saga/platforms/PNG/Details/lava_drop1_1.png', 128, 128, 7607, 350),
            new Objects('img/wizard-saga/platforms/PNG/Details/lava_drop1_1.png', 128, 128, 8566, 350)
        ],
        [   // beforObjects (imagePath, imageW, imageH, imageX, imageY)
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch1_1.png', 64, 64, 2965, 406), // 280 to next Torch
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 3245, 396),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch3_1.png', 64, 64, 3525, 408),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 3805, 396),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch1_1.png', 64, 64, 4085, 406),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 4365, 396),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch3_1.png', 64, 64, 4645, 408),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 4925, 396),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 5485, 396),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch3_1.png', 64, 64, 5765, 408),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 6045, 396),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch1_1.png', 64, 64, 6325, 406),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 6605, 396),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch3_1.png', 64, 64, 6885, 408),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 7165, 396),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch1_1.png', 64, 64, 7445, 406),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch3_1.png', 64, 64, 8005, 408),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 8285, 396),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch1_1.png', 64, 64, 8565, 406),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 8845, 396),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch3_1.png', 64, 64, 9125, 408),
            new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 9405, 396)
        ],
        [   // usableObjects (imagePath, imageW, imageH, imageX, imageY)
            new UsableObjectDoor('img/wizard-saga/area-objects/caveObjects01/PNG/Objects_separately/128/Gates_dark_shadow3.png', 150, 170, 3030, 340),
            new UsableObjectTotem('img/wizard-saga/area-objects/caveObjects01/PNG/Objects_separately/128/Dark_totem_dark_shadow2.png', 128, 128, 5175, 365, 'Defender'),
            new UsableObjectDoor('img/wizard-saga/area-objects/caveObjects01/PNG/Objects_separately/128/Gates_dark_shadow3.png', 150, 170, 7650, 340)
        ],
        [   // itemsOnArea (posiX, posiY, 0, item, 0)
            new BlueMineral(3115, 230, 0, 'M1', 0),
            new BlueMineral(3185, 230, 0, 'M1', 0),
            new BlueMineral(3255, 230, 0, 'M1', 0),
            new RedPotion(3545, 200, 0),
            new BlueMineral(5375, -10, 0, 'M2', 0),
            new BlueMineral(5525, -10, 0, 'M2', 0),
            new BlueMineral(5675, -10, 0, 'M2', 0),
            new RedMineral(6160, 130, 0, 'M2', 0),
            new BlueMineral(6938, 180, 0, 'M2', 0),
            new BlueMineral(7188, 230, 0, 'M1', 0),
            new BlueMineral(7438, 180, 0, 'M2', 0),
            new BlueMineral(7688, 230, 0, 'M1', 0),
            new BlueMineral(7938, 180, 0, 'M2', 0),
            new BlueMineral(8188, 230, 0, 'M1', 0),
            new BlueMineral(8438, 180, 0, 'M2', 0),
            new RedPotion(9200, 350, 0)
        ],
        [   // platformsBG (imagePath, imageW, imageH, imageX, imageY)
            new Platform01('img/wizard-saga/platforms/finisht-platform/platform4x2.png', 250, 120 , 3150, 370),
            new Platform01('img/wizard-saga/platforms/finisht-platform/platform4x2.png', 250, 120 , 3450, 270),
            new Platform01('img/wizard-saga/platforms/finisht-platform/platform4x2.png', 250, 120 , 3750, 170),
            new Platform03('img/wizard-saga/platforms/finisht-platform/platform1x1.png', 64, 64, 4975, 350),
            new Platform03('img/wizard-saga/platforms/finisht-platform/platform1x1.png', 64, 64, 5075, 275),
            new Platform03('img/wizard-saga/platforms/finisht-platform/platform1x1.png', 64, 64, 5175, 200),
            new Platform03('img/wizard-saga/platforms/finisht-platform/platform1x1.png', 64, 64, 6000, 200),
            new Platform01('img/wizard-saga/platforms/finisht-platform/platform4x2.png', 250, 120 , 6125, 270),
            new Platform03('img/wizard-saga/platforms/finisht-platform/platform1x1.png', 64, 64, 6425, 350),
            new Platform05('img/wizard-saga/platforms/finisht-platform/platform2x2.png', 110, 110, 6975, 340),
            new Platform05('img/wizard-saga/platforms/finisht-platform/platform2x2.png', 110, 110, 7475, 340),
            new Platform05('img/wizard-saga/platforms/finisht-platform/platform2x2.png', 110, 110, 7975, 340),
            new Platform05('img/wizard-saga/platforms/finisht-platform/platform2x2.png', 110, 110, 8475, 340)
        ],
        myPathsCave,
        [   // platformsFG (imagePath, imageW, imageH, imageX, imageY)
            new Platform04Wall('img/wizard-saga/platforms/finisht-platform/platform10x8.png', 620, 500, 2200, 140),
            new Platform04Wall('img/wizard-saga/platforms/finisht-platform/platform10x8.png', 620, 500, 4300, 140),
            new Platform04Wall('img/wizard-saga/platforms/finisht-platform/platform10x8.png', 620, 500, 5300, 140),
            new Platform04Wall('img/wizard-saga/platforms/finisht-platform/platform10x8.png', 620, 500, 9300, 140)
        ],
        [   // enemies
            new UsableObjectChest('img/wizard-saga/platforms/PNG/Details/chest-close.png', 64, 64, 3845, 135),
            new SmallDragon(3300, true),
            new SmallDragon(3600, true),
            new SmallDragon(4885, false),
            new SmallDragon(6000, true),
            new SmallDragon(6500, true),
            new SmallDragon(7000, true),
            new SmallDragon(8000, true),
            new SmallDragon(8500, true),
            new UsableObjectChest('img/wizard-saga/platforms/PNG/Details/chest-close.png', 64, 64, 9200, 420)
        ]
    );
}
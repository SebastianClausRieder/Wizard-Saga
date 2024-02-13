// bgMountens01
const bgMountenCave = [];
const mountainCountCave = 11;
const mountainDistanceIncrementCave = 959;

for (let j = 1; j <= 6; j++) {
    for (let i = 0; i < mountainCountCave; i++) {
        const mountain = new BGMounten01(`img/wizard-saga/platforms/PNG/Background/Pale/cave${j}.png`, i * mountainDistanceIncrementCave, 0);
        bgMountenCave.push(mountain);
    }
}

// path01
const myPathsCave = [];
const pathCountCave = 66;
const pathDistanceIncrementCave = 159;

for (let i = 0; i < pathCountCave; i++) {
    const path = new PathGreen01(`img/wizard-saga/paths/finish-paths/cave-path.png`, i * pathDistanceIncrementCave);
    myPathsCave.push(path);
}

const lvl1Cave = new Level(
    bgMountenCave,
    [   // cloud01

    ],
    [   // behindObjects (imagePath, imageW, imageH, imageX, imageY)
        new Objects('img/wizard-saga/platforms/PNG/Details/lava_drop1_1.png', 128, 128, 2812, 350)
    ],
    [   // beforObjects (imagePath, imageW, imageH, imageX, imageY)
        new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch1_1.png', 64, 64, 2965, 406), // 280 to next Torch
        new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 3245, 396),
        new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch3_1.png', 64, 64, 3525, 408),
        new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch2_1.png', 64, 64, 3805, 396),
        new ObjectTorch('img/wizard-saga/platforms/PNG/Details/torch1_1.png', 64, 64, 4085, 406)
    ],
    [   // usableObjects (imagePath, imageW, imageH, imageX, imageY)
        new UsableObjectDoor('img/wizard-saga/area-objects/caveObjects01/PNG/Objects_separately/128/Gates_dark_shadow3.png', 150, 170, 3030, 340),
        new UsableObjectTotem('img/wizard-saga/area-objects/caveObjects01/PNG/Objects_separately/128/Dark_totem_dark_shadow2.png', 128, 128, 7800, 365, 'Defender'),
        new UsableObjectDoor('img/wizard-saga/area-objects/caveObjects01/PNG/Objects_separately/128/Gates_dark_shadow3.png', 150, 170, 7650, 340),
    ],
    [   // itemsOnArea (posiX, posiY, 0, item, 0)
        new BlueMineral(3115, 230, 0, 'M1', 0),
        new BlueMineral(3185, 230, 0, 'M1', 0),
        new BlueMineral(3255, 230, 0, 'M1', 0),
        new RedPotion(3545, 200, 0),
        new RedMineral(1665, 135, 0, 'M1')
    ],
    [   // platformsBG (imagePath, imageW, imageH, imageX, imageY)
        new Platform01('img/wizard-saga/platforms/finisht-platform/platform4x2.png', 250, 120 , 3150, 370),
        new Platform01('img/wizard-saga/platforms/finisht-platform/platform4x2.png', 250, 120 , 3450, 270),
        new Platform01('img/wizard-saga/platforms/finisht-platform/platform4x2.png', 250, 120 , 3750, 170)
    ],
    myPathsCave,
    [   // platformsFG (imagePath, imageW, imageH, imageX, imageY)
        new Platform04Wall('img/wizard-saga/platforms/finisht-platform/platform10x8.png', 620, 500, 2200, 140),
        new Platform04Wall('img/wizard-saga/platforms/finisht-platform/platform10x8.png', 620, 500, 4300, 140)
    ],
    [   // enemies
        new UsableObjectChest('img/wizard-saga/platforms/PNG/Details/chest-close.png', 64, 64, 3845, 135),
        new SmallDragon(3300),
        new SmallDragon(3300)
    ]
);
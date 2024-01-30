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

const lvl1Cave = new Level(
    bgMountenCave,
    [   // cloud01

    ],
    [   // objects (imagePath, imageW, imageH, imageX, imageY)

    ],
    [   // usableObjects (imagePath, imageW, imageH, imageX, imageY)
        new UsableObjectDoor('img/wizard-saga/area-objects/PNG/Objects_separately/Cave_entrance3_ground_shadow.png', 120, 120, 3050, 365)
    ],
    [   // platformsBG (imagePath, imageW, imageH, imageX, imageY)

    ],
    [   // paths

    ],
    [   // platformsFG (imagePath, imageW, imageH, imageX, imageY)

    ],
    [   // enemies

    ]
);
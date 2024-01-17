// bgMountens01
const bgMounten = [];
const mountainCount = 11;
const mountainDistanceIncrement = 999;

for (let i = 0; i < mountainCount; i++) {
    for (let j = 1; j <= 5; j++) {
        const mountain = new BGMounten01(`img/wizard-saga/mountains/m1/${j}.png`, i * mountainDistanceIncrement, 0);
        bgMounten.push(mountain);
    }
}

// path01
const path = [];
const pathCount = 66;
const pathDistanceIncrement = 160;

for (let i = 0; i < pathCount; i++) {
    const path = new PathGreen01(`img/wizard-saga/paths/finish-paths/green-path01.png`, i * pathDistanceIncrement, 0);
    bgMounten.push(path);
}

const lvl1 = new Level(
    bgMounten,
    [   // cloud01
        new CloudBlack01('img/wizard-saga/clouds/PNG/Clouds_black/Shape2/cloud_shape2_1.png')
    ],
    path,
    [   // enemies
        new Lizard(),
        // new Lizard(),
        // new Lizard(),
        new Demon(),
        // new Endboss01()
    ]
);
const lvl1 = new Level(
    [   // bgMountens01
        new BGMounten01('img/wizard-saga/mountains/m1/1.png', 0, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/2.png', 0, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/3.png', 0, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/4.png', 0, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/5.png', 0, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/1.png', 999, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/2.png', 999, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/3.png', 999, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/4.png', 999, 0),
        new BGMounten01('img/wizard-saga/mountains/m1/5.png', 999, 0)
    ],
    [   // cloud01
        new CloudBlack01('img/wizard-saga/clouds/PNG/Clouds_black/Shape2/cloud_shape2_1.png')
    ],
    [   // path01
        new PathGreen01('img/wizard-saga/paths/finish-paths/green-path01.png', 0),
        new PathGreen01('img/wizard-saga/paths/finish-paths/green-path01.png', 160),
        new PathGreen01('img/wizard-saga/paths/finish-paths/green-path01.png', 320),
        new PathGreen01('img/wizard-saga/paths/finish-paths/green-path01.png', 480),
        new PathGreen01('img/wizard-saga/paths/finish-paths/green-path01.png', 640),
        new PathGreen01('img/wizard-saga/paths/finish-paths/green-path01.png', 800),
        new PathGreen01('img/wizard-saga/paths/finish-paths/green-path01.png', 960)
    ],
    [   // enemies
        // new Lizard(),
        // new Lizard(),
        // new Lizard(),
        new Endboss01()
    ],
    [   // minerals
        // new Mineral()
    ]
);
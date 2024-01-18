// bgMountens01
const bgMounten = [];
const mountainCount = 11;
const mountainDistanceIncrement = 999;

for (let j = 1; j <= 5; j++) {
    for (let i = 0; i < mountainCount; i++) {
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
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_black/Shape2/cloud_shape2_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_black/Shape8/clouds_shape8_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_black/Shape6/cloud_shape6_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_black/Shape7/cloud_shape7_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_white/Shape7/cloud_shape7_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_white/Shape8/clouds_shape8_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_white/Shape6/cloud_shape6_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_white/Shape4/cloud_shape4_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_white/Shape3/cloud_shape3_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_white/Shape2/cloud_shape2_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_gray/Shape2/cloud_shape2_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_gray/Shape7/cloud_shape7_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_gray/Shape8/clouds_shape8_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_gray/Shape3/cloud_shape3_1.png'),
        new Cloud01('img/wizard-saga/clouds/PNG/Clouds_gray/Shape4/cloud_shape4_1.png')
    ],
    path,
    [   // enemies
        new Lizard(),
        // new Lizard(),
        // new Lizard(),
        // new Demon(),
        new Endboss01()
    ],
    [   // objects (imagePath, imageW, imageH, imageX, imageY)
        new Objects('img/wizard-saga/trees/PNG/Assets_separately/Trees_texture_shadow_dark/Autumn_tree1.png', 100, 100, 120, 265),
        new Objects('img/wizard-saga/ruins/PNG/Assets_texture_shadow_dark/Snow_ruins4-lighted.png', 25, 25, 345, 165),
        new Objects('img/wizard-saga/trees/PNG/Assets_separately/Trees_texture_shadow_dark/Flower_tree3-contrast.png', 50, 50, 650, 350),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Dragon_bones_body_grass_shadow.png', 250, 250, 700, 300),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Dragon_bones_full_grass_shadow-flipt.png', 150, 150, 1050, 300),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Cave_entrance1_grass_shadow-contrast.png', 50, 50, 1520, 325),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Yurt2_grass_shadow.png', 120, 120, 2050, 290),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Yurt2_grass_shadow.png', 115, 115, 2150, 285),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Yurt2_grass_shadow.png', 125, 125, 2100, 320),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Oval_leaf_tree1-contrast.png', 65, 65, 2700, 350),
        new Objects('img/wizard-saga/ruins/PNG/Assets_texture_shadow_dark/Snow_ruins3-lighted.png', 35, 35, 3460, 115),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Rock_statue_deer_grass_shadow.png', 128, 128, 3850, 300),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Rock_statue_mother_grass_shadow.png', 128, 128, 4250, 300),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Oval_rock2_grass_shadow.png', 50, 50, 4900, 380),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Stone_pyramid1_grass_shadow.png', 25, 25, 4980, 400),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Oval_rock2_grass_shadow.png', 50, 50, 5040, 350),
        new Objects('img/wizard-saga/ruins/PNG/Assets_texture_shadow_dark/Snow_ruins4-lighted.png', 23, 23, 5620, 180),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Stone_pyramid1_grass_shadow.png', 25, 25, 6080, 400),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Yurt1_grass_shadow.png', 125, 125, 6080, 305),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Rock_statue_fox_grass_shadow.png', 60, 60, 6200, 340),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Dragon_bones_wing2_ground_shadow-contrast-flip.png', 60, 60, 6640, 400),
        new Objects('img/wizard-saga/ruins/PNG/Assets_texture_shadow_dark/Snow_ruins1-lighted.png', 40, 40, 7445, 125),
        new Objects('img/wizard-saga/ruins/PNG/Assets_texture_shadow_dark/Yellow_ruins2.png', 75, 75, 8000, 350),
        new Objects('img/wizard-saga/ruins/PNG/Assets_texture_shadow_dark/White_ruins1.png', 75, 75, 8250, 325),
        new Objects('img/wizard-saga/ruins/PNG/Assets_texture_shadow_dark/Water_ruins3-contrast.png', 30, 30, 8610, 370),
        new Objects('img/wizard-saga/ruins/PNG/Assets_texture_shadow_dark/Brown-gray_ruins1.png', 100, 100, 9120, 330),
        new Objects('img/wizard-saga/ruins/PNG/Assets_texture_shadow_dark/Brown-gray_ruins3.png', 115, 115, 9000, 310),
        new Objects('img/wizard-saga/ruins/PNG/Assets_texture_shadow_dark/Brown-gray_ruins2.png', 75, 75, 8900, 350),
        new Objects('img/wizard-saga/area-objects/PNG/Objects_separately/Dragon_bones_full_ground_shadow-flipt.png', 85, 85, 9650, 245),
        new Objects('img/wizard-saga/trees/PNG/Assets_separately/Trees_texture_shadow_dark/Moss_tree2.png', 175, 175, 10050, 270)
    ]
);
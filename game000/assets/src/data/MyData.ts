const {ccclass, property} = cc._decorator;
 
@ccclass
export default class MyData extends cc.Component{
//*************************** 可調整設定  *******************************/
public Level: number = 0;
@property({
    type: cc.Integer,
    displayName: "MY_LIFE",
    tooltip: "我方起始生命",
    slide: true,
    min: 1,
    max: 10,
    step: 1
})
public MY_LIFE: number = 5;

@property({
    type: cc.Integer,
    displayName: "MY_LIFE_LIM",
    tooltip: "我方生命上限",
    slide: true,
    min: 5,
    max: 20,
    step: 1
})
public MY_LIFE_LIM: number = 10;

@property({
    type: cc.Integer,
    displayName: "GET_LIFE",
    tooltip: "我方撿到樹枝一次補血量",
    slide: true,
    min: 1,
    max: 20,
    step: 1
})
public GET_LIFE: number = 1;

@property({
    type: cc.Integer,
    displayName: "HURT_LIFE",
    tooltip: "我方受傷耗損血量",
    slide: true,
    min: 1,
    max: 20,
    step: 1
})
public HURT_LIFE: number = 2;

@property({
    type: [cc.Integer],
    displayName: "MY_RUN_SPEED",
    tooltip: "我方各等級移動速度",
    slide: true,
    min: 200,
    max: 400,
    step: 10
})
public MY_RUN_SPEED: number[] = [
    200,
    220,
    250,
    280,
    350,
    400,
]

@property({
    type: [cc.Integer],
    displayName: "ENEMY_INTERVAL_MIN",
    tooltip: "敵方生成間格時間隨機最小(毫秒)",
    slide: true,
    min: 1500,
    max: 100,
    step: 50
})
public ENEMY_INTERVAL_MIN = [
    1500,
    1000,
    800,
    500,
    300,
    100,
];

@property({
    type: [cc.Integer],
    displayName: "ENEMY_INTERVAL_MAX",
    tooltip: "敵方生成間格時間隨機最大(毫秒)",
    slide: true,
    min: 2000,
    max: 100,
    step: 50
})
public ENEMY_INTERVAL_MAX = [
    2000,
    1200,
    1000,
    800,
    500,
    150,
];

@property({
    type: [cc.Integer],
    displayName: "ENEMY_RUN_SPEED",
    tooltip: "敵方移動速度",
    slide: true,
    min: 450,
    max: 800,
    step: 10
})
public ENEMY_RUN_SPEED = [
    450,
    470,
    500,
    550,
    600,
    800
];

@property({
    type: cc.Integer,
    displayName: "AWARD_INTERVAL",
    tooltip: "樹枝生成間格時間(秒)",
    slide: true,
    min: 1,
    max: 10,
    step: 1
})
public AWARD_INTERVAL = 3; //秒

@property({
    type: [cc.Integer],
    displayName: "LEVEL",
    tooltip: "關卡難度門檻(撿幾個樹枝)",
    slide: true,
    min: 0,
    max: 14,
    step: 1
})
public LEVEL = [
    0,
    3,
    6,
    8,
    12,
    14
];

@property({
    type: [cc.Integer],
    displayName: "PLAYER_LV",
    tooltip: "玩家等級門檻(撿幾個樹枝)",
    slide: true,
    min: 0,
    max: 14,
    step: 1
})
public PLAYER_LV = [
    0,
    3,
    6,
    8,
    12,
    14
];

private PLAYER_LV_LIMIT = 666;
private TWIG_COUNT_LIMIT = 8888;

// 一根樹枝倍數
private PLAYER_LV_MULTIPLE = 6;
private TWIG_MULTIPLE = 8;
private KING_TWIG_MULTIPLE = 666;
// 起始樹枝
private ORIGIN_SCORE = 0;

// 原生js鍵盤鍵值
private KEYBOARD_KEY = {
    SPACE_BAR: 32
};
/*****************************************************************************/
// 我方起始生命
private myLife = this.MY_LIFE;
// 我方生命上限
private myLifeLim = this.MY_LIFE_LIM;
// 我方一次補血量
private getLife = this.GET_LIFE;
// 受傷耗損血量
private hurtLife = this.HURT_LIFE;
// 我方移動速度
private myMaxSpeed = this.MY_RUN_SPEED[0];
// 敵方生成間格時間
private enemyIntervalMin = this.ENEMY_INTERVAL_MIN[0]; //豪秒
private enemyIntervalMax = this.ENEMY_INTERVAL_MAX[0]; //豪秒
// 敵方移動速度
private enemySpeed = this.ENEMY_RUN_SPEED[0];
// 樹枝生成間格時間
private awardInterval = this.AWARD_INTERVAL; //秒

private twigMultiple = this.TWIG_MULTIPLE;

/*******************************************************/
}

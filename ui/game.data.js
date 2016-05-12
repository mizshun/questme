enchant();

$(function() {
/* 設定データ
---------------------------------------*/
var commandList =  {
    talk:    { name: 'はなす' },
    check:   { name: 'しらべる' },
    item:    { name: 'もちもの' }
};


var itemsData = {
    ill_goku_1:      { name: '孫悟空のイラスト1', content: 'ui/data/ill_goku_1' },
    ill_goku_2:      { name: '孫悟空のイラスト2', content: 'ui/data/ill_goku_2' },
    ill_local_1:     { name: '地域イラスト1', content: 'ui/data/ill_local_1' },
    ill_local_2:     { name: '地域イラスト2', content: 'ui/data/ill_local_2' },
    ill_local_3:     { name: '地域イラスト3', content: 'ui/data/ill_local_3' },
    ill_car_1:       { name: '車のイラスト1', content: 'ui/data/ill_car_1' },
    ill_car_2:       { name: '車のイラスト2', content: 'ui/data/ill_car_2' },
    ill_airport_1:   { name: '空港のイラスト1', content: 'ui/data/ill_airport_1' },
    ill_airport_2:   { name: '空港のイラスト2', content: 'ui/data/ill_airport_2' },
    ill_char_bus:    { name: 'バスのキャラクター', content: 'ui/data/ill_char_bus' },
    ill_char_wolfman:{ name: '狼男のキャラクター', content: 'ui/data/ill_char_wolfman' },
    ill_artist:      { name: 'ロックアーティストのイラスト', content: 'ui/data/ill_artist' },
    doc_axonometric: { name: '立体感のある家の作成法', content: 'ui/data/doc_axonometric' },
    portfolio:       { name: 'ポートフォリオ', content: 'ui/data/portfolio' }
 };


var fieldObjectsData = [
    {
        name: 'たからばこ',
        message: [
            ['たからばこをそっとあけてみた。', '_'],
            ['なにもない。']],
        x: 23,
        y: 3,
        w: 32,
        h: 48,
        frameBlock: 0,
        item: 'ill_local_1'
    },{
        name: 'たからばこ',
        message: [
            ['こんなとこにもたからばこが。だれが置いたの。', '_'],
            ['もう...ない。']],
        x: 29,
        y: 14,
        w: 32,
        h: 48,
        frameBlock: 0,
        item: 'ill_char_wolfman'
    },{
        name: 'ツボ',
        message: [
            ['ツボをのなかをのぞいた。'],
            ['もうツボの中はほこりだけみたい。']],
        x: 22,
        y: 3,
        w: 32,
        h: 48,
        frameBlock: 1,
        item: ''
    },{
        name: 'ツボ',
        message: [
            ['ツボをのなかをのぞいた。'],
            ['ツボの中はほこりだけみたいだ。']],
        x: 24,
        y: 3,
        w: 32,
        h: 48,
        frameBlock: 1,
        item: ''
    },{
        name: 'ツボ',
        message: [
            ['ツボをのなかをのぞいた。'],
            ['ツボの中はほこりだけみたいだ。']],
        x: 12,
        y: 9,
        w: 32,
        h: 48,
        frameBlock: 1,
        item: ''
    },{
        name: 'ツボ',
        message: [
            ['ツボをのなかをのぞいた。'],
            ['ツボの中はほこりだけみたいだ。']],
        x: 19,
        y: 12,
        w: 32,
        h: 48,
        frameBlock: 1,
        item: ''
    },{
        name: '木製のちっちゃい箱',
        message: [
            ['なかにはなにもない…', 'と、思ったらなんかある！', '_'],
            ['もうちょっと注意深くならなくては(心の声)']],
        x: 6,
        y: 4,
        w: 32,
        h: 48,
        frameBlock: 2,
        item: 'ill_goku_2'
    },{
        name: '木製っぽいちっちゃい箱',
        message: [
            ['木製っぽいちっちゃい箱をヨコからのぞいてみた。', '_', 'トーンがはがれかけてる。'],
            ['ちっちゃい箱は音をたててくずれた。弁償、かも。']],
        x: 6,
        y: 9,
        w: 32,
        h: 48,
        frameBlock: 2,
        item: 'ill_car_2'
    },{
        name: '本棚',
        message: [
            ['本棚'],
            ['']],
        x: 25,
        y: 10,
        w: 32,
        h: 48,
        frameBlock: 3,
        item: ''
    },{
        name: '本棚',
        message: [
            ['本棚をちらりのぞいた。', '_'],
            ['']],
        x: 26,
        y: 10,
        w: 32,
        h: 48,
        frameBlock: 3,
        item: 'doc_axonometric'
    },{
        name: '本棚',
        message: [
            ['本棚をちらりのぞいた。'],
            ['『亜愛一郎の狼狽』大好きな本だ。']],
        x: 27,
        y: 10,
        w: 32,
        h: 48,
        frameBlock: 3,
        item: ''
    },{
        name: 'ひきだし1',
        message: [
            ['_'],
            ['モワレが…']],
        x: 8,
        y: 3,
        w: 32,
        h: 48,
        frameBlock: 4,
        item: 'ill_artist'
    },{
        name: 'ひきだし2',
        message: [
            ['ひきだしをあけてみた。防虫剤のニオイはわりと好きだ。'],
            ['めぼしいものはなにもない。']],
        x: 10,
        y: 10,
        w: 32,
        h: 48,
        frameBlock: 4,
        item: ''
    },{
        name: 'たてふだ1',
        message: [
            ['ようこそ、ポートフォリオの村へ！'],
            ['サイト本編とは異なる、おまけ制作物などをごらんください。']],
        x: 3,
        y: 5,
        w: 32,
        h: 48,
        frameBlock: 5,
        item: ''
    },{
        name: 'たてふだ2',
        message: [
            ['右側の茶色い建物は、じつは図書館のつもりです。'],
            ['どうぞ、おはいりください。']],
        x: 22,
        y: 9,
        w: 32,
        h: 48,
        frameBlock: 5,
        item: ''
    },{
        name: 'たてふだ3',
        message: [
            ['ん？たてふだの後ろになにかが貼ってある。', '_'],
            ['はがしたセロハンテープあとが残っている。']],
        x: 29,
        y: 5,
        w: 32,
        h: 48,
        frameBlock: 5,
        item: 'ill_airport_2'
    }
];


var villagersData = [
    {
        name: '村人1',
        message: [
            ['わたしが運転するのはもっぱら軽自動車のアイです。でも、はい、コレ。', '_'],
            ['ではでは。ドライブに行ってきます。']],
        x: 9,
        y: 3,
        w: 32,
        h: 48,
        frameBlock: 1,
        item: 'ill_car_1'
    },
    {
        name: '村人2',
        message: [
            ['こないだこれ落としてったよ。', '_'],
            ['もう、財布とかいえのカギとかなくさないようにね！']],
        x: 25,
        y: 11,
        w: 32,
        h: 48,
        frameBlock: 2,
        item: 'ill_char_bus'
    },
    {
        name: '村人3',
        message: [
            ['わたしは番人です。'],
            ['あなたはこれを持っていきますか？']],
        x: 24,
        y: 4,
        w: 32,
        h: 48,
        frameBlock: 3,
        item: ''
    },
    {
        name: '村人4',
        message: [
            ['_', 'ものごころついてから飛行機とか乗ったことないし。'],
            ['行きたいとこは…ある。']],
        x: 8,
        y: 10,
        w: 32,
        h: 48,
        frameBlock: 1,
        item: 'ill_airport_1'
    },
    {
        name: '村人5',
        message: [
            ['行ったことないけど沖縄ッていいとこなんだろーなー。', '_'],
            ['ハワイもいいな。']],
        x: 20,
        y: 14,
        w: 32,
        h: 48,
        frameBlock: 2,
        item: 'ill_local_3'
    },
    {
        name: '村人6',
        message: [
            ['こんにちは。'],
            ['いろんなものを調べたり話してものをもらったら、『もちもの』からみられるよ。']],
        x: 6,
        y: 7,
        w: 32,
        h: 48,
        frameBlock: 3,
        item: ''
    },
    {
        name: '村人7',
        message: [
            ['左のくつからベタがはみだしちゃった。', '_'],
            ['なおしといてください。']],
        x: 20,
        y: 1,
        w: 32,
        h: 48,
        frameBlock: 3,
        item: 'ill_goku_1'
    },
    {
        name: '村人8',
        message: [
            ['きみよりずっとうまくかけるようになったから、これは返すよ。', '_', 'つぎは何のドンブリをかこうか。'],
            ['…かつ丼、中華丼…あ、きみももっとがんばりたまえ。']],
        x: 10,
        y: 13,
        w: 32,
        h: 48,
        frameBlock: 3,
        item: 'ill_local_2'
    }
];


var backgroundMapData_0 = [[
    [1,1,1,1,32,34,1,1,28,1,1,1,1,1,1,1,99,101,1,1,1,28,28,28,28,28,1,1,1,1],
    [1,1,1,1,32,34,28,28,1,1,1,1,28,28,1,1,99,101,1,1,1,1,1,1,1,28,28,1,1,1],
    [1,1,1,1,32,34,1,161,161,161,161,161,1,1,28,1,99,101,1,28,1,161,161,161,161,161,1,1,1,1],
    [1,1,1,1,32,34,1,161,161,161,161,161,1,28,28,1,99,101,1,28,28,161,161,161,161,161,28,1,1,1],
    [1,1,1,28,32,34,1,161,161,161,161,161,28,1,83,84,100,100,84,85,1,161,161,161,161,161,28,28,1,1],
    [1,1,28,1,32,34,1,161,161,161,161,161,1,1,99,16,17,17,18,101,1,161,161,161,161,161,28,28,28,1],
    [84,84,84,84,96,96,84,84,84,84,84,84,84,84,100,32,96,96,34,100,84,84,84,84,84,84,84,84,84,84],
    [116,116,116,116,97,97,116,116,116,116,116,116,116,116,100,32,97,97,34,100,116,116,116,100,116,116,116,116,116,116],
    [28,1,1,28,32,34,1,161,161,161,161,161,1,1,99,48,49,49,50,101,1,1,28,100,28,28,28,1,28,1],
    [1,1,28,1,32,34,1,161,161,161,161,161,1,1,115,116,100,100,116,117,1,1,1,100,98,98,98,98,98,28],
    [1,28,1,28,32,34,1,161,161,161,161,161,1,1,28,1,99,101,1,1,1,1,28,100,98,98,98,98,98,1],
    [1,1,1,1,32,34,1,1,1,1,1,1,1,1,1,28,99,101,161,161,161,161,28,100,98,98,98,98,98,1],
    [1,1,1,1,32,34,28,28,28,1,28,1,1,0,1,28,99,101,161,161,161,161,28,100,98,98,98,98,98,1],
    [1,28,1,1,32,34,1,1,1,28,1,1,1,1,1,28,99,101,161,161,161,161,28,100,98,98,98,98,98,1],
    [28,1,28,1,32,34,1,1,28,1,28,1,1,1,1,28,99,101,161,161,161,161,28,100,98,98,98,98,98,1]
],[
    [94,-1,-1,-1,-1,-1,107,107,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,94,94,60,61],
    [-1,-1,-1,94,-1,-1,-1,-1,-1,94,-1,-1,-1,-1,-1,107,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,94,76,77],
    [-1,-1,94,-1,-1,-1,-1,7,23,23,23,7,-1,-1,-1,107,-1,-1,107,-1,-1,7,23,23,23,7,-1,-1,60,61],
    [-1,-1,-1,-1,-1,-1,-1,7,-1,-1,42,7,-1,-1,-1,107,-1,-1,107,-1,-1,7,-1,-1,-1,7,-1,-1,76,77],
    [60,61,-1,-1,-1,-1,-1,7,-1,-1,41,7,-1,107,-1,-1,-1,-1,-1,-1,107,7,-1,-1,-1,7,-1,-1,-1,-1],
    [76,77,-1,-1,-1,-1,107,23,23,-1,23,23,107,107,-1,-1,60,61,-1,-1,107,23,23,-1,23,23,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,76,77,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,107,7,23,-1,23,7,107,107,-1,-1,-1,-1,-1,-1,107,107,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,7,-1,-1,-1,7,-1,107,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,8,24,24,24,8,-1],
    [-1,-1,-1,-1,-1,-1,-1,7,42,41,42,7,-1,-1,-1,107,-1,-1,107,107,107,-1,-1,-1,24,-1,-1,-1,8,-1],
    [-1,-1,94,-1,-1,-1,-1,23,23,23,23,23,7,23,7,-1,-1,-1,7,23,23,7,-1,-1,-1,-1,-1,-1,8,-1],
    [-1,94,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,-1,7,-1,-1,-1,23,-1,42,7,-1,-1,-1,42,41,42,8,-1],
    [-1,-1,-1,-1,-1,-1,60,61,94,41,42,-1,23,23,23,-1,-1,-1,-1,-1,41,7,-1,-1,8,-1,-1,-1,8,-1],
    [-1,-1,-1,94,-1,-1,76,77,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,23,-1,42,7,-1,-1,24,24,24,24,24,-1]
]];

var backgroundMapCollisionData_0 = [
    [1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1],
    [0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1],
    [0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1],
    [0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1],
    [1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0],
    [1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0],
    [0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0],
    [0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0],
    [0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0],
    [0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0],
    [0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0]
];

/* 初期設定
---------------------------------------*/
    var game,
        stage,
        bgMap_0,
        player,
        villager,
        villagers = [],
        fieldObject,
        fieldObjects = [],
        sePanelopen,
        messagePanel,
        commandPanel,
        subCommandPanel;

    game = new Game(960, 480);
    game.fps = 16;
    game.preload('ui/img/charactor0.png', 'ui/img/fieldObject0.png', 'ui/img/map0.png', 'ui/img/keypanel.png','ui/audio/se_panelopen.mp3','ui/audio/se_getitem.mp3');
    game.panelStack = [];
    game.sePanelOpen = Sound.load('ui/audio/se_panelopen.mp3');
    game.seGetItem   = Sound.load('ui/audio/se_getitem.mp3');
    game.soundControl = false;

    game.onload =function() {
/* 表示系
---------------------------------------*/
        // 背景の生成
        bgMap_0 = new Map(32, 32);
        bgMap_0.image = game.assets['ui/img/map0.png'];
        bgMap_0.loadData(backgroundMapData_0[0], backgroundMapData_0[1]);
        bgMap_0.collisionData = backgroundMapCollisionData_0;

        //プレイヤーの生成
        player = new Player(32, 48, 3, 6);

        // 村人の生成、配列へ格納
        $.each(villagersData, function(k, v) { new Villager(v) });
        
        // フィールド上の物体の生成、配列へ格納 
        $.each(fieldObjectsData, function(k, v) { new FieldObject(v) });

        // キーバインドの説明パネル
        var keySprite = new Sprite(154, 70);
        var keySurface = new Surface(154, 70);
        keySurface.draw(game.assets['ui/img/keypanel.png']);
        keySprite.image = keySurface;
        keySprite.x = keySprite.y = 10;
        keySprite._element.style.zIndex = 9999;

        // ルートシーンに追加
        stage = new Group();
        stage.addChild(bgMap_0);
        stage.addChild(player);
        for(var i in fieldObjects) { stage.addChild(fieldObjects[i]); }
        for(var i in villagers)    { stage.addChild(villagers[i]); }
        stage.addChild(keySprite);
        game.rootScene.addChild(stage);


/* 操作系
---------------------------------------*/
        // ボタン割り当て
        this.keybind(65, 'a');
        this.keybind(83, 'b');

        // コマンド、サブコマンド、メッセージ、アイテムパネル
        PanelController();

        // ゲームUIパネル開閉
        $('#btn-dq-open').toggle(function() {
            $("#dq-container-wrapperInner").css({
                'webkitTransform' : 'rotate(0deg)',
                'MozTransform' : 'rotate(0deg)',
                'msTransform' : 'rotate(0deg)',
                'transform' : 'rotate(0deg)',
                'position' : 'relative',
                'marginTop' : '30px'
            });
            return false;
        },function() {
            $("#dq-container-wrapperInner").css({
                'webkitTransform' : 'rotate(90deg)',
                'MozTransform' : 'rotate(90deg)',
                'msTransform' : 'rotate(90deg)',
                'transform' : 'rotate(90deg)',
                'position' : 'absolute',
                'marginTop' : '-140px'
            });
            return false;
        });
    };
    game.start();



    /* Player プレイヤークラス
    ---------------------------------------*/
    var Player = enchant.Class.create(enchant.Sprite, {
        initialize: function(w, h, x, y){
            enchant.Sprite.call(this, w, h);　　//継承元のコンストラクタを適用する
            var image = new Surface(96, 192); // プレイヤー画像用のSurfaceを作成
            image.draw(game.assets['ui/img/charactor0.png'], 0, 0, 96, 192, 0, 0, 96, 192); // 画像の一部をSurfaceに読み込み
            this.image = image; // 割り当てる

            this.name = 'しゅんすけ';
            this.items = {};  //アイテムリスト
            this.overflow = h - bgMap_0.tileHeight; //マップタイルからのはみ出し量
            this.x = w * x;
            this.y = (h - this.overflow) * y - this.overflow;
            this.vx = 0;         // 1フレームの移動量
            this.vy = 0;         // 1フレームの移動量
            this.moveSpeed = 4;  // 1フレームの移動量
            this.dir = 0;        // キャラの向き
            this.dirStr    = ['bottom', 'left', 'right', 'up']; // 物体との衝突判定
            this.collision = ['', '', '', '']; // 物体との衝突判定
            this.walk = 0;       // 足踏み
            this.moving = false; // 動いているか
            this._style.zIndex = 10; // キャラの重なり順

            // プレイヤーの定期処理
            this.addEventListener('enterframe', function() {
                // 向き + 足踏み
                this.frame = this.dir * 3 + (this.walk %= 3);

                if(!game.panelStack.length) {
                    if (this.moving) { // 動いてるとき
                        this.moveBy(this.vx, this.vy); // 実移動
                        this.walk++;
                        // 1タイル分動き終わったら
                        // if ((this.vx && this.x % bgMap_0.tileHeight == 0) || (this.vy && (this.y - 16) % bgMap_0.tileHeight == 0)) {
                        if ((this.vx && this.x % bgMap_0.tileHeight === 0) || (this.vy && (this.y - 16) % bgMap_0.tileHeight === 0)) {
                            this.moving = false;
                            this.walk = 0;
                        }
                    } else { // 動いていないとき
                        this.vx = this.vy = 0;
                         // 移動のためのキューを設定
                        if (game.input.left) {
                            this.cueMove('left', arguments);
                        } else if (game.input.right) {
                            this.cueMove('right', arguments);
                        } else if (game.input.up) {
                            this.cueMove('up', arguments);
                        } else if (game.input.down) {
                            this.cueMove('bottom', arguments);
                        }
                    }
                }
            });
        },
        cueMove: function(dir, arg) {// 移動のためのキューを設定
            switch(dir) {
                case 'left':
                    this.dir = 1; this['vx'] = -this.moveSpeed;
                    break;
                case 'right':
                    this.dir = 2; this['vx'] =  this.moveSpeed;
                    break;
                case 'up':
                    this.dir = 3; this['vy'] = -this.moveSpeed;
                    break;
                case 'bottom':
                    this.dir = 0; this['vy'] =  this.moveSpeed;
                    break;
            }

            for (var i in this.collision) {
                if(this.collision[i] == this.dirStr[this.dir]) {
                    return;
                }
            }

            if ((this.vx || this.vy)) { //キーが押されてたら
                var x = this.x + (this.vx ? this.vx / Math.abs(this.vx) * bgMap_0.tileHeight : 0);
                var y = this.y + (this.vy ? this.vy / Math.abs(this.vy) * bgMap_0.tileHeight : 0) + this.overflow;
                if (0 <= x && x < bgMap_0.width && 0 <= y && y < bgMap_0.height && !bgMap_0.hitTest(x, y)) {
                    this.moving = true;
                    arg.callee.call(this); //再度定期処理開始
                }
            }
        }
    });


    /* Villager 村人クラス
    ---------------------------------------*/
    var Villager = enchant.Class.create(enchant.Sprite, {
        initialize: function(data){
            enchant.Sprite.call(this, data.w, data.h, data.frameBlock);　// 継承元のコンストラクタを適用する
            var image = new Surface(96, 192);          // プレイヤー画像用のSurfaceを作成
            image.draw(game.assets['ui/img/charactor0.png'], data.frameBlock * 96, 0, 96, 192, 0, 0, 96, 192); // 画像の一部をSurfaceに読み込み
            // image.draw(game.assets['ui/img/charactor0.png'], 0, 0, 96, 192, 0, 0, 96, 192); // 画像の一部をSurfaceに読み込み
            this.image = image; // 割り当てる
            this.name = data.name;
            this.message = data.message;
            this.messageType = 'talk';
            this.item = {};
            this.overflow = data.h - bgMap_0.tileHeight; // マップタイルからのはみ出し量
            this.x = data.w * data.x;
            this.y = (data.h - this.overflow) * data.y - this.overflow;
            this.dir = 0;
            this.walk = 0;
            this.collision = false;

            // アイテム
            if (data.item) this.item = new Item(data.item);
            
        //村人の定期処理
            this.addEventListener('enterframe', function() {
                //向き + 足踏み
                if(game.frame % 8 === 0) {
                    this.frame = this.dir * 3 + (this.walk %= 3);
                    this.walk++;
                }
                // 重なり順
                setZindex(this, player, 20);
                // 衝突判定
                setCollision(this, player, 33);
            });
            villagers.push(this);  //配列に追加
        },
        // 対面してるか
        isFaceToFace: function() {
            var result = false;
            if(this.collision == 'bottom' && player.dirStr[player.dir] == 'up' ||
                this.collision == 'up' && player.dirStr[player.dir] == 'bottom' ||
                this.collision == 'left' && player.dirStr[player.dir] == 'right' ||
                this.collision == 'right' && player.dirStr[player.dir] == 'left'
            ) result = true;
            return result;
        },
        passItem: function() {
            // アイテム渡す
            if(this.item) this.item.passItem();
            this.item = null;
        }
    });


    /* FieldObject フィールド上の物体クラス
    ---------------------------------------*/
    var FieldObject = enchant.Class.create(enchant.Sprite, {
        initialize: function(data){
            enchant.Sprite.call(this, data.w, data.h);　// 継承元のコンストラクタを適用する
            this.image = game.assets['ui/img/fieldObject0.png']; // 割り当てる
            this.name = data.name;
            this.message = data.message;
            this.messageType = 'item';
            this.item = {};
            this.overflow = data.h - bgMap_0.tileHeight; // マップタイルからのはみ出し量
            this.x = data.w * data.x;
            this.y = (data.h - this.overflow) * data.y - this.overflow;
            this.frame = data.frameBlock;
            this.collision = false;

            // アイテム
            if (data.item) this.item = new Item(data.item);
            
            // 物体の定期処理
            this.addEventListener('enterframe', function() {
                // 重なり順
                setZindex(this, player, 20);
                // 衝突判定
                setCollision(this, player, 33);
            });
            fieldObjects.push(this); // 配列に追加
        },
        // 対面してるか
        isFaceToFace: function() {
            var result = false;
            if(this.collision == 'bottom' && player.dirStr[player.dir] == 'up' ||
                this.collision == 'up' && player.dirStr[player.dir] == 'bottom' ||
                this.collision == 'left' && player.dirStr[player.dir] == 'right' ||
                this.collision == 'right' && player.dirStr[player.dir] == 'left'
            ) result = true;
            return result;
        },
        passItem: function() {
            // アイテム渡す
            if(this.item) this.item.passItem();
            this.item = null;
        }
    });


    /* Item アイテムクラス
    ---------------------------------------*/
    var Item = enchant.Class.create(enchant.Sprite, {
        initialize: function(data){
            enchant.Sprite.call(this, 0, 0);　　//継承元のコンストラクタを適用する
            this.name    = itemsData[data].name;  //アイテム名
            this.content = itemsData[data].content;
            this.keyName = data;
        },
        passItem: function() {
            player.items[this.keyName] = this;
            game.soundControl = true;
        }
    });


    /* PanelInterface パネルクラス継承用
    ---------------------------------------*/
    var PanelInterface = enchant.Class.create(enchant.Entity, {
        initialize: function(w, h, x, y, zi, id) {
            enchant.Entity.call(this);
            this.id = id;
            this.y = y;
            this.x = x;
            this._element.style.zIndex = zi;
            var $ul = $('<ul />')
                .css({
                    width: w,
                    height: h
            }).addClass('game-panel');
        $(this._element).prepend($ul);
      }
    });


    /* CommandPanel コマンドパネルクラス
    ---------------------------------------*/
    var CommandPanel = enchant.Class.create(PanelInterface, {
        initialize: function(w, h, x, y, zi, dataList, id) {
            PanelInterface.call(this, w, h, x, y, zi, id);
            var $ul = $(this._element).find('ul');

            // 表示する項目をいれる
            $.each(dataList, function(k, v) {
                var $li = $('<li />').html(v['name']).data('command_name', k);
                $ul.append($li);
                $ul.find('li:first').addClass('game-panel-current-select');
            });
            
            // 表示するものがない
            if (!$ul.children().length) {
                var $li = $('<li />').html('まだなにもありません');
                $ul.append($li);
            }

        }
    });


    /* MessagePanel メッセージパネルクラス
    ---------------------------------------*/
    var MessagePanel = enchant.Class.create(PanelInterface, {
        initialize: function(w, h, x, y, zi, id) {
            PanelInterface.call(this, w, h, x, y, zi, id);
            this.$ul = $(this._element).find('ul');
            this.$li = $('<li />');
            this.$ul.append(this.$li);
            // this.collision;
            this.messageLength = 0;
        },
        // メッセージを取得する
        getMessage: function(data) {
            var $collision = $.map(data, function(v, i) {
                return v.collision ?  v : null;
            });

            // 何もないとき
            if(!$collision.length) {
                this.$li.html('しゅんけは遠い目でそらを見上げた。');
                return;
            }

            // 周りにあるものを検証
            for(var i in $collision) {
                // 前に何かあるとき
                if($collision[i].isFaceToFace()) {
                    this.collision = $collision[i]; // 行送り引数用
                    // メッセージを表示
                    this.showMessage(this.collision);
                    return;
                }
            }

            // 前に何かあるもののメッセージはない
            this.$li.html('目の前は、ただうすぼんやりしているだけだ。');
        },
        // メッセージを表示
        showMessage: function(collision) {
            // 項目ミスマッチのページ送りエラー対策
            if (!collision) return;
            // ページ送りやじるし用
            this.messageLength = collision.message[0].length;
            // メッセージ取得、挿入
            this.$li.html(this.createMessage(collision));
            // ページ送りやじるし
            if (this.messageLength) {
                this.$li.addClass('arrow-pager');
            } else {
                this.$li.removeClass('arrow-pager');
            }
        },
        // メッセージ作成
        createMessage: function(collision) {
            var message = collision.message[0][0] ? collision.message[0].shift() : collision.message[1][0];

            // アイテム受け渡しのプレースホルダーだったら
            if (message == '_') {
                message = collision.item.name + 'を手に入れた！';
                // アイテムの受け渡し処理
                collision.passItem();
                return message;
            }

             // 表示方法
            if (collision.messageType == 'talk') {
                message = collision.name + '<br>「' + message + '」';
            }
            if (collision.messageType == 'check') {
                message = message;
            }
            return message;
        }
    });


    /* ItemPanel アイテムパネルクラス
    ---------------------------------------*/
    var ItemPanel = enchant.Class.create({
        initialize: function(itemData, id) {
            this.id = id;
            // this.$panel;
            var $itemPanel_1 = $('<div id="item-panel"></div>');
            var $itemPanel_2 = $('<div id="item-panel-inner"></div>');
            var $itemPanel_3 = $('<div id="item-panel-content"></div>');

            $itemPanel_2.append($itemPanel_3);
            $itemPanel_1.append($itemPanel_2);
            $('body').append($itemPanel_1);

            // オーバーレイコンテンツ読み込み
            var itemDataURL = itemsData[itemData]['content'];
            $itemPanel_3.load(itemDataURL);
            this.$panel　= $itemPanel_1;
        },
        fadeIn: function() {
            this.$panel
                .fadeIn('fast')
                .css({
                    'display': 'table',
                    'height' : $('body').height()
                });
        },
        fadeOut: function() {
            this.$panel.fadeOut('fast');
            $('#item-panel').remove();
        }
    });


    /* PanelController パネルコントローラークラス
    ---------------------------------------*/
    var PanelController = enchant.Class.create({
        initialize: function() {
            // Aボタン
            game.addEventListener('abuttondown', function() {
                // パネルが開かれていない
                if(!game.panelStack.length) {
                    commandPanel = new CommandPanel(110, 'auto', 775, 55, 110, commandList, 'commandPanel');
                    stage.addChild(commandPanel);
                    game.panelStack.push(commandPanel);
                    game.sePanelOpen.play();
                // コマンドパネル
                } else if(game.panelStack[game.panelStack.length-1].id == 'commandPanel') {
                    var curpanel = game.panelStack[game.panelStack.length-1];
                    var cur = $(curpanel._element).find('.game-panel-current-select').data('command_name');

                    // コマンドの項目によってふりわけ
                    switch(cur) {
                        case 'talk':
                            messagePanel = new MessagePanel(600, 180, 163, 256, 100, 'messagePanel');
                            stage.addChild(messagePanel);
                            game.panelStack.push(messagePanel);
                            messagePanel.getMessage(villagers);
                            soundControl();
                            // game.sePanelOpen.play();
                            break;
                        case 'check':
                            messagePanel = new MessagePanel(600, 180, 163, 256, 100, 'messagePanel');
                            stage.addChild(messagePanel);
                            game.panelStack.push(messagePanel);
                            messagePanel.getMessage(fieldObjects);
                            soundControl();
                            // game.sePanelOpen.play();
                            break;
                        case 'item':
                            subCommandPanel = new CommandPanel(130, 'auto', 791, 130, 120, player.items, 'subCommandPanel');
                            stage.addChild(subCommandPanel);
                            game.panelStack.push(subCommandPanel);
                            game.sePanelOpen.play();
                            break;
                        case 'profile':
                            window.open("http://localhost/profile/");
                            game.sePanelOpen.play();
                            break;
                    }

                // メッセージパネル
                } else if(game.panelStack[game.panelStack.length-1].id == 'messagePanel') {
                    messagePanel.showMessage(messagePanel.collision);
                    soundControl();

                // サブコマンドパネル
                } else if(game.panelStack[game.panelStack.length-1].id == 'subCommandPanel') {
                    var curpanel = game.panelStack[game.panelStack.length-1];
                    var cur      = $(curpanel._element).find('.game-panel-current-select').data('command_name');
                    itemPanel = new ItemPanel(cur, 'itemPanel');
                    itemPanel.fadeIn();
                    game.panelStack.push(itemPanel);
                }
            });

            // Ｂボタン
            game.addEventListener('bbuttondown', function() {
                var currentStack = game.panelStack.pop();
                if(currentStack) { // パネルが開かれていたら
                    stage.removeChild(currentStack); // 一番上を消去
                    game.sePanelOpen.play();
                }

                // アイテムパネル消去
                if(currentStack && currentStack.id == 'itemPanel') {
                    itemPanel.fadeOut();
                }
            });

            // 下ボタン
            game.addEventListener('downbuttondown', function() {
                if(game.panelStack.length) { // パネルが開かれていたらa
                    var curpanel = game.panelStack[game.panelStack.length-1];
                    var len = $(curpanel._element).find('li').length;
                    var cur = $(curpanel._element).find('.game-panel-current-select').index();
                    if(cur < --len) {
                        $(curpanel._element).find('.game-panel-current-select')
                        .removeClass('game-panel-current-select')
                        .next()
                            .addClass('game-panel-current-select');
                            game.sePanelOpen.play();
                    }
                }
            });

            // 上ボタン
            game.addEventListener('upbuttondown', function() {
                if(game.panelStack.length) { // パネルが開かれていたらa
                    var curpanel = game.panelStack[game.panelStack.length-1];
                    var cur = $(curpanel._element).find('.game-panel-current-select').index();
                    if(cur > 0) {
                        $(curpanel._element).find('.game-panel-current-select')
                        .removeClass('game-panel-current-select')
                        .prev()
                            .addClass('game-panel-current-select');
                            game.sePanelOpen.play();
                    }
                }
            });
        }
    });


    function soundControl() {
        if(!game.soundControl) {
            game.sePanelOpen.play();
        }
        if(game.soundControl) {
            game.seGetItem.play();
            game.soundControl = false;
        }
    }


    /* setCollision　衝突判定
    ---------------------------------------*/
    function setCollision(target, other, distance) {
        if((target.x < other.x) && !other.moving && target.within(other, distance)) {
            other.collision[1] = 'left';
            target.collision   = 'right';
        }
        else if((target.x > other.x) && !other.moving && target.within(other, distance)) {
            other.collision[2] = 'right';
            target.collision   = 'left';
        }
        if((target.y > other.y) && !other.moving && target.within(other, distance)) {
            other.collision[0] = 'bottom';
            target.collision   = 'up';
        }
        if((target.y < other.y) && !other.moving && target.within(other, distance)) {
            other.collision[3] = 'up';
            target.collision   = 'bottom';
        }
        if(!target.within(other, distance) && target.collision == 'right') {
            other.collision[1] = '';
            target.collision = false;
        }
        if(!target.within(other, distance) && target.collision == 'left') {
            other.collision[2] = '';
            target.collision = false;
        }
        if(!target.within(other, distance) && target.collision == 'up') {
            other.collision[0] = '';
            target.collision = false;
        }
        if(!target.within(other, distance) && target.collision == 'bottom') {
            other.collision[3] = '';
            target.collision = false;
        }
    }


    /* setZindex　重なり順
    ---------------------------------------*/
    function setZindex(target, other, zi) {
        if(target.intersect(other) && other.y < target.y && !target._style.zIndex) {
            target._style.zIndex = zi;
        } else if(target.intersect(other) && other.y > target.y && target._style.zIndex) {
            target._style.zIndex = null;
        }
    }
});
/**
 * 悬浮在网页上的挂件
 */
module.exports = {
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  // AI 聊天机器人相关配置已迁移至 conf/ai.config.js

  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // 点击宠物挂件切换博客主题

  SPOILER_TEXT_TAG: process.env.NEXT_PUBLIC_SPOILER_TEXT_TAG || '', // Spoiler文本隐藏功能，如Notion中 [sp]希望被spoiler的文字[sp]，填入[sp] 即可

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/aplayer@1.10.0/dist/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
    MUSIC_PLAYER_AUDIO_LIST: [
    // 网易云歌单 2365527095，共 71 首（已剔除 52 首外链 404 的版权死链）
    {
      name: 'Feel Alright',
      artist: 'Poolside',
      url: 'https://music.163.com/song/media/outer/url?id=1449153950.mp3',
      cover: 'https://p2.music.126.net/DuNQosR9OMGmxl1dQq70dg==/109951164998718467.jpg'
    },
    {
      name: 'Go Harder',
      artist: 'Leo Soul',
      url: 'https://music.163.com/song/media/outer/url?id=1385399308.mp3',
      cover: 'https://p2.music.126.net/4077uB_-NHrSMke6XRpvwQ==/109951164308537141.jpg'
    },
    {
      name: 'Everything Is AWESOME!!! (feat. The Lonely Island)',
      artist: 'Tegan and Sara/The Lonely Island',
      url: 'https://music.163.com/song/media/outer/url?id=28256419.mp3',
      cover: 'https://p2.music.126.net/VGn9zPdQ3UjC6E3mkJZHng==/5953855464504694.jpg'
    },
    {
      name: 'Cheat Codes',
      artist: 'Nitro Fun',
      url: 'https://music.163.com/song/media/outer/url?id=28668221.mp3',
      cover: 'https://p2.music.126.net/E30SLxu2BpFEOXgyAG6Mmg==/109951163640412396.jpg'
    },
    {
      name: 'Higher',
      artist: 'Outasight',
      url: 'https://music.163.com/song/media/outer/url?id=1307936987.mp3',
      cover: 'https://p2.music.126.net/YgD2wwSkMYYA1VUB5p1Xvg==/109951168504815275.jpg'
    },
    {
      name: 'Hot Wheels',
      artist: 'Kings Of The Rollers',
      url: 'https://music.163.com/song/media/outer/url?id=1312570607.mp3',
      cover: 'https://p2.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Caffeine',
      artist: 'Urbandawn',
      url: 'https://music.163.com/song/media/outer/url?id=1312569785.mp3',
      cover: 'https://p2.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'The Sound Of Your Smile',
      artist: 'Nu:Logic',
      url: 'https://music.163.com/song/media/outer/url?id=1312569786.mp3',
      cover: 'https://p2.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Lessons Learned',
      artist: 'Polaris',
      url: 'https://music.163.com/song/media/outer/url?id=1312570609.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Let The Senses Clear Your Mind',
      artist: 'Logistics',
      url: 'https://music.163.com/song/media/outer/url?id=1312570610.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Rock Da House',
      artist: 'S.P.Y',
      url: 'https://music.163.com/song/media/outer/url?id=1312570611.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Loki',
      artist: 'Whiney/Urbandawn',
      url: 'https://music.163.com/song/media/outer/url?id=1312570612.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Wading Through The Crowds',
      artist: 'Makoto/Karina Ramage',
      url: 'https://music.163.com/song/media/outer/url?id=1312570613.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Brave Face',
      artist: 'Keeno',
      url: 'https://music.163.com/song/media/outer/url?id=1312570614.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Veloce',
      artist: 'Mitekiss',
      url: 'https://music.163.com/song/media/outer/url?id=1312570615.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Haltija',
      artist: 'Etherwood',
      url: 'https://music.163.com/song/media/outer/url?id=1312570616.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Offshore',
      artist: 'Hugh Hardie',
      url: 'https://music.163.com/song/media/outer/url?id=1312569787.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Stomp Your Soul',
      artist: 'Lakeway',
      url: 'https://music.163.com/song/media/outer/url?id=1312570617.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Empire',
      artist: 'Polaris',
      url: 'https://music.163.com/song/media/outer/url?id=1312570618.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Mismatch',
      artist: 'Krakota',
      url: 'https://music.163.com/song/media/outer/url?id=1312570606.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Auckland Sunrise',
      artist: 'Fred V & Grafix',
      url: 'https://music.163.com/song/media/outer/url?id=1312570605.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'That\'s A Switch',
      artist: 'London Elektricity',
      url: 'https://music.163.com/song/media/outer/url?id=1312569783.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'While The World Sleeps',
      artist: 'Keeno',
      url: 'https://music.163.com/song/media/outer/url?id=1312569782.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'City Lights',
      artist: 'Subwave/Bop',
      url: 'https://music.163.com/song/media/outer/url?id=1312569784.mp3',
      cover: 'https://p1.music.126.net/_IRAcM1FF8rzwr8p_cUCLA==/109951172287717009.jpg'
    },
    {
      name: 'Loyal',
      artist: 'ODESZA',
      url: 'https://music.163.com/song/media/outer/url?id=1309489380.mp3',
      cover: 'https://p1.music.126.net/lua4KgHx1vUdLCq3L1hzmw==/109951169996839387.jpg'
    },
    {
      name: 'The Storm',
      artist: 'Notaker',
      url: 'https://music.163.com/song/media/outer/url?id=1309543348.mp3',
      cover: 'https://p1.music.126.net/ZhtDMsPHa7cOQxz71Js5lg==/109951163547362975.jpg'
    },
    {
      name: 'Be Good 2 Me (Original Mix)',
      artist: 'Luxxury',
      url: 'https://music.163.com/song/media/outer/url?id=1307223943.mp3',
      cover: 'https://p1.music.126.net/6LY-WqKaEYcdT9Y4Dl5lww==/109951164388851313.jpg'
    },
    {
      name: 'Rapper\'s Delight',
      artist: 'The Sugarhill Gang',
      url: 'https://music.163.com/song/media/outer/url?id=3597774.mp3',
      cover: 'https://p2.music.126.net/J31pZCoBzLjzZZUVgl8wYg==/1709740581199104.jpg'
    },
    {
      name: 'Find Yourself (Ashworth Remix)',
      artist: 'Great Good Fine OK/Before You Exit/Ashworth',
      url: 'https://music.163.com/song/media/outer/url?id=515453551.mp3',
      cover: 'https://p2.music.126.net/oD1gJ7WuFYzJVbKRLPA5sQ==/109951164643067550.jpg'
    },
    {
      name: 'Carmen : Suite no. 2 - habanera',
      artist: 'Slovak Philarmonic Orchestra/Libor Pesek',
      url: 'https://music.163.com/song/media/outer/url?id=497449736.mp3',
      cover: 'https://p2.music.126.net/vJ7QQB33Rnz5cDL6sR_o2Q==/18428914393423991.jpg'
    },
    {
      name: 'Overture (Suite) No. 3 in D Major, BWV 1068: II. Air, "Air on G String" (arr. for violin and orchestra)',
      artist: '西崎崇子/Capella Istropolitana/Oliver Dohnányi',
      url: 'https://music.163.com/song/media/outer/url?id=27342285.mp3',
      cover: 'https://p2.music.126.net/ujfXD9zOvHdJNU6E65C-Ew==/18199116463469670.jpg'
    },
    {
      name: 'I can see for miles',
      artist: 'Surfing The Apocalypse',
      url: 'https://music.163.com/song/media/outer/url?id=1302090325.mp3',
      cover: 'https://p2.music.126.net/75mkGpWxd6umyhKFCB6miQ==/109951164276076963.jpg'
    },
    {
      name: 'The Trials',
      artist: '陣内一真',
      url: 'https://music.163.com/song/media/outer/url?id=36190891.mp3',
      cover: 'https://p2.music.126.net/2pJhZw_aTtEPEoPikZBrsQ==/3298534886070551.jpg'
    },
    {
      name: 'Frühlingsstimmen, Walzer, Op. 410',
      artist: 'Mariss Jansons/Wiener Philharmoniker',
      url: 'https://music.163.com/song/media/outer/url?id=4430230.mp3',
      cover: 'https://p2.music.126.net/_nzzsGXhMxKN1FXdgnjqFw==/109951165969333532.jpg'
    },
    {
      name: 'Air -Suite No. 3 In D Major, Bwv 1068',
      artist: 'Johann Sebastian Bach',
      url: 'https://music.163.com/song/media/outer/url?id=5057458.mp3',
      cover: 'https://p2.music.126.net/V6A67qCoJrKDWAK1APYlxw==/2476100185797939.jpg'
    },
    {
      name: 'The Planets, Suite for Large Orchestra, Op. 32:Jupiter, The Bringer of Jollity',
      artist: 'David Parry/London Philharmonic Orchestra',
      url: 'https://music.163.com/song/media/outer/url?id=27256837.mp3',
      cover: 'https://p2.music.126.net/ZKjubffYbTpONa26el99nQ==/7773547208458666.jpg'
    },
    {
      name: 'Zadok the Priest (Coronation Anthem No. 1, HWV 258)',
      artist: 'Academy of St. Martin in the Fields/Neville Marriner',
      url: 'https://music.163.com/song/media/outer/url?id=26014969.mp3',
      cover: 'https://p2.music.126.net/NQXEtZBhU98LbKmCLJhBIg==/109951165073036408.jpg'
    },
    {
      name: '哈巴涅拉',
      artist: 'Georges Bizet',
      url: 'https://music.163.com/song/media/outer/url?id=25830170.mp3',
      cover: 'https://p2.music.126.net/fzpX1PppXWeR3BtwlC2dWg==/2531075768909159.jpg'
    },
    {
      name: 'The Four Seasons - Violin Concerto in E Major, RV 269, "Spring" : I. Allegro',
      artist: 'Cappella Gedanensis',
      url: 'https://music.163.com/song/media/outer/url?id=499219171.mp3',
      cover: 'https://p2.music.126.net/ySJ7EoBf66jKY-943wOj-A==/18214509626301580.jpg'
    },
    {
      name: 'Rapper\'s Delight',
      artist: 'The Sugar Hill Gang',
      url: 'https://music.163.com/song/media/outer/url?id=563385887.mp3',
      cover: 'https://p2.music.126.net/kTels8kArC3yaSkpV8-SUA==/109951168488251336.jpg'
    },
    {
      name: 'Who Knows',
      artist: 'Protoje/Chronixx',
      url: 'https://music.163.com/song/media/outer/url?id=36871750.mp3',
      cover: 'https://p2.music.126.net/k1ZjMHhKUaEb6PHV6X7PCw==/109951170978814772.jpg'
    },
    {
      name: 'Tunnel Vision',
      artist: 'Subtact',
      url: 'https://music.163.com/song/media/outer/url?id=433681317.mp3',
      cover: 'https://p2.music.126.net/Da9Y9HYeh3qmUJ_2eEqO1g==/109951163311409508.jpg'
    },
    {
      name: 'Just Let Me Dance (Maxxi Soundsystem Remix)',
      artist: 'Scandal',
      url: 'https://music.163.com/song/media/outer/url?id=23123259.mp3',
      cover: 'https://p2.music.126.net/HW3EVCavr78REjEHKIjAAQ==/109951170270229246.jpg'
    },
    {
      name: 'RL Grime ft. Daya - I Wanna Know (Zhouna Remix)',
      artist: 'Zhouna',
      url: 'https://music.163.com/song/media/outer/url?id=572200649.mp3',
      cover: 'https://p2.music.126.net/fc9FAVDCG9qiDXs6z8zetw==/109951163341300308.jpg'
    },
    {
      name: 'Black Water',
      artist: 'Octave One/Ann Saunderson',
      url: 'https://music.163.com/song/media/outer/url?id=534978090.mp3',
      cover: 'https://p2.music.126.net/A0vqLgf8MCeAcnniD7sMbg==/109951163486449441.jpg'
    },
    {
      name: 'Kids (Soulwax Remix)',
      artist: 'MGMT',
      url: 'https://music.163.com/song/media/outer/url?id=4898524.mp3',
      cover: 'https://p2.music.126.net/P0lGq6I1h2Be62rz5Y_iPQ==/1650366953301582.jpg'
    },
    {
      name: 'State Of Confusion (The Maurice Fulton Remix)',
      artist: 'Honey Dijon/Joi Cardwell',
      url: 'https://music.163.com/song/media/outer/url?id=863956067.mp3',
      cover: 'https://p2.music.126.net/TuE4RX3fic_FGBOoN8_7yQ==/109951170293062521.jpg'
    },
    {
      name: 'TopBrazil (Benny Benassi vs. Constantin & MazZz Extended Mix)',
      artist: 'Fischerspooner',
      url: 'https://music.163.com/song/media/outer/url?id=546619404.mp3',
      cover: 'https://p2.music.126.net/AEQHHNmRki9ItwkE6NFgBA==/109951168980013069.jpg'
    },
    {
      name: 'Deadly Valentine',
      artist: 'Charlotte Gainsbourg',
      url: 'https://music.163.com/song/media/outer/url?id=507712526.mp3',
      cover: 'https://p2.music.126.net/nDmYf-aYxaT1h8IePy7N9Q==/18336555416998638.jpg'
    },
    {
      name: 'The Trials (From "Halo 5: Guardians")',
      artist: 'L\'Orchestra Cinematique',
      url: 'https://music.163.com/song/media/outer/url?id=561446852.mp3',
      cover: 'https://p2.music.126.net/Ixfw9HPaRXu9IjTH495RYA==/109951163298909539.jpg'
    },
    {
      name: 'Sister Cities',
      artist: 'The Wonder Years',
      url: 'https://music.163.com/song/media/outer/url?id=554191502.mp3',
      cover: 'https://p2.music.126.net/s_1vLxsiRMd2UFqGpiRc5A==/109951163351887820.jpg'
    },
    {
      name: 'Can\'t Be Ignored',
      artist: 'Pennywise',
      url: 'https://music.163.com/song/media/outer/url?id=550679333.mp3',
      cover: 'https://p2.music.126.net/5fhAaZ4uQKOl0RpqhexGgQ==/109951167745214484.jpg'
    },
    {
      name: 'Six Wave Hold-Down',
      artist: 'Hot Snakes',
      url: 'https://music.163.com/song/media/outer/url?id=530202502.mp3',
      cover: 'https://p2.music.126.net/-1INQBpNGqvkYnJGkGh14g==/109951163831876706.jpg'
    },
    {
      name: 'Pastel City',
      artist: 'Dommengang',
      url: 'https://music.163.com/song/media/outer/url?id=573258758.mp3',
      cover: 'https://p2.music.126.net/8JuYF6rkhD0yBDGToKj3Hw==/109951163352768963.jpg'
    },
    {
      name: 'Little Thing Gone Wild',
      artist: 'Black Rebel Motorcycle Club',
      url: 'https://music.163.com/song/media/outer/url?id=863707337.mp3',
      cover: 'https://p2.music.126.net/_pAdv01GJhnVFuHwlYMCgQ==/109951163384066803.jpg'
    },
    {
      name: 'Turn It Up',
      artist: 'Bat Fangs',
      url: 'https://music.163.com/song/media/outer/url?id=573964211.mp3',
      cover: 'https://p2.music.126.net/Zlnq4MLo7Mqg8ASfetVWcg==/109951163361048048.jpg'
    },
    {
      name: 'Don\'t Rush (feat. Patrick Pryor)',
      artist: 'Ric Wilson',
      url: 'https://music.163.com/song/media/outer/url?id=573283319.mp3',
      cover: 'https://p2.music.126.net/tfyAhIaUtLOBdYuO_sEbzA==/109951164469730499.jpg'
    },
    {
      name: '\'Til It\'s Over',
      artist: 'Anderson .Paak',
      url: 'https://music.163.com/song/media/outer/url?id=543612397.mp3',
      cover: 'https://p1.music.126.net/ONJAqeXuoqukLBFscPgIeg==/109951163785523395.jpg'
    },
    {
      name: 'Award Tour',
      artist: 'A Tribe Called Quest/Trugoy, The Dove',
      url: 'https://music.163.com/song/media/outer/url?id=16330807.mp3',
      cover: 'https://p1.music.126.net/cqTRZTQXKQ-bCcGj-hnctQ==/109951168977465757.jpg'
    },
    {
      name: 'Build a Fire',
      artist: 'Young Ejecta/Napolian/Ellie Herring',
      url: 'https://music.163.com/song/media/outer/url?id=526754065.mp3',
      cover: 'https://p1.music.126.net/1rblWH6K_fBWipuha07lZQ==/109951163094849687.jpg'
    },
    {
      name: 'Ride Or Die (feat. Foster The People) [Big Gigantic Remix]',
      artist: 'The Knocks',
      url: 'https://music.163.com/song/media/outer/url?id=548780664.mp3',
      cover: 'https://p1.music.126.net/qwOKOco4w3UUTlZ8e9rVZQ==/109951163234008427.jpg'
    },
    {
      name: 'Late Night',
      artist: 'ODESZA',
      url: 'https://music.163.com/song/media/outer/url?id=474932031.mp3',
      cover: 'https://p1.music.126.net/7ZBRErmBEkuDnlU7qkuPjQ==/769658149717160.jpg'
    },
    {
      name: 'MJ',
      artist: 'Now, Now',
      url: 'https://music.163.com/song/media/outer/url?id=864241916.mp3',
      cover: 'https://p1.music.126.net/CTz48jAD07VNCndTnZiGNg==/109951163710971004.jpg'
    },
    {
      name: 'Kim & Jessie',
      artist: 'M83',
      url: 'https://music.163.com/song/media/outer/url?id=16957745.mp3',
      cover: 'https://p1.music.126.net/3YAzVi9VcTHSMbqZcHCoNA==/109951164470142347.jpg'
    },
    {
      name: 'Someday',
      artist: 'Latroit/Lliam',
      url: 'https://music.163.com/song/media/outer/url?id=535048512.mp3',
      cover: 'https://p1.music.126.net/qjK_vbKNXe5SppKidjyIYQ==/109951163129067131.jpg'
    },
    {
      name: 'Deadly Valentine (Radio Edit)',
      artist: 'Charlotte Gainsbourg',
      url: 'https://music.163.com/song/media/outer/url?id=507712527.mp3',
      cover: 'https://p1.music.126.net/_CC6KyZ9eU0AyFrk0i879Q==/18337654928626451.jpg'
    },
    {
      name: 'Kids',
      artist: 'MGMT',
      url: 'https://music.163.com/song/media/outer/url?id=1699315.mp3',
      cover: 'https://p1.music.126.net/L-rDOH5s3UvGKrW8ia8jGQ==/109951172164722977.jpg'
    },
    {
      name: 'Do You Don\'t You',
      artist: 'Haywyre',
      url: 'https://music.163.com/song/media/outer/url?id=496617965.mp3',
      cover: 'https://p1.music.126.net/EQUmeWIw8IRxjARlpCpapA==/109951163311354702.jpg'
    },
    {
      name: 'Are We Still Young',
      artist: 'Grant/Juneau',
      url: 'https://music.163.com/song/media/outer/url?id=480426316.mp3',
      cover: 'https://p1.music.126.net/dd_htSsDLr8zKHebdH-KAg==/109951163311474273.jpg'
    },
    {
      name: '2 MUCH (feat. 24hrs)',
      artist: 'Flosstradamus/24hrs',
      url: 'https://music.163.com/song/media/outer/url?id=524270707.mp3',
      cover: 'https://p1.music.126.net/6vViiAhVi4-HQjna0VPuXA==/109951167026143835.jpg'
    },
    {
      name: 'Find Yourself',
      artist: 'Great Good Fine OK/Before You Exit',
      url: 'https://music.163.com/song/media/outer/url?id=480583051.mp3',
      cover: 'https://p2.music.126.net/o0EQ1HHIffkI0U1QyhsZaQ==/109951164643070533.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 已废弃！！！可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '' // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/
}

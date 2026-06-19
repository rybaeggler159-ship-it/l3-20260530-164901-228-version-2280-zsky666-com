const MOVIES_DATA = [
  {
    "id": 1,
    "title": "荒墨生存法则",
    "year": "2025",
    "region": "澳大利亚",
    "genre": "恐怖, 生存, 奇幻",
    "file": "movie-0001.html",
    "image": "./1.jpg",
    "category": "动画冒险"
  },
  {
    "id": 2,
    "title": "白玉老虎",
    "year": "1977",
    "region": "香港",
    "genre": "动作, 武侠, 剧情",
    "file": "movie-0002.html",
    "image": "./2.jpg",
    "category": "环球片库"
  },
  {
    "id": 3,
    "title": "工会主义者",
    "year": "2021",
    "region": "英国",
    "genre": "剧情，惊悚",
    "file": "movie-0003.html",
    "image": "./3.jpg",
    "category": "经典精选"
  },
  {
    "id": 4,
    "title": "落头氏之吻2",
    "year": "2022",
    "region": "泰国",
    "genre": "恐怖 / 爱情",
    "file": "movie-0004.html",
    "image": "./4.jpg",
    "category": "战争历史"
  },
  {
    "id": 5,
    "title": "圣诞老人",
    "year": "2025",
    "region": "美国",
    "genre": "奇幻，喜剧，家庭",
    "file": "movie-0005.html",
    "image": "./5.jpg",
    "category": "动画冒险"
  },
  {
    "id": 6,
    "title": "七华617",
    "year": "2023",
    "region": "中国大陆",
    "genre": "悬疑 / 科幻",
    "file": "movie-0006.html",
    "image": "./6.jpg",
    "category": "战争历史"
  },
  {
    "id": 7,
    "title": "车祸灵异事件",
    "year": "2025",
    "region": "泰国",
    "genre": "恐怖 / 悬疑",
    "file": "movie-0007.html",
    "image": "./7.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 8,
    "title": "大婴儿",
    "year": "2026",
    "region": "美国",
    "genre": "荒诞喜剧",
    "file": "movie-0008.html",
    "image": "./8.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 9,
    "title": "游戏规则",
    "year": "2029",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪 / 剧情",
    "file": "movie-0009.html",
    "image": "./9.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 10,
    "title": "勇闯无人之境第二季",
    "year": "2025",
    "region": "美国",
    "genre": "科幻，冒险",
    "file": "movie-0010.html",
    "image": "./10.jpg",
    "category": "环球片库"
  },
  {
    "id": 11,
    "title": "大河",
    "year": "2025",
    "region": "英国 / 澳大利亚",
    "genre": "剧情, 冒险, 家庭",
    "file": "movie-0011.html",
    "image": "./11.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 12,
    "title": "虹猫蓝兔奥悠国历险记",
    "year": "2025",
    "region": "中国大陆",
    "genre": "冒险, 奇幻, 儿童",
    "file": "movie-0012.html",
    "image": "./12.jpg",
    "category": "经典精选"
  },
  {
    "id": 13,
    "title": "万灵渡",
    "year": "2026",
    "region": "中国大陆",
    "genre": "奇幻、古装、惊悚",
    "file": "movie-0013.html",
    "image": "./13.jpg",
    "category": "战争历史"
  },
  {
    "id": 14,
    "title": "三岛由纪夫传",
    "year": "1985",
    "region": "日本",
    "genre": "剧情, 传记",
    "file": "movie-0014.html",
    "image": "./14.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 15,
    "title": "被遗忘祖先的影子",
    "year": "1965",
    "region": "意大利",
    "genre": "剧情 / 爱情 / 历史",
    "file": "movie-0015.html",
    "image": "./15.jpg",
    "category": "战争历史"
  },
  {
    "id": 16,
    "title": "老友狗狗粤语",
    "year": "2024",
    "region": "中国香港",
    "genre": "喜剧，家庭，温情",
    "file": "movie-0016.html",
    "image": "./16.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 17,
    "title": "冰原蛮象大反扑",
    "year": "2028",
    "region": "美国",
    "genre": "动作、科幻、灾难",
    "file": "movie-0017.html",
    "image": "./17.jpg",
    "category": "经典精选"
  },
  {
    "id": 18,
    "title": "啼笑姻缘",
    "year": "2025",
    "region": "中国香港",
    "genre": "爱情，喜剧，古装",
    "file": "movie-0018.html",
    "image": "./18.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 19,
    "title": "快乐英雄",
    "year": "1980",
    "region": "中国台湾",
    "genre": "武侠 / 喜剧",
    "file": "movie-0019.html",
    "image": "./19.jpg",
    "category": "经典精选"
  },
  {
    "id": 20,
    "title": "巴西香粉寮",
    "year": "2025",
    "region": "中国香港",
    "genre": "剧情 / 同性 / 犯罪",
    "file": "movie-0020.html",
    "image": "./20.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 21,
    "title": "下一站，别离",
    "year": "2018",
    "region": "中国大陆",
    "genre": "剧情, 爱情, 都市",
    "file": "movie-0021.html",
    "image": "./21.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 22,
    "title": "刑警弓神",
    "year": "2024",
    "region": "日本",
    "genre": "悬疑 / 犯罪",
    "file": "movie-0022.html",
    "image": "./22.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 23,
    "title": "林祭",
    "year": "2019",
    "region": "中国台湾",
    "genre": "恐怖， 民俗",
    "file": "movie-0023.html",
    "image": "./23.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 24,
    "title": "离别心事",
    "year": "2024",
    "region": "中国台湾",
    "genre": "剧情、家庭",
    "file": "movie-0024.html",
    "image": "./24.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 25,
    "title": "停留",
    "year": "2024",
    "region": "西班牙",
    "genre": "剧情 / 奇幻 / 悬疑",
    "file": "movie-0025.html",
    "image": "./25.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 26,
    "title": "陌路双姝",
    "year": "2025",
    "region": "法国 / 德国",
    "genre": "剧情，惊悚",
    "file": "movie-0026.html",
    "image": "./26.jpg",
    "category": "环球片库"
  },
  {
    "id": 27,
    "title": "朋友也上床",
    "year": "2024",
    "region": "美国",
    "genre": "爱情 / 喜剧",
    "file": "movie-0027.html",
    "image": "./27.jpg",
    "category": "动画冒险"
  },
  {
    "id": 28,
    "title": "恶胎",
    "year": "2025",
    "region": "中国台湾",
    "genre": "恐怖 / 民俗",
    "file": "movie-0028.html",
    "image": "./28.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 29,
    "title": "功夫熊猫之师父的秘密",
    "year": "2024",
    "region": "美国",
    "genre": "动画、喜剧、武侠",
    "file": "movie-0029.html",
    "image": "./29.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 30,
    "title": "良宵花弄月",
    "year": "2024",
    "region": "中国香港",
    "genre": "爱情 / 剧情",
    "file": "movie-0030.html",
    "image": "./30.jpg",
    "category": "战争历史"
  },
  {
    "id": 31,
    "title": "恐怖劫持",
    "year": "2024",
    "region": "韩国",
    "genre": "动作、惊悚、犯罪",
    "file": "movie-0031.html",
    "image": "./31.jpg",
    "category": "战争历史"
  },
  {
    "id": 32,
    "title": "冠军马王",
    "year": "2025",
    "region": "英国",
    "genre": "运动 / 励志",
    "file": "movie-0032.html",
    "image": "./32.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 33,
    "title": "蓬门绮梦",
    "year": "1992",
    "region": "中国香港",
    "genre": "剧情, 爱情",
    "file": "movie-0033.html",
    "image": "./33.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 34,
    "title": "疗养怨",
    "year": "2026",
    "region": "中国大陆",
    "genre": "心理恐怖",
    "file": "movie-0034.html",
    "image": "./34.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 35,
    "title": "忧郁的物怪庵第二季",
    "year": "2025",
    "region": "日本",
    "genre": "奇幻、日常、神怪",
    "file": "movie-0035.html",
    "image": "./35.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 36,
    "title": "前哨2：黑太阳",
    "year": "2026",
    "region": "美国 / 德国",
    "genre": "动作, 科幻, 战争",
    "file": "movie-0036.html",
    "image": "./36.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 37,
    "title": "孤岛少年",
    "year": "2018",
    "region": "英国 / 澳大利亚",
    "genre": "剧情, 冒险, 心理",
    "file": "movie-0037.html",
    "image": "./37.jpg",
    "category": "战争历史"
  },
  {
    "id": 38,
    "title": "初恋红豆冰",
    "year": "2024",
    "region": "马来西亚",
    "genre": "爱情 / 青春",
    "file": "movie-0038.html",
    "image": "./38.jpg",
    "category": "动画冒险"
  },
  {
    "id": 39,
    "title": "从三开始",
    "year": "2026",
    "region": "中国大陆",
    "genre": "剧情 / 喜剧",
    "file": "movie-0039.html",
    "image": "./39.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 40,
    "title": "危机迷雾",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑 / 刑侦 / 心理",
    "file": "movie-0040.html",
    "image": "./40.jpg",
    "category": "经典精选"
  },
  {
    "id": 41,
    "title": "奥约帝国缔造者",
    "year": "2026",
    "region": "尼日利亚",
    "genre": "历史, 史诗",
    "file": "movie-0041.html",
    "image": "./41.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 42,
    "title": "这是什么鬼",
    "year": "2024",
    "region": "韩国",
    "genre": "喜剧，奇幻",
    "file": "movie-0042.html",
    "image": "./42.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 43,
    "title": "自我人生",
    "year": "2023",
    "region": "英国",
    "genre": "剧情, 传记",
    "file": "movie-0043.html",
    "image": "./43.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 44,
    "title": "遇难者们",
    "year": "2025",
    "region": "韩国",
    "genre": "灾难 / 惊悚",
    "file": "movie-0044.html",
    "image": "./44.jpg",
    "category": "动画冒险"
  },
  {
    "id": 45,
    "title": "我的女神室友斗娜",
    "year": "2024",
    "region": "韩国",
    "genre": "爱情 / 喜剧 / 都市",
    "file": "movie-0045.html",
    "image": "./45.jpg",
    "category": "经典精选"
  },
  {
    "id": 46,
    "title": "鬼怨",
    "year": "2023",
    "region": "中国台湾",
    "genre": "恐怖，民俗，悬疑",
    "file": "movie-0046.html",
    "image": "./46.jpg",
    "category": "战争历史"
  },
  {
    "id": 47,
    "title": "一支丁香花",
    "year": "2026",
    "region": "中国大陆",
    "genre": "爱情, 悬疑, 奇幻",
    "file": "movie-0047.html",
    "image": "./47.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 48,
    "title": "军舰春光",
    "year": "1976",
    "region": "日本",
    "genre": "剧情, 战争",
    "file": "movie-0048.html",
    "image": "./48.jpg",
    "category": "动画冒险"
  },
  {
    "id": 49,
    "title": "龙行龘龘",
    "year": "2024",
    "region": "中国",
    "genre": "动作, 奇幻",
    "file": "movie-0049.html",
    "image": "./49.jpg",
    "category": "经典精选"
  },
  {
    "id": 50,
    "title": "钱线对战",
    "year": "2025",
    "region": "中国大陆",
    "genre": "犯罪、剧情",
    "file": "movie-0050.html",
    "image": "./50.jpg",
    "category": "环球片库"
  },
  {
    "id": 51,
    "title": "冒牌老爸",
    "year": "1999",
    "region": "美国",
    "genre": "喜剧家庭",
    "file": "movie-0051.html",
    "image": "./51.jpg",
    "category": "经典精选"
  },
  {
    "id": 52,
    "title": "忧罗娜传奇",
    "year": "2022",
    "region": "墨西哥 / 美国",
    "genre": "恐怖 / 奇幻",
    "file": "movie-0052.html",
    "image": "./52.jpg",
    "category": "动画冒险"
  },
  {
    "id": 53,
    "title": "当我们17岁",
    "year": "2024",
    "region": "法国",
    "genre": "青春 / 剧情 / 同性",
    "file": "movie-0053.html",
    "image": "./53.jpg",
    "category": "战争历史"
  },
  {
    "id": 54,
    "title": "上海滩国语",
    "year": "2006",
    "region": "中国内地",
    "genre": "剧情 / 爱情 / 黑帮",
    "file": "movie-0054.html",
    "image": "./54.jpg",
    "category": "经典精选"
  },
  {
    "id": 55,
    "title": "嗜血剩餐",
    "year": "2025",
    "region": "美国",
    "genre": "恐怖、科幻",
    "file": "movie-0055.html",
    "image": "./55.jpg",
    "category": "战争历史"
  },
  {
    "id": 56,
    "title": "马上双雄",
    "year": "2025",
    "region": "中国大陆",
    "genre": "动作 / 西部",
    "file": "movie-0056.html",
    "image": "./56.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 57,
    "title": "暗黑",
    "year": "2026",
    "region": "德国 / 美国",
    "genre": "科幻 / 悬疑 / 哲学",
    "file": "movie-0057.html",
    "image": "./57.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 58,
    "title": "教训",
    "year": "2024",
    "region": "英国",
    "genre": "惊悚, 剧情",
    "file": "movie-0058.html",
    "image": "./58.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 59,
    "title": "私恶公善",
    "year": "1979",
    "region": "法国",
    "genre": "剧情，伦理，政治",
    "file": "movie-0059.html",
    "image": "./59.jpg",
    "category": "战争历史"
  },
  {
    "id": 60,
    "title": "可不可以不毕业",
    "year": "2024",
    "region": "中国台湾",
    "genre": "青春，奇幻",
    "file": "movie-0060.html",
    "image": "./60.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 61,
    "title": "那些我爱过的人国语",
    "year": "2024",
    "region": "中国香港",
    "genre": "爱情, 悬疑",
    "file": "movie-0061.html",
    "image": "./61.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 62,
    "title": "六个气球",
    "year": "2018",
    "region": "美国",
    "genre": "剧情",
    "file": "movie-0062.html",
    "image": "./62.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 63,
    "title": "守诚者",
    "year": "2025",
    "region": "中国香港",
    "genre": "剧情, 犯罪",
    "file": "movie-0063.html",
    "image": "./63.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 64,
    "title": "魔翼杀手4",
    "year": "2004",
    "region": "美国",
    "genre": "奇幻 / 恐怖 / 动作",
    "file": "movie-0064.html",
    "image": "./64.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 65,
    "title": "警察故事 3：超级警察国语",
    "year": "1992",
    "region": "中国香港",
    "genre": "动作 / 警匪",
    "file": "movie-0065.html",
    "image": "./65.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 66,
    "title": "年度鸟事",
    "year": "2019",
    "region": "美国",
    "genre": "喜剧， 剧情",
    "file": "movie-0066.html",
    "image": "./66.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 67,
    "title": "情暖谊长",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 年代",
    "file": "movie-0067.html",
    "image": "./67.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 68,
    "title": "重装武器",
    "year": "2024",
    "region": "美国",
    "genre": "动作 / 科幻 / 战争",
    "file": "movie-0068.html",
    "image": "./68.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 69,
    "title": "鱼缸",
    "year": "2023",
    "region": "中国台湾",
    "genre": "剧情 / 家庭 / 心理",
    "file": "movie-0069.html",
    "image": "./69.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 70,
    "title": "迷失永远",
    "year": "2024",
    "region": "美国",
    "genre": "剧情, 悬疑, 爱情",
    "file": "movie-0070.html",
    "image": "./70.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 71,
    "title": "田教授家的二十八个亲威",
    "year": "2022",
    "region": "中国大陆",
    "genre": "家庭 / 喜剧",
    "file": "movie-0071.html",
    "image": "./71.jpg",
    "category": "动画冒险"
  },
  {
    "id": 72,
    "title": "天下第一楼",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 商战 / 年代",
    "file": "movie-0072.html",
    "image": "./72.jpg",
    "category": "动画冒险"
  },
  {
    "id": 73,
    "title": "金牌红娘",
    "year": "2014",
    "region": "中国大陆",
    "genre": "喜剧, 爱情, 古装",
    "file": "movie-0073.html",
    "image": "./73.jpg",
    "category": "经典精选"
  },
  {
    "id": 74,
    "title": "阿比盖尔2023",
    "year": "2023",
    "region": "美国",
    "genre": "恐怖",
    "file": "movie-0074.html",
    "image": "./74.jpg",
    "category": "经典精选"
  },
  {
    "id": 75,
    "title": "狗狗圣诞节",
    "year": "2018",
    "region": "美国",
    "genre": "家庭 / 喜剧 / 冒险",
    "file": "movie-0075.html",
    "image": "./75.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 76,
    "title": "神之子",
    "year": "2006",
    "region": "美国",
    "genre": "奇幻， 剧情",
    "file": "movie-0076.html",
    "image": "./76.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 77,
    "title": "有你真好",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 家庭",
    "file": "movie-0077.html",
    "image": "./77.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 78,
    "title": "梦回追凶",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑 / 奇幻 / 刑侦",
    "file": "movie-0078.html",
    "image": "./78.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 79,
    "title": "秘密结晶",
    "year": "2025",
    "region": "日本",
    "genre": "剧情、奇幻、治愈",
    "file": "movie-0079.html",
    "image": "./79.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 80,
    "title": "壹号皇庭粤语",
    "year": "2017",
    "region": "中国香港",
    "genre": "律政，剧情，悬疑",
    "file": "movie-0080.html",
    "image": "./80.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 81,
    "title": "来自红花坂",
    "year": "2011",
    "region": "日本",
    "genre": "动画, 青春",
    "file": "movie-0081.html",
    "image": "./81.jpg",
    "category": "环球片库"
  },
  {
    "id": 82,
    "title": "该隐的末裔",
    "year": "2025",
    "region": "韩国",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "file": "movie-0082.html",
    "image": "./82.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 83,
    "title": "喜剧 站前天神",
    "year": "2025",
    "region": "日本",
    "genre": "喜剧",
    "file": "movie-0083.html",
    "image": "./83.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 84,
    "title": "危险关系1988",
    "year": "2024",
    "region": "韩国",
    "genre": "剧情， 爱情， 年代",
    "file": "movie-0084.html",
    "image": "./84.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 85,
    "title": "回旋镖",
    "year": "2022",
    "region": "韩国",
    "genre": "犯罪 / 悬疑",
    "file": "movie-0085.html",
    "image": "./85.jpg",
    "category": "动画冒险"
  },
  {
    "id": 86,
    "title": "赞美年长的女人",
    "year": "2022",
    "region": "日本",
    "genre": "爱情 / 剧情",
    "file": "movie-0086.html",
    "image": "./86.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 87,
    "title": "伟大时刻",
    "year": "2025",
    "region": "美国",
    "genre": "传记、历史、体育",
    "file": "movie-0087.html",
    "image": "./87.jpg",
    "category": "动画冒险"
  },
  {
    "id": 88,
    "title": "赛马娘第二季",
    "year": "2028",
    "region": "日本",
    "genre": "运动/励志",
    "file": "movie-0088.html",
    "image": "./88.jpg",
    "category": "环球片库"
  },
  {
    "id": 89,
    "title": "黑莓",
    "year": "2023",
    "region": "加拿大",
    "genre": "传记，剧情",
    "file": "movie-0089.html",
    "image": "./89.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 90,
    "title": "无名草",
    "year": "2021",
    "region": "日本",
    "genre": "剧情 / 悬疑 / 犯罪",
    "file": "movie-0090.html",
    "image": "./90.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 91,
    "title": "在咖啡冷掉之前",
    "year": "2024",
    "region": "日本",
    "genre": "奇幻, 剧情, 治愈",
    "file": "movie-0091.html",
    "image": "./91.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 92,
    "title": "爱情私教",
    "year": "2025",
    "region": "中国大陆",
    "genre": "爱情 / 喜剧",
    "file": "movie-0092.html",
    "image": "./92.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 93,
    "title": "梦断影都",
    "year": "2019",
    "region": "美国",
    "genre": "剧情 / 悬疑",
    "file": "movie-0093.html",
    "image": "./93.jpg",
    "category": "动画冒险"
  },
  {
    "id": 94,
    "title": "套装",
    "year": "2023",
    "region": "美国",
    "genre": "剧情 / 犯罪 / 悬疑",
    "file": "movie-0094.html",
    "image": "./94.jpg",
    "category": "经典精选"
  },
  {
    "id": 95,
    "title": "战友2008",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情, 历史",
    "file": "movie-0095.html",
    "image": "./95.jpg",
    "category": "经典精选"
  },
  {
    "id": 96,
    "title": "七十二家房客第十五部粤语",
    "year": "2024",
    "region": "中国香港",
    "genre": "喜剧 / 生活",
    "file": "movie-0096.html",
    "image": "./96.jpg",
    "category": "环球片库"
  },
  {
    "id": 97,
    "title": "笑八仙",
    "year": "1993",
    "region": "中国香港",
    "genre": "奇幻喜剧",
    "file": "movie-0097.html",
    "image": "./97.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 98,
    "title": "黑森州事件",
    "year": "2009",
    "region": "德国",
    "genre": "悬疑 / 犯罪 / 剧情",
    "file": "movie-0098.html",
    "image": "./98.jpg",
    "category": "经典精选"
  },
  {
    "id": 99,
    "title": "艺术家",
    "year": "2024",
    "region": "法国 / 德国",
    "genre": "剧情 / 悬疑 / 心理",
    "file": "movie-0099.html",
    "image": "./99.jpg",
    "category": "环球片库"
  },
  {
    "id": 100,
    "title": "阴阳路粤语",
    "year": "1997",
    "region": "中国香港",
    "genre": "恐怖, 奇幻",
    "file": "movie-0100.html",
    "image": "./100.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 101,
    "title": "爱，没有明天",
    "year": "2025",
    "region": "香港",
    "genre": "剧情, 灾难, 爱情",
    "file": "movie-0101.html",
    "image": "./101.jpg",
    "category": "战争历史"
  },
  {
    "id": 102,
    "title": "槑头槑脑3",
    "year": "2021",
    "region": "中国大陆",
    "genre": "喜剧 / 都市",
    "file": "movie-0102.html",
    "image": "./102.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 103,
    "title": "有限公司",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 职场 / 黑色喜剧",
    "file": "movie-0103.html",
    "image": "./103.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 104,
    "title": "系统之皇后养成记",
    "year": "2023",
    "region": "中国大陆",
    "genre": "古装，奇幻，喜剧",
    "file": "movie-0104.html",
    "image": "./104.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 105,
    "title": "人间有味山河鲜",
    "year": "2024",
    "region": "中国大陆",
    "genre": "纪录片，美食，人文",
    "file": "movie-0105.html",
    "image": "./105.jpg",
    "category": "经典精选"
  },
  {
    "id": 106,
    "title": "超人特攻与钢铁人",
    "year": "2024",
    "region": "美国",
    "genre": "动作 / 科幻 / 动画 / 喜剧",
    "file": "movie-0106.html",
    "image": "./106.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 107,
    "title": "禁地大战",
    "year": "2025",
    "region": "中国大陆 / 香港",
    "genre": "动作, 科幻, 冒险",
    "file": "movie-0107.html",
    "image": "./107.jpg",
    "category": "战争历史"
  },
  {
    "id": 108,
    "title": "瞄准",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 刑侦",
    "file": "movie-0108.html",
    "image": "./108.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 109,
    "title": "超能一家人",
    "year": "2024",
    "region": "中国大陆",
    "genre": "喜剧 / 家庭 / 奇幻",
    "file": "movie-0109.html",
    "image": "./109.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 110,
    "title": "美国达人第十五季",
    "year": "2020",
    "region": "美国",
    "genre": "真人秀",
    "file": "movie-0110.html",
    "image": "./110.jpg",
    "category": "战争历史"
  },
  {
    "id": 111,
    "title": "圣母在上第三季",
    "year": "2024",
    "region": "日本",
    "genre": "校园/百合",
    "file": "movie-0111.html",
    "image": "./111.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 112,
    "title": "我们的花样青春",
    "year": "2023",
    "region": "中国大陆",
    "genre": "青春，剧情，成长",
    "file": "movie-0112.html",
    "image": "./112.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 113,
    "title": "坂本龙一的700天",
    "year": "2025",
    "region": "日本",
    "genre": "音乐, 传记",
    "file": "movie-0113.html",
    "image": "./113.jpg",
    "category": "经典精选"
  },
  {
    "id": 114,
    "title": "两女一男",
    "year": "2014",
    "region": "法国",
    "genre": "剧情 / 爱情 / 伦理",
    "file": "movie-0114.html",
    "image": "./114.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 115,
    "title": "每一次话别",
    "year": "2024",
    "region": "中国台湾",
    "genre": "家庭、剧情、温情",
    "file": "movie-0115.html",
    "image": "./115.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 116,
    "title": "沼泽狂鲨",
    "year": "2027",
    "region": "美国",
    "genre": "惊悚， 科幻， 灾难",
    "file": "movie-0116.html",
    "image": "./116.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 117,
    "title": "京城美食地图",
    "year": "2025",
    "region": "中国大陆",
    "genre": "纪录片 / 美食",
    "file": "movie-0117.html",
    "image": "./117.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 118,
    "title": "跳舞吧！爸爸",
    "year": "2022",
    "region": "印度",
    "genre": "剧情 / 歌舞 / 家庭",
    "file": "movie-0118.html",
    "image": "./118.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 119,
    "title": "出柜父母在偶家",
    "year": "2021",
    "region": "美国",
    "genre": "喜剧 / 家庭",
    "file": "movie-0119.html",
    "image": "./119.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 120,
    "title": "止战之殇",
    "year": "2025",
    "region": "俄罗斯",
    "genre": "战争 / 剧情",
    "file": "movie-0120.html",
    "image": "./120.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 121,
    "title": "不可战胜",
    "year": "2023",
    "region": "俄罗斯",
    "genre": "动作，体育，历史",
    "file": "movie-0121.html",
    "image": "./121.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 122,
    "title": "脱俗家庭",
    "year": "2023",
    "region": "韩国",
    "genre": "剧情 / 家庭",
    "file": "movie-0122.html",
    "image": "./122.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 123,
    "title": "葛妮斯派特洛之风情万种",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧 / 传记 / 时尚",
    "file": "movie-0123.html",
    "image": "./123.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 124,
    "title": "刀枪姊妹",
    "year": "2023",
    "region": "中国香港",
    "genre": "动作 / 犯罪 / 剧情",
    "file": "movie-0124.html",
    "image": "./124.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 125,
    "title": "最后的骑士",
    "year": "2021",
    "region": "中国大陆",
    "genre": "古装，动作",
    "file": "movie-0125.html",
    "image": "./125.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 126,
    "title": "情陷美人鱼",
    "year": "2024",
    "region": "韩国",
    "genre": "奇幻 / 爱情 / 悬疑",
    "file": "movie-0126.html",
    "image": "./126.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 127,
    "title": "千金奇缘",
    "year": "2004",
    "region": "中国台湾",
    "genre": "爱情, 喜剧",
    "file": "movie-0127.html",
    "image": "./127.jpg",
    "category": "环球片库"
  },
  {
    "id": 128,
    "title": "十七岁2019",
    "year": "2020",
    "region": "中国台湾",
    "genre": "青春 / 剧情",
    "file": "movie-0128.html",
    "image": "./128.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 129,
    "title": "悲伤草原",
    "year": "2020",
    "region": "希腊 / 法国",
    "genre": "剧情 / 历史 / 文艺",
    "file": "movie-0129.html",
    "image": "./129.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 130,
    "title": "午夜魔手",
    "year": "1992",
    "region": "中国香港",
    "genre": "恐怖, 惊悚, 犯罪",
    "file": "movie-0130.html",
    "image": "./130.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 131,
    "title": "狂热的季节",
    "year": "2023",
    "region": "日本",
    "genre": "剧情, 爱情, 青春",
    "file": "movie-0131.html",
    "image": "./131.jpg",
    "category": "经典精选"
  },
  {
    "id": 132,
    "title": "横冲直撞打江山",
    "year": "1998",
    "region": "中国香港",
    "genre": "喜剧 / 黑帮 / 动作",
    "file": "movie-0132.html",
    "image": "./132.jpg",
    "category": "经典精选"
  },
  {
    "id": 133,
    "title": "人事美魔女·椿真子",
    "year": "2024",
    "region": "日本",
    "genre": "剧情 / 喜剧 / 奇幻",
    "file": "movie-0133.html",
    "image": "./133.jpg",
    "category": "经典精选"
  },
  {
    "id": 134,
    "title": "陆小凤粤语",
    "year": "2024",
    "region": "中国香港",
    "genre": "武侠 / 悬疑 / 动作",
    "file": "movie-0134.html",
    "image": "./134.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 135,
    "title": "柏林酷儿",
    "year": "2024",
    "region": "德国",
    "genre": "爱情, 剧情",
    "file": "movie-0135.html",
    "image": "./135.jpg",
    "category": "环球片库"
  },
  {
    "id": 136,
    "title": "心灵灯塔",
    "year": "2023",
    "region": "中国台湾",
    "genre": "剧情 / 家庭",
    "file": "movie-0136.html",
    "image": "./136.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 137,
    "title": "纽约时刻",
    "year": "2004",
    "region": "美国",
    "genre": "喜剧, 家庭",
    "file": "movie-0137.html",
    "image": "./137.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 138,
    "title": "爱的守护",
    "year": "2024",
    "region": "韩国",
    "genre": "爱情、家庭、奇幻",
    "file": "movie-0138.html",
    "image": "./138.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 139,
    "title": "肥猫正传粤语",
    "year": "1997",
    "region": "中国香港",
    "genre": "剧情, 家庭",
    "file": "movie-0139.html",
    "image": "./139.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 140,
    "title": "坏血1986",
    "year": "1986",
    "region": "法国",
    "genre": "剧情/科幻/爱情",
    "file": "movie-0140.html",
    "image": "./140.jpg",
    "category": "经典精选"
  },
  {
    "id": 141,
    "title": "毬谣魔影",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑/惊悚",
    "file": "movie-0141.html",
    "image": "./141.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 142,
    "title": "281封信",
    "year": "2004",
    "region": "中国大陆",
    "genre": "剧情 / 爱情 / 悬疑",
    "file": "movie-0142.html",
    "image": "./142.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 143,
    "title": "爱在城市边境",
    "year": "2025",
    "region": "中国大陆",
    "genre": "爱情, 剧情",
    "file": "movie-0143.html",
    "image": "./143.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 144,
    "title": "苦蜜1980",
    "year": "2020",
    "region": "中国台湾",
    "genre": "剧情，历史",
    "file": "movie-0144.html",
    "image": "./144.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 145,
    "title": "快乐在一起",
    "year": "2025",
    "region": "韩国",
    "genre": "剧情, 家庭",
    "file": "movie-0145.html",
    "image": "./145.jpg",
    "category": "经典精选"
  },
  {
    "id": 146,
    "title": "温泉",
    "year": "2024",
    "region": "日本",
    "genre": "剧情 / 家庭",
    "file": "movie-0146.html",
    "image": "./146.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 147,
    "title": "鬼佬",
    "year": "2021",
    "region": "中国香港",
    "genre": "犯罪, 悬疑, 动作",
    "file": "movie-0147.html",
    "image": "./147.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 148,
    "title": "杜芭莉女士",
    "year": "2023",
    "region": "法国",
    "genre": "剧情 / 传记",
    "file": "movie-0148.html",
    "image": "./148.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 149,
    "title": "经营婚姻",
    "year": "2012",
    "region": "中国大陆",
    "genre": "家庭, 爱情",
    "file": "movie-0149.html",
    "image": "./149.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 150,
    "title": "诺亚动物诊所病历记录簿",
    "year": "2025",
    "region": "日本",
    "genre": "奇幻, 治愈, 医疗",
    "file": "movie-0150.html",
    "image": "./150.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 151,
    "title": "听到涛声",
    "year": "1993",
    "region": "日本",
    "genre": "爱情，青春，文艺",
    "file": "movie-0151.html",
    "image": "./1.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 152,
    "title": "猛鬼舞厅",
    "year": "1989",
    "region": "中国香港",
    "genre": "恐怖, 喜剧, 动作",
    "file": "movie-0152.html",
    "image": "./2.jpg",
    "category": "动画冒险"
  },
  {
    "id": 153,
    "title": "斑比遇上哥吉拉",
    "year": "2015",
    "region": "日本",
    "genre": "奇幻, 喜剧, 灾难",
    "file": "movie-0153.html",
    "image": "./3.jpg",
    "category": "环球片库"
  },
  {
    "id": 154,
    "title": "篮球少年张",
    "year": "2023",
    "region": "中国大陆",
    "genre": "运动 / 剧情 / 青春",
    "file": "movie-0154.html",
    "image": "./4.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 155,
    "title": "女神",
    "year": "1985",
    "region": "中国香港",
    "genre": "剧情 / 爱情",
    "file": "movie-0155.html",
    "image": "./5.jpg",
    "category": "战争历史"
  },
  {
    "id": 156,
    "title": "大陆酒店",
    "year": "2025",
    "region": "美国",
    "genre": "动作, 犯罪",
    "file": "movie-0156.html",
    "image": "./6.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 157,
    "title": "禁断动画23",
    "year": "2022",
    "region": "日本",
    "genre": "恐怖 / 伪纪录片",
    "file": "movie-0157.html",
    "image": "./7.jpg",
    "category": "环球片库"
  },
  {
    "id": 158,
    "title": "笨拙之极的上野",
    "year": "2023",
    "region": "日本",
    "genre": "喜剧 / 爱情",
    "file": "movie-0158.html",
    "image": "./8.jpg",
    "category": "动画冒险"
  },
  {
    "id": 159,
    "title": "情变",
    "year": "2024",
    "region": "法国",
    "genre": "剧情 / 情色 / 心理",
    "file": "movie-0159.html",
    "image": "./9.jpg",
    "category": "战争历史"
  },
  {
    "id": 160,
    "title": "一眼万年",
    "year": "2025",
    "region": "中国",
    "genre": "爱情 / 科幻",
    "file": "movie-0160.html",
    "image": "./10.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 161,
    "title": "约瑟夫 流亡人生",
    "year": "2024",
    "region": "法国 / 德国",
    "genre": "剧情 / 传记",
    "file": "movie-0161.html",
    "image": "./11.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 162,
    "title": "翩然而至",
    "year": "2021",
    "region": "法国",
    "genre": "爱情 / 奇幻",
    "file": "movie-0162.html",
    "image": "./12.jpg",
    "category": "经典精选"
  },
  {
    "id": 163,
    "title": "茜茜公主第二季",
    "year": "2023",
    "region": "奥地利 / 德国",
    "genre": "历史 / 爱情",
    "file": "movie-0163.html",
    "image": "./13.jpg",
    "category": "环球片库"
  },
  {
    "id": 164,
    "title": "再生血清计划",
    "year": "2025",
    "region": "美国",
    "genre": "科幻, 动作, 惊悚",
    "file": "movie-0164.html",
    "image": "./14.jpg",
    "category": "动画冒险"
  },
  {
    "id": 165,
    "title": "秘密同盟",
    "year": "2027",
    "region": "韩国",
    "genre": "悬疑/动作",
    "file": "movie-0165.html",
    "image": "./15.jpg",
    "category": "经典精选"
  },
  {
    "id": 166,
    "title": "易普症",
    "year": "2024",
    "region": "日本",
    "genre": "悬疑, 心理, 医疗",
    "file": "movie-0166.html",
    "image": "./16.jpg",
    "category": "环球片库"
  },
  {
    "id": 167,
    "title": "麻饶布拉区少年",
    "year": "2024",
    "region": "印度",
    "genre": "剧情 / 体育 / 社会",
    "file": "movie-0167.html",
    "image": "./17.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 168,
    "title": "我如何赢得战争",
    "year": "1967",
    "region": "英国",
    "genre": "喜剧 / 战争",
    "file": "movie-0168.html",
    "image": "./18.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 169,
    "title": "隔世缘粤语",
    "year": "2003",
    "region": "中国香港",
    "genre": "爱情, 悬疑, 奇幻",
    "file": "movie-0169.html",
    "image": "./19.jpg",
    "category": "环球片库"
  },
  {
    "id": 170,
    "title": "诱捕2",
    "year": "2024",
    "region": "韩国",
    "genre": "犯罪, 惊悚",
    "file": "movie-0170.html",
    "image": "./20.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 171,
    "title": "极地暗杀第三季",
    "year": "2025",
    "region": "英国、加拿大",
    "genre": "悬疑、惊悚、犯罪",
    "file": "movie-0171.html",
    "image": "./21.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 172,
    "title": "异世界居酒屋阿信",
    "year": "2018",
    "region": "日本",
    "genre": "奇幻 / 美食",
    "file": "movie-0172.html",
    "image": "./22.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 173,
    "title": "月落玉长河",
    "year": "2025",
    "region": "中国大陆",
    "genre": "古装, 奇幻",
    "file": "movie-0173.html",
    "image": "./23.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 174,
    "title": "未麻之部屋",
    "year": "1997",
    "region": "日本",
    "genre": "动画/惊悚/心理",
    "file": "movie-0174.html",
    "image": "./24.jpg",
    "category": "环球片库"
  },
  {
    "id": 175,
    "title": "巴亚与亚雷",
    "year": "2025",
    "region": "菲律宾",
    "genre": "剧情 / 奇幻",
    "file": "movie-0175.html",
    "image": "./25.jpg",
    "category": "经典精选"
  },
  {
    "id": 176,
    "title": "最高鸡密",
    "year": "2025",
    "region": "中国大陆",
    "genre": "喜剧，悬疑，犯罪",
    "file": "movie-0176.html",
    "image": "./26.jpg",
    "category": "动画冒险"
  },
  {
    "id": 177,
    "title": "献祭游戏",
    "year": "2025",
    "region": "西班牙",
    "genre": "惊悚 / 悬疑",
    "file": "movie-0177.html",
    "image": "./27.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 178,
    "title": "少女终末旅行",
    "year": "2023",
    "region": "日本",
    "genre": "科幻 / 冒险 / 治愈 / 百合",
    "file": "movie-0178.html",
    "image": "./28.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 179,
    "title": "男子拳击",
    "year": "2024",
    "region": "美国",
    "genre": "运动，剧情，励志",
    "file": "movie-0179.html",
    "image": "./29.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 180,
    "title": "强迫入境",
    "year": "2025",
    "region": "澳大利亚 / 英国",
    "genre": "剧情 / 惊悚 / 犯罪",
    "file": "movie-0180.html",
    "image": "./30.jpg",
    "category": "环球片库"
  },
  {
    "id": 181,
    "title": "恐怖陷阱",
    "year": "2024",
    "region": "日本",
    "genre": "恐怖，惊悚，密室",
    "file": "movie-0181.html",
    "image": "./31.jpg",
    "category": "环球片库"
  },
  {
    "id": 182,
    "title": "蚝民",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情 / 家庭 / 纪实",
    "file": "movie-0182.html",
    "image": "./32.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 183,
    "title": "欲血威尼斯",
    "year": "2025",
    "region": "意大利",
    "genre": "恐怖",
    "file": "movie-0183.html",
    "image": "./33.jpg",
    "category": "动画冒险"
  },
  {
    "id": 184,
    "title": "村路弯弯",
    "year": "2022",
    "region": "中国大陆",
    "genre": "剧情",
    "file": "movie-0184.html",
    "image": "./34.jpg",
    "category": "战争历史"
  },
  {
    "id": 185,
    "title": "唐人街探案3",
    "year": "2021",
    "region": "中国大陆",
    "genre": "喜剧 / 悬疑 / 动作",
    "file": "movie-0185.html",
    "image": "./35.jpg",
    "category": "动画冒险"
  },
  {
    "id": 186,
    "title": "死亡任务",
    "year": "2024",
    "region": "美国",
    "genre": "动作， 科幻",
    "file": "movie-0186.html",
    "image": "./36.jpg",
    "category": "经典精选"
  },
  {
    "id": 187,
    "title": "房子的故事",
    "year": "2022",
    "region": "日本",
    "genre": "剧情, 家庭",
    "file": "movie-0187.html",
    "image": "./37.jpg",
    "category": "战争历史"
  },
  {
    "id": 188,
    "title": "猎杀行动",
    "year": "2024",
    "region": "韩国",
    "genre": "动作 / 惊悚 / 悬疑",
    "file": "movie-0188.html",
    "image": "./38.jpg",
    "category": "经典精选"
  },
  {
    "id": 189,
    "title": "幸福门",
    "year": "2024",
    "region": "中国",
    "genre": "剧情 / 家庭 / 社会",
    "file": "movie-0189.html",
    "image": "./39.jpg",
    "category": "战争历史"
  },
  {
    "id": 190,
    "title": "秘术",
    "year": "2024",
    "region": "中国",
    "genre": "悬疑/惊悚",
    "file": "movie-0190.html",
    "image": "./40.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 191,
    "title": "请叫我总监",
    "year": "2022",
    "region": "中国大陆",
    "genre": "剧情，爱情，职场",
    "file": "movie-0191.html",
    "image": "./41.jpg",
    "category": "战争历史"
  },
  {
    "id": 192,
    "title": "迷汤女郎",
    "year": "2025",
    "region": "香港",
    "genre": "爱情, 悬疑",
    "file": "movie-0192.html",
    "image": "./42.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 193,
    "title": "敬子的手",
    "year": "2021",
    "region": "日本",
    "genre": "剧情, 奇幻",
    "file": "movie-0193.html",
    "image": "./43.jpg",
    "category": "经典精选"
  },
  {
    "id": 194,
    "title": "富兰克林",
    "year": "2024",
    "region": "美国 / 法国",
    "genre": "历史 / 传记 / 战争",
    "file": "movie-0194.html",
    "image": "./44.jpg",
    "category": "环球片库"
  },
  {
    "id": 195,
    "title": "失控对决",
    "year": "2024",
    "region": "美国",
    "genre": "动作 / 惊悚",
    "file": "movie-0195.html",
    "image": "./45.jpg",
    "category": "经典精选"
  },
  {
    "id": 196,
    "title": "她的兽性人生",
    "year": "2024",
    "region": "中国",
    "genre": "剧情 / 犯罪",
    "file": "movie-0196.html",
    "image": "./46.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 197,
    "title": "诗吼",
    "year": "2010",
    "region": "美国",
    "genre": "剧情, 音乐, 传记",
    "file": "movie-0197.html",
    "image": "./47.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 198,
    "title": "情杀案中案",
    "year": "2009",
    "region": "香港",
    "genre": "悬疑 / 犯罪 / 爱情",
    "file": "movie-0198.html",
    "image": "./48.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 199,
    "title": "山田孝之全纪录",
    "year": "2021",
    "region": "日本",
    "genre": "纪录片 / 传记",
    "file": "movie-0199.html",
    "image": "./49.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 200,
    "title": "注文津",
    "year": "2024",
    "region": "韩国",
    "genre": "奇幻 / 爱情",
    "file": "movie-0200.html",
    "image": "./50.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 201,
    "title": "鬼屋惊魂",
    "year": "2025",
    "region": "美国",
    "genre": "恐怖、惊悚、超自然",
    "file": "movie-0201.html",
    "image": "./51.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 202,
    "title": "换櫈仔",
    "year": "2023",
    "region": "中国香港",
    "genre": "喜剧 / 剧情",
    "file": "movie-0202.html",
    "image": "./52.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 203,
    "title": "威尔和格蕾丝第八季",
    "year": "2005",
    "region": "美国",
    "genre": "喜剧 / 爱情",
    "file": "movie-0203.html",
    "image": "./53.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 204,
    "title": "诱人小恶魔",
    "year": "2022",
    "region": "日本",
    "genre": "爱情 / 喜剧 / 奇幻",
    "file": "movie-0204.html",
    "image": "./54.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 205,
    "title": "列侬和洋子：仅限于天空",
    "year": "2023",
    "region": "英国",
    "genre": "音乐， 传记",
    "file": "movie-0205.html",
    "image": "./55.jpg",
    "category": "战争历史"
  },
  {
    "id": 206,
    "title": "咫尺天涯",
    "year": "2023",
    "region": "中国香港",
    "genre": "剧情 / 爱情",
    "file": "movie-0206.html",
    "image": "./56.jpg",
    "category": "环球片库"
  },
  {
    "id": 207,
    "title": "苦茶香",
    "year": "1992",
    "region": "中国香港",
    "genre": "剧情, 家庭, 文艺",
    "file": "movie-0207.html",
    "image": "./57.jpg",
    "category": "环球片库"
  },
  {
    "id": 208,
    "title": "宙斯之血第一季",
    "year": "2024",
    "region": "美国",
    "genre": "动作 / 奇幻 / 冒险",
    "file": "movie-0208.html",
    "image": "./58.jpg",
    "category": "动画冒险"
  },
  {
    "id": 209,
    "title": "半镜",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 恐怖",
    "file": "movie-0209.html",
    "image": "./59.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 210,
    "title": "欢迎来到谋杀镇",
    "year": "2025",
    "region": "美国",
    "genre": "悬疑, 黑色喜剧",
    "file": "movie-0210.html",
    "image": "./60.jpg",
    "category": "战争历史"
  },
  {
    "id": 211,
    "title": "德州巡行者",
    "year": "2025",
    "region": "中国大陆",
    "genre": "犯罪 / 西部 / 悬疑",
    "file": "movie-0211.html",
    "image": "./61.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 212,
    "title": "火烧大阪城",
    "year": "2027",
    "region": "日本",
    "genre": "历史, 战争",
    "file": "movie-0212.html",
    "image": "./62.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 213,
    "title": "牢笼之热",
    "year": "2024",
    "region": "拉丁美洲",
    "genre": "犯罪 / 剧情 / 惊悚",
    "file": "movie-0213.html",
    "image": "./63.jpg",
    "category": "经典精选"
  },
  {
    "id": 214,
    "title": "日式面包王",
    "year": "2024",
    "region": "日本",
    "genre": "喜剧, 奇幻, 美食",
    "file": "movie-0214.html",
    "image": "./64.jpg",
    "category": "战争历史"
  },
  {
    "id": 215,
    "title": "够姜师姐之终极答案",
    "year": "2001",
    "region": "中国香港",
    "genre": "动作，喜剧，犯罪",
    "file": "movie-0215.html",
    "image": "./65.jpg",
    "category": "环球片库"
  },
  {
    "id": 216,
    "title": "狐狸之声国语",
    "year": "2025",
    "region": "中国大陆",
    "genre": "音乐 / 奇幻",
    "file": "movie-0216.html",
    "image": "./66.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 217,
    "title": "战国英豪",
    "year": "2026",
    "region": "日本",
    "genre": "历史，动作，冒险",
    "file": "movie-0217.html",
    "image": "./67.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 218,
    "title": "青空夏季篇 后篇：天地",
    "year": "2009",
    "region": "日本",
    "genre": "动画，青春，奇幻，治愈",
    "file": "movie-0218.html",
    "image": "./68.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 219,
    "title": "西游之双圣战神",
    "year": "2025",
    "region": "中国大陆",
    "genre": "动作，奇幻，古装",
    "file": "movie-0219.html",
    "image": "./69.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 220,
    "title": "少女上了瘾",
    "year": "2014",
    "region": "韩国",
    "genre": "惊悚 / 悬疑",
    "file": "movie-0220.html",
    "image": "./70.jpg",
    "category": "环球片库"
  },
  {
    "id": 221,
    "title": "分租",
    "year": "2026",
    "region": "中国大陆",
    "genre": "剧情、喜剧、社会",
    "file": "movie-0221.html",
    "image": "./71.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 222,
    "title": "吓破胆",
    "year": "2025",
    "region": "美国",
    "genre": "恐怖",
    "file": "movie-0222.html",
    "image": "./72.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 223,
    "title": "恩斯特高尔：双城映照",
    "year": "2025",
    "region": "德国",
    "genre": "传记, 剧情, 历史",
    "file": "movie-0223.html",
    "image": "./73.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 224,
    "title": "罗蕾莱",
    "year": "2025",
    "region": "德国",
    "genre": "剧情 / 奇幻 / 爱情",
    "file": "movie-0224.html",
    "image": "./74.jpg",
    "category": "经典精选"
  },
  {
    "id": 225,
    "title": "明天的少年",
    "year": "2023",
    "region": "中国大陆",
    "genre": "青春 / 运动",
    "file": "movie-0225.html",
    "image": "./75.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 226,
    "title": "费德拉",
    "year": "2026",
    "region": "法国 / 希腊",
    "genre": "剧情 / 爱情 / 历史",
    "file": "movie-0226.html",
    "image": "./76.jpg",
    "category": "战争历史"
  },
  {
    "id": 227,
    "title": "德尔苏·乌扎拉",
    "year": "2026",
    "region": "俄罗斯/中国",
    "genre": "剧情/冒险",
    "file": "movie-0227.html",
    "image": "./77.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 228,
    "title": "黑暗处",
    "year": "2019",
    "region": "英国",
    "genre": "悬疑, 剧情, 心理",
    "file": "movie-0228.html",
    "image": "./78.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 229,
    "title": "小王子公主心",
    "year": "2024",
    "region": "法国 / 德国",
    "genre": "奇幻 / 家庭 / LGBT",
    "file": "movie-0229.html",
    "image": "./79.jpg",
    "category": "动画冒险"
  },
  {
    "id": 230,
    "title": "终曲",
    "year": "2024",
    "region": "意大利",
    "genre": "剧情、音乐、家庭",
    "file": "movie-0230.html",
    "image": "./80.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 231,
    "title": "欢迎光临哈特曼一家",
    "year": "2020",
    "region": "德国",
    "genre": "剧情 / 家庭 / 喜剧",
    "file": "movie-0231.html",
    "image": "./81.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 232,
    "title": "勇闯禁地",
    "year": "2024",
    "region": "美国",
    "genre": "动作, 冒险",
    "file": "movie-0232.html",
    "image": "./82.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 233,
    "title": "棋盘斩",
    "year": "2025",
    "region": "日本",
    "genre": "动作, 剧情, 武士",
    "file": "movie-0233.html",
    "image": "./83.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 234,
    "title": "爱与背叛",
    "year": "2021",
    "region": "法国",
    "genre": "剧情 / 爱情 / 惊悚",
    "file": "movie-0234.html",
    "image": "./84.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 235,
    "title": "不留痕迹2018",
    "year": "2018",
    "region": "法国",
    "genre": "犯罪 / 悬疑",
    "file": "movie-0235.html",
    "image": "./85.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 236,
    "title": "如何嫁给百万富翁",
    "year": "2024",
    "region": "韩国",
    "genre": "浪漫 / 喜剧",
    "file": "movie-0236.html",
    "image": "./86.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 237,
    "title": "前任酒吧战！",
    "year": "2020",
    "region": "韩国",
    "genre": "喜剧，爱情",
    "file": "movie-0237.html",
    "image": "./87.jpg",
    "category": "战争历史"
  },
  {
    "id": 238,
    "title": "辛巴达：飞天公主与神秘岛",
    "year": "2024",
    "region": "日本",
    "genre": "冒险, 奇幻",
    "file": "movie-0238.html",
    "image": "./88.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 239,
    "title": "艳曲迷魂",
    "year": "1964",
    "region": "中国香港",
    "genre": "歌舞 / 悬疑 / 爱情",
    "file": "movie-0239.html",
    "image": "./89.jpg",
    "category": "战争历史"
  },
  {
    "id": 240,
    "title": "三傻大闹托莱坞",
    "year": "2025",
    "region": "印度",
    "genre": "喜剧 / 歌舞 / 动作",
    "file": "movie-0240.html",
    "image": "./90.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 241,
    "title": "机智的捕快日常",
    "year": "2022",
    "region": "中国大陆",
    "genre": "喜剧, 古装, 悬疑",
    "file": "movie-0241.html",
    "image": "./91.jpg",
    "category": "经典精选"
  },
  {
    "id": 242,
    "title": "灵书妙探第三季",
    "year": "2011",
    "region": "美国",
    "genre": "犯罪/喜剧/悬疑",
    "file": "movie-0242.html",
    "image": "./92.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 243,
    "title": "蛊惑仔与大滚王",
    "year": "1992",
    "region": "中国台湾",
    "genre": "喜剧 / 动作 / 犯罪",
    "file": "movie-0243.html",
    "image": "./93.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 244,
    "title": "超人与蝙蝠侠：全民公敌",
    "year": "2009",
    "region": "美国",
    "genre": "动画，动作，科幻",
    "file": "movie-0244.html",
    "image": "./94.jpg",
    "category": "经典精选"
  },
  {
    "id": 245,
    "title": "滴血玫瑰",
    "year": "2023",
    "region": "中国大陆",
    "genre": "悬疑 / 爱情 / 民国",
    "file": "movie-0245.html",
    "image": "./95.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 246,
    "title": "霹雳神捕",
    "year": "1984",
    "region": "中国香港",
    "genre": "武侠, 动作, 悬疑",
    "file": "movie-0246.html",
    "image": "./96.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 247,
    "title": "我是处女座2023",
    "year": "2023",
    "region": "中国内地",
    "genre": "爱情 / 喜剧",
    "file": "movie-0247.html",
    "image": "./97.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 248,
    "title": "同学会",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑, 剧情",
    "file": "movie-0248.html",
    "image": "./98.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 249,
    "title": "逃学威龙2",
    "year": "2025",
    "region": "中国香港",
    "genre": "喜剧, 动作, 校园",
    "file": "movie-0249.html",
    "image": "./99.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 250,
    "title": "华氏911",
    "year": "2004",
    "region": "美国",
    "genre": "纪录 / 政治",
    "file": "movie-0250.html",
    "image": "./100.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 251,
    "title": "大人物",
    "year": "2023",
    "region": "中国大陆",
    "genre": "古装 / 权谋 / 喜剧",
    "file": "movie-0251.html",
    "image": "./101.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 252,
    "title": "马路骑士",
    "year": "1989",
    "region": "中国香港",
    "genre": "动作 / 爱情",
    "file": "movie-0252.html",
    "image": "./102.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 253,
    "title": "星辰彼岸",
    "year": "2027",
    "region": "中国大陆",
    "genre": "科幻 / 冒险",
    "file": "movie-0253.html",
    "image": "./103.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 254,
    "title": "银河守护队2",
    "year": "2017",
    "region": "美国",
    "genre": "科幻, 动作",
    "file": "movie-0254.html",
    "image": "./104.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 255,
    "title": "走西口",
    "year": "2024",
    "region": "中国大陆",
    "genre": "历史 / 商战 / 爱情",
    "file": "movie-0255.html",
    "image": "./105.jpg",
    "category": "经典精选"
  },
  {
    "id": 256,
    "title": "永不回头",
    "year": "2026",
    "region": "中国大陆",
    "genre": "剧情 / 犯罪",
    "file": "movie-0256.html",
    "image": "./106.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 257,
    "title": "圣剑屠魔2",
    "year": "1991",
    "region": "中国香港",
    "genre": "动作 / 奇幻 / 武侠",
    "file": "movie-0257.html",
    "image": "./107.jpg",
    "category": "环球片库"
  },
  {
    "id": 258,
    "title": "石油城大阴谋",
    "year": "2024",
    "region": "美国",
    "genre": "剧情, 惊悚, 悬疑",
    "file": "movie-0258.html",
    "image": "./108.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 259,
    "title": "清明",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑, 惊悚",
    "file": "movie-0259.html",
    "image": "./109.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 260,
    "title": "阳台上的派对",
    "year": "2024",
    "region": "西班牙",
    "genre": "喜剧",
    "file": "movie-0260.html",
    "image": "./110.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 261,
    "title": "金枝欲孽2粤语",
    "year": "2013",
    "region": "中国香港",
    "genre": "剧情 / 古装 / 宫斗",
    "file": "movie-0261.html",
    "image": "./111.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 262,
    "title": "安提戈涅",
    "year": "2025",
    "region": "法国",
    "genre": "剧情 / 犯罪",
    "file": "movie-0262.html",
    "image": "./112.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 263,
    "title": "逆流色彩",
    "year": "2025",
    "region": "法国",
    "genre": "剧情 / 奇幻",
    "file": "movie-0263.html",
    "image": "./113.jpg",
    "category": "动画冒险"
  },
  {
    "id": 264,
    "title": "灰烬之人",
    "year": "2024",
    "region": "法国",
    "genre": "奇幻，剧情",
    "file": "movie-0264.html",
    "image": "./114.jpg",
    "category": "环球片库"
  },
  {
    "id": 265,
    "title": "圣诞佳丽",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧 / 爱情",
    "file": "movie-0265.html",
    "image": "./115.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 266,
    "title": "怪兽大战争",
    "year": "2024",
    "region": "日本",
    "genre": "特摄动作",
    "file": "movie-0266.html",
    "image": "./116.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 267,
    "title": "新僵尸先生2",
    "year": "2025",
    "region": "中国香港",
    "genre": "恐怖, 喜剧",
    "file": "movie-0267.html",
    "image": "./117.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 268,
    "title": "普立兹记者",
    "year": "2019",
    "region": "美国",
    "genre": "传记 / 剧情",
    "file": "movie-0268.html",
    "image": "./118.jpg",
    "category": "环球片库"
  },
  {
    "id": 269,
    "title": "白宫也失眠",
    "year": "2022",
    "region": "美国",
    "genre": "喜剧，政治，职场",
    "file": "movie-0269.html",
    "image": "./119.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 270,
    "title": "小马宝莉：那部电影",
    "year": "2017",
    "region": "美国",
    "genre": "动画奇幻",
    "file": "movie-0270.html",
    "image": "./120.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 271,
    "title": "真假学园2",
    "year": "2011",
    "region": "日本",
    "genre": "动作 / 校园",
    "file": "movie-0271.html",
    "image": "./121.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 272,
    "title": "职场心计文学梦",
    "year": "2020",
    "region": "美国",
    "genre": "剧情, 喜剧",
    "file": "movie-0272.html",
    "image": "./122.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 273,
    "title": "玩转全家福",
    "year": "2019",
    "region": "马来西亚",
    "genre": "喜剧, 家庭",
    "file": "movie-0273.html",
    "image": "./123.jpg",
    "category": "环球片库"
  },
  {
    "id": 274,
    "title": "闪电侠第三季",
    "year": "2018",
    "region": "美国",
    "genre": "动作、科幻、超级英雄",
    "file": "movie-0274.html",
    "image": "./124.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 275,
    "title": "你好对方辩友2",
    "year": "2025",
    "region": "中国大陆",
    "genre": "青春 / 校园 / 律政",
    "file": "movie-0275.html",
    "image": "./125.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 276,
    "title": "伊娃这样的女人",
    "year": "2025",
    "region": "法国",
    "genre": "剧情, 女性",
    "file": "movie-0276.html",
    "image": "./126.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 277,
    "title": "恐怖猴玩偶",
    "year": "2017",
    "region": "泰国",
    "genre": "恐怖 / 灵异",
    "file": "movie-0277.html",
    "image": "./127.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 278,
    "title": "母鹿",
    "year": "2022",
    "region": "法国",
    "genre": "剧情, 惊悚, 悬疑",
    "file": "movie-0278.html",
    "image": "./128.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 279,
    "title": "死亡笔记本：决战新世界",
    "year": "2016",
    "region": "日本",
    "genre": "悬疑，奇幻，犯罪",
    "file": "movie-0279.html",
    "image": "./129.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 280,
    "title": "前无古人 动态漫",
    "year": "2024",
    "region": "中国大陆",
    "genre": "古风, 武侠, 搞笑",
    "file": "movie-0280.html",
    "image": "./130.jpg",
    "category": "经典精选"
  },
  {
    "id": 281,
    "title": "乡村青年",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情/喜剧/励志",
    "file": "movie-0281.html",
    "image": "./131.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 282,
    "title": "春色在邻家",
    "year": "2020",
    "region": "日本",
    "genre": "剧情， 爱情， 生活",
    "file": "movie-0282.html",
    "image": "./132.jpg",
    "category": "经典精选"
  },
  {
    "id": 283,
    "title": "狼少年",
    "year": "2012",
    "region": "韩国",
    "genre": "爱情 / 奇幻",
    "file": "movie-0283.html",
    "image": "./133.jpg",
    "category": "战争历史"
  },
  {
    "id": 284,
    "title": "江湖儿女",
    "year": "2026",
    "region": "中国大陆",
    "genre": "犯罪, 剧情, 年代",
    "file": "movie-0284.html",
    "image": "./134.jpg",
    "category": "经典精选"
  },
  {
    "id": 285,
    "title": "洗冤录2国语",
    "year": "2024",
    "region": "中国香港",
    "genre": "悬疑 / 古装 / 法医",
    "file": "movie-0285.html",
    "image": "./135.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 286,
    "title": "优越的一天",
    "year": "2022",
    "region": "韩国",
    "genre": "惊悚, 犯罪",
    "file": "movie-0286.html",
    "image": "./136.jpg",
    "category": "环球片库"
  },
  {
    "id": 287,
    "title": "西西里著名的熊入侵事件",
    "year": "2019",
    "region": "意大利/法国",
    "genre": "动画/奇幻",
    "file": "movie-0287.html",
    "image": "./137.jpg",
    "category": "环球片库"
  },
  {
    "id": 288,
    "title": "内裤队长吓鬼记",
    "year": "2026",
    "region": "中国",
    "genre": "喜剧 / 恐怖 / 奇幻",
    "file": "movie-0288.html",
    "image": "./138.jpg",
    "category": "动画冒险"
  },
  {
    "id": 289,
    "title": "晚娘粤语",
    "year": "2024",
    "region": "中国香港",
    "genre": "剧情, 家庭",
    "file": "movie-0289.html",
    "image": "./139.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 290,
    "title": "永不独行",
    "year": "2024",
    "region": "中国大陆",
    "genre": "运动，励志，剧情",
    "file": "movie-0290.html",
    "image": "./140.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 291,
    "title": "鬼马飞人",
    "year": "1985",
    "region": "香港",
    "genre": "喜剧, 奇幻, 动作",
    "file": "movie-0291.html",
    "image": "./141.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 292,
    "title": "他们克隆了蒂龙",
    "year": "2023",
    "region": "美国",
    "genre": "科幻，悬疑",
    "file": "movie-0292.html",
    "image": "./142.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 293,
    "title": "你是骗子我是贼",
    "year": "1987",
    "region": "中国台湾",
    "genre": "喜剧, 犯罪",
    "file": "movie-0293.html",
    "image": "./143.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 294,
    "title": "白昼之雨",
    "year": "2024",
    "region": "日本",
    "genre": "悬疑 / 犯罪",
    "file": "movie-0294.html",
    "image": "./144.jpg",
    "category": "环球片库"
  },
  {
    "id": 295,
    "title": "白银和梦想之书",
    "year": "2025",
    "region": "英国",
    "genre": "奇幻/冒险",
    "file": "movie-0295.html",
    "image": "./145.jpg",
    "category": "战争历史"
  },
  {
    "id": 296,
    "title": "再见语言",
    "year": "2014",
    "region": "法国 / 瑞士",
    "genre": "剧情 / 实验",
    "file": "movie-0296.html",
    "image": "./146.jpg",
    "category": "动画冒险"
  },
  {
    "id": 297,
    "title": "神剑恩仇",
    "year": "2024",
    "region": "中国",
    "genre": "武侠，古装",
    "file": "movie-0297.html",
    "image": "./147.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 298,
    "title": "我，克罗蒂亚",
    "year": "1978",
    "region": "法国 / 意大利",
    "genre": "剧情、传记、情色",
    "file": "movie-0298.html",
    "image": "./148.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 299,
    "title": "拥抱法力",
    "year": "2023",
    "region": "中国香港",
    "genre": "奇幻剧情",
    "file": "movie-0299.html",
    "image": "./149.jpg",
    "category": "经典精选"
  },
  {
    "id": 300,
    "title": "美女公寓",
    "year": "2025",
    "region": "日本",
    "genre": "喜剧, 爱情",
    "file": "movie-0300.html",
    "image": "./150.jpg",
    "category": "战争历史"
  },
  {
    "id": 301,
    "title": "少年同盟第二季",
    "year": "2024",
    "region": "日本",
    "genre": "动画 / 青春 / 日常",
    "file": "movie-0301.html",
    "image": "./1.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 302,
    "title": "麦里斯德与黑宝马",
    "year": "2025",
    "region": "美国",
    "genre": "奇幻冒险",
    "file": "movie-0302.html",
    "image": "./2.jpg",
    "category": "经典精选"
  },
  {
    "id": 303,
    "title": "她的一生",
    "year": "2023",
    "region": "日本",
    "genre": "家庭 / 年代",
    "file": "movie-0303.html",
    "image": "./3.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 304,
    "title": "木浦黑帮天堂",
    "year": "2004",
    "region": "韩国",
    "genre": "动作, 犯罪",
    "file": "movie-0304.html",
    "image": "./4.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 305,
    "title": "十兄弟粤语",
    "year": "2023",
    "region": "中国香港",
    "genre": "喜剧，奇幻，家庭",
    "file": "movie-0305.html",
    "image": "./5.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 306,
    "title": "数码宝贝大冒险（剧场版）",
    "year": "2024",
    "region": "日本",
    "genre": "冒险, 奇幻, 动作",
    "file": "movie-0306.html",
    "image": "./6.jpg",
    "category": "战争历史"
  },
  {
    "id": 307,
    "title": "命运石之门0",
    "year": "2018",
    "region": "日本",
    "genre": "科幻, 悬疑, 剧情",
    "file": "movie-0307.html",
    "image": "./7.jpg",
    "category": "经典精选"
  },
  {
    "id": 308,
    "title": "绝命时钟2:22",
    "year": "2023",
    "region": "美国",
    "genre": "惊悚，悬疑",
    "file": "movie-0308.html",
    "image": "./8.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 309,
    "title": "特警霸王花",
    "year": "2026",
    "region": "中国香港",
    "genre": "动作/犯罪",
    "file": "movie-0309.html",
    "image": "./9.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 310,
    "title": "胜者为王国语",
    "year": "2025",
    "region": "中国香港",
    "genre": "剧情 / 动作 / 武侠",
    "file": "movie-0310.html",
    "image": "./10.jpg",
    "category": "环球片库"
  },
  {
    "id": 311,
    "title": "不能犯规的游戏2021",
    "year": "2021",
    "region": "中国大陆",
    "genre": "悬疑 / 惊悚",
    "file": "movie-0311.html",
    "image": "./11.jpg",
    "category": "环球片库"
  },
  {
    "id": 312,
    "title": "吞噬",
    "year": "2025",
    "region": "韩国",
    "genre": "科幻 / 灾难",
    "file": "movie-0312.html",
    "image": "./12.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 313,
    "title": "贝塔尼亚的回归",
    "year": "2023",
    "region": "巴西",
    "genre": "剧情, 奇幻",
    "file": "movie-0313.html",
    "image": "./13.jpg",
    "category": "战争历史"
  },
  {
    "id": 314,
    "title": "决战死亡线",
    "year": "2007",
    "region": "美国",
    "genre": "动作, 惊悚, 战争",
    "file": "movie-0314.html",
    "image": "./14.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 315,
    "title": "形单影只",
    "year": "2024",
    "region": "英国",
    "genre": "剧情 / 心理",
    "file": "movie-0315.html",
    "image": "./15.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 316,
    "title": "真情告白1937",
    "year": "2025",
    "region": "中国大陆",
    "genre": "爱情, 历史",
    "file": "movie-0316.html",
    "image": "./16.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 317,
    "title": "晴梦高中",
    "year": "2024",
    "region": "中国",
    "genre": "悬疑、奇幻、校园",
    "file": "movie-0317.html",
    "image": "./17.jpg",
    "category": "经典精选"
  },
  {
    "id": 318,
    "title": "朤月东方—中秋奇妙夜",
    "year": "2024",
    "region": "中国大陆",
    "genre": "歌舞 / 文化 / 奇幻",
    "file": "movie-0318.html",
    "image": "./18.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 319,
    "title": "我们的成长日记第二季",
    "year": "2025",
    "region": "中国大陆",
    "genre": "青春",
    "file": "movie-0319.html",
    "image": "./19.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 320,
    "title": "时差五小时",
    "year": "2025",
    "region": "美国",
    "genre": "爱情, 喜剧",
    "file": "movie-0320.html",
    "image": "./20.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 321,
    "title": "三毛流浪记",
    "year": "2018",
    "region": "中国大陆",
    "genre": "剧情, 喜剧",
    "file": "movie-0321.html",
    "image": "./21.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 322,
    "title": "七个小偷",
    "year": "1992",
    "region": "印度",
    "genre": "犯罪/喜剧/剧情",
    "file": "movie-0322.html",
    "image": "./22.jpg",
    "category": "经典精选"
  },
  {
    "id": 323,
    "title": "偷生活的人",
    "year": "2024",
    "region": "法国 / 意大利",
    "genre": "剧情 / 喜剧",
    "file": "movie-0323.html",
    "image": "./23.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 324,
    "title": "巨蟒与圣杯",
    "year": "1975",
    "region": "英国",
    "genre": "喜剧 / 奇幻 / 冒险",
    "file": "movie-0324.html",
    "image": "./24.jpg",
    "category": "战争历史"
  },
  {
    "id": 325,
    "title": "鬼勾魂",
    "year": "1997",
    "region": "香港",
    "genre": "恐怖, 鬼怪",
    "file": "movie-0325.html",
    "image": "./25.jpg",
    "category": "经典精选"
  },
  {
    "id": 326,
    "title": "凶铃刺客",
    "year": "1998",
    "region": "日本",
    "genre": "悬疑 / 犯罪",
    "file": "movie-0326.html",
    "image": "./26.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 327,
    "title": "一号自由勇士",
    "year": "2024",
    "region": "中国大陆",
    "genre": "年代谍战",
    "file": "movie-0327.html",
    "image": "./27.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 328,
    "title": "想踢沉迷男的女人",
    "year": "2023",
    "region": "日本",
    "genre": "喜剧 / 爱情 / 职场",
    "file": "movie-0328.html",
    "image": "./28.jpg",
    "category": "动画冒险"
  },
  {
    "id": 329,
    "title": "超级马里奥兄弟",
    "year": "2023",
    "region": "美国 / 日本",
    "genre": "喜剧 / 奇幻 / 冒险",
    "file": "movie-0329.html",
    "image": "./29.jpg",
    "category": "动画冒险"
  },
  {
    "id": 330,
    "title": "刀见笑",
    "year": "2011",
    "region": "中国大陆",
    "genre": "武侠， 喜剧， 悬疑",
    "file": "movie-0330.html",
    "image": "./30.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 331,
    "title": "春梦 春梦",
    "year": "2000",
    "region": "中国香港",
    "genre": "剧情， 情色， 文艺",
    "file": "movie-0331.html",
    "image": "./31.jpg",
    "category": "经典精选"
  },
  {
    "id": 332,
    "title": "暴雪二夜情",
    "year": "2024",
    "region": "日本",
    "genre": "爱情，灾难，剧情",
    "file": "movie-0332.html",
    "image": "./32.jpg",
    "category": "经典精选"
  },
  {
    "id": 333,
    "title": "夏日恋神马",
    "year": "2023",
    "region": "中国台湾",
    "genre": "青春 / 爱情 / 奇幻",
    "file": "movie-0333.html",
    "image": "./33.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 334,
    "title": "爱情领域2",
    "year": "2021",
    "region": "韩国",
    "genre": "爱情 / 奇幻 / 职场",
    "file": "movie-0334.html",
    "image": "./34.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 335,
    "title": "另一个美丽妻子",
    "year": "2019",
    "region": "韩国",
    "genre": "悬疑, 惊悚, 剧情",
    "file": "movie-0335.html",
    "image": "./35.jpg",
    "category": "环球片库"
  },
  {
    "id": 336,
    "title": "当西红柿遇见瓦格纳",
    "year": "2025",
    "region": "德国",
    "genre": "爱情, 音乐",
    "file": "movie-0336.html",
    "image": "./36.jpg",
    "category": "战争历史"
  },
  {
    "id": 337,
    "title": "沉默的狂魔",
    "year": "2025",
    "region": "美国",
    "genre": "惊悚 / 犯罪",
    "file": "movie-0337.html",
    "image": "./37.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 338,
    "title": "美国派：兄弟会",
    "year": "2023",
    "region": "美国",
    "genre": "喜剧 / 青春",
    "file": "movie-0338.html",
    "image": "./38.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 339,
    "title": "巨星汤美",
    "year": "1995",
    "region": "香港",
    "genre": "剧情",
    "file": "movie-0339.html",
    "image": "./39.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 340,
    "title": "洋葱乱报",
    "year": "2024",
    "region": "中国大陆",
    "genre": "喜剧, 职场, 剧情",
    "file": "movie-0340.html",
    "image": "./40.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 341,
    "title": "萝蕾莱",
    "year": "2026",
    "region": "德国",
    "genre": "奇幻， 剧情， 爱情",
    "file": "movie-0341.html",
    "image": "./41.jpg",
    "category": "环球片库"
  },
  {
    "id": 342,
    "title": "死蠢斗一番 2.5",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧, 动作",
    "file": "movie-0342.html",
    "image": "./42.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 343,
    "title": "沙罗双树",
    "year": "2007",
    "region": "日本",
    "genre": "剧情 / 家庭",
    "file": "movie-0343.html",
    "image": "./43.jpg",
    "category": "动画冒险"
  },
  {
    "id": 344,
    "title": "双面拉菲尔",
    "year": "2022",
    "region": "西班牙",
    "genre": "悬疑，惊悚，人格分裂",
    "file": "movie-0344.html",
    "image": "./44.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 345,
    "title": "风的秘密",
    "year": "2023",
    "region": "法国",
    "genre": "剧情, 奇幻",
    "file": "movie-0345.html",
    "image": "./45.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 346,
    "title": "七夜客栈",
    "year": "2024",
    "region": "中国台湾",
    "genre": "悬疑, 奇幻, 惊悚",
    "file": "movie-0346.html",
    "image": "./46.jpg",
    "category": "经典精选"
  },
  {
    "id": 347,
    "title": "五号机要员",
    "year": "1984",
    "region": "中国大陆",
    "genre": "剧情/悬疑/谍战",
    "file": "movie-0347.html",
    "image": "./47.jpg",
    "category": "经典精选"
  },
  {
    "id": 348,
    "title": "黄飞鸿之五：龙城歼霸",
    "year": "2025",
    "region": "香港",
    "genre": "动作 / 武侠 / 历史",
    "file": "movie-0348.html",
    "image": "./48.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 349,
    "title": "红颜往事",
    "year": "2002",
    "region": "中国大陆",
    "genre": "剧情 / 爱情",
    "file": "movie-0349.html",
    "image": "./49.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 350,
    "title": "轮廓中的真相",
    "year": "2024",
    "region": "英国",
    "genre": "悬疑 / 犯罪",
    "file": "movie-0350.html",
    "image": "./50.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 351,
    "title": "无仁义之战 完结篇",
    "year": "1974",
    "region": "日本",
    "genre": "犯罪 / 剧情",
    "file": "movie-0351.html",
    "image": "./51.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 352,
    "title": "强捕犯",
    "year": "2025",
    "region": "英国",
    "genre": "犯罪 / 惊悚",
    "file": "movie-0352.html",
    "image": "./52.jpg",
    "category": "动画冒险"
  },
  {
    "id": 353,
    "title": "假如美国不存在",
    "year": "2023",
    "region": "美国",
    "genre": "科幻 / 剧情 / 政治讽刺",
    "file": "movie-0353.html",
    "image": "./53.jpg",
    "category": "战争历史"
  },
  {
    "id": 354,
    "title": "霹雳勇士之元气勇者",
    "year": "2024",
    "region": "中国大陆",
    "genre": "热血 / 战斗 / 机甲 / 少年",
    "file": "movie-0354.html",
    "image": "./54.jpg",
    "category": "战争历史"
  },
  {
    "id": 355,
    "title": "日夜男女",
    "year": "2025",
    "region": "中国大陆",
    "genre": "爱情 / 奇幻 / 悬疑",
    "file": "movie-0355.html",
    "image": "./55.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 356,
    "title": "暴走财神6",
    "year": "2025",
    "region": "中国",
    "genre": "喜剧 / 奇幻",
    "file": "movie-0356.html",
    "image": "./56.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 357,
    "title": "沙普的军团",
    "year": "1996",
    "region": "英国",
    "genre": "战争 / 历史 / 冒险",
    "file": "movie-0357.html",
    "image": "./57.jpg",
    "category": "战争历史"
  },
  {
    "id": 358,
    "title": "鬼追人5",
    "year": "2027",
    "region": "美国",
    "genre": "恐怖 / 奇幻",
    "file": "movie-0358.html",
    "image": "./58.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 359,
    "title": "乱丝情网",
    "year": "2023",
    "region": "中国香港",
    "genre": "剧情 / 爱情 / 悬疑",
    "file": "movie-0359.html",
    "image": "./59.jpg",
    "category": "经典精选"
  },
  {
    "id": 360,
    "title": "情欲叛侣2",
    "year": "2015",
    "region": "日本",
    "genre": "剧情 / 情色",
    "file": "movie-0360.html",
    "image": "./60.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 361,
    "title": "疯狂夏令营之人小鬼大",
    "year": "2023",
    "region": "美国",
    "genre": "喜剧, 家庭",
    "file": "movie-0361.html",
    "image": "./61.jpg",
    "category": "战争历史"
  },
  {
    "id": 362,
    "title": "地球：奇迹的一天",
    "year": "2026",
    "region": "英国",
    "genre": "纪录片， 自然",
    "file": "movie-0362.html",
    "image": "./62.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 363,
    "title": "我的幸福结局",
    "year": "2023",
    "region": "韩国",
    "genre": "悬疑爱情",
    "file": "movie-0363.html",
    "image": "./63.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 364,
    "title": "爸爸回来了第二季",
    "year": "2024",
    "region": "中国大陆",
    "genre": "家庭、喜剧、奇幻",
    "file": "movie-0364.html",
    "image": "./64.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 365,
    "title": "二十",
    "year": "2025",
    "region": "韩国",
    "genre": "剧情/青春",
    "file": "movie-0365.html",
    "image": "./65.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 366,
    "title": "我的麻烦邻居",
    "year": "2024",
    "region": "中国香港",
    "genre": "喜剧, 爱情",
    "file": "movie-0366.html",
    "image": "./66.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 367,
    "title": "切·格瓦拉传下部游击队",
    "year": "2008",
    "region": "美国 / 西班牙",
    "genre": "传记 / 历史 / 战争",
    "file": "movie-0367.html",
    "image": "./67.jpg",
    "category": "环球片库"
  },
  {
    "id": 368,
    "title": "骚狐狸",
    "year": "2023",
    "region": "法国 / 比利时",
    "genre": "剧情 / 女性",
    "file": "movie-0368.html",
    "image": "./68.jpg",
    "category": "经典精选"
  },
  {
    "id": 369,
    "title": "超棒的我们",
    "year": "2024",
    "region": "中国大陆",
    "genre": "真人秀, 青春, 竞技",
    "file": "movie-0369.html",
    "image": "./69.jpg",
    "category": "环球片库"
  },
  {
    "id": 370,
    "title": "缄默的迷宫",
    "year": "2024",
    "region": "法国",
    "genre": "悬疑, 惊悚, 奇幻",
    "file": "movie-0370.html",
    "image": "./70.jpg",
    "category": "战争历史"
  },
  {
    "id": 371,
    "title": "埃利希博士的神奇的子弹",
    "year": "2022",
    "region": "德国",
    "genre": "剧情 / 历史 / 惊悚",
    "file": "movie-0371.html",
    "image": "./71.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 372,
    "title": "性命出售",
    "year": "2017",
    "region": "日本",
    "genre": "悬疑 / 剧情 / 黑色幽默",
    "file": "movie-0372.html",
    "image": "./72.jpg",
    "category": "环球片库"
  },
  {
    "id": 373,
    "title": "咖啡鲜肉",
    "year": "2024",
    "region": "中国大陆",
    "genre": "都市情感，职场",
    "file": "movie-0373.html",
    "image": "./73.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 374,
    "title": "罗西与莫妮卡之骊靬情",
    "year": "2023",
    "region": "中国大陆 / 意大利",
    "genre": "爱情 / 历史",
    "file": "movie-0374.html",
    "image": "./74.jpg",
    "category": "环球片库"
  },
  {
    "id": 375,
    "title": "浴火凤凰2015",
    "year": "2015",
    "region": "中国香港",
    "genre": "动作 / 犯罪",
    "file": "movie-0375.html",
    "image": "./75.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 376,
    "title": "小雁与吴爱丽",
    "year": "2023",
    "region": "中国",
    "genre": "剧情/家庭/女性",
    "file": "movie-0376.html",
    "image": "./76.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 377,
    "title": "女儿河",
    "year": "2006",
    "region": "中国大陆",
    "genre": "剧情 / 家庭",
    "file": "movie-0377.html",
    "image": "./77.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 378,
    "title": "街头故事",
    "year": "2029",
    "region": "中国大陆",
    "genre": "剧情/青春",
    "file": "movie-0378.html",
    "image": "./78.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 379,
    "title": "雾宅",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑、惊悚、心理",
    "file": "movie-0379.html",
    "image": "./79.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 380,
    "title": "婚礼宾客",
    "year": "2024",
    "region": "英国",
    "genre": "悬疑剧情",
    "file": "movie-0380.html",
    "image": "./80.jpg",
    "category": "战争历史"
  },
  {
    "id": 381,
    "title": "我在仙界挣积分",
    "year": "2025",
    "region": "中国大陆",
    "genre": "奇幻 / 喜剧",
    "file": "movie-0381.html",
    "image": "./81.jpg",
    "category": "经典精选"
  },
  {
    "id": 382,
    "title": "大章鱼",
    "year": "2024",
    "region": "中国大陆",
    "genre": "动作灾难",
    "file": "movie-0382.html",
    "image": "./82.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 383,
    "title": "边塞争雄记",
    "year": "2011",
    "region": "中国大陆",
    "genre": "历史, 战争",
    "file": "movie-0383.html",
    "image": "./83.jpg",
    "category": "经典精选"
  },
  {
    "id": 384,
    "title": "缩形怪医",
    "year": "2024",
    "region": "日本",
    "genre": "科幻, 恐怖, 人体",
    "file": "movie-0384.html",
    "image": "./84.jpg",
    "category": "战争历史"
  },
  {
    "id": 385,
    "title": "器子",
    "year": "2024",
    "region": "日本",
    "genre": "恐怖, 科幻",
    "file": "movie-0385.html",
    "image": "./85.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 386,
    "title": "风载歌行",
    "year": "2025",
    "region": "英国",
    "genre": "剧情 / 音乐 / 公路",
    "file": "movie-0386.html",
    "image": "./86.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 387,
    "title": "汪汪队立大功第四季",
    "year": "2025",
    "region": "加拿大",
    "genre": "动画, 儿童",
    "file": "movie-0387.html",
    "image": "./87.jpg",
    "category": "环球片库"
  },
  {
    "id": 388,
    "title": "民国奇闻录",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑, 奇幻, 民国",
    "file": "movie-0388.html",
    "image": "./88.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 389,
    "title": "首尔彩虹",
    "year": "2024",
    "region": "韩国",
    "genre": "剧情 / 同性 / 家庭",
    "file": "movie-0389.html",
    "image": "./89.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 390,
    "title": "雷声的回响",
    "year": "2024",
    "region": "英国",
    "genre": "战争 / 科幻 / 惊悚",
    "file": "movie-0390.html",
    "image": "./90.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 391,
    "title": "生机勃勃的我们",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 青春 / 励志",
    "file": "movie-0391.html",
    "image": "./91.jpg",
    "category": "环球片库"
  },
  {
    "id": 392,
    "title": "不朽之歌",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情, 音乐, 历史",
    "file": "movie-0392.html",
    "image": "./92.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 393,
    "title": "蜀山奇侠之仙侣奇缘国语",
    "year": "2026",
    "region": "中国大陆 / 中国香港",
    "genre": "仙侠、奇幻、古装",
    "file": "movie-0393.html",
    "image": "./93.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 394,
    "title": "向往的生活第二季",
    "year": "2018",
    "region": "中国大陆",
    "genre": "真人秀，生活",
    "file": "movie-0394.html",
    "image": "./94.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 395,
    "title": "唐老鸭的自我改善",
    "year": "2027",
    "region": "美国",
    "genre": "喜剧 / 励志",
    "file": "movie-0395.html",
    "image": "./95.jpg",
    "category": "动画冒险"
  },
  {
    "id": 396,
    "title": "家道",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情, 家庭",
    "file": "movie-0396.html",
    "image": "./96.jpg",
    "category": "环球片库"
  },
  {
    "id": 397,
    "title": "游星王子",
    "year": "2023",
    "region": "日本",
    "genre": "科幻 / 冒险",
    "file": "movie-0397.html",
    "image": "./97.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 398,
    "title": "地心历险记",
    "year": "2029",
    "region": "美国",
    "genre": "冒险、科幻、家庭",
    "file": "movie-0398.html",
    "image": "./98.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 399,
    "title": "无悔追踪",
    "year": "2005",
    "region": "中国大陆",
    "genre": "刑侦 / 年代",
    "file": "movie-0399.html",
    "image": "./99.jpg",
    "category": "经典精选"
  },
  {
    "id": 400,
    "title": "吸血鬼骑士第二季",
    "year": "2009",
    "region": "日本",
    "genre": "奇幻、爱情、战斗",
    "file": "movie-0400.html",
    "image": "./100.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 401,
    "title": "水城追逐战",
    "year": "2026",
    "region": "意大利 / 法国",
    "genre": "动作, 惊悚, 犯罪",
    "file": "movie-0401.html",
    "image": "./101.jpg",
    "category": "环球片库"
  },
  {
    "id": 402,
    "title": "数到十，让我变成沈晓旭",
    "year": "2025",
    "region": "中国大陆",
    "genre": "奇幻爱情",
    "file": "movie-0402.html",
    "image": "./102.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 403,
    "title": "小光",
    "year": "2025",
    "region": "日本",
    "genre": "科幻温情",
    "file": "movie-0403.html",
    "image": "./103.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 404,
    "title": "一夜2019",
    "year": "2019",
    "region": "日本",
    "genre": "剧情，家庭，犯罪",
    "file": "movie-0404.html",
    "image": "./104.jpg",
    "category": "战争历史"
  },
  {
    "id": 405,
    "title": "恶魔的孩子",
    "year": "2016",
    "region": "美国",
    "genre": "恐怖 / 悬疑 / 剧情",
    "file": "movie-0405.html",
    "image": "./105.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 406,
    "title": "快餐车",
    "year": "2024",
    "region": "中国香港",
    "genre": "动作，喜剧，励志",
    "file": "movie-0406.html",
    "image": "./106.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 407,
    "title": "失踪的国王",
    "year": "2022",
    "region": "英国",
    "genre": "剧情 / 喜剧",
    "file": "movie-0407.html",
    "image": "./107.jpg",
    "category": "战争历史"
  },
  {
    "id": 408,
    "title": "虎将战边城",
    "year": "2027",
    "region": "中国大陆",
    "genre": "动作, 历史, 战争",
    "file": "movie-0408.html",
    "image": "./108.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 409,
    "title": "细胞分裂：死亡监视第一季",
    "year": "2025",
    "region": "美国",
    "genre": "动作, 科幻, 惊悚",
    "file": "movie-0409.html",
    "image": "./109.jpg",
    "category": "环球片库"
  },
  {
    "id": 410,
    "title": "疯狂的卡波事件",
    "year": "1998",
    "region": "美国",
    "genre": "喜剧, 犯罪",
    "file": "movie-0410.html",
    "image": "./110.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 411,
    "title": "纳米核心",
    "year": "2026",
    "region": "中国大陆",
    "genre": "科幻 / 动作",
    "file": "movie-0411.html",
    "image": "./111.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 412,
    "title": "战略迷魂",
    "year": "2026",
    "region": "美国",
    "genre": "动作, 科幻, 悬疑",
    "file": "movie-0412.html",
    "image": "./112.jpg",
    "category": "环球片库"
  },
  {
    "id": 413,
    "title": "食人鱼事件",
    "year": "2024",
    "region": "巴西 / 美国",
    "genre": "动作 / 科幻 / 恐怖",
    "file": "movie-0413.html",
    "image": "./113.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 414,
    "title": "兰卡斯特的最后一次飞行",
    "year": "2023",
    "region": "英国",
    "genre": "战争， 历史",
    "file": "movie-0414.html",
    "image": "./114.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 415,
    "title": "生死撤退",
    "year": "2020",
    "region": "美国",
    "genre": "战争、动作",
    "file": "movie-0415.html",
    "image": "./115.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 416,
    "title": "哈哈农夫",
    "year": "2024",
    "region": "中国大陆",
    "genre": "喜剧, 农村",
    "file": "movie-0416.html",
    "image": "./116.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 417,
    "title": "如果她的旗帜被折断了",
    "year": "2014",
    "region": "日本",
    "genre": "剧情 / 奇幻 / 校园",
    "file": "movie-0417.html",
    "image": "./117.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 418,
    "title": "塞瑟岛之旅",
    "year": "1984",
    "region": "希腊/法国/意大利合拍",
    "genre": "剧情/文艺",
    "file": "movie-0418.html",
    "image": "./118.jpg",
    "category": "动画冒险"
  },
  {
    "id": 419,
    "title": "霍莉",
    "year": "2025",
    "region": "美国",
    "genre": "剧情, 奇幻",
    "file": "movie-0419.html",
    "image": "./119.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 420,
    "title": "生命中的美好印记",
    "year": "2025",
    "region": "中国台湾",
    "genre": "爱情, 剧情, 奇幻",
    "file": "movie-0420.html",
    "image": "./120.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 421,
    "title": "灵魂大搜索",
    "year": "2024",
    "region": "美国 / 英国",
    "genre": "科幻 / 悬疑 / 惊悚",
    "file": "movie-0421.html",
    "image": "./121.jpg",
    "category": "环球片库"
  },
  {
    "id": 422,
    "title": "无脸",
    "year": "2024",
    "region": "日本",
    "genre": "悬疑 / 奇幻 / 剧情",
    "file": "movie-0422.html",
    "image": "./122.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 423,
    "title": "等待，是为了和你相遇",
    "year": "2007",
    "region": "日本",
    "genre": "爱情, 剧情, 奇幻",
    "file": "movie-0423.html",
    "image": "./123.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 424,
    "title": "爱情一箩筐",
    "year": "1997",
    "region": "中国香港",
    "genre": "喜剧 / 爱情",
    "file": "movie-0424.html",
    "image": "./124.jpg",
    "category": "战争历史"
  },
  {
    "id": 425,
    "title": "流线恋爱",
    "year": "2025",
    "region": "中国大陆",
    "genre": "爱情 / 动画",
    "file": "movie-0425.html",
    "image": "./125.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 426,
    "title": "罗萨里奥",
    "year": "2024",
    "region": "墨西哥",
    "genre": "犯罪 / 悬疑 / 动作",
    "file": "movie-0426.html",
    "image": "./126.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 427,
    "title": "搭车奇缘",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧 / 爱情 / 公路",
    "file": "movie-0427.html",
    "image": "./127.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 428,
    "title": "超人：明日之子",
    "year": "2025",
    "region": "美国",
    "genre": "动作 / 科幻",
    "file": "movie-0428.html",
    "image": "./128.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 429,
    "title": "陆贞传奇",
    "year": "2026",
    "region": "中国大陆",
    "genre": "古装权谋",
    "file": "movie-0429.html",
    "image": "./129.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 430,
    "title": "忍者之家",
    "year": "2024",
    "region": "日本",
    "genre": "动作、家庭、喜剧、奇幻",
    "file": "movie-0430.html",
    "image": "./130.jpg",
    "category": "战争历史"
  },
  {
    "id": 431,
    "title": "爆嗨",
    "year": "2025",
    "region": "英国",
    "genre": "喜剧， 动作， 犯罪",
    "file": "movie-0431.html",
    "image": "./131.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 432,
    "title": "豪客",
    "year": "2024",
    "region": "中国香港",
    "genre": "犯罪、剧情",
    "file": "movie-0432.html",
    "image": "./132.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 433,
    "title": "木兰从军1939",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 历史",
    "file": "movie-0433.html",
    "image": "./133.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 434,
    "title": "飞箭",
    "year": "2020",
    "region": "韩国",
    "genre": "动作, 古装",
    "file": "movie-0434.html",
    "image": "./134.jpg",
    "category": "经典精选"
  },
  {
    "id": 435,
    "title": "夜之河",
    "year": "2025",
    "region": "泰国",
    "genre": "惊悚 / 悬疑",
    "file": "movie-0435.html",
    "image": "./135.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 436,
    "title": "沼泽",
    "year": "2025",
    "region": "英国 / 爱尔兰",
    "genre": "恐怖 / 心理 / 民俗",
    "file": "movie-0436.html",
    "image": "./136.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 437,
    "title": "水腹蛇",
    "year": "2025",
    "region": "美国",
    "genre": "惊悚 / 犯罪 / 悬疑",
    "file": "movie-0437.html",
    "image": "./137.jpg",
    "category": "环球片库"
  },
  {
    "id": 438,
    "title": "7月7日晴",
    "year": "2026",
    "region": "日本",
    "genre": "爱情 / 奇幻",
    "file": "movie-0438.html",
    "image": "./138.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 439,
    "title": "第一滴血 第二集",
    "year": "2025",
    "region": "美国",
    "genre": "动作, 惊悚",
    "file": "movie-0439.html",
    "image": "./139.jpg",
    "category": "战争历史"
  },
  {
    "id": 440,
    "title": "鬼屋之影",
    "year": "1989",
    "region": "英国",
    "genre": "恐怖 / 悬疑",
    "file": "movie-0440.html",
    "image": "./140.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 441,
    "title": "伦勃朗",
    "year": "2025",
    "region": "荷兰 / 法国",
    "genre": "传记 / 历史",
    "file": "movie-0441.html",
    "image": "./141.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 442,
    "title": "小镇里的国界线",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情、家庭、年代",
    "file": "movie-0442.html",
    "image": "./142.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 443,
    "title": "巴萨之梦",
    "year": "2023",
    "region": "西班牙",
    "genre": "纪录片 / 运动",
    "file": "movie-0443.html",
    "image": "./143.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 444,
    "title": "迷夜惨遇",
    "year": "2022",
    "region": "法国",
    "genre": "恐怖 / 心理惊悚",
    "file": "movie-0444.html",
    "image": "./144.jpg",
    "category": "动画冒险"
  },
  {
    "id": 445,
    "title": "欲燄春潮",
    "year": "2024",
    "region": "中国台湾",
    "genre": "剧情, 同性",
    "file": "movie-0445.html",
    "image": "./145.jpg",
    "category": "经典精选"
  },
  {
    "id": 446,
    "title": "布道家庭第二季",
    "year": "2025",
    "region": "美国",
    "genre": "剧情 / 黑色喜剧",
    "file": "movie-0446.html",
    "image": "./146.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 447,
    "title": "乐园追放",
    "year": "2014",
    "region": "日本",
    "genre": "科幻、冒险",
    "file": "movie-0447.html",
    "image": "./147.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 448,
    "title": "韦恩第一季",
    "year": "2019",
    "region": "美国",
    "genre": "喜剧，动作，青春",
    "file": "movie-0448.html",
    "image": "./148.jpg",
    "category": "动画冒险"
  },
  {
    "id": 449,
    "title": "夫仇记",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪 / 伦理",
    "file": "movie-0449.html",
    "image": "./149.jpg",
    "category": "战争历史"
  },
  {
    "id": 450,
    "title": "迫上梁山",
    "year": "2024",
    "region": "中国香港 / 中国大陆",
    "genre": "犯罪 / 剧情 / 动作",
    "file": "movie-0450.html",
    "image": "./150.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 451,
    "title": "宿主",
    "year": "2013",
    "region": "美国",
    "genre": "科幻, 爱情, 惊悚",
    "file": "movie-0451.html",
    "image": "./1.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 452,
    "title": "走出雨季",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 青春 / 治愈",
    "file": "movie-0452.html",
    "image": "./2.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 453,
    "title": "蒂奇伯恩的索赔",
    "year": "2023",
    "region": "英国",
    "genre": "剧情, 历史, 悬疑",
    "file": "movie-0453.html",
    "image": "./3.jpg",
    "category": "经典精选"
  },
  {
    "id": 454,
    "title": "我是警察",
    "year": "2024",
    "region": "中国大陆",
    "genre": "刑侦, 悬疑",
    "file": "movie-0454.html",
    "image": "./4.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 455,
    "title": "我的军号",
    "year": "2022",
    "region": "中国大陆",
    "genre": "战争 / 历史",
    "file": "movie-0455.html",
    "image": "./5.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 456,
    "title": "和老妈一起住",
    "year": "2019",
    "region": "日本",
    "genre": "家庭 / 喜剧 / 治愈",
    "file": "movie-0456.html",
    "image": "./6.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 457,
    "title": "土豆侠第一季",
    "year": "2024",
    "region": "中国大陆",
    "genre": "喜剧、动作、动画",
    "file": "movie-0457.html",
    "image": "./7.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 458,
    "title": "三人做世界",
    "year": "1992",
    "region": "中国香港",
    "genre": "喜剧，爱情",
    "file": "movie-0458.html",
    "image": "./8.jpg",
    "category": "环球片库"
  },
  {
    "id": 459,
    "title": "童年的收音机",
    "year": "2022",
    "region": "中国大陆",
    "genre": "剧情 / 家庭",
    "file": "movie-0459.html",
    "image": "./9.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 460,
    "title": "致命密室2018",
    "year": "2018",
    "region": "韩国",
    "genre": "悬疑 / 恐怖",
    "file": "movie-0460.html",
    "image": "./10.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 461,
    "title": "日常警事",
    "year": "2022",
    "region": "中国大陆",
    "genre": "刑侦, 剧情",
    "file": "movie-0461.html",
    "image": "./11.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 462,
    "title": "玩尽杀绝3:钻石计划",
    "year": "2025",
    "region": "美国",
    "genre": "惊悚, 犯罪, 悬疑",
    "file": "movie-0462.html",
    "image": "./12.jpg",
    "category": "环球片库"
  },
  {
    "id": 463,
    "title": "刃牙：大擂台赛的传说",
    "year": "2023",
    "region": "日本",
    "genre": "动作, 格斗",
    "file": "movie-0463.html",
    "image": "./13.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 464,
    "title": "神警奇偷",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑犯罪",
    "file": "movie-0464.html",
    "image": "./14.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 465,
    "title": "自闭症：音乐剧",
    "year": "2025",
    "region": "英国",
    "genre": "剧情 / 音乐",
    "file": "movie-0465.html",
    "image": "./15.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 466,
    "title": "人鬼惊情",
    "year": "2025",
    "region": "中国香港",
    "genre": "爱情 / 奇幻 / 惊悚",
    "file": "movie-0466.html",
    "image": "./16.jpg",
    "category": "环球片库"
  },
  {
    "id": 467,
    "title": "西大街",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情 / 历史 / 家庭",
    "file": "movie-0467.html",
    "image": "./17.jpg",
    "category": "经典精选"
  },
  {
    "id": 468,
    "title": "超级玩家的崛起",
    "year": "2023",
    "region": "中国大陆",
    "genre": "科幻 / 动作 / 悬疑",
    "file": "movie-0468.html",
    "image": "./18.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 469,
    "title": "爱在青山绿水间",
    "year": "2026",
    "region": "中国大陆",
    "genre": "剧情 / 爱情",
    "file": "movie-0469.html",
    "image": "./19.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 470,
    "title": "律政女杰莉迪亚",
    "year": "2024",
    "region": "美国",
    "genre": "剧情, 犯罪",
    "file": "movie-0470.html",
    "image": "./20.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 471,
    "title": "科学竞赛",
    "year": "2018",
    "region": "美国",
    "genre": "剧情， 喜剧",
    "file": "movie-0471.html",
    "image": "./21.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 472,
    "title": "我们来自未来2",
    "year": "2025",
    "region": "俄罗斯",
    "genre": "战争 / 科幻",
    "file": "movie-0472.html",
    "image": "./22.jpg",
    "category": "环球片库"
  },
  {
    "id": 473,
    "title": "环绕者9号",
    "year": "2026",
    "region": "美国",
    "genre": "科幻, 悬疑, 惊悚",
    "file": "movie-0473.html",
    "image": "./23.jpg",
    "category": "经典精选"
  },
  {
    "id": 474,
    "title": "东方大魔王",
    "year": "1990",
    "region": "中国大陆",
    "genre": "喜剧, 奇幻",
    "file": "movie-0474.html",
    "image": "./24.jpg",
    "category": "战争历史"
  },
  {
    "id": 475,
    "title": "恶魔夜晚来",
    "year": "2022",
    "region": "英国",
    "genre": "恐怖，惊悚，民俗",
    "file": "movie-0475.html",
    "image": "./25.jpg",
    "category": "战争历史"
  },
  {
    "id": 476,
    "title": "乘上夏日影像",
    "year": "2020",
    "region": "日本",
    "genre": "科幻，青春，冒险",
    "file": "movie-0476.html",
    "image": "./26.jpg",
    "category": "经典精选"
  },
  {
    "id": 477,
    "title": "差等生乔曦",
    "year": "2019",
    "region": "中国大陆",
    "genre": "剧情 / 青春 / 校园",
    "file": "movie-0477.html",
    "image": "./27.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 478,
    "title": "疯狂的麦咭第八季",
    "year": "2024",
    "region": "中国大陆",
    "genre": "真人秀",
    "file": "movie-0478.html",
    "image": "./28.jpg",
    "category": "动画冒险"
  },
  {
    "id": 479,
    "title": "玛拉基湾",
    "year": "2023",
    "region": "澳大利亚",
    "genre": "犯罪/悬疑",
    "file": "movie-0479.html",
    "image": "./29.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 480,
    "title": "大逃杀生还者",
    "year": "2024",
    "region": "日本",
    "genre": "动作, 悬疑",
    "file": "movie-0480.html",
    "image": "./30.jpg",
    "category": "动画冒险"
  },
  {
    "id": 481,
    "title": "萨满仙师",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑, 惊悚",
    "file": "movie-0481.html",
    "image": "./31.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 482,
    "title": "射月",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧, 奇幻, 家庭, 冒险",
    "file": "movie-0482.html",
    "image": "./32.jpg",
    "category": "环球片库"
  },
  {
    "id": 483,
    "title": "附身实验",
    "year": "2024",
    "region": "美国",
    "genre": "科幻 / 惊悚",
    "file": "movie-0483.html",
    "image": "./33.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 484,
    "title": "科西加兄弟",
    "year": "2014",
    "region": "法国",
    "genre": "犯罪，剧情",
    "file": "movie-0484.html",
    "image": "./34.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 485,
    "title": "茶花女",
    "year": "2024",
    "region": "法国",
    "genre": "爱情, 剧情",
    "file": "movie-0485.html",
    "image": "./35.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 486,
    "title": "麻烦中的女人",
    "year": "2024",
    "region": "法国",
    "genre": "喜剧, 剧情",
    "file": "movie-0486.html",
    "image": "./36.jpg",
    "category": "战争历史"
  },
  {
    "id": 487,
    "title": "送终人",
    "year": "2019",
    "region": "美国",
    "genre": "悬疑 / 惊悚 / 灵异",
    "file": "movie-0487.html",
    "image": "./37.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 488,
    "title": "时空终点站",
    "year": "2026",
    "region": "英国",
    "genre": "科幻、惊悚、悬疑",
    "file": "movie-0488.html",
    "image": "./38.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 489,
    "title": "过往人生",
    "year": "2023",
    "region": "韩国 / 美国",
    "genre": "剧情 / 爱情",
    "file": "movie-0489.html",
    "image": "./39.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 490,
    "title": "上海幻梦",
    "year": "2027",
    "region": "中国大陆",
    "genre": "爱情， 悬疑， 历史",
    "file": "movie-0490.html",
    "image": "./40.jpg",
    "category": "动画冒险"
  },
  {
    "id": 491,
    "title": "守望",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情、家庭",
    "file": "movie-0491.html",
    "image": "./41.jpg",
    "category": "环球片库"
  },
  {
    "id": 492,
    "title": "掟上今日子的备忘录",
    "year": "2024",
    "region": "日本",
    "genre": "悬疑, 推理, 科幻",
    "file": "movie-0492.html",
    "image": "./42.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 493,
    "title": "勇探闯龙潭",
    "year": "2024",
    "region": "中国香港",
    "genre": "动作、警匪、喜剧",
    "file": "movie-0493.html",
    "image": "./43.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 494,
    "title": "寄子",
    "year": "2026",
    "region": "中国",
    "genre": "剧情， 家庭， 悬疑",
    "file": "movie-0494.html",
    "image": "./44.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 495,
    "title": "呖咕呖咕对对碰",
    "year": "2007",
    "region": "中国香港",
    "genre": "喜剧",
    "file": "movie-0495.html",
    "image": "./45.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 496,
    "title": "全民乱投",
    "year": "2022",
    "region": "美国",
    "genre": "科幻， 惊悚， 悬疑",
    "file": "movie-0496.html",
    "image": "./46.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 497,
    "title": "圣彼得堡我爱你",
    "year": "2023",
    "region": "俄罗斯",
    "genre": "爱情, 剧情, 城市",
    "file": "movie-0497.html",
    "image": "./47.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 498,
    "title": "缉凶48小时",
    "year": "2025",
    "region": "中国大陆",
    "genre": "犯罪, 悬疑, 动作",
    "file": "movie-0498.html",
    "image": "./48.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 499,
    "title": "流星初恋",
    "year": "2022",
    "region": "日本",
    "genre": "青春纯爱",
    "file": "movie-0499.html",
    "image": "./49.jpg",
    "category": "动画冒险"
  },
  {
    "id": 500,
    "title": "费城一夜情",
    "year": "2026",
    "region": "美国",
    "genre": "爱情, 剧情",
    "file": "movie-0500.html",
    "image": "./50.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 501,
    "title": "古巴浪人",
    "year": "2025",
    "region": "古巴 / 西班牙",
    "genre": "动作歌舞片",
    "file": "movie-0501.html",
    "image": "./51.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 502,
    "title": "罪途2之救赎代价",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪 / 惊悚",
    "file": "movie-0502.html",
    "image": "./52.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 503,
    "title": "胡杨的夏天",
    "year": "2023",
    "region": "中国大陆",
    "genre": "爱情, 剧情",
    "file": "movie-0503.html",
    "image": "./53.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 504,
    "title": "失恋399年",
    "year": "2026",
    "region": "中国大陆",
    "genre": "奇幻，爱情，喜剧",
    "file": "movie-0504.html",
    "image": "./54.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 505,
    "title": "死亡游戏2016",
    "year": "2016",
    "region": "日本",
    "genre": "恐怖, 惊悚",
    "file": "movie-0505.html",
    "image": "./55.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 506,
    "title": "最爱的你",
    "year": "1995",
    "region": "中国香港",
    "genre": "剧情 / 爱情 / 家庭",
    "file": "movie-0506.html",
    "image": "./56.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 507,
    "title": "毒魔",
    "year": "2026",
    "region": "美国",
    "genre": "恐怖、惊悚、超自然",
    "file": "movie-0507.html",
    "image": "./57.jpg",
    "category": "战争历史"
  },
  {
    "id": 508,
    "title": "天地宝莲灯",
    "year": "2025",
    "region": "中国大陆",
    "genre": "奇幻动作",
    "file": "movie-0508.html",
    "image": "./58.jpg",
    "category": "战争历史"
  },
  {
    "id": 509,
    "title": "失魂舍伍德第一季",
    "year": "2025",
    "region": "英国",
    "genre": "剧情、悬疑、犯罪",
    "file": "movie-0509.html",
    "image": "./59.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 510,
    "title": "妓女与鲸鱼",
    "year": "2023",
    "region": "阿根廷",
    "genre": "剧情/魔幻现实",
    "file": "movie-0510.html",
    "image": "./60.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 511,
    "title": "我的妈咪不是人",
    "year": "2023",
    "region": "中国香港",
    "genre": "喜剧 / 奇幻 / 家庭",
    "file": "movie-0511.html",
    "image": "./61.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 512,
    "title": "欢乐歌舞",
    "year": "2016",
    "region": "印度",
    "genre": "歌舞, 剧情, 爱情",
    "file": "movie-0512.html",
    "image": "./62.jpg",
    "category": "动画冒险"
  },
  {
    "id": 513,
    "title": "大破天幕杀机",
    "year": "2023",
    "region": "美国/英国",
    "genre": "动作/惊悚",
    "file": "movie-0513.html",
    "image": "./63.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 514,
    "title": "大嘴巴第五季",
    "year": "2023",
    "region": "美国",
    "genre": "喜剧, 动画, 音乐",
    "file": "movie-0514.html",
    "image": "./64.jpg",
    "category": "战争历史"
  },
  {
    "id": 515,
    "title": "摇滚启示录",
    "year": "2020",
    "region": "英国",
    "genre": "音乐 / 剧情 / 奇幻",
    "file": "movie-0515.html",
    "image": "./65.jpg",
    "category": "动画冒险"
  },
  {
    "id": 516,
    "title": "鲜血淋漓第五季",
    "year": "2021",
    "region": "加拿大",
    "genre": "恐怖，惊悚，悬疑",
    "file": "movie-0516.html",
    "image": "./66.jpg",
    "category": "环球片库"
  },
  {
    "id": 517,
    "title": "尚食",
    "year": "2023",
    "region": "中国",
    "genre": "古装美食",
    "file": "movie-0517.html",
    "image": "./67.jpg",
    "category": "战争历史"
  },
  {
    "id": 518,
    "title": "盲情六分",
    "year": "2023",
    "region": "中国大陆",
    "genre": "爱情悬疑",
    "file": "movie-0518.html",
    "image": "./68.jpg",
    "category": "经典精选"
  },
  {
    "id": 519,
    "title": "土京盗宝记",
    "year": "2024",
    "region": "土耳其 / 法国",
    "genre": "犯罪 / 冒险 / 喜剧",
    "file": "movie-0519.html",
    "image": "./69.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 520,
    "title": "底特律进化",
    "year": "2021",
    "region": "美国",
    "genre": "科幻, 惊悚, 悬疑",
    "file": "movie-0520.html",
    "image": "./70.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 521,
    "title": "兽兵卫忍风帖",
    "year": "1993",
    "region": "日本",
    "genre": "动画, 动作, 奇幻",
    "file": "movie-0521.html",
    "image": "./71.jpg",
    "category": "动画冒险"
  },
  {
    "id": 522,
    "title": "身后仕",
    "year": "2018",
    "region": "中国香港",
    "genre": "剧情, 社会",
    "file": "movie-0522.html",
    "image": "./72.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 523,
    "title": "什么也没发生",
    "year": "2025",
    "region": "法国",
    "genre": "剧情悬疑",
    "file": "movie-0523.html",
    "image": "./73.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 524,
    "title": "港湾第五季",
    "year": "2025",
    "region": "加拿大",
    "genre": "奇幻, 悬疑",
    "file": "movie-0524.html",
    "image": "./74.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 525,
    "title": "玫瑰公寓2017",
    "year": "2017",
    "region": "韩国",
    "genre": "悬疑、惊悚、爱情",
    "file": "movie-0525.html",
    "image": "./75.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 526,
    "title": "双腿之间",
    "year": "2025",
    "region": "法国",
    "genre": "剧情，惊悚",
    "file": "movie-0526.html",
    "image": "./76.jpg",
    "category": "经典精选"
  },
  {
    "id": 527,
    "title": "生而被杀",
    "year": "2022",
    "region": "韩国",
    "genre": "悬疑、惊悚、犯罪",
    "file": "movie-0527.html",
    "image": "./77.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 528,
    "title": "同路前行",
    "year": "2023",
    "region": "法国",
    "genre": "公路剧情",
    "file": "movie-0528.html",
    "image": "./78.jpg",
    "category": "战争历史"
  },
  {
    "id": 529,
    "title": "误杀3",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪",
    "file": "movie-0529.html",
    "image": "./79.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 530,
    "title": "禁忌关系",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑, 家庭, 伦理",
    "file": "movie-0530.html",
    "image": "./80.jpg",
    "category": "经典精选"
  },
  {
    "id": 531,
    "title": "少林小子1984",
    "year": "1984",
    "region": "中国香港",
    "genre": "动作 / 喜剧",
    "file": "movie-0531.html",
    "image": "./81.jpg",
    "category": "战争历史"
  },
  {
    "id": 532,
    "title": "邪恶力量第十季",
    "year": "2023",
    "region": "美国",
    "genre": "奇幻 / 惊悚 / 剧情",
    "file": "movie-0532.html",
    "image": "./82.jpg",
    "category": "战争历史"
  },
  {
    "id": 533,
    "title": "妖精弗洛伦斯",
    "year": "2026",
    "region": "英国",
    "genre": "奇幻 / 家庭 / 冒险",
    "file": "movie-0533.html",
    "image": "./83.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 534,
    "title": "夺命保险金",
    "year": "2024",
    "region": "英国",
    "genre": "惊悚 / 剧情",
    "file": "movie-0534.html",
    "image": "./84.jpg",
    "category": "战争历史"
  },
  {
    "id": 535,
    "title": "世上的扒手",
    "year": "2023",
    "region": "法国",
    "genre": "犯罪、剧情",
    "file": "movie-0535.html",
    "image": "./85.jpg",
    "category": "战争历史"
  },
  {
    "id": 536,
    "title": "圣修伯里",
    "year": "2025",
    "region": "法国",
    "genre": "传记, 剧情",
    "file": "movie-0536.html",
    "image": "./86.jpg",
    "category": "经典精选"
  },
  {
    "id": 537,
    "title": "蜡笔小新外传2 玩具大战",
    "year": "2024",
    "region": "日本",
    "genre": "动画 / 喜剧 / 奇幻",
    "file": "movie-0537.html",
    "image": "./87.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 538,
    "title": "只有猫知道",
    "year": "2024",
    "region": "日本",
    "genre": "剧情 / 家庭",
    "file": "movie-0538.html",
    "image": "./88.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 539,
    "title": "年少有你",
    "year": "2023",
    "region": "中国大陆",
    "genre": "青春 / 校园 / 成长",
    "file": "movie-0539.html",
    "image": "./89.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 540,
    "title": "一念时光",
    "year": "2023",
    "region": "中国大陆",
    "genre": "爱情，悬疑",
    "file": "movie-0540.html",
    "image": "./90.jpg",
    "category": "环球片库"
  },
  {
    "id": 541,
    "title": "希望的大地",
    "year": "2019",
    "region": "中国大陆",
    "genre": "剧情 / 家庭",
    "file": "movie-0541.html",
    "image": "./91.jpg",
    "category": "战争历史"
  },
  {
    "id": 542,
    "title": "白色堡垒",
    "year": "2024",
    "region": "波黑",
    "genre": "剧情，战争",
    "file": "movie-0542.html",
    "image": "./92.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 543,
    "title": "狂犬病1977",
    "year": "2024",
    "region": "加拿大",
    "genre": "恐怖, 剧情",
    "file": "movie-0543.html",
    "image": "./93.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 544,
    "title": "动物新世代",
    "year": "2024",
    "region": "日本",
    "genre": "科幻 / 冒险 / 奇幻",
    "file": "movie-0544.html",
    "image": "./94.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 545,
    "title": "雷霆杀阵",
    "year": "2024",
    "region": "美国",
    "genre": "动作 / 犯罪",
    "file": "movie-0545.html",
    "image": "./95.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 546,
    "title": "寻找女神@娇阿依",
    "year": "2026",
    "region": "中国大陆",
    "genre": "奇幻、公路、喜剧",
    "file": "movie-0546.html",
    "image": "./96.jpg",
    "category": "环球片库"
  },
  {
    "id": 547,
    "title": "得布拉肯宁",
    "year": "2020",
    "region": "英国",
    "genre": "恐怖 / 民俗",
    "file": "movie-0547.html",
    "image": "./97.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 548,
    "title": "噬亡村",
    "year": "2023",
    "region": "日本",
    "genre": "恐怖 / 悬疑 / 惊悚",
    "file": "movie-0548.html",
    "image": "./98.jpg",
    "category": "经典精选"
  },
  {
    "id": 549,
    "title": "我们还在等什么快乐呢！",
    "year": "2024",
    "region": "中国台湾",
    "genre": "喜剧， 家庭",
    "file": "movie-0549.html",
    "image": "./99.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 550,
    "title": "望月2017",
    "year": "2017",
    "region": "中国香港",
    "genre": "剧情, 家庭, 文艺",
    "file": "movie-0550.html",
    "image": "./100.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 551,
    "title": "礼仪式",
    "year": "2023",
    "region": "日本",
    "genre": "剧情 / 悬疑",
    "file": "movie-0551.html",
    "image": "./101.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 552,
    "title": "贪婪2019",
    "year": "2019",
    "region": "韩国",
    "genre": "犯罪 / 惊悚",
    "file": "movie-0552.html",
    "image": "./102.jpg",
    "category": "环球片库"
  },
  {
    "id": 553,
    "title": "托尔金",
    "year": "2019",
    "region": "英国",
    "genre": "传记",
    "file": "movie-0553.html",
    "image": "./103.jpg",
    "category": "战争历史"
  },
  {
    "id": 554,
    "title": "舒加利3",
    "year": "2023",
    "region": "俄罗斯",
    "genre": "战争 / 剧情 / 传记",
    "file": "movie-0554.html",
    "image": "./104.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 555,
    "title": "都会大地",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 悬疑",
    "file": "movie-0555.html",
    "image": "./105.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 556,
    "title": "最后的恐龙",
    "year": "2022",
    "region": "加拿大",
    "genre": "科幻，冒险，家庭",
    "file": "movie-0556.html",
    "image": "./106.jpg",
    "category": "动画冒险"
  },
  {
    "id": 557,
    "title": "马格达拉",
    "year": "2024",
    "region": "波兰",
    "genre": "剧情 / 历史",
    "file": "movie-0557.html",
    "image": "./107.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 558,
    "title": "魔法圣婴",
    "year": "1993",
    "region": "英国",
    "genre": "剧情, 奇幻, 悬疑",
    "file": "movie-0558.html",
    "image": "./108.jpg",
    "category": "战争历史"
  },
  {
    "id": 559,
    "title": "宅男女神杀人狂",
    "year": "2024",
    "region": "中国台湾",
    "genre": "恐怖 / 喜剧 / 惊悚",
    "file": "movie-0559.html",
    "image": "./109.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 560,
    "title": "巴塔哥尼亚",
    "year": "2022",
    "region": "阿根廷",
    "genre": "剧情 / 冒险",
    "file": "movie-0560.html",
    "image": "./110.jpg",
    "category": "环球片库"
  },
  {
    "id": 561,
    "title": "鬼马神偷",
    "year": "1989",
    "region": "香港",
    "genre": "喜剧 / 动作 / 犯罪",
    "file": "movie-0561.html",
    "image": "./111.jpg",
    "category": "动画冒险"
  },
  {
    "id": 562,
    "title": "换伴万万睡",
    "year": "2017",
    "region": "韩国",
    "genre": "爱情",
    "file": "movie-0562.html",
    "image": "./112.jpg",
    "category": "战争历史"
  },
  {
    "id": 563,
    "title": "乳镇女巫",
    "year": "2025",
    "region": "美国",
    "genre": "恐怖 / 奇幻 / 小镇悬疑",
    "file": "movie-0563.html",
    "image": "./113.jpg",
    "category": "战争历史"
  },
  {
    "id": 564,
    "title": "大狂蜂：起源",
    "year": "2025",
    "region": "美国",
    "genre": "科幻恐怖",
    "file": "movie-0564.html",
    "image": "./114.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 565,
    "title": "雏鸟的天空",
    "year": "2021",
    "region": "中国大陆",
    "genre": "剧情 / 儿童",
    "file": "movie-0565.html",
    "image": "./115.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 566,
    "title": "部落里的秘密",
    "year": "2024",
    "region": "美国 / 亚马逊",
    "genre": "悬疑, 冒险",
    "file": "movie-0566.html",
    "image": "./116.jpg",
    "category": "经典精选"
  },
  {
    "id": 567,
    "title": "飞出个未来第三季",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧, 科幻, 动画",
    "file": "movie-0567.html",
    "image": "./117.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 568,
    "title": "三角突击队2",
    "year": "2027",
    "region": "美国",
    "genre": "动作, 战争, 惊悚",
    "file": "movie-0568.html",
    "image": "./118.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 569,
    "title": "赛巴斯提安",
    "year": "2023",
    "region": "美国",
    "genre": "剧情 / 传记",
    "file": "movie-0569.html",
    "image": "./119.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 570,
    "title": "如果历史是一群喵第一季",
    "year": "2024",
    "region": "中国大陆",
    "genre": "喜剧, 历史, 科普",
    "file": "movie-0570.html",
    "image": "./120.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 571,
    "title": "年轻的媳妇",
    "year": "2024",
    "region": "新加坡 / 马来西亚",
    "genre": "剧情, 家庭",
    "file": "movie-0571.html",
    "image": "./121.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 572,
    "title": "我的海獭先生",
    "year": "2025",
    "region": "日本",
    "genre": "剧情 / 家庭",
    "file": "movie-0572.html",
    "image": "./122.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 573,
    "title": "合奏",
    "year": "2024",
    "region": "日本",
    "genre": "剧情、音乐、家庭",
    "file": "movie-0573.html",
    "image": "./123.jpg",
    "category": "经典精选"
  },
  {
    "id": 574,
    "title": "公主与出租车司机",
    "year": "2026",
    "region": "韩国",
    "genre": "爱情， 喜剧， 剧情",
    "file": "movie-0574.html",
    "image": "./124.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 575,
    "title": "天劫余生",
    "year": "2026",
    "region": "美国",
    "genre": "灾难 / 生存",
    "file": "movie-0575.html",
    "image": "./125.jpg",
    "category": "动画冒险"
  },
  {
    "id": 576,
    "title": "我是你的女人",
    "year": "2025",
    "region": "法国",
    "genre": "惊悚 / 剧情",
    "file": "movie-0576.html",
    "image": "./126.jpg",
    "category": "动画冒险"
  },
  {
    "id": 577,
    "title": "民男的幸福",
    "year": "2023",
    "region": "日本",
    "genre": "喜剧 / 家庭",
    "file": "movie-0577.html",
    "image": "./127.jpg",
    "category": "经典精选"
  },
  {
    "id": 578,
    "title": "初渡艳阳天",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情, 家庭",
    "file": "movie-0578.html",
    "image": "./128.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 579,
    "title": "长空铸剑",
    "year": "2024",
    "region": "中国",
    "genre": "军旅, 剧情, 动作",
    "file": "movie-0579.html",
    "image": "./129.jpg",
    "category": "经典精选"
  },
  {
    "id": 580,
    "title": "皇上命我来选妃",
    "year": "2026",
    "region": "中国大陆",
    "genre": "古装 / 喜剧 / 甜宠",
    "file": "movie-0580.html",
    "image": "./130.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 581,
    "title": "魂断钓鱼城",
    "year": "2023",
    "region": "中国大陆",
    "genre": "历史、战争",
    "file": "movie-0581.html",
    "image": "./131.jpg",
    "category": "经典精选"
  },
  {
    "id": 582,
    "title": "玩火的少年",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑， 青春， 犯罪",
    "file": "movie-0582.html",
    "image": "./132.jpg",
    "category": "动画冒险"
  },
  {
    "id": 583,
    "title": "小心肝儿",
    "year": "2024",
    "region": "中国台湾",
    "genre": "剧情，家庭，悬疑",
    "file": "movie-0583.html",
    "image": "./133.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 584,
    "title": "宝莲历险记",
    "year": "2025",
    "region": "中国大陆",
    "genre": "奇幻, 冒险, 家庭",
    "file": "movie-0584.html",
    "image": "./134.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 585,
    "title": "森林的精灵",
    "year": "2024",
    "region": "芬兰",
    "genre": "奇幻、家庭、冒险",
    "file": "movie-0585.html",
    "image": "./135.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 586,
    "title": "五月八月",
    "year": "2021",
    "region": "中国香港",
    "genre": "剧情, 家庭, 文艺",
    "file": "movie-0586.html",
    "image": "./136.jpg",
    "category": "动画冒险"
  },
  {
    "id": 587,
    "title": "老处女日记",
    "year": "2024",
    "region": "韩国",
    "genre": "剧情 / 爱情 / 生活",
    "file": "movie-0587.html",
    "image": "./137.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 588,
    "title": "退休追杀令",
    "year": "2024",
    "region": "美国",
    "genre": "动作, 惊悚",
    "file": "movie-0588.html",
    "image": "./138.jpg",
    "category": "环球片库"
  },
  {
    "id": 589,
    "title": "赎罪之路",
    "year": "2025",
    "region": "中国大陆",
    "genre": "犯罪、剧情、人性",
    "file": "movie-0589.html",
    "image": "./139.jpg",
    "category": "环球片库"
  },
  {
    "id": 590,
    "title": "我的特工爷爷",
    "year": "2024",
    "region": "中国香港 / 中国大陆",
    "genre": "动作, 喜剧, 家庭",
    "file": "movie-0590.html",
    "image": "./140.jpg",
    "category": "经典精选"
  },
  {
    "id": 591,
    "title": "大商道",
    "year": "2023",
    "region": "中国大陆",
    "genre": "历史 / 商战",
    "file": "movie-0591.html",
    "image": "./141.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 592,
    "title": "太极熊猫",
    "year": "2026",
    "region": "中国大陆 / 美国",
    "genre": "喜剧 / 动作 / 动画",
    "file": "movie-0592.html",
    "image": "./142.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 593,
    "title": "特洛伊",
    "year": "2004",
    "region": "美国",
    "genre": "动作, 历史, 爱情",
    "file": "movie-0593.html",
    "image": "./143.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 594,
    "title": "我家也有外星人",
    "year": "2025",
    "region": "日本",
    "genre": "喜剧 / 科幻 / 家庭",
    "file": "movie-0594.html",
    "image": "./144.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 595,
    "title": "看海的日子",
    "year": "2024",
    "region": "中国台湾",
    "genre": "剧情、家庭、治愈",
    "file": "movie-0595.html",
    "image": "./145.jpg",
    "category": "战争历史"
  },
  {
    "id": 596,
    "title": "花戎",
    "year": "2025",
    "region": "中国",
    "genre": "古装/仙侠",
    "file": "movie-0596.html",
    "image": "./146.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 597,
    "title": "完美妻子的完美复仇计划",
    "year": "2025",
    "region": "韩国",
    "genre": "悬疑，惊悚，剧情",
    "file": "movie-0597.html",
    "image": "./147.jpg",
    "category": "动画冒险"
  },
  {
    "id": 598,
    "title": "白色强人2粤语",
    "year": "2026",
    "region": "中国香港",
    "genre": "剧情, 医疗, 职场",
    "file": "movie-0598.html",
    "image": "./148.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 599,
    "title": "幸福不是毛毛雨",
    "year": "1987",
    "region": "中国大陆",
    "genre": "剧情, 家庭",
    "file": "movie-0599.html",
    "image": "./149.jpg",
    "category": "战争历史"
  },
  {
    "id": 600,
    "title": "桃脸泪痕",
    "year": "2023",
    "region": "韩国",
    "genre": "爱情 / 悬疑 / 剧情",
    "file": "movie-0600.html",
    "image": "./150.jpg",
    "category": "环球片库"
  },
  {
    "id": 601,
    "title": "诅咒之刃",
    "year": "2005",
    "region": "日本",
    "genre": "恐怖 / 历史",
    "file": "movie-0601.html",
    "image": "./1.jpg",
    "category": "经典精选"
  },
  {
    "id": 602,
    "title": "天鸟的喧嚣",
    "year": "2024",
    "region": "英国",
    "genre": "剧情, 奇幻",
    "file": "movie-0602.html",
    "image": "./2.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 603,
    "title": "风流才子纪晓岚",
    "year": "2001",
    "region": "中国大陆 / 中国香港",
    "genre": "古装 / 喜剧 / 爱情",
    "file": "movie-0603.html",
    "image": "./3.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 604,
    "title": "礼炮七号",
    "year": "2017",
    "region": "俄罗斯",
    "genre": "剧情, 历史, 灾难",
    "file": "movie-0604.html",
    "image": "./4.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 605,
    "title": "零号公寓",
    "year": "2026",
    "region": "日本",
    "genre": "科幻, 悬疑",
    "file": "movie-0605.html",
    "image": "./5.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 606,
    "title": "少林兄弟",
    "year": "2023",
    "region": "中国大陆",
    "genre": "动作",
    "file": "movie-0606.html",
    "image": "./6.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 607,
    "title": "恐怖在线",
    "year": "2024",
    "region": "马来西亚",
    "genre": "恐怖， 悬疑",
    "file": "movie-0607.html",
    "image": "./7.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 608,
    "title": "萌鼠追击大作战",
    "year": "2024",
    "region": "英国",
    "genre": "喜剧， 动画， 冒险",
    "file": "movie-0608.html",
    "image": "./8.jpg",
    "category": "经典精选"
  },
  {
    "id": 609,
    "title": "谷远山上有书院",
    "year": "2024",
    "region": "中国大陆",
    "genre": "古装 / 喜剧 / 青春",
    "file": "movie-0609.html",
    "image": "./9.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 610,
    "title": "大雷雨",
    "year": "2023",
    "region": "俄罗斯",
    "genre": "剧情, 历史, 战争",
    "file": "movie-0610.html",
    "image": "./10.jpg",
    "category": "经典精选"
  },
  {
    "id": 611,
    "title": "情深意浓",
    "year": "2025",
    "region": "韩国",
    "genre": "爱情家庭",
    "file": "movie-0611.html",
    "image": "./11.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 612,
    "title": "被告",
    "year": "2025",
    "region": "韩国",
    "genre": "剧情 / 犯罪 / 律政",
    "file": "movie-0612.html",
    "image": "./12.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 613,
    "title": "奶香爱恋",
    "year": "2024",
    "region": "泰国",
    "genre": "爱情 / 喜剧 / 青春",
    "file": "movie-0613.html",
    "image": "./13.jpg",
    "category": "战争历史"
  },
  {
    "id": 614,
    "title": "阿灿出千粤语",
    "year": "1992",
    "region": "中国香港",
    "genre": "喜剧 / 动作",
    "file": "movie-0614.html",
    "image": "./14.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 615,
    "title": "从今天到明天",
    "year": "2026",
    "region": "法国",
    "genre": "爱情 / 科幻 / 剧情",
    "file": "movie-0615.html",
    "image": "./15.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 616,
    "title": "黑执事：豪华客船篇",
    "year": "2017",
    "region": "日本",
    "genre": "动画，悬疑，奇幻",
    "file": "movie-0616.html",
    "image": "./16.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 617,
    "title": "阁楼大象",
    "year": "2023",
    "region": "中国大陆",
    "genre": "悬疑",
    "file": "movie-0617.html",
    "image": "./17.jpg",
    "category": "战争历史"
  },
  {
    "id": 618,
    "title": "心理心里有个谜粤语",
    "year": "2024",
    "region": "中国香港",
    "genre": "悬疑 / 心理 / 犯罪",
    "file": "movie-0618.html",
    "image": "./18.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 619,
    "title": "绝对零度",
    "year": "2024",
    "region": "英国",
    "genre": "科幻, 悬疑",
    "file": "movie-0619.html",
    "image": "./19.jpg",
    "category": "动画冒险"
  },
  {
    "id": 620,
    "title": "送信到哥本哈根",
    "year": "2003",
    "region": "丹麦 / 瑞典",
    "genre": "剧情 / 战争",
    "file": "movie-0620.html",
    "image": "./20.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 621,
    "title": "幽灵和鲸",
    "year": "2024",
    "region": "美国",
    "genre": "奇幻 / 家庭 / 治愈",
    "file": "movie-0621.html",
    "image": "./21.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 622,
    "title": "死路寻死",
    "year": "2018",
    "region": "日本",
    "genre": "悬疑 / 恐怖",
    "file": "movie-0622.html",
    "image": "./22.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 623,
    "title": "三女性",
    "year": "1977",
    "region": "美国",
    "genre": "剧情 / 心理",
    "file": "movie-0623.html",
    "image": "./23.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 624,
    "title": "永远强壮",
    "year": "2025",
    "region": "美国",
    "genre": "剧情 / 家庭 / 运动",
    "file": "movie-0624.html",
    "image": "./24.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 625,
    "title": "嘿！客栈",
    "year": "2024",
    "region": "中国大陆",
    "genre": "情景喜剧",
    "file": "movie-0625.html",
    "image": "./25.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 626,
    "title": "如风如云",
    "year": "2024",
    "region": "日本",
    "genre": "剧情 / 生活 / 治愈",
    "file": "movie-0626.html",
    "image": "./26.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 627,
    "title": "梦回鹿鼎记",
    "year": "2021",
    "region": "中国大陆",
    "genre": "喜剧/奇幻",
    "file": "movie-0627.html",
    "image": "./27.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 628,
    "title": "保罗·摩菲",
    "year": "2021",
    "region": "美国",
    "genre": "剧情 / 传记 / 运动",
    "file": "movie-0628.html",
    "image": "./28.jpg",
    "category": "动画冒险"
  },
  {
    "id": 629,
    "title": "反种姓的歌声",
    "year": "2019",
    "region": "印度",
    "genre": "剧情 / 音乐 / 社会",
    "file": "movie-0629.html",
    "image": "./29.jpg",
    "category": "经典精选"
  },
  {
    "id": 630,
    "title": "恶魔的请柬",
    "year": "2025",
    "region": "印度尼西亚",
    "genre": "恐怖 / 民俗",
    "file": "movie-0630.html",
    "image": "./30.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 631,
    "title": "少林传人",
    "year": "2026",
    "region": "中国香港",
    "genre": "动作, 古装, 剧情",
    "file": "movie-0631.html",
    "image": "./31.jpg",
    "category": "战争历史"
  },
  {
    "id": 632,
    "title": "露西上太空",
    "year": "2024",
    "region": "英国",
    "genre": "科幻，剧情，冒险",
    "file": "movie-0632.html",
    "image": "./32.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 633,
    "title": "云南虫谷2021",
    "year": "2021",
    "region": "中国大陆",
    "genre": "冒险悬疑",
    "file": "movie-0633.html",
    "image": "./33.jpg",
    "category": "动画冒险"
  },
  {
    "id": 634,
    "title": "利特斯",
    "year": "2024",
    "region": "法国 / 比利时",
    "genre": "惊悚 / 犯罪 / 悬疑",
    "file": "movie-0634.html",
    "image": "./34.jpg",
    "category": "经典精选"
  },
  {
    "id": 635,
    "title": "骷髅头",
    "year": "2025",
    "region": "英国",
    "genre": "悬疑， 惊悚， 心理",
    "file": "movie-0635.html",
    "image": "./35.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 636,
    "title": "飞越谜情粤语",
    "year": "2025",
    "region": "中国香港",
    "genre": "爱情, 悬疑",
    "file": "movie-0636.html",
    "image": "./36.jpg",
    "category": "环球片库"
  },
  {
    "id": 637,
    "title": "群英会2015",
    "year": "2015",
    "region": "中国大陆",
    "genre": "喜剧 / 动作",
    "file": "movie-0637.html",
    "image": "./37.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 638,
    "title": "龙卷风末日",
    "year": "2025",
    "region": "美国",
    "genre": "灾难动作",
    "file": "movie-0638.html",
    "image": "./38.jpg",
    "category": "动画冒险"
  },
  {
    "id": 639,
    "title": "谋杀大厦",
    "year": "2024",
    "region": "中国香港",
    "genre": "犯罪 / 悬疑 / 动作",
    "file": "movie-0639.html",
    "image": "./39.jpg",
    "category": "动画冒险"
  },
  {
    "id": 640,
    "title": "老师真伟大！",
    "year": "2017",
    "region": "韩国",
    "genre": "喜剧 / 剧情",
    "file": "movie-0640.html",
    "image": "./40.jpg",
    "category": "经典精选"
  },
  {
    "id": 641,
    "title": "青葱岁月",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 青春 / 校园",
    "file": "movie-0641.html",
    "image": "./41.jpg",
    "category": "动画冒险"
  },
  {
    "id": 642,
    "title": "雷加利亚 三圣星",
    "year": "2022",
    "region": "日本",
    "genre": "机战科幻",
    "file": "movie-0642.html",
    "image": "./42.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 643,
    "title": "7月22日",
    "year": "2018",
    "region": "挪威",
    "genre": "剧情，历史，犯罪",
    "file": "movie-0643.html",
    "image": "./43.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 644,
    "title": "戆直贼佬俏佳人",
    "year": "1990",
    "region": "中国香港",
    "genre": "喜剧 / 犯罪 / 爱情",
    "file": "movie-0644.html",
    "image": "./44.jpg",
    "category": "动画冒险"
  },
  {
    "id": 645,
    "title": "了无痕迹",
    "year": "2024",
    "region": "中国",
    "genre": "犯罪， 悬疑， 剧情",
    "file": "movie-0645.html",
    "image": "./45.jpg",
    "category": "环球片库"
  },
  {
    "id": 646,
    "title": "苹果2020",
    "year": "2020",
    "region": "中国大陆",
    "genre": "科幻、悬疑、伦理",
    "file": "movie-0646.html",
    "image": "./46.jpg",
    "category": "战争历史"
  },
  {
    "id": 647,
    "title": "湖杀令",
    "year": "2017",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪",
    "file": "movie-0647.html",
    "image": "./47.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 648,
    "title": "老小阿凡提",
    "year": "2025",
    "region": "中国大陆",
    "genre": "喜剧冒险",
    "file": "movie-0648.html",
    "image": "./48.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 649,
    "title": "机场特警国语",
    "year": "2020",
    "region": "中国香港",
    "genre": "动作, 职业, 剧情",
    "file": "movie-0649.html",
    "image": "./49.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 650,
    "title": "跨海征东",
    "year": "2023",
    "region": "中国大陆",
    "genre": "历史 / 战争",
    "file": "movie-0650.html",
    "image": "./50.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 651,
    "title": "凡尔赛 第一季",
    "year": "2025",
    "region": "法国/加拿大",
    "genre": "历史/剧情/传记",
    "file": "movie-0651.html",
    "image": "./51.jpg",
    "category": "环球片库"
  },
  {
    "id": 652,
    "title": "偶尔",
    "year": "2023",
    "region": "日本",
    "genre": "剧情 / 生活",
    "file": "movie-0652.html",
    "image": "./52.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 653,
    "title": "窥机警探侦查事件",
    "year": "2024",
    "region": "韩国",
    "genre": "悬疑 / 犯罪 / 刑侦",
    "file": "movie-0653.html",
    "image": "./53.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 654,
    "title": "史提芬京之红玫凶宅",
    "year": "2024",
    "region": "美国",
    "genre": "恐怖",
    "file": "movie-0654.html",
    "image": "./54.jpg",
    "category": "战争历史"
  },
  {
    "id": 655,
    "title": "鬼也笑",
    "year": "2024",
    "region": "新加坡",
    "genre": "喜剧, 恐怖",
    "file": "movie-0655.html",
    "image": "./55.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 656,
    "title": "我的23岁之无码青春",
    "year": "2012",
    "region": "中国大陆",
    "genre": "剧情、悬疑、犯罪",
    "file": "movie-0656.html",
    "image": "./56.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 657,
    "title": "鬼门关3",
    "year": "2025",
    "region": "中国香港",
    "genre": "恐怖惊悚",
    "file": "movie-0657.html",
    "image": "./57.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 658,
    "title": "忍川之恋",
    "year": "2025",
    "region": "日本",
    "genre": "爱情 / 剧情 / 文学改编",
    "file": "movie-0658.html",
    "image": "./58.jpg",
    "category": "经典精选"
  },
  {
    "id": 659,
    "title": "地球最末日",
    "year": "2025",
    "region": "美国",
    "genre": "科幻 / 剧情",
    "file": "movie-0659.html",
    "image": "./59.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 660,
    "title": "蜡像",
    "year": "2025",
    "region": "英国",
    "genre": "恐怖 / 悬疑",
    "file": "movie-0660.html",
    "image": "./60.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 661,
    "title": "十万火急1997",
    "year": "1997",
    "region": "香港",
    "genre": "动作 / 灾难",
    "file": "movie-0661.html",
    "image": "./61.jpg",
    "category": "战争历史"
  },
  {
    "id": 662,
    "title": "土地与尘埃",
    "year": "2004",
    "region": "阿富汗",
    "genre": "剧情, 战争",
    "file": "movie-0662.html",
    "image": "./62.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 663,
    "title": "死了都要性",
    "year": "2021",
    "region": "德国",
    "genre": "喜剧 / 剧情 / 爱情",
    "file": "movie-0663.html",
    "image": "./63.jpg",
    "category": "经典精选"
  },
  {
    "id": 664,
    "title": "夺命十二小时",
    "year": "2025",
    "region": "中国香港",
    "genre": "动作，犯罪",
    "file": "movie-0664.html",
    "image": "./64.jpg",
    "category": "环球片库"
  },
  {
    "id": 665,
    "title": "人来客往",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 家庭",
    "file": "movie-0665.html",
    "image": "./65.jpg",
    "category": "环球片库"
  },
  {
    "id": 666,
    "title": "风流活宝贝",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧, 情色, 青春",
    "file": "movie-0666.html",
    "image": "./66.jpg",
    "category": "战争历史"
  },
  {
    "id": 667,
    "title": "第一声枪响",
    "year": "2024",
    "region": "中国内地",
    "genre": "军旅 / 悬疑",
    "file": "movie-0667.html",
    "image": "./67.jpg",
    "category": "战争历史"
  },
  {
    "id": 668,
    "title": "里斯本的故事",
    "year": "1994",
    "region": "德国/葡萄牙",
    "genre": "剧情，音乐，文艺",
    "file": "movie-0668.html",
    "image": "./68.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 669,
    "title": "死神千年血战篇",
    "year": "2024",
    "region": "日本",
    "genre": "动画，奇幻，动作",
    "file": "movie-0669.html",
    "image": "./69.jpg",
    "category": "经典精选"
  },
  {
    "id": 670,
    "title": "疯狂的麦穗儿",
    "year": "2024",
    "region": "中国大陆",
    "genre": "喜剧 / 动作",
    "file": "movie-0670.html",
    "image": "./70.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 671,
    "title": "老虎搏懵",
    "year": "1973",
    "region": "中国香港",
    "genre": "动作 / 喜剧 / 犯罪",
    "file": "movie-0671.html",
    "image": "./71.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 672,
    "title": "上帝未死",
    "year": "2023",
    "region": "美国",
    "genre": "剧情 / 悬疑",
    "file": "movie-0672.html",
    "image": "./72.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 673,
    "title": "疾速王后",
    "year": "2025",
    "region": "韩国",
    "genre": "动作 / 惊悚",
    "file": "movie-0673.html",
    "image": "./73.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 674,
    "title": "情场蟊贼",
    "year": "2023",
    "region": "法国",
    "genre": "爱情， 喜剧",
    "file": "movie-0674.html",
    "image": "./74.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 675,
    "title": "切尔诺贝利：深渊国语",
    "year": "2024",
    "region": "俄罗斯",
    "genre": "历史 / 灾难",
    "file": "movie-0675.html",
    "image": "./75.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 676,
    "title": "此恨绵绵",
    "year": "2025",
    "region": "中国香港",
    "genre": "爱情 / 悬疑",
    "file": "movie-0676.html",
    "image": "./76.jpg",
    "category": "战争历史"
  },
  {
    "id": 677,
    "title": "义海雄风",
    "year": "2023",
    "region": "香港",
    "genre": "动作 / 犯罪",
    "file": "movie-0677.html",
    "image": "./77.jpg",
    "category": "经典精选"
  },
  {
    "id": 678,
    "title": "布鲁特斯的心脏",
    "year": "2025",
    "region": "日本",
    "genre": "悬疑 / 科幻 / 犯罪",
    "file": "movie-0678.html",
    "image": "./78.jpg",
    "category": "经典精选"
  },
  {
    "id": 679,
    "title": "狼群出动",
    "year": "2025",
    "region": "中国大陆",
    "genre": "动作， 战争， 犯罪",
    "file": "movie-0679.html",
    "image": "./79.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 680,
    "title": "老闺蜜",
    "year": "2024",
    "region": "中国",
    "genre": "剧情 / 家庭 / 喜剧",
    "file": "movie-0680.html",
    "image": "./80.jpg",
    "category": "动画冒险"
  },
  {
    "id": 681,
    "title": "谁伴我一生",
    "year": "2008",
    "region": "韩国",
    "genre": "家庭 / 生活",
    "file": "movie-0681.html",
    "image": "./81.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 682,
    "title": "享受吧！罗马",
    "year": "2025",
    "region": "意大利",
    "genre": "喜剧, 爱情, 剧情",
    "file": "movie-0682.html",
    "image": "./82.jpg",
    "category": "动画冒险"
  },
  {
    "id": 683,
    "title": "世界边缘",
    "year": "2024",
    "region": "英国 / 澳大利亚",
    "genre": "科幻 / 悬疑",
    "file": "movie-0683.html",
    "image": "./83.jpg",
    "category": "经典精选"
  },
  {
    "id": 684,
    "title": "蜂巢的幽灵",
    "year": "1973",
    "region": "西班牙",
    "genre": "剧情 / 悬疑",
    "file": "movie-0684.html",
    "image": "./84.jpg",
    "category": "战争历史"
  },
  {
    "id": 685,
    "title": "小木偶奇遇记",
    "year": "2021",
    "region": "意大利 / 法国",
    "genre": "动画 / 奇幻 / 家庭",
    "file": "movie-0685.html",
    "image": "./85.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 686,
    "title": "代立军",
    "year": "2022",
    "region": "韩国",
    "genre": "历史 / 战争 / 剧情",
    "file": "movie-0686.html",
    "image": "./86.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 687,
    "title": "爱情，开袋即食",
    "year": "2024",
    "region": "中国大陆",
    "genre": "爱情, 喜剧, 科幻",
    "file": "movie-0687.html",
    "image": "./87.jpg",
    "category": "环球片库"
  },
  {
    "id": 688,
    "title": "首尔沙龙",
    "year": "2025",
    "region": "韩国",
    "genre": "剧情 / 悬疑 / 女性",
    "file": "movie-0688.html",
    "image": "./88.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 689,
    "title": "萨米大冒险",
    "year": "2024",
    "region": "比利时",
    "genre": "动画/冒险",
    "file": "movie-0689.html",
    "image": "./89.jpg",
    "category": "动画冒险"
  },
  {
    "id": 690,
    "title": "夏日房间",
    "year": "2023",
    "region": "法国",
    "genre": "爱情 / 剧情 / 青春",
    "file": "movie-0690.html",
    "image": "./90.jpg",
    "category": "战争历史"
  },
  {
    "id": 691,
    "title": "残宵留得梦依稀",
    "year": "2025",
    "region": "中国大陆 / 香港",
    "genre": "文艺 / 爱情",
    "file": "movie-0691.html",
    "image": "./91.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 692,
    "title": "枪声背后",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪 / 黑色电影",
    "file": "movie-0692.html",
    "image": "./92.jpg",
    "category": "动画冒险"
  },
  {
    "id": 693,
    "title": "甲骨文密码",
    "year": "2026",
    "region": "中国大陆",
    "genre": "悬疑 / 冒险 / 历史",
    "file": "movie-0693.html",
    "image": "./93.jpg",
    "category": "经典精选"
  },
  {
    "id": 694,
    "title": "救命下课铃诞生记",
    "year": "2021",
    "region": "美国",
    "genre": "传记, 喜剧",
    "file": "movie-0694.html",
    "image": "./94.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 695,
    "title": "葫芦小金刚",
    "year": "2026",
    "region": "中国大陆",
    "genre": "动作， 奇幻， 喜剧",
    "file": "movie-0695.html",
    "image": "./95.jpg",
    "category": "战争历史"
  },
  {
    "id": 696,
    "title": "雾水总统",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧, 爱情",
    "file": "movie-0696.html",
    "image": "./96.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 697,
    "title": "血宴2",
    "year": "2005",
    "region": "美国",
    "genre": "恐怖, 血腥",
    "file": "movie-0697.html",
    "image": "./97.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 698,
    "title": "我们的歌第一季",
    "year": "2024",
    "region": "中国大陆",
    "genre": "音乐 / 真人秀",
    "file": "movie-0698.html",
    "image": "./98.jpg",
    "category": "战争历史"
  },
  {
    "id": 699,
    "title": "相遇骤雨中",
    "year": "2023",
    "region": "日本",
    "genre": "爱情 / 剧情",
    "file": "movie-0699.html",
    "image": "./99.jpg",
    "category": "经典精选"
  },
  {
    "id": 700,
    "title": "体液ø",
    "year": "2025",
    "region": "日本",
    "genre": "科幻惊悚",
    "file": "movie-0700.html",
    "image": "./100.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 701,
    "title": "青春华丽丽",
    "year": "2024",
    "region": "中国大陆",
    "genre": "青春, 校园, 励志",
    "file": "movie-0701.html",
    "image": "./101.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 702,
    "title": "灰色气流",
    "year": "2023",
    "region": "中国",
    "genre": "悬疑 / 犯罪 / 职场",
    "file": "movie-0702.html",
    "image": "./102.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 703,
    "title": "伦敦钉子炸弹案：全面缉凶",
    "year": "2021",
    "region": "英国",
    "genre": "犯罪，纪实，惊悚",
    "file": "movie-0703.html",
    "image": "./103.jpg",
    "category": "经典精选"
  },
  {
    "id": 704,
    "title": "阖家辣",
    "year": "2022",
    "region": "中国香港",
    "genre": "喜剧, 家庭",
    "file": "movie-0704.html",
    "image": "./104.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 705,
    "title": "我人生中最精彩的瞬间",
    "year": "2023",
    "region": "韩国",
    "genre": "剧情 / 运动 / 励志",
    "file": "movie-0705.html",
    "image": "./105.jpg",
    "category": "动画冒险"
  },
  {
    "id": 706,
    "title": "怒火龙蛇",
    "year": "2023",
    "region": "中国香港",
    "genre": "动作，犯罪",
    "file": "movie-0706.html",
    "image": "./106.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 707,
    "title": "亦正亦邪",
    "year": "2018",
    "region": "美国",
    "genre": "动作, 犯罪",
    "file": "movie-0707.html",
    "image": "./107.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 708,
    "title": "多哥2022",
    "year": "2025",
    "region": "美国",
    "genre": "冒险 / 剧情",
    "file": "movie-0708.html",
    "image": "./108.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 709,
    "title": "北京·夜",
    "year": "2019",
    "region": "中国大陆",
    "genre": "剧情 / 文艺",
    "file": "movie-0709.html",
    "image": "./109.jpg",
    "category": "环球片库"
  },
  {
    "id": 710,
    "title": "青春38度",
    "year": "2004",
    "region": "中国大陆",
    "genre": "爱情、喜剧",
    "file": "movie-0710.html",
    "image": "./110.jpg",
    "category": "环球片库"
  },
  {
    "id": 711,
    "title": "如果墙会说话2",
    "year": "2025",
    "region": "中国香港",
    "genre": "剧情 / 爱情 / 奇幻",
    "file": "movie-0711.html",
    "image": "./111.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 712,
    "title": "荒岛欲艳",
    "year": "2026",
    "region": "泰国",
    "genre": "惊悚 / 剧情",
    "file": "movie-0712.html",
    "image": "./112.jpg",
    "category": "动画冒险"
  },
  {
    "id": 713,
    "title": "1947波士顿",
    "year": "2025",
    "region": "中国大陆, 美国",
    "genre": "历史, 运动, 剧情",
    "file": "movie-0713.html",
    "image": "./113.jpg",
    "category": "动画冒险"
  },
  {
    "id": 714,
    "title": "小查与寇弟的顶级冒险",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧 / 家庭 / 冒险",
    "file": "movie-0714.html",
    "image": "./114.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 715,
    "title": "鸡同鸭讲",
    "year": "2025",
    "region": "中国香港",
    "genre": "黑色喜剧",
    "file": "movie-0715.html",
    "image": "./115.jpg",
    "category": "动画冒险"
  },
  {
    "id": 716,
    "title": "相爱的停损点",
    "year": "2027",
    "region": "中国香港",
    "genre": "剧情 / 爱情 / 家庭",
    "file": "movie-0716.html",
    "image": "./116.jpg",
    "category": "环球片库"
  },
  {
    "id": 717,
    "title": "大世纪",
    "year": "2026",
    "region": "中国大陆",
    "genre": "历史、年代、史诗",
    "file": "movie-0717.html",
    "image": "./117.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 718,
    "title": "柔和祖国",
    "year": "2018",
    "region": "法国",
    "genre": "剧情，战争",
    "file": "movie-0718.html",
    "image": "./118.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 719,
    "title": "熊家餐馆第二季",
    "year": "2025",
    "region": "美国",
    "genre": "剧情, 喜剧",
    "file": "movie-0719.html",
    "image": "./119.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 720,
    "title": "日式欢喜冤家",
    "year": "2024",
    "region": "日本",
    "genre": "爱情， 喜剧， 漫改",
    "file": "movie-0720.html",
    "image": "./120.jpg",
    "category": "环球片库"
  },
  {
    "id": 721,
    "title": "天降之物",
    "year": "2025",
    "region": "日本",
    "genre": "奇幻 / 剧情 / 爱情",
    "file": "movie-0721.html",
    "image": "./121.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 722,
    "title": "魔法大逃亡",
    "year": "2024",
    "region": "英国",
    "genre": "奇幻 / 冒险 / 悬疑",
    "file": "movie-0722.html",
    "image": "./122.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 723,
    "title": "爱情是什么国语第二部",
    "year": "2026",
    "region": "中国大陆",
    "genre": "爱情 / 都市",
    "file": "movie-0723.html",
    "image": "./123.jpg",
    "category": "战争历史"
  },
  {
    "id": 724,
    "title": "信义",
    "year": "2024",
    "region": "韩国",
    "genre": "古装 / 政治 / 动作",
    "file": "movie-0724.html",
    "image": "./124.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 725,
    "title": "2019天猫双十一狂欢夜",
    "year": "2019",
    "region": "中国大陆",
    "genre": "歌舞 / 真人秀",
    "file": "movie-0725.html",
    "image": "./125.jpg",
    "category": "环球片库"
  },
  {
    "id": 726,
    "title": "阿福寻宝记",
    "year": "2023",
    "region": "中国内地",
    "genre": "家庭 / 冒险 / 喜剧",
    "file": "movie-0726.html",
    "image": "./126.jpg",
    "category": "战争历史"
  },
  {
    "id": 727,
    "title": "美国派：集体裸奔",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧 / 青春",
    "file": "movie-0727.html",
    "image": "./127.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 728,
    "title": "开局十个大帝都是我徒弟",
    "year": "2026",
    "region": "中国大陆",
    "genre": "奇幻 / 喜剧",
    "file": "movie-0728.html",
    "image": "./128.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 729,
    "title": "太空恋人",
    "year": "2028",
    "region": "中国大陆",
    "genre": "科幻/爱情",
    "file": "movie-0729.html",
    "image": "./129.jpg",
    "category": "经典精选"
  },
  {
    "id": 730,
    "title": "沙漠活宝",
    "year": "2022",
    "region": "中国大陆",
    "genre": "冒险喜剧",
    "file": "movie-0730.html",
    "image": "./130.jpg",
    "category": "经典精选"
  },
  {
    "id": 731,
    "title": "没说不爱你",
    "year": "2023",
    "region": "中国大陆",
    "genre": "爱情 / 悬疑 / 剧情",
    "file": "movie-0731.html",
    "image": "./131.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 732,
    "title": "边境无间",
    "year": "2017",
    "region": "中国大陆 / 缅甸",
    "genre": "犯罪动作",
    "file": "movie-0732.html",
    "image": "./132.jpg",
    "category": "经典精选"
  },
  {
    "id": 733,
    "title": "禁地大战",
    "year": "2026",
    "region": "美国",
    "genre": "科幻, 动作, 冒险",
    "file": "movie-0733.html",
    "image": "./133.jpg",
    "category": "动画冒险"
  },
  {
    "id": 734,
    "title": "阴错阳差",
    "year": "2023",
    "region": "中国香港",
    "genre": "喜剧 / 奇幻 / 爱情",
    "file": "movie-0734.html",
    "image": "./134.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 735,
    "title": "男女主人",
    "year": "2025",
    "region": "韩国",
    "genre": "悬疑/爱情",
    "file": "movie-0735.html",
    "image": "./135.jpg",
    "category": "动画冒险"
  },
  {
    "id": 736,
    "title": "七月的风是甜的",
    "year": "2023",
    "region": "中国台湾",
    "genre": "爱情 / 青春",
    "file": "movie-0736.html",
    "image": "./136.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 737,
    "title": "有点可爱的女子高中拷问社",
    "year": "2024",
    "region": "日本",
    "genre": "喜剧, 校园, 日常",
    "file": "movie-0737.html",
    "image": "./137.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 738,
    "title": "一代骄马",
    "year": "2025",
    "region": "爱尔兰",
    "genre": "剧情, 运动, 传记",
    "file": "movie-0738.html",
    "image": "./138.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 739,
    "title": "条顿骑士团",
    "year": "2026",
    "region": "德国/波兰",
    "genre": "历史, 战争, 动作",
    "file": "movie-0739.html",
    "image": "./139.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 740,
    "title": "手视",
    "year": "2024",
    "region": "法国",
    "genre": "艺术剧情",
    "file": "movie-0740.html",
    "image": "./140.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 741,
    "title": "最美一枝花",
    "year": "2024",
    "region": "中国台湾",
    "genre": "爱情，同性",
    "file": "movie-0741.html",
    "image": "./141.jpg",
    "category": "动画冒险"
  },
  {
    "id": 742,
    "title": "艳妓春色",
    "year": "2027",
    "region": "中国大陆",
    "genre": "古装， 剧情",
    "file": "movie-0742.html",
    "image": "./142.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 743,
    "title": "致演奏风的你",
    "year": "2024",
    "region": "中国大陆",
    "genre": "爱情、音乐、青春",
    "file": "movie-0743.html",
    "image": "./143.jpg",
    "category": "动画冒险"
  },
  {
    "id": 744,
    "title": "完全家族",
    "year": "2024",
    "region": "日本",
    "genre": "剧情、悬疑、伦理",
    "file": "movie-0744.html",
    "image": "./144.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 745,
    "title": "特工科恩",
    "year": "2019",
    "region": "美国 / 以色列",
    "genre": "谍战，传记，剧情",
    "file": "movie-0745.html",
    "image": "./145.jpg",
    "category": "战争历史"
  },
  {
    "id": 746,
    "title": "普里斯特法官",
    "year": "2023",
    "region": "美国",
    "genre": "剧情 / 犯罪 / 法律",
    "file": "movie-0746.html",
    "image": "./146.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 747,
    "title": "幸运里程",
    "year": "2024",
    "region": "中国",
    "genre": "剧情，家庭，喜剧",
    "file": "movie-0747.html",
    "image": "./147.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 748,
    "title": "东德蕾丝的爱欲",
    "year": "2025",
    "region": "德国",
    "genre": "爱情/剧情",
    "file": "movie-0748.html",
    "image": "./148.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 749,
    "title": "师士传说",
    "year": "2026",
    "region": "中国大陆",
    "genre": "科幻、机甲、冒险",
    "file": "movie-0749.html",
    "image": "./149.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 750,
    "title": "保罗和宝拉传奇",
    "year": "2012",
    "region": "德国",
    "genre": "奇幻冒险",
    "file": "movie-0750.html",
    "image": "./150.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 751,
    "title": "相欲在摩铁",
    "year": "2022",
    "region": "台湾",
    "genre": "爱情 / 情色 / 剧情",
    "file": "movie-0751.html",
    "image": "./1.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 752,
    "title": "网络陷阱：错误的爱",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪 / 剧情",
    "file": "movie-0752.html",
    "image": "./2.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 753,
    "title": "大佬斗和尚2：首尔斗一番",
    "year": "2025",
    "region": "韩国",
    "genre": "喜剧 / 动作",
    "file": "movie-0753.html",
    "image": "./3.jpg",
    "category": "经典精选"
  },
  {
    "id": 754,
    "title": "青春禁忌游戏",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 惊悚",
    "file": "movie-0754.html",
    "image": "./4.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 755,
    "title": "野蛮人入侵",
    "year": "2025",
    "region": "中国大陆",
    "genre": "动作 / 历史 / 战争",
    "file": "movie-0755.html",
    "image": "./5.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 756,
    "title": "阿富汗卢克",
    "year": "2012",
    "region": "芬兰",
    "genre": "战争, 喜剧, 黑色幽默",
    "file": "movie-0756.html",
    "image": "./6.jpg",
    "category": "战争历史"
  },
  {
    "id": 757,
    "title": "纳瓦荷",
    "year": "2025",
    "region": "美国",
    "genre": "悬疑 / 西部 / 神秘",
    "file": "movie-0757.html",
    "image": "./7.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 758,
    "title": "血色入侵",
    "year": "2008",
    "region": "瑞典 / 挪威",
    "genre": "恐怖 / 爱情",
    "file": "movie-0758.html",
    "image": "./8.jpg",
    "category": "战争历史"
  },
  {
    "id": 759,
    "title": "希布",
    "year": "2014",
    "region": "约旦 / 阿联酋",
    "genre": "冒险 / 战争",
    "file": "movie-0759.html",
    "image": "./9.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 760,
    "title": "一夜恩情粤语",
    "year": "1991",
    "region": "中国香港",
    "genre": "爱情， 剧情",
    "file": "movie-0760.html",
    "image": "./10.jpg",
    "category": "环球片库"
  },
  {
    "id": 761,
    "title": "30次",
    "year": "2017",
    "region": "日本",
    "genre": "爱情 / 剧情 / 伦理",
    "file": "movie-0761.html",
    "image": "./11.jpg",
    "category": "环球片库"
  },
  {
    "id": 762,
    "title": "战栗时刻",
    "year": "2025",
    "region": "韩国",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "file": "movie-0762.html",
    "image": "./12.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 763,
    "title": "渔家乐续集",
    "year": "1964",
    "region": "中国香港",
    "genre": "喜剧 / 歌舞",
    "file": "movie-0763.html",
    "image": "./13.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 764,
    "title": "牵线",
    "year": "2025",
    "region": "韩国",
    "genre": "悬疑，科幻，惊悚",
    "file": "movie-0764.html",
    "image": "./14.jpg",
    "category": "环球片库"
  },
  {
    "id": 765,
    "title": "卡迪拉克",
    "year": "2020",
    "region": "美国",
    "genre": "惊悚",
    "file": "movie-0765.html",
    "image": "./15.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 766,
    "title": "终结者3：机器的崛起",
    "year": "2009",
    "region": "美国",
    "genre": "动作 / 科幻",
    "file": "movie-0766.html",
    "image": "./16.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 767,
    "title": "比安布尔更黑",
    "year": "2021",
    "region": "法国",
    "genre": "悬疑 / 惊悚",
    "file": "movie-0767.html",
    "image": "./17.jpg",
    "category": "环球片库"
  },
  {
    "id": 768,
    "title": "爱上熟男行不行",
    "year": "2014",
    "region": "美国",
    "genre": "喜剧，爱情",
    "file": "movie-0768.html",
    "image": "./18.jpg",
    "category": "环球片库"
  },
  {
    "id": 769,
    "title": "法丽达的两千首歌",
    "year": "2022",
    "region": "埃及 / 法国",
    "genre": "传记 / 音乐",
    "file": "movie-0769.html",
    "image": "./19.jpg",
    "category": "经典精选"
  },
  {
    "id": 770,
    "title": "属于我们的城市",
    "year": "2024",
    "region": "中国大陆",
    "genre": "都市 / 群像",
    "file": "movie-0770.html",
    "image": "./20.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 771,
    "title": "保罗和宝拉传奇",
    "year": "2024",
    "region": "德国",
    "genre": "奇幻 / 爱情 / 冒险",
    "file": "movie-0771.html",
    "image": "./21.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 772,
    "title": "桐籽花开",
    "year": "2024",
    "region": "中国大陆",
    "genre": "爱情 / 历史 / 文艺",
    "file": "movie-0772.html",
    "image": "./22.jpg",
    "category": "动画冒险"
  },
  {
    "id": 773,
    "title": "比安布林更黑",
    "year": "2025",
    "region": "韩国",
    "genre": "惊悚, 犯罪, 悬疑",
    "file": "movie-0773.html",
    "image": "./23.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 774,
    "title": "布朗牧师",
    "year": "2015",
    "region": "英国",
    "genre": "剧情 / 悬疑 / 犯罪",
    "file": "movie-0774.html",
    "image": "./24.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 775,
    "title": "分歧者",
    "year": "2014",
    "region": "美国",
    "genre": "动作， 科幻， 冒险",
    "file": "movie-0775.html",
    "image": "./25.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 776,
    "title": "狂卷滚轮情",
    "year": "2021",
    "region": "中国台湾",
    "genre": "爱情 / 喜剧",
    "file": "movie-0776.html",
    "image": "./26.jpg",
    "category": "环球片库"
  },
  {
    "id": 777,
    "title": "新贵 第三季",
    "year": "2020",
    "region": "英国",
    "genre": "喜剧，历史",
    "file": "movie-0777.html",
    "image": "./27.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 778,
    "title": "天宫宝盒",
    "year": "2024",
    "region": "中国大陆",
    "genre": "奇幻 / 冒险",
    "file": "movie-0778.html",
    "image": "./28.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 779,
    "title": "衣橱国语",
    "year": "2024",
    "region": "中国台湾",
    "genre": "恐怖 / 家庭",
    "file": "movie-0779.html",
    "image": "./29.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 780,
    "title": "家庭录像",
    "year": "2022",
    "region": "西班牙",
    "genre": "恐怖， 伪纪录片， 心理",
    "file": "movie-0780.html",
    "image": "./30.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 781,
    "title": "四月的雨",
    "year": "2023",
    "region": "韩国",
    "genre": "剧情, 爱情",
    "file": "movie-0781.html",
    "image": "./31.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 782,
    "title": "福星高照小孖宝",
    "year": "2023",
    "region": "香港",
    "genre": "喜剧/家庭",
    "file": "movie-0782.html",
    "image": "./32.jpg",
    "category": "环球片库"
  },
  {
    "id": 783,
    "title": "五世同堂",
    "year": "2026",
    "region": "中国大陆",
    "genre": "家庭，剧情",
    "file": "movie-0783.html",
    "image": "./33.jpg",
    "category": "环球片库"
  },
  {
    "id": 784,
    "title": "霸王大系龙骑士",
    "year": "1994",
    "region": "日本",
    "genre": "奇幻 / 冒险 / 机甲",
    "file": "movie-0784.html",
    "image": "./34.jpg",
    "category": "战争历史"
  },
  {
    "id": 785,
    "title": "怒火街头国语",
    "year": "2024",
    "region": "中国香港",
    "genre": "动作/律政",
    "file": "movie-0785.html",
    "image": "./35.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 786,
    "title": "我的女友",
    "year": "2023",
    "region": "泰国",
    "genre": "爱情 / 恐怖 / 悬疑",
    "file": "movie-0786.html",
    "image": "./36.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 787,
    "title": "一曲秦腔",
    "year": "2018",
    "region": "中国大陆",
    "genre": "剧情",
    "file": "movie-0787.html",
    "image": "./37.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 788,
    "title": "海葵",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 家庭 / 犯罪",
    "file": "movie-0788.html",
    "image": "./38.jpg",
    "category": "经典精选"
  },
  {
    "id": 789,
    "title": "我是大美人第二季",
    "year": "2024",
    "region": "中国大陆",
    "genre": "真人秀时尚",
    "file": "movie-0789.html",
    "image": "./39.jpg",
    "category": "战争历史"
  },
  {
    "id": 790,
    "title": "卧虎潜龙",
    "year": "2024",
    "region": "中国香港 / 中国大陆",
    "genre": "动作 / 犯罪 / 悬疑",
    "file": "movie-0790.html",
    "image": "./40.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 791,
    "title": "下一站天堂",
    "year": "2026",
    "region": "中国",
    "genre": "剧情, 奇幻",
    "file": "movie-0791.html",
    "image": "./41.jpg",
    "category": "动画冒险"
  },
  {
    "id": 792,
    "title": "侠女：剑之记忆",
    "year": "2025",
    "region": "中国大陆",
    "genre": "武侠 / 动作 / 剧情",
    "file": "movie-0792.html",
    "image": "./42.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 793,
    "title": "吃货达人打卡吧",
    "year": "2024",
    "region": "中国大陆",
    "genre": "真人秀 / 美食",
    "file": "movie-0793.html",
    "image": "./43.jpg",
    "category": "战争历史"
  },
  {
    "id": 794,
    "title": "罗尼·库尔曼：国王",
    "year": "2024",
    "region": "美国",
    "genre": "传记 / 体育",
    "file": "movie-0794.html",
    "image": "./44.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 795,
    "title": "旧爱灵灵妻",
    "year": "2024",
    "region": "中国台湾",
    "genre": "爱情 / 奇幻 / 喜剧",
    "file": "movie-0795.html",
    "image": "./45.jpg",
    "category": "动画冒险"
  },
  {
    "id": 796,
    "title": "我母亲给我儿子的信",
    "year": "2024",
    "region": "韩国",
    "genre": "家庭 / 剧情",
    "file": "movie-0796.html",
    "image": "./46.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 797,
    "title": "死亡夺命针",
    "year": "1998",
    "region": "中国香港",
    "genre": "犯罪",
    "file": "movie-0797.html",
    "image": "./47.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 798,
    "title": "刀背藏身",
    "year": "2017",
    "region": "中国大陆",
    "genre": "剧情 / 武侠 / 动作",
    "file": "movie-0798.html",
    "image": "./48.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 799,
    "title": "未寄出的信",
    "year": "2024",
    "region": "英国",
    "genre": "剧情 / 爱情",
    "file": "movie-0799.html",
    "image": "./49.jpg",
    "category": "动画冒险"
  },
  {
    "id": 800,
    "title": "捉鬼有限公司",
    "year": "2024",
    "region": "中国香港",
    "genre": "喜剧 / 恐怖 / 奇幻",
    "file": "movie-0800.html",
    "image": "./50.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 801,
    "title": "宝拉",
    "year": "2016",
    "region": "德国",
    "genre": "剧情, 传记",
    "file": "movie-0801.html",
    "image": "./51.jpg",
    "category": "战争历史"
  },
  {
    "id": 802,
    "title": "大器晚成第二季",
    "year": "2025",
    "region": "美国",
    "genre": "剧情, 喜剧",
    "file": "movie-0802.html",
    "image": "./52.jpg",
    "category": "动画冒险"
  },
  {
    "id": 803,
    "title": "私人担保有限公司",
    "year": "2019",
    "region": "新加坡",
    "genre": "剧情 / 职场 / 黑色幽默",
    "file": "movie-0803.html",
    "image": "./53.jpg",
    "category": "环球片库"
  },
  {
    "id": 804,
    "title": "男·色旅程",
    "year": "2026",
    "region": "日本",
    "genre": "剧情 / 同性 / 公路",
    "file": "movie-0804.html",
    "image": "./54.jpg",
    "category": "环球片库"
  },
  {
    "id": 805,
    "title": "三颗星彩色冒险",
    "year": "2018",
    "region": "日本",
    "genre": "日常 / 治愈 / 喜剧",
    "file": "movie-0805.html",
    "image": "./55.jpg",
    "category": "动画冒险"
  },
  {
    "id": 806,
    "title": "憨夫成龙国语",
    "year": "2005",
    "region": "中国香港",
    "genre": "喜剧 / 爱情",
    "file": "movie-0806.html",
    "image": "./56.jpg",
    "category": "动画冒险"
  },
  {
    "id": 807,
    "title": "投币储物柜",
    "year": "2023",
    "region": "日本",
    "genre": "悬疑、奇幻",
    "file": "movie-0807.html",
    "image": "./57.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 808,
    "title": "梦想临时工",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情, 职场",
    "file": "movie-0808.html",
    "image": "./58.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 809,
    "title": "灵性的动物",
    "year": "2021",
    "region": "中国大陆/台湾",
    "genre": "纪录片， 自然， 人文",
    "file": "movie-0809.html",
    "image": "./59.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 810,
    "title": "杰克的生日愿望",
    "year": "2019",
    "region": "美国",
    "genre": "家庭，奇幻",
    "file": "movie-0810.html",
    "image": "./60.jpg",
    "category": "经典精选"
  },
  {
    "id": 811,
    "title": "虾仔爹哋粤语",
    "year": "2024",
    "region": "中国香港",
    "genre": "家庭 / 喜剧",
    "file": "movie-0811.html",
    "image": "./61.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 812,
    "title": "惊喜少年",
    "year": "2021",
    "region": "中国大陆",
    "genre": "喜剧 / 奇幻",
    "file": "movie-0812.html",
    "image": "./62.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 813,
    "title": "轻拍翻转小魔女",
    "year": "2024",
    "region": "日本",
    "genre": "奇幻, 治愈",
    "file": "movie-0813.html",
    "image": "./63.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 814,
    "title": "流氓学生",
    "year": "2022",
    "region": "中国大陆",
    "genre": "剧情 / 青春",
    "file": "movie-0814.html",
    "image": "./64.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 815,
    "title": "原则问题",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 职场",
    "file": "movie-0815.html",
    "image": "./65.jpg",
    "category": "战争历史"
  },
  {
    "id": 816,
    "title": "草原上的人们",
    "year": "2022",
    "region": "中国大陆",
    "genre": "剧情 / 文艺",
    "file": "movie-0816.html",
    "image": "./66.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 817,
    "title": "无名伟人",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情 / 历史",
    "file": "movie-0817.html",
    "image": "./67.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 818,
    "title": "梦境",
    "year": "2021",
    "region": "韩国",
    "genre": "科幻 / 悬疑",
    "file": "movie-0818.html",
    "image": "./68.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 819,
    "title": "血腥风暴",
    "year": "2019",
    "region": "韩国",
    "genre": "动作",
    "file": "movie-0819.html",
    "image": "./69.jpg",
    "category": "战争历史"
  },
  {
    "id": 820,
    "title": "一起一起这里那里",
    "year": "2012",
    "region": "日本",
    "genre": "喜剧 / 爱情",
    "file": "movie-0820.html",
    "image": "./70.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 821,
    "title": "超能劲处男",
    "year": "2024",
    "region": "韩国",
    "genre": "喜剧, 科幻, 奇幻",
    "file": "movie-0821.html",
    "image": "./71.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 822,
    "title": "黎明前死",
    "year": "2025",
    "region": "韩国",
    "genre": "犯罪, 惊悚, 悬疑",
    "file": "movie-0822.html",
    "image": "./72.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 823,
    "title": "西部大醉侠",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧, 西部",
    "file": "movie-0823.html",
    "image": "./73.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 824,
    "title": "太阳之战",
    "year": "2026",
    "region": "美国",
    "genre": "科幻，动作，战争",
    "file": "movie-0824.html",
    "image": "./74.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 825,
    "title": "维和防暴队",
    "year": "2026",
    "region": "中国大陆",
    "genre": "动作 / 剧情",
    "file": "movie-0825.html",
    "image": "./75.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 826,
    "title": "网红大事件",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 剧情 / 喜剧",
    "file": "movie-0826.html",
    "image": "./76.jpg",
    "category": "环球片库"
  },
  {
    "id": 827,
    "title": "神秘工作",
    "year": "2024",
    "region": "日本",
    "genre": "悬疑，职场，剧情",
    "file": "movie-0827.html",
    "image": "./77.jpg",
    "category": "动画冒险"
  },
  {
    "id": 828,
    "title": "瞒天凶嫌",
    "year": "2025",
    "region": "西班牙",
    "genre": "悬疑惊悚",
    "file": "movie-0828.html",
    "image": "./78.jpg",
    "category": "动画冒险"
  },
  {
    "id": 829,
    "title": "澎湖海战",
    "year": "2023",
    "region": "中国台湾",
    "genre": "历史，战争，古装",
    "file": "movie-0829.html",
    "image": "./79.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 830,
    "title": "上演",
    "year": "2024",
    "region": "中国香港",
    "genre": "剧情 / 喜剧",
    "file": "movie-0830.html",
    "image": "./80.jpg",
    "category": "经典精选"
  },
  {
    "id": 831,
    "title": "中途岛战役",
    "year": "2019",
    "region": "美国",
    "genre": "战争 / 历史 / 动作",
    "file": "movie-0831.html",
    "image": "./81.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 832,
    "title": "汉城火车",
    "year": "2024",
    "region": "韩国",
    "genre": "悬疑 / 惊悚",
    "file": "movie-0832.html",
    "image": "./82.jpg",
    "category": "动画冒险"
  },
  {
    "id": 833,
    "title": "红色通道",
    "year": "2022",
    "region": "中国大陆",
    "genre": "谍战 / 悬疑 / 历史",
    "file": "movie-0833.html",
    "image": "./83.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 834,
    "title": "阿凡达3",
    "year": "2026",
    "region": "美国",
    "genre": "科幻 / 冒险",
    "file": "movie-0834.html",
    "image": "./84.jpg",
    "category": "经典精选"
  },
  {
    "id": 835,
    "title": "拐个兰陵王做影帝第二季",
    "year": "2024",
    "region": "中国大陆",
    "genre": "喜剧, 爱情, 奇幻, 娱乐圈",
    "file": "movie-0835.html",
    "image": "./85.jpg",
    "category": "战争历史"
  },
  {
    "id": 836,
    "title": "被消失的家园",
    "year": "2025",
    "region": "英国",
    "genre": "剧情，历史",
    "file": "movie-0836.html",
    "image": "./86.jpg",
    "category": "经典精选"
  },
  {
    "id": 837,
    "title": "少女大盗",
    "year": "2025",
    "region": "韩国",
    "genre": "喜剧， 动作， 犯罪",
    "file": "movie-0837.html",
    "image": "./87.jpg",
    "category": "动画冒险"
  },
  {
    "id": 838,
    "title": "寡妇之恋",
    "year": "2023",
    "region": "印度",
    "genre": "剧情 / 爱情 / 社会",
    "file": "movie-0838.html",
    "image": "./88.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 839,
    "title": "恋爱播放列表",
    "year": "2021",
    "region": "韩国",
    "genre": "浪漫爱情",
    "file": "movie-0839.html",
    "image": "./89.jpg",
    "category": "战争历史"
  },
  {
    "id": 840,
    "title": "天天初体验",
    "year": "2024",
    "region": "中国台湾",
    "genre": "爱情, 青春",
    "file": "movie-0840.html",
    "image": "./90.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 841,
    "title": "强剑粤语",
    "year": "2006",
    "region": "中国香港",
    "genre": "武侠、古装、喜剧",
    "file": "movie-0841.html",
    "image": "./91.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 842,
    "title": "校花前传之很纯很暧昧",
    "year": "2017",
    "region": "中国大陆",
    "genre": "喜剧 / 爱情 / 校园",
    "file": "movie-0842.html",
    "image": "./92.jpg",
    "category": "环球片库"
  },
  {
    "id": 843,
    "title": "育种",
    "year": "2017",
    "region": "美国/加拿大",
    "genre": "科幻， 惊悚， 伦理",
    "file": "movie-0843.html",
    "image": "./93.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 844,
    "title": "奇迹缔造者第三季",
    "year": "2026",
    "region": "美国",
    "genre": "喜剧 / 奇幻 / 职场",
    "file": "movie-0844.html",
    "image": "./94.jpg",
    "category": "动画冒险"
  },
  {
    "id": 845,
    "title": "卡贾基",
    "year": "2024",
    "region": "英国",
    "genre": "战争, 历史, 剧情",
    "file": "movie-0845.html",
    "image": "./95.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 846,
    "title": "如何成为拉丁情人",
    "year": "2017",
    "region": "美国",
    "genre": "喜剧 / 爱情",
    "file": "movie-0846.html",
    "image": "./96.jpg",
    "category": "动画冒险"
  },
  {
    "id": 847,
    "title": "神龙法师",
    "year": "2025",
    "region": "中国大陆",
    "genre": "奇幻, 动作, 喜剧",
    "file": "movie-0847.html",
    "image": "./97.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 848,
    "title": "小丑",
    "year": "2019",
    "region": "美国",
    "genre": "剧情, 惊悚, 犯罪",
    "file": "movie-0848.html",
    "image": "./98.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 849,
    "title": "团圆饭",
    "year": "2023",
    "region": "中国台湾",
    "genre": "剧情 / 家庭",
    "file": "movie-0849.html",
    "image": "./99.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 850,
    "title": "挚爱奇缘",
    "year": "2003",
    "region": "台湾",
    "genre": "爱情, 家庭",
    "file": "movie-0850.html",
    "image": "./100.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 851,
    "title": "风流四美人",
    "year": "2024",
    "region": "中国香港",
    "genre": "剧情, 爱情, 悬疑",
    "file": "movie-0851.html",
    "image": "./101.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 852,
    "title": "女人河",
    "year": "2028",
    "region": "中国大陆",
    "genre": "剧情 / 女性 / 乡村",
    "file": "movie-0852.html",
    "image": "./102.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 853,
    "title": "假面骑士极狐国语",
    "year": "2022",
    "region": "日本",
    "genre": "特摄, 动作, 科幻",
    "file": "movie-0853.html",
    "image": "./103.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 854,
    "title": "天方艳史",
    "year": "2025",
    "region": "中国大陆",
    "genre": "古装, 奇幻, 爱情",
    "file": "movie-0854.html",
    "image": "./104.jpg",
    "category": "动画冒险"
  },
  {
    "id": 855,
    "title": "潜藏海底的生物",
    "year": "2017",
    "region": "美国 / 英国",
    "genre": "科幻 / 灾难 / 惊悚",
    "file": "movie-0855.html",
    "image": "./105.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 856,
    "title": "我讨厌耶稣",
    "year": "2019",
    "region": "日本",
    "genre": "剧情 / 青春 / 宗教",
    "file": "movie-0856.html",
    "image": "./106.jpg",
    "category": "环球片库"
  },
  {
    "id": 857,
    "title": "孽爱伤痕",
    "year": "2024",
    "region": "中国香港",
    "genre": "爱情 / 悬疑",
    "file": "movie-0857.html",
    "image": "./107.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 858,
    "title": "香港将于33年后毁灭",
    "year": "2028",
    "region": "中国香港",
    "genre": "科幻、灾难、悬疑",
    "file": "movie-0858.html",
    "image": "./108.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 859,
    "title": "夏洛克的孩子们",
    "year": "2025",
    "region": "英国",
    "genre": "悬疑， 剧情",
    "file": "movie-0859.html",
    "image": "./109.jpg",
    "category": "环球片库"
  },
  {
    "id": 860,
    "title": "打错的电话",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑，犯罪",
    "file": "movie-0860.html",
    "image": "./110.jpg",
    "category": "动画冒险"
  },
  {
    "id": 861,
    "title": "异能学姐",
    "year": "2024",
    "region": "韩国",
    "genre": "奇幻",
    "file": "movie-0861.html",
    "image": "./111.jpg",
    "category": "战争历史"
  },
  {
    "id": 862,
    "title": "天国餐馆",
    "year": "2019",
    "region": "日本",
    "genre": "喜剧 / 美食",
    "file": "movie-0862.html",
    "image": "./112.jpg",
    "category": "动画冒险"
  },
  {
    "id": 863,
    "title": "情有千千劫",
    "year": "2003",
    "region": "中国香港",
    "genre": "爱情， 悬疑",
    "file": "movie-0863.html",
    "image": "./113.jpg",
    "category": "经典精选"
  },
  {
    "id": 864,
    "title": "天国的孩子们",
    "year": "2026",
    "region": "西班牙 / 墨西哥",
    "genre": "剧情 / 奇幻",
    "file": "movie-0864.html",
    "image": "./114.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 865,
    "title": "朱拜达",
    "year": "2024",
    "region": "伊朗 / 法国",
    "genre": "剧情 / 女性 / 社会",
    "file": "movie-0865.html",
    "image": "./115.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 866,
    "title": "恋爱的正确姿势",
    "year": "2024",
    "region": "韩国",
    "genre": "爱情 / 喜剧",
    "file": "movie-0866.html",
    "image": "./116.jpg",
    "category": "经典精选"
  },
  {
    "id": 867,
    "title": "七月好风",
    "year": "2026",
    "region": "中国台湾",
    "genre": "剧情 / 家庭 / 文艺",
    "file": "movie-0867.html",
    "image": "./117.jpg",
    "category": "动画冒险"
  },
  {
    "id": 868,
    "title": "秋光变奏曲",
    "year": "2019",
    "region": "日本",
    "genre": "剧情, 音乐",
    "file": "movie-0868.html",
    "image": "./118.jpg",
    "category": "经典精选"
  },
  {
    "id": 869,
    "title": "亚马逊萌猴奇遇记",
    "year": "2024",
    "region": "法国 / 巴西",
    "genre": "冒险 / 纪录片风格",
    "file": "movie-0869.html",
    "image": "./119.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 870,
    "title": "007之黄金眼",
    "year": "2028",
    "region": "英国",
    "genre": "动作, 惊悚",
    "file": "movie-0870.html",
    "image": "./120.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 871,
    "title": "我家那闺女2024",
    "year": "2024",
    "region": "中国大陆",
    "genre": "真人秀 / 家庭",
    "file": "movie-0871.html",
    "image": "./121.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 872,
    "title": "翻兜情人",
    "year": "2018",
    "region": "中国香港",
    "genre": "爱情, 喜剧, 剧情",
    "file": "movie-0872.html",
    "image": "./122.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 873,
    "title": "教堂幽灵",
    "year": "2014",
    "region": "英国",
    "genre": "恐怖 / 悬疑",
    "file": "movie-0873.html",
    "image": "./123.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 874,
    "title": "选美皇后的倒带人生",
    "year": "2024",
    "region": "美国",
    "genre": "剧情 / 悬疑",
    "file": "movie-0874.html",
    "image": "./124.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 875,
    "title": "熟悉的人",
    "year": "2022",
    "region": "韩国",
    "genre": "悬疑，惊悚",
    "file": "movie-0875.html",
    "image": "./125.jpg",
    "category": "环球片库"
  },
  {
    "id": 876,
    "title": "再见小妈",
    "year": "2024",
    "region": "中国台湾",
    "genre": "剧情 / 家庭",
    "file": "movie-0876.html",
    "image": "./126.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 877,
    "title": "禁婚令",
    "year": "2024",
    "region": "韩国",
    "genre": "古装 / 爱情 / 喜剧",
    "file": "movie-0877.html",
    "image": "./127.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 878,
    "title": "咖非正义",
    "year": "2023",
    "region": "中国台湾",
    "genre": "剧情 / 喜剧 / 悬疑",
    "file": "movie-0878.html",
    "image": "./128.jpg",
    "category": "动画冒险"
  },
  {
    "id": 879,
    "title": "弗雷德里克·菲茨尔的教育",
    "year": "2023",
    "region": "英国",
    "genre": "剧情， 惊悚",
    "file": "movie-0879.html",
    "image": "./129.jpg",
    "category": "战争历史"
  },
  {
    "id": 880,
    "title": "一路顺疯：迷幻趣事",
    "year": "2020",
    "region": "美国",
    "genre": "喜剧，冒险",
    "file": "movie-0880.html",
    "image": "./130.jpg",
    "category": "环球片库"
  },
  {
    "id": 881,
    "title": "刺客与保镖",
    "year": "1992",
    "region": "中国香港",
    "genre": "动作，喜剧",
    "file": "movie-0881.html",
    "image": "./131.jpg",
    "category": "战争历史"
  },
  {
    "id": 882,
    "title": "寻车奇遇",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧, 冒险",
    "file": "movie-0882.html",
    "image": "./132.jpg",
    "category": "动画冒险"
  },
  {
    "id": 883,
    "title": "无依男孩",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 儿童",
    "file": "movie-0883.html",
    "image": "./133.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 884,
    "title": "帮派",
    "year": "2023",
    "region": "巴西",
    "genre": "犯罪 / 剧情",
    "file": "movie-0884.html",
    "image": "./134.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 885,
    "title": "厨子当官",
    "year": "2018",
    "region": "中国内地",
    "genre": "古装 / 喜剧",
    "file": "movie-0885.html",
    "image": "./135.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 886,
    "title": "假面骑士电王",
    "year": "2007",
    "region": "日本",
    "genre": "动作/科幻/喜剧",
    "file": "movie-0886.html",
    "image": "./136.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 887,
    "title": "1965眼中的巴黎",
    "year": "2019",
    "region": "法国",
    "genre": "爱情 / 历史",
    "file": "movie-0887.html",
    "image": "./137.jpg",
    "category": "环球片库"
  },
  {
    "id": 888,
    "title": "我盛大的西班牙婚礼",
    "year": "2019",
    "region": "西班牙 / 美国",
    "genre": "喜剧，爱情",
    "file": "movie-0888.html",
    "image": "./138.jpg",
    "category": "战争历史"
  },
  {
    "id": 889,
    "title": "盘龙卧虎高山顶",
    "year": "2025",
    "region": "中国大陆",
    "genre": "历史，剧情",
    "file": "movie-0889.html",
    "image": "./139.jpg",
    "category": "经典精选"
  },
  {
    "id": 890,
    "title": "我的小确幸",
    "year": "2024",
    "region": "日本",
    "genre": "剧情, 家庭",
    "file": "movie-0890.html",
    "image": "./140.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 891,
    "title": "夜行者",
    "year": "2014",
    "region": "美国",
    "genre": "犯罪 / 惊悚",
    "file": "movie-0891.html",
    "image": "./141.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 892,
    "title": "犬夜叉:红莲之蓬莱岛",
    "year": "2004",
    "region": "日本",
    "genre": "奇幻，动作",
    "file": "movie-0892.html",
    "image": "./142.jpg",
    "category": "经典精选"
  },
  {
    "id": 893,
    "title": "少奇同志",
    "year": "2025",
    "region": "中国大陆",
    "genre": "传记 / 历史",
    "file": "movie-0893.html",
    "image": "./143.jpg",
    "category": "环球片库"
  },
  {
    "id": 894,
    "title": "我的警察",
    "year": "2022",
    "region": "美国",
    "genre": "爱情, 犯罪",
    "file": "movie-0894.html",
    "image": "./144.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 895,
    "title": "穿靴子的猫：萌猫三剑客",
    "year": "2023",
    "region": "美国",
    "genre": "动画, 冒险",
    "file": "movie-0895.html",
    "image": "./145.jpg",
    "category": "战争历史"
  },
  {
    "id": 896,
    "title": "天才佳人",
    "year": "2020",
    "region": "中国大陆",
    "genre": "爱情, 喜剧",
    "file": "movie-0896.html",
    "image": "./146.jpg",
    "category": "经典精选"
  },
  {
    "id": 897,
    "title": "一路逆风",
    "year": "2025",
    "region": "香港",
    "genre": "剧情 / 冒险 / 灾难",
    "file": "movie-0897.html",
    "image": "./147.jpg",
    "category": "环球片库"
  },
  {
    "id": 898,
    "title": "寻找寄生体",
    "year": "2025",
    "region": "美国",
    "genre": "科幻，惊悚",
    "file": "movie-0898.html",
    "image": "./148.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 899,
    "title": "别喝生水",
    "year": "2023",
    "region": "中国大陆",
    "genre": "悬疑、惊悚、环保",
    "file": "movie-0899.html",
    "image": "./149.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 900,
    "title": "皮特·戴维森：我仍在纽约",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧、脱口秀、自传",
    "file": "movie-0900.html",
    "image": "./150.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 901,
    "title": "秘门交易丑闻",
    "year": "2024",
    "region": "韩国",
    "genre": "悬疑 / 政治",
    "file": "movie-0901.html",
    "image": "./1.jpg",
    "category": "经典精选"
  },
  {
    "id": 902,
    "title": "阿比盖尔",
    "year": "2025",
    "region": "美国",
    "genre": "恐怖, 惊悚",
    "file": "movie-0902.html",
    "image": "./2.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 903,
    "title": "德国09",
    "year": "2009",
    "region": "德国",
    "genre": "剧情，合集",
    "file": "movie-0903.html",
    "image": "./3.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 904,
    "title": "暗数杀人",
    "year": "2018",
    "region": "韩国",
    "genre": "犯罪, 惊悚, 剧情",
    "file": "movie-0904.html",
    "image": "./4.jpg",
    "category": "战争历史"
  },
  {
    "id": 905,
    "title": "咕咚学院第一季",
    "year": "2025",
    "region": "中国大陆",
    "genre": "喜剧 / 奇幻 / 校园",
    "file": "movie-0905.html",
    "image": "./5.jpg",
    "category": "环球片库"
  },
  {
    "id": 906,
    "title": "锦绣恒河",
    "year": "2025",
    "region": "印度 / 英国",
    "genre": "剧情 / 历史",
    "file": "movie-0906.html",
    "image": "./6.jpg",
    "category": "动画冒险"
  },
  {
    "id": 907,
    "title": "已故的帕斯卡尔",
    "year": "2025",
    "region": "意大利",
    "genre": "剧情，奇幻，哲理",
    "file": "movie-0907.html",
    "image": "./7.jpg",
    "category": "经典精选"
  },
  {
    "id": 908,
    "title": "少年杨家将",
    "year": "2006",
    "region": "中国大陆",
    "genre": "古装, 动作, 剧情",
    "file": "movie-0908.html",
    "image": "./8.jpg",
    "category": "环球片库"
  },
  {
    "id": 909,
    "title": "2025重阳奇妙游",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 奇幻 / 家庭",
    "file": "movie-0909.html",
    "image": "./9.jpg",
    "category": "环球片库"
  },
  {
    "id": 910,
    "title": "亚历山大内夫斯基",
    "year": "2029",
    "region": "俄罗斯",
    "genre": "历史 / 传记 / 战争",
    "file": "movie-0910.html",
    "image": "./10.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 911,
    "title": "秦时明月之沧海横流",
    "year": "2020",
    "region": "中国大陆",
    "genre": "历史 / 武侠 / 玄幻",
    "file": "movie-0911.html",
    "image": "./11.jpg",
    "category": "环球片库"
  },
  {
    "id": 912,
    "title": "惹鬼回路",
    "year": "2006",
    "region": "日本",
    "genre": "恐怖/悬疑/灵异",
    "file": "movie-0912.html",
    "image": "./12.jpg",
    "category": "环球片库"
  },
  {
    "id": 913,
    "title": "抱得美人归",
    "year": "2023",
    "region": "美国",
    "genre": "喜剧，爱情",
    "file": "movie-0913.html",
    "image": "./13.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 914,
    "title": "耶里肖",
    "year": "2024",
    "region": "德国",
    "genre": "剧情， 西部， 犯罪",
    "file": "movie-0914.html",
    "image": "./14.jpg",
    "category": "战争历史"
  },
  {
    "id": 915,
    "title": "白色荣光",
    "year": "2020",
    "region": "日本",
    "genre": "医疗, 悬疑, 剧情",
    "file": "movie-0915.html",
    "image": "./15.jpg",
    "category": "动画冒险"
  },
  {
    "id": 916,
    "title": "南方公园：流量大战2",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧, 动画, 讽刺",
    "file": "movie-0916.html",
    "image": "./16.jpg",
    "category": "战争历史"
  },
  {
    "id": 917,
    "title": "秘密手稿",
    "year": "2026",
    "region": "爱尔兰",
    "genre": "剧情, 历史",
    "file": "movie-0917.html",
    "image": "./17.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 918,
    "title": "狩猎狗",
    "year": "2025",
    "region": "美国",
    "genre": "惊悚, 战争",
    "file": "movie-0918.html",
    "image": "./18.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 919,
    "title": "自由的怒吼",
    "year": "2025",
    "region": "南非",
    "genre": "历史 / 动作",
    "file": "movie-0919.html",
    "image": "./19.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 920,
    "title": "天牢勇士",
    "year": "2025",
    "region": "中国大陆",
    "genre": "动作 / 历史",
    "file": "movie-0920.html",
    "image": "./20.jpg",
    "category": "动画冒险"
  },
  {
    "id": 921,
    "title": "蒙哥湖",
    "year": "2024",
    "region": "澳大利亚",
    "genre": "恐怖 / 伪纪录片",
    "file": "movie-0921.html",
    "image": "./21.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 922,
    "title": "蛇之道",
    "year": "2025",
    "region": "日本",
    "genre": "悬疑, 犯罪",
    "file": "movie-0922.html",
    "image": "./22.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 923,
    "title": "大偷袭",
    "year": "2024",
    "region": "美国 / 菲律宾",
    "genre": "战争动作",
    "file": "movie-0923.html",
    "image": "./23.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 924,
    "title": "郑板桥粤语",
    "year": "2025",
    "region": "中国香港",
    "genre": "传记，历史",
    "file": "movie-0924.html",
    "image": "./24.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 925,
    "title": "天煞撞正怪怪兽之变种南瓜",
    "year": "2025",
    "region": "中国香港",
    "genre": "喜剧, 科幻, 恐怖",
    "file": "movie-0925.html",
    "image": "./25.jpg",
    "category": "战争历史"
  },
  {
    "id": 926,
    "title": "锁住的天空",
    "year": "2025",
    "region": "中国大陆 / 德国",
    "genre": "剧情 / 儿童 / 奇幻",
    "file": "movie-0926.html",
    "image": "./26.jpg",
    "category": "动画冒险"
  },
  {
    "id": 927,
    "title": "拇指仙童",
    "year": "2026",
    "region": "法国",
    "genre": "奇幻， 冒险， 家庭",
    "file": "movie-0927.html",
    "image": "./27.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 928,
    "title": "大嘴巴第四季",
    "year": "2025",
    "region": "美国",
    "genre": "动画 / 喜剧 / 青春",
    "file": "movie-0928.html",
    "image": "./28.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 929,
    "title": "青青河边草",
    "year": "2024",
    "region": "中国大陆",
    "genre": "爱情 / 年代 / 剧情",
    "file": "movie-0929.html",
    "image": "./29.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 930,
    "title": "宝石之国",
    "year": "2024",
    "region": "日本",
    "genre": "奇幻, 战斗, 剧情",
    "file": "movie-0930.html",
    "image": "./30.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 931,
    "title": "老爸102岁",
    "year": "2024",
    "region": "印度",
    "genre": "剧情, 喜剧, 家庭",
    "file": "movie-0931.html",
    "image": "./31.jpg",
    "category": "经典精选"
  },
  {
    "id": 932,
    "title": "自白规则",
    "year": "2025",
    "region": "美国",
    "genre": "悬疑，犯罪",
    "file": "movie-0932.html",
    "image": "./32.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 933,
    "title": "死人",
    "year": "2024",
    "region": "韩国",
    "genre": "惊悚, 悬疑",
    "file": "movie-0933.html",
    "image": "./33.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 934,
    "title": "蓝色酒店粤语",
    "year": "1995",
    "region": "中国香港",
    "genre": "悬疑 / 爱情 / 文艺",
    "file": "movie-0934.html",
    "image": "./34.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 935,
    "title": "田园怪尸案",
    "year": "2021",
    "region": "日本",
    "genre": "悬疑, 喜剧",
    "file": "movie-0935.html",
    "image": "./35.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 936,
    "title": "吻着我，杀了我",
    "year": "2024",
    "region": "美国",
    "genre": "惊悚, 爱情",
    "file": "movie-0936.html",
    "image": "./36.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 937,
    "title": "四月碎片",
    "year": "2003",
    "region": "美国",
    "genre": "剧情 / 喜剧 / 家庭",
    "file": "movie-0937.html",
    "image": "./37.jpg",
    "category": "环球片库"
  },
  {
    "id": 938,
    "title": "外卡",
    "year": "2024",
    "region": "英国",
    "genre": "犯罪 / 剧情 / 运动",
    "file": "movie-0938.html",
    "image": "./38.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 939,
    "title": "神探",
    "year": "2023",
    "region": "中国香港",
    "genre": "悬疑 / 犯罪 / 动作",
    "file": "movie-0939.html",
    "image": "./39.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 940,
    "title": "通灵之王第二季",
    "year": "2026",
    "region": "中国台湾",
    "genre": "真人秀, 灵异, 竞技",
    "file": "movie-0940.html",
    "image": "./40.jpg",
    "category": "环球片库"
  },
  {
    "id": 941,
    "title": "银幕上的展览：塞尚",
    "year": "2023",
    "region": "法国",
    "genre": "传记, 艺术, 历史",
    "file": "movie-0941.html",
    "image": "./41.jpg",
    "category": "环球片库"
  },
  {
    "id": 942,
    "title": "影子军队",
    "year": "2023",
    "region": "法国",
    "genre": "战争 / 剧情 / 历史",
    "file": "movie-0942.html",
    "image": "./42.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 943,
    "title": "寻找卡米洛城",
    "year": "2023",
    "region": "英国",
    "genre": "动画, 冒险",
    "file": "movie-0943.html",
    "image": "./43.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 944,
    "title": "人生战术本",
    "year": "2025",
    "region": "美国",
    "genre": "剧情、励志、运动",
    "file": "movie-0944.html",
    "image": "./44.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 945,
    "title": "马里布救生营：波涛再起",
    "year": "2025",
    "region": "美国",
    "genre": "动作, 剧情",
    "file": "movie-0945.html",
    "image": "./45.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 946,
    "title": "奇妙博物馆第二季",
    "year": "2021",
    "region": "中国大陆",
    "genre": "悬疑、奇幻、短剧",
    "file": "movie-0946.html",
    "image": "./46.jpg",
    "category": "战争历史"
  },
  {
    "id": 947,
    "title": "如何在俄亥俄州跳舞",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧, 剧情",
    "file": "movie-0947.html",
    "image": "./47.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 948,
    "title": "恐龙物语: 回到未来",
    "year": "2023",
    "region": "日本",
    "genre": "动画、冒险、家庭",
    "file": "movie-0948.html",
    "image": "./48.jpg",
    "category": "经典精选"
  },
  {
    "id": 949,
    "title": "火烧御手洗家",
    "year": "2026",
    "region": "日本",
    "genre": "悬疑 / 犯罪",
    "file": "movie-0949.html",
    "image": "./49.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 950,
    "title": "命运之夜 无限剑制第一季",
    "year": "2014",
    "region": "日本",
    "genre": "奇幻",
    "file": "movie-0950.html",
    "image": "./50.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 951,
    "title": "魅力四射2",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧 / 音乐 / 歌舞",
    "file": "movie-0951.html",
    "image": "./51.jpg",
    "category": "战争历史"
  },
  {
    "id": 952,
    "title": "西班牙女佣",
    "year": "2024",
    "region": "西班牙",
    "genre": "剧情、悬疑",
    "file": "movie-0952.html",
    "image": "./52.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 953,
    "title": "神威警探网",
    "year": "1951",
    "region": "美国",
    "genre": "犯罪, 黑色电影, 悬疑",
    "file": "movie-0953.html",
    "image": "./53.jpg",
    "category": "战争历史"
  },
  {
    "id": 954,
    "title": "笨鸟满天飞",
    "year": "2015",
    "region": "中国大陆",
    "genre": "喜剧、犯罪、公路",
    "file": "movie-0954.html",
    "image": "./54.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 955,
    "title": "乱世情鸳",
    "year": "1998",
    "region": "中国台湾",
    "genre": "爱情，年代，战争",
    "file": "movie-0955.html",
    "image": "./55.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 956,
    "title": "宝拉2016",
    "year": "2016",
    "region": "德国",
    "genre": "传记, 剧情",
    "file": "movie-0956.html",
    "image": "./56.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 957,
    "title": "小川町小夜曲",
    "year": "2024",
    "region": "日本",
    "genre": "日常, 温情",
    "file": "movie-0957.html",
    "image": "./57.jpg",
    "category": "经典精选"
  },
  {
    "id": 958,
    "title": "阴阳路十二之美容尸",
    "year": "2024",
    "region": "中国香港",
    "genre": "恐怖, 惊悚, 灵异",
    "file": "movie-0958.html",
    "image": "./58.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 959,
    "title": "边城壮士",
    "year": "2025",
    "region": "中国大陆",
    "genre": "历史 / 战争",
    "file": "movie-0959.html",
    "image": "./59.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 960,
    "title": "巴蒂诺尔先生",
    "year": "2016",
    "region": "法国",
    "genre": "剧情, 喜剧, 历史",
    "file": "movie-0960.html",
    "image": "./60.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 961,
    "title": "灌篮大帝",
    "year": "2008",
    "region": "美国",
    "genre": "喜剧，运动",
    "file": "movie-0961.html",
    "image": "./61.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 962,
    "title": "旋风九日",
    "year": "2026",
    "region": "中国大陆",
    "genre": "灾难 / 动作",
    "file": "movie-0962.html",
    "image": "./62.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 963,
    "title": "再见马文",
    "year": "2021",
    "region": "中国大陆",
    "genre": "剧情 / 同性",
    "file": "movie-0963.html",
    "image": "./63.jpg",
    "category": "动画冒险"
  },
  {
    "id": 964,
    "title": "立案侦查",
    "year": "2026",
    "region": "中国大陆",
    "genre": "刑侦/律政",
    "file": "movie-0964.html",
    "image": "./64.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 965,
    "title": "真实时刻",
    "year": "2025",
    "region": "西班牙",
    "genre": "剧情 / 悬疑",
    "file": "movie-0965.html",
    "image": "./65.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 966,
    "title": "大师之疯狂假日",
    "year": "2012",
    "region": "中国香港",
    "genre": "喜剧 / 动作",
    "file": "movie-0966.html",
    "image": "./66.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 967,
    "title": "荒江女侠",
    "year": "2027",
    "region": "中国大陆",
    "genre": "武侠、动作",
    "file": "movie-0967.html",
    "image": "./67.jpg",
    "category": "动画冒险"
  },
  {
    "id": 968,
    "title": "星空中的风暴",
    "year": "2024",
    "region": "美国 / 英国",
    "genre": "科幻 / 悬疑 / 太空歌剧",
    "file": "movie-0968.html",
    "image": "./68.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 969,
    "title": "六度战栗",
    "year": "2025",
    "region": "美国",
    "genre": "动作 / 科幻 / 惊悚",
    "file": "movie-0969.html",
    "image": "./69.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 970,
    "title": "赤色密室",
    "year": "2025",
    "region": "日本",
    "genre": "悬疑 / 惊悚 / 恐怖",
    "file": "movie-0970.html",
    "image": "./70.jpg",
    "category": "动画冒险"
  },
  {
    "id": 971,
    "title": "机器肉鸡第六季",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧、定格动画、恶搞",
    "file": "movie-0971.html",
    "image": "./71.jpg",
    "category": "战争历史"
  },
  {
    "id": 972,
    "title": "亲爱的女士",
    "year": "2024",
    "region": "西班牙",
    "genre": "悬疑, 剧情",
    "file": "movie-0972.html",
    "image": "./72.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 973,
    "title": "往事在他方",
    "year": "2025",
    "region": "中国台湾",
    "genre": "剧情 / 同性 / 家庭",
    "file": "movie-0973.html",
    "image": "./73.jpg",
    "category": "动画冒险"
  },
  {
    "id": 974,
    "title": "走西口的哥哥没回来",
    "year": "2024",
    "region": "中国大陆",
    "genre": "年代 / 爱情",
    "file": "movie-0974.html",
    "image": "./74.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 975,
    "title": "绝对之爱",
    "year": "2024",
    "region": "法国",
    "genre": "爱情, 剧情",
    "file": "movie-0975.html",
    "image": "./75.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 976,
    "title": "愤怒的小鸟",
    "year": "2016",
    "region": "芬兰",
    "genre": "喜剧 / 动画 / 冒险",
    "file": "movie-0976.html",
    "image": "./76.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 977,
    "title": "敬！人生",
    "year": "2019",
    "region": "智利 / 墨西哥",
    "genre": "剧情 / 家庭",
    "file": "movie-0977.html",
    "image": "./77.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 978,
    "title": "他很怪，他是我爸爸",
    "year": "2015",
    "region": "美国",
    "genre": "剧情, 家庭, 喜剧",
    "file": "movie-0978.html",
    "image": "./78.jpg",
    "category": "战争历史"
  },
  {
    "id": 979,
    "title": "斯隆女士",
    "year": "2016",
    "region": "美国",
    "genre": "剧情 / 惊悚",
    "file": "movie-0979.html",
    "image": "./79.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 980,
    "title": "寡妇村",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 历史 / 悬疑",
    "file": "movie-0980.html",
    "image": "./80.jpg",
    "category": "战争历史"
  },
  {
    "id": 981,
    "title": "爱情唔上身",
    "year": "2024",
    "region": "中国台湾",
    "genre": "爱情, 奇幻",
    "file": "movie-0981.html",
    "image": "./81.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 982,
    "title": "小梅的梦",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 奇幻",
    "file": "movie-0982.html",
    "image": "./82.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 983,
    "title": "购物王路易国语",
    "year": "2023",
    "region": "韩国",
    "genre": "爱情, 喜剧",
    "file": "movie-0983.html",
    "image": "./83.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 984,
    "title": "女神跟我走",
    "year": "2024",
    "region": "韩国",
    "genre": "奇幻、爱情、喜剧",
    "file": "movie-0984.html",
    "image": "./84.jpg",
    "category": "环球片库"
  },
  {
    "id": 985,
    "title": "尖叫皇后第一季",
    "year": "2024",
    "region": "美国",
    "genre": "恐怖, 喜剧, 悬疑",
    "file": "movie-0985.html",
    "image": "./85.jpg",
    "category": "环球片库"
  },
  {
    "id": 986,
    "title": "杀手怨曲",
    "year": "2002",
    "region": "法国 / 意大利",
    "genre": "剧情 / 犯罪 / 音乐",
    "file": "movie-0986.html",
    "image": "./86.jpg",
    "category": "环球片库"
  },
  {
    "id": 987,
    "title": "隔篱屋有宝",
    "year": "2024",
    "region": "中国香港",
    "genre": "喜剧，剧情",
    "file": "movie-0987.html",
    "image": "./87.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 988,
    "title": "鉴证英雄",
    "year": "2025",
    "region": "中国大陆",
    "genre": "刑侦, 悬疑, 法医",
    "file": "movie-0988.html",
    "image": "./88.jpg",
    "category": "战争历史"
  },
  {
    "id": 989,
    "title": "连城诀",
    "year": "2024",
    "region": "中国大陆",
    "genre": "武侠， 悬疑， 古装",
    "file": "movie-0989.html",
    "image": "./89.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 990,
    "title": "雪国少年",
    "year": "2025",
    "region": "日本",
    "genre": "剧情, 家庭",
    "file": "movie-0990.html",
    "image": "./90.jpg",
    "category": "战争历史"
  },
  {
    "id": 991,
    "title": "宝石宠物电影 甜品舞公主",
    "year": "2024",
    "region": "日本",
    "genre": "动画，奇幻，歌舞",
    "file": "movie-0991.html",
    "image": "./91.jpg",
    "category": "经典精选"
  },
  {
    "id": 992,
    "title": "狂野的爱",
    "year": "2024",
    "region": "法国",
    "genre": "爱情 / 剧情",
    "file": "movie-0992.html",
    "image": "./92.jpg",
    "category": "经典精选"
  },
  {
    "id": 993,
    "title": "星语心愿之再爱",
    "year": "2015",
    "region": "中国香港 / 中国大陆",
    "genre": "爱情 / 奇幻",
    "file": "movie-0993.html",
    "image": "./93.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 994,
    "title": "我的看护旅程",
    "year": "2024",
    "region": "英国",
    "genre": "剧情, 喜剧",
    "file": "movie-0994.html",
    "image": "./94.jpg",
    "category": "环球片库"
  },
  {
    "id": 995,
    "title": "恶补青春",
    "year": "2023",
    "region": "中国大陆",
    "genre": "喜剧，青春",
    "file": "movie-0995.html",
    "image": "./95.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 996,
    "title": "爱情魔发师",
    "year": "2023",
    "region": "中国台湾",
    "genre": "爱情、喜剧",
    "file": "movie-0996.html",
    "image": "./96.jpg",
    "category": "战争历史"
  },
  {
    "id": 997,
    "title": "魔夜情狂",
    "year": "2025",
    "region": "中国台湾",
    "genre": "奇幻, 惊悚",
    "file": "movie-0997.html",
    "image": "./97.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 998,
    "title": "私善公恶",
    "year": "2025",
    "region": "日本",
    "genre": "悬疑 / 剧情",
    "file": "movie-0998.html",
    "image": "./98.jpg",
    "category": "环球片库"
  },
  {
    "id": 999,
    "title": "绝命终结站5",
    "year": "2011",
    "region": "美国",
    "genre": "恐怖/惊悚",
    "file": "movie-0999.html",
    "image": "./99.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1000,
    "title": "红粉侦探",
    "year": "2026",
    "region": "中国大陆",
    "genre": "悬疑 / 喜剧 / 动作",
    "file": "movie-1000.html",
    "image": "./100.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1001,
    "title": "天师钟馗1994",
    "year": "2025",
    "region": "中国台湾",
    "genre": "奇幻 / 恐怖 / 喜剧",
    "file": "movie-1001.html",
    "image": "./101.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1002,
    "title": "懵懵哒爱情",
    "year": "2021",
    "region": "泰国",
    "genre": "爱情, 喜剧, 青春",
    "file": "movie-1002.html",
    "image": "./102.jpg",
    "category": "经典精选"
  },
  {
    "id": 1003,
    "title": "摔角选手",
    "year": "2023",
    "region": "日本",
    "genre": "剧情，运动",
    "file": "movie-1003.html",
    "image": "./103.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1004,
    "title": "亲爱的大笨象",
    "year": "2024",
    "region": "泰国 / 中国大陆",
    "genre": "剧情 / 温情",
    "file": "movie-1004.html",
    "image": "./104.jpg",
    "category": "战争历史"
  },
  {
    "id": 1005,
    "title": "人生中转站",
    "year": "2020",
    "region": "日本",
    "genre": "奇幻 / 治愈",
    "file": "movie-1005.html",
    "image": "./105.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1006,
    "title": "暗黑街全灭作战",
    "year": "2024",
    "region": "日本",
    "genre": "动作 / 犯罪 / 黑帮",
    "file": "movie-1006.html",
    "image": "./106.jpg",
    "category": "战争历史"
  },
  {
    "id": 1007,
    "title": "美丽的南方",
    "year": "2023",
    "region": "中国大陆",
    "genre": "家庭、生活",
    "file": "movie-1007.html",
    "image": "./107.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1008,
    "title": "刑事7人 第八季",
    "year": "2022",
    "region": "日本",
    "genre": "刑侦 / 悬疑",
    "file": "movie-1008.html",
    "image": "./108.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1009,
    "title": "本地特色",
    "year": "2025",
    "region": "新加坡",
    "genre": "喜剧 / 家庭",
    "file": "movie-1009.html",
    "image": "./109.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1010,
    "title": "初创玩家",
    "year": "2023",
    "region": "美国",
    "genre": "剧情， 喜剧， 商业",
    "file": "movie-1010.html",
    "image": "./110.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1011,
    "title": "关人矮事",
    "year": "2025",
    "region": "中国香港",
    "genre": "犯罪 / 喜剧",
    "file": "movie-1011.html",
    "image": "./111.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1012,
    "title": "爱尔兰之美",
    "year": "2026",
    "region": "爱尔兰 / 英国",
    "genre": "剧情 / 家庭 / 历史",
    "file": "movie-1012.html",
    "image": "./112.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1013,
    "title": "喜欢我的海",
    "year": "2019",
    "region": "泰国",
    "genre": "爱情, 同性",
    "file": "movie-1013.html",
    "image": "./113.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1014,
    "title": "好莱坞，我爱你",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧",
    "file": "movie-1014.html",
    "image": "./114.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1015,
    "title": "地狱开麦拉",
    "year": "2027",
    "region": "美国",
    "genre": "恐怖 / 喜剧",
    "file": "movie-1015.html",
    "image": "./115.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1016,
    "title": "猫和老鼠：间谍使命",
    "year": "2015",
    "region": "美国",
    "genre": "动画，喜剧，动作",
    "file": "movie-1016.html",
    "image": "./116.jpg",
    "category": "战争历史"
  },
  {
    "id": 1017,
    "title": "为我办一场西式的丧礼",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 家庭 / 喜剧",
    "file": "movie-1017.html",
    "image": "./117.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1018,
    "title": "丑闻1950",
    "year": "2025",
    "region": "韩国",
    "genre": "剧情，历史，悬疑",
    "file": "movie-1018.html",
    "image": "./118.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1019,
    "title": "水蛭",
    "year": "2025",
    "region": "韩国",
    "genre": "恐怖，身体",
    "file": "movie-1019.html",
    "image": "./119.jpg",
    "category": "经典精选"
  },
  {
    "id": 1020,
    "title": "速度与激情8",
    "year": "2023",
    "region": "美国",
    "genre": "动作、犯罪",
    "file": "movie-1020.html",
    "image": "./120.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1021,
    "title": "金玉缘",
    "year": "2023",
    "region": "中国大陆",
    "genre": "爱情, 剧情, 古装",
    "file": "movie-1021.html",
    "image": "./121.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1022,
    "title": "银之守墓人第二季",
    "year": "2025",
    "region": "中国大陆",
    "genre": "奇幻, 冒险",
    "file": "movie-1022.html",
    "image": "./122.jpg",
    "category": "环球片库"
  },
  {
    "id": 1023,
    "title": "东京仙履奇缘",
    "year": "1994",
    "region": "日本",
    "genre": "爱情 / 剧情 / 都市",
    "file": "movie-1023.html",
    "image": "./123.jpg",
    "category": "环球片库"
  },
  {
    "id": 1024,
    "title": "红颜酸泪",
    "year": "2026",
    "region": "中国大陆",
    "genre": "爱情, 文艺",
    "file": "movie-1024.html",
    "image": "./124.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1025,
    "title": "地藏龙神农巨兽",
    "year": "2022",
    "region": "中国大陆",
    "genre": "动作 / 惊悚",
    "file": "movie-1025.html",
    "image": "./125.jpg",
    "category": "战争历史"
  },
  {
    "id": 1026,
    "title": "夺命推理",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑, 犯罪, 推理",
    "file": "movie-1026.html",
    "image": "./126.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1027,
    "title": "走西口",
    "year": "2009",
    "region": "中国大陆",
    "genre": "历史 / 商战 / 爱情",
    "file": "movie-1027.html",
    "image": "./127.jpg",
    "category": "战争历史"
  },
  {
    "id": 1028,
    "title": "鸽子哨",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情 / 年代",
    "file": "movie-1028.html",
    "image": "./128.jpg",
    "category": "战争历史"
  },
  {
    "id": 1029,
    "title": "销魂花月夜",
    "year": "1995",
    "region": "中国香港",
    "genre": "爱情, 情色, 剧情",
    "file": "movie-1029.html",
    "image": "./129.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1030,
    "title": "江之岛棱镜",
    "year": "2025",
    "region": "日本",
    "genre": "奇幻， 治愈， 青春",
    "file": "movie-1030.html",
    "image": "./130.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1031,
    "title": "叶问外传：张天志国语",
    "year": "2021",
    "region": "中国大陆 / 中国香港",
    "genre": "动作 / 传记 / 武侠",
    "file": "movie-1031.html",
    "image": "./131.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1032,
    "title": "巴黎双傻",
    "year": "2020",
    "region": "法国",
    "genre": "喜剧冒险",
    "file": "movie-1032.html",
    "image": "./132.jpg",
    "category": "环球片库"
  },
  {
    "id": 1033,
    "title": "无意背叛",
    "year": "2027",
    "region": "中国台湾",
    "genre": "剧情/爱情/家庭",
    "file": "movie-1033.html",
    "image": "./133.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1034,
    "title": "楊八妹招親粤语",
    "year": "1965",
    "region": "中国香港",
    "genre": "戏曲, 动作, 古装",
    "file": "movie-1034.html",
    "image": "./134.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1035,
    "title": "考试家族",
    "year": "2025",
    "region": "印度",
    "genre": "剧情, 家庭, 喜剧",
    "file": "movie-1035.html",
    "image": "./135.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1036,
    "title": "少年说第二季",
    "year": "2022",
    "region": "中国大陆",
    "genre": "剧情 / 家庭 / 青春",
    "file": "movie-1036.html",
    "image": "./136.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1037,
    "title": "唐人街1871",
    "year": "2023",
    "region": "美国",
    "genre": "历史, 犯罪",
    "file": "movie-1037.html",
    "image": "./137.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1038,
    "title": "水瓶座",
    "year": "2025",
    "region": "巴西",
    "genre": "剧情 / 悬疑",
    "file": "movie-1038.html",
    "image": "./138.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1039,
    "title": "头颅游戏",
    "year": "2026",
    "region": "美国",
    "genre": "恐怖, 心理惊悚, 悬疑",
    "file": "movie-1039.html",
    "image": "./139.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1040,
    "title": "京城镖局",
    "year": "1995",
    "region": "中国大陆",
    "genre": "古装 / 动作 / 剧情",
    "file": "movie-1040.html",
    "image": "./140.jpg",
    "category": "环球片库"
  },
  {
    "id": 1041,
    "title": "星空中的风暴",
    "year": "2021",
    "region": "美国",
    "genre": "科幻，惊悚",
    "file": "movie-1041.html",
    "image": "./141.jpg",
    "category": "环球片库"
  },
  {
    "id": 1042,
    "title": "星际叛变",
    "year": "2027",
    "region": "英国 / 美国",
    "genre": "科幻 / 战争 / 剧情",
    "file": "movie-1042.html",
    "image": "./142.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1043,
    "title": "人鱼恋爱法则第一季",
    "year": "2024",
    "region": "中国大陆",
    "genre": "奇幻 / 爱情 / 喜剧",
    "file": "movie-1043.html",
    "image": "./143.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1044,
    "title": "小楼的奇幻生活",
    "year": "2025",
    "region": "中国",
    "genre": "奇幻、喜剧、剧情",
    "file": "movie-1044.html",
    "image": "./144.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1045,
    "title": "真命天子粤语",
    "year": "2018",
    "region": "中国香港",
    "genre": "喜剧 / 爱情 / 奇幻",
    "file": "movie-1045.html",
    "image": "./145.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1046,
    "title": "不能没有家",
    "year": "2024",
    "region": "中国大陆",
    "genre": "家庭 / 剧情 / 社会",
    "file": "movie-1046.html",
    "image": "./146.jpg",
    "category": "战争历史"
  },
  {
    "id": 1047,
    "title": "石来运转",
    "year": "2024",
    "region": "中国",
    "genre": "喜剧 / 奇幻 / 家庭",
    "file": "movie-1047.html",
    "image": "./147.jpg",
    "category": "经典精选"
  },
  {
    "id": 1048,
    "title": "猫和老鼠：魔法戒指",
    "year": "2024",
    "region": "美国",
    "genre": "动画，喜剧，奇幻",
    "file": "movie-1048.html",
    "image": "./148.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1049,
    "title": "新抱喜相逢国语",
    "year": "2014",
    "region": "中国香港",
    "genre": "喜剧, 古装, 家庭",
    "file": "movie-1049.html",
    "image": "./149.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1050,
    "title": "翘楚",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪",
    "file": "movie-1050.html",
    "image": "./150.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1051,
    "title": "空房禁女",
    "year": "2019",
    "region": "韩国",
    "genre": "恐怖",
    "file": "movie-1051.html",
    "image": "./1.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1052,
    "title": "恶魔的浪漫",
    "year": "2017",
    "region": "泰国",
    "genre": "爱情 / 剧情 / 同性",
    "file": "movie-1052.html",
    "image": "./2.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1053,
    "title": "舞者村社区服务计划",
    "year": "2024",
    "region": "泰国",
    "genre": "喜剧, 歌舞, 剧情",
    "file": "movie-1053.html",
    "image": "./3.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1054,
    "title": "那个重逢的夜晚",
    "year": "2025",
    "region": "日本",
    "genre": "爱情，奇幻，剧情",
    "file": "movie-1054.html",
    "image": "./4.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1055,
    "title": "命运之线",
    "year": "2025",
    "region": "韩国",
    "genre": "爱情, 奇幻, 悬疑",
    "file": "movie-1055.html",
    "image": "./5.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1056,
    "title": "攀岩女孩儿",
    "year": "2024",
    "region": "中国大陆",
    "genre": "运动 / 剧情 / 家庭",
    "file": "movie-1056.html",
    "image": "./6.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1057,
    "title": "巴塔哥尼亚",
    "year": "2010",
    "region": "阿根廷 / 波兰",
    "genre": "剧情，冒险",
    "file": "movie-1057.html",
    "image": "./7.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1058,
    "title": "喧闹一家亲：圣诞节大冒险",
    "year": "2022",
    "region": "美国",
    "genre": "喜剧 / 动画 / 家庭",
    "file": "movie-1058.html",
    "image": "./8.jpg",
    "category": "环球片库"
  },
  {
    "id": 1059,
    "title": "隔楼女孩：我们之间的层距",
    "year": "2023",
    "region": "中国台湾",
    "genre": "爱情 / 奇幻 / 都市",
    "file": "movie-1059.html",
    "image": "./9.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1060,
    "title": "超然芯动",
    "year": "2024",
    "region": "英国",
    "genre": "科幻/爱情",
    "file": "movie-1060.html",
    "image": "./10.jpg",
    "category": "战争历史"
  },
  {
    "id": 1061,
    "title": "花予野兽 第二季",
    "year": "2026",
    "region": "日本",
    "genre": "爱情 / 校园",
    "file": "movie-1061.html",
    "image": "./11.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1062,
    "title": "国道29号",
    "year": "2023",
    "region": "日本",
    "genre": "公路/剧情/治愈",
    "file": "movie-1062.html",
    "image": "./12.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1063,
    "title": "直到婚礼让我们分开",
    "year": "2024",
    "region": "美国",
    "genre": "剧情 / 爱情",
    "file": "movie-1063.html",
    "image": "./13.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1064,
    "title": "双生契",
    "year": "2026",
    "region": "中国大陆",
    "genre": "古装 / 奇幻 / 爱情",
    "file": "movie-1064.html",
    "image": "./14.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1065,
    "title": "锡瓦斯",
    "year": "2022",
    "region": "土耳其",
    "genre": "剧情",
    "file": "movie-1065.html",
    "image": "./15.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1066,
    "title": "青春激光",
    "year": "2024",
    "region": "中国大陆",
    "genre": "青春励志",
    "file": "movie-1066.html",
    "image": "./16.jpg",
    "category": "环球片库"
  },
  {
    "id": 1067,
    "title": "七处子",
    "year": "2005",
    "region": "西班牙",
    "genre": "剧情",
    "file": "movie-1067.html",
    "image": "./17.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1068,
    "title": "火星救援国语",
    "year": "2026",
    "region": "中国大陆",
    "genre": "科幻 / 冒险",
    "file": "movie-1068.html",
    "image": "./18.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1069,
    "title": "无功不受禄",
    "year": "2024",
    "region": "中国香港",
    "genre": "犯罪 / 黑色幽默",
    "file": "movie-1069.html",
    "image": "./19.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1070,
    "title": "阿比阿弟大冒险",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧 / 科幻 / 冒险",
    "file": "movie-1070.html",
    "image": "./20.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1071,
    "title": "能耐大了第二季",
    "year": "2019",
    "region": "中国大陆",
    "genre": "喜剧 / 情景",
    "file": "movie-1071.html",
    "image": "./21.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1072,
    "title": "国王口信",
    "year": "2017",
    "region": "英国",
    "genre": "历史 / 剧情 / 冒险",
    "file": "movie-1072.html",
    "image": "./22.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1073,
    "title": "机关枪修女",
    "year": "2025",
    "region": "美国",
    "genre": "动作 / 惊悚",
    "file": "movie-1073.html",
    "image": "./23.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1074,
    "title": "王牌任务",
    "year": "2025",
    "region": "中国香港",
    "genre": "动作/喜剧",
    "file": "movie-1074.html",
    "image": "./24.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1075,
    "title": "魔术缉凶",
    "year": "2004",
    "region": "中国香港",
    "genre": "悬疑，动作，犯罪",
    "file": "movie-1075.html",
    "image": "./25.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1076,
    "title": "激流时代",
    "year": "2026",
    "region": "中国大陆",
    "genre": "剧情 / 悬疑",
    "file": "movie-1076.html",
    "image": "./26.jpg",
    "category": "经典精选"
  },
  {
    "id": 1077,
    "title": "天空下的钢琴",
    "year": "1999",
    "region": "中国大陆",
    "genre": "剧情 / 家庭",
    "file": "movie-1077.html",
    "image": "./27.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1078,
    "title": "小熊的夏天",
    "year": "2024",
    "region": "中国大陆",
    "genre": "动画, 儿童, 家庭",
    "file": "movie-1078.html",
    "image": "./28.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1079,
    "title": "女巫之手",
    "year": "2025",
    "region": "西班牙 / 墨西哥",
    "genre": "恐怖 / 历史 / 剧情",
    "file": "movie-1079.html",
    "image": "./29.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1080,
    "title": "穿黄靴子的女孩",
    "year": "2022",
    "region": "法国",
    "genre": "悬疑 / 剧情",
    "file": "movie-1080.html",
    "image": "./30.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1081,
    "title": "幸福岔路",
    "year": "2026",
    "region": "中国大陆",
    "genre": "剧情 / 公路",
    "file": "movie-1081.html",
    "image": "./31.jpg",
    "category": "经典精选"
  },
  {
    "id": 1082,
    "title": "赵氏孤儿 动画版",
    "year": "2027",
    "region": "中国",
    "genre": "动画, 历史, 悲剧",
    "file": "movie-1082.html",
    "image": "./32.jpg",
    "category": "经典精选"
  },
  {
    "id": 1083,
    "title": "奔跑吧兄弟第二季",
    "year": "2015",
    "region": "中国大陆",
    "genre": "真人秀 / 竞技",
    "file": "movie-1083.html",
    "image": "./33.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1084,
    "title": "帕里",
    "year": "2026",
    "region": "印度",
    "genre": "剧情, 悬疑, 歌舞",
    "file": "movie-1084.html",
    "image": "./34.jpg",
    "category": "战争历史"
  },
  {
    "id": 1085,
    "title": "耶路撒冷地",
    "year": "2025",
    "region": "美国",
    "genre": "恐怖, 悬疑, 古装",
    "file": "movie-1085.html",
    "image": "./35.jpg",
    "category": "战争历史"
  },
  {
    "id": 1086,
    "title": "杰尼斯夏日乐园2016",
    "year": "2017",
    "region": "日本",
    "genre": "音乐 / 纪录片 / 现场",
    "file": "movie-1086.html",
    "image": "./36.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1087,
    "title": "大黄蜂",
    "year": "2018",
    "region": "美国",
    "genre": "动作, 科幻, 冒险",
    "file": "movie-1087.html",
    "image": "./37.jpg",
    "category": "战争历史"
  },
  {
    "id": 1088,
    "title": "帕克 国语版",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑",
    "file": "movie-1088.html",
    "image": "./38.jpg",
    "category": "战争历史"
  },
  {
    "id": 1089,
    "title": "咏晴",
    "year": "2025",
    "region": "中国台湾",
    "genre": "奇幻悬疑",
    "file": "movie-1089.html",
    "image": "./39.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1090,
    "title": "恶魔的美",
    "year": "2025",
    "region": "意大利",
    "genre": "惊悚 / 剧情",
    "file": "movie-1090.html",
    "image": "./40.jpg",
    "category": "环球片库"
  },
  {
    "id": 1091,
    "title": "沙漠飙高音",
    "year": "2024",
    "region": "印度",
    "genre": "歌舞 / 喜剧 / 冒险",
    "file": "movie-1091.html",
    "image": "./41.jpg",
    "category": "环球片库"
  },
  {
    "id": 1092,
    "title": "怒火街头2国语",
    "year": "2013",
    "region": "中国香港",
    "genre": "动作， 律政， 都市",
    "file": "movie-1092.html",
    "image": "./42.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1093,
    "title": "楼外青山",
    "year": "2027",
    "region": "中国大陆 / 台湾",
    "genre": "武侠 / 文艺 / 悬疑",
    "file": "movie-1093.html",
    "image": "./43.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1094,
    "title": "和西蒙·里夫一起寻迹咖啡",
    "year": "2024",
    "region": "英国",
    "genre": "纪录片, 旅行",
    "file": "movie-1094.html",
    "image": "./44.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1095,
    "title": "荣誉曙光",
    "year": "2006",
    "region": "日本",
    "genre": "战争, 剧情, 历史",
    "file": "movie-1095.html",
    "image": "./45.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1096,
    "title": "不一样的夏天",
    "year": "2024",
    "region": "中国台湾",
    "genre": "剧情，家庭",
    "file": "movie-1096.html",
    "image": "./46.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1097,
    "title": "白粉飞 第一季",
    "year": "2024",
    "region": "美国",
    "genre": "犯罪，剧情，惊悚",
    "file": "movie-1097.html",
    "image": "./47.jpg",
    "category": "战争历史"
  },
  {
    "id": 1098,
    "title": "香港大营救",
    "year": "2024",
    "region": "中国香港 / 中国大陆",
    "genre": "动作 / 历史 / 剧情",
    "file": "movie-1098.html",
    "image": "./48.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1099,
    "title": "柯明斯基理论第一季",
    "year": "2019",
    "region": "美国",
    "genre": "喜剧 / 剧情",
    "file": "movie-1099.html",
    "image": "./49.jpg",
    "category": "战争历史"
  },
  {
    "id": 1100,
    "title": "西城童话",
    "year": "2023",
    "region": "中国台湾",
    "genre": "爱情 / 奇幻",
    "file": "movie-1100.html",
    "image": "./50.jpg",
    "category": "战争历史"
  },
  {
    "id": 1101,
    "title": "花瓣",
    "year": "2025",
    "region": "日本",
    "genre": "动画 / 奇幻",
    "file": "movie-1101.html",
    "image": "./51.jpg",
    "category": "战争历史"
  },
  {
    "id": 1102,
    "title": "抽烟与健康的观点",
    "year": "2024",
    "region": "英国",
    "genre": "剧情 / 黑色幽默",
    "file": "movie-1102.html",
    "image": "./52.jpg",
    "category": "经典精选"
  },
  {
    "id": 1103,
    "title": "血笼于女",
    "year": "2025",
    "region": "泰国",
    "genre": "恐怖, 奇幻, 剧情",
    "file": "movie-1103.html",
    "image": "./53.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1104,
    "title": "亿万神犬",
    "year": "2024",
    "region": "美国 / 英国",
    "genre": "喜剧 / 家庭 / 动物",
    "file": "movie-1104.html",
    "image": "./54.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1105,
    "title": "我的青春期",
    "year": "2015",
    "region": "中国内地",
    "genre": "青春 / 家庭 / 喜剧",
    "file": "movie-1105.html",
    "image": "./55.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1106,
    "title": "蓝色风暴粤语",
    "year": "1992",
    "region": "中国香港",
    "genre": "犯罪， 动作",
    "file": "movie-1106.html",
    "image": "./56.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1107,
    "title": "两代情怀",
    "year": "2025",
    "region": "中国台湾",
    "genre": "剧情 / 家庭 / 年代",
    "file": "movie-1107.html",
    "image": "./57.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1108,
    "title": "维也纳之舞",
    "year": "2027",
    "region": "奥地利",
    "genre": "爱情, 音乐",
    "file": "movie-1108.html",
    "image": "./58.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1109,
    "title": "不死鸟之恋",
    "year": "2025",
    "region": "韩国",
    "genre": "爱情 / 奇幻 / 剧情",
    "file": "movie-1109.html",
    "image": "./59.jpg",
    "category": "环球片库"
  },
  {
    "id": 1110,
    "title": "白粉飞 第五季",
    "year": "2021",
    "region": "美国",
    "genre": "犯罪 / 黑帮 / 年代",
    "file": "movie-1110.html",
    "image": "./60.jpg",
    "category": "经典精选"
  },
  {
    "id": 1111,
    "title": "家庭圣女",
    "year": "2021",
    "region": "法国",
    "genre": "剧情 / 家庭",
    "file": "movie-1111.html",
    "image": "./61.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1112,
    "title": "爱欲之岛",
    "year": "1979",
    "region": "意大利",
    "genre": "情色, 剧情",
    "file": "movie-1112.html",
    "image": "./62.jpg",
    "category": "战争历史"
  },
  {
    "id": 1113,
    "title": "恐吓运动",
    "year": "2016",
    "region": "澳大利亚",
    "genre": "恐怖 / 惊悚",
    "file": "movie-1113.html",
    "image": "./63.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1114,
    "title": "女学生和亨利先生",
    "year": "2023",
    "region": "英国",
    "genre": "剧情、历史、悬疑",
    "file": "movie-1114.html",
    "image": "./64.jpg",
    "category": "经典精选"
  },
  {
    "id": 1115,
    "title": "地久天长",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 家庭 / 文艺",
    "file": "movie-1115.html",
    "image": "./65.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1116,
    "title": "儿娃子2008",
    "year": "2008",
    "region": "中国",
    "genre": "剧情, 运动",
    "file": "movie-1116.html",
    "image": "./66.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1117,
    "title": "元素方城市",
    "year": "2028",
    "region": "美国",
    "genre": "奇幻, 冒险",
    "file": "movie-1117.html",
    "image": "./67.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1118,
    "title": "节日开始了",
    "year": "2024",
    "region": "法国",
    "genre": "喜剧、剧情、节日",
    "file": "movie-1118.html",
    "image": "./68.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1119,
    "title": "呼吸之间",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情 / 家庭 / 医疗",
    "file": "movie-1119.html",
    "image": "./69.jpg",
    "category": "环球片库"
  },
  {
    "id": 1120,
    "title": "后妈的春天",
    "year": "2024",
    "region": "中国大陆",
    "genre": "家庭, 伦理",
    "file": "movie-1120.html",
    "image": "./70.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1121,
    "title": "恋爱关系",
    "year": "2024",
    "region": "日本",
    "genre": "爱情 / 喜剧",
    "file": "movie-1121.html",
    "image": "./71.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1122,
    "title": "天涯海角小萌妻",
    "year": "2026",
    "region": "中国大陆",
    "genre": "喜剧、爱情",
    "file": "movie-1122.html",
    "image": "./72.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1123,
    "title": "安娜贝尔",
    "year": "2017",
    "region": "美国",
    "genre": "恐怖, 惊悚",
    "file": "movie-1123.html",
    "image": "./73.jpg",
    "category": "环球片库"
  },
  {
    "id": 1124,
    "title": "我温柔的斗牛士",
    "year": "2023",
    "region": "智利 / 西班牙",
    "genre": "剧情 / 历史 / 同性",
    "file": "movie-1124.html",
    "image": "./74.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1125,
    "title": "百劫红颜不了情",
    "year": "2025",
    "region": "中国大陆",
    "genre": "年代 / 爱情",
    "file": "movie-1125.html",
    "image": "./75.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1126,
    "title": "种山原之夜",
    "year": "2024",
    "region": "日本",
    "genre": "奇幻、文艺",
    "file": "movie-1126.html",
    "image": "./76.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1127,
    "title": "自由落体",
    "year": "2025",
    "region": "韩国",
    "genre": "悬疑 / 惊悚",
    "file": "movie-1127.html",
    "image": "./77.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1128,
    "title": "男女混合宿舍",
    "year": "2025",
    "region": "韩国",
    "genre": "爱情 / 喜剧",
    "file": "movie-1128.html",
    "image": "./78.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1129,
    "title": "阳光下的冰器",
    "year": "2023",
    "region": "中国大陆",
    "genre": "犯罪 / 悬疑",
    "file": "movie-1129.html",
    "image": "./79.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1130,
    "title": "富士",
    "year": "2024",
    "region": "日本",
    "genre": "悬疑犯罪",
    "file": "movie-1130.html",
    "image": "./80.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1131,
    "title": "合约男女",
    "year": "2025",
    "region": "中国内地",
    "genre": "都市 / 爱情 / 喜剧",
    "file": "movie-1131.html",
    "image": "./81.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1132,
    "title": "姐妹煞",
    "year": "2025",
    "region": "中国香港",
    "genre": "动作 / 喜剧 / 女性",
    "file": "movie-1132.html",
    "image": "./82.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1133,
    "title": "哈啦猛男秀",
    "year": "2023",
    "region": "美国",
    "genre": "喜剧，歌舞",
    "file": "movie-1133.html",
    "image": "./83.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1134,
    "title": "黑道皇帝",
    "year": "2024",
    "region": "日本",
    "genre": "犯罪 / 惊悚",
    "file": "movie-1134.html",
    "image": "./84.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1135,
    "title": "胭脂似火",
    "year": "2024",
    "region": "中国大陆",
    "genre": "民国 / 爱情 / 谍战",
    "file": "movie-1135.html",
    "image": "./85.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1136,
    "title": "从地心窜出",
    "year": "2025",
    "region": "美国",
    "genre": "恐怖, 科幻, 灾难",
    "file": "movie-1136.html",
    "image": "./86.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1137,
    "title": "高丽葬",
    "year": "2026",
    "region": "韩国",
    "genre": "历史, 惊悚, 悬疑",
    "file": "movie-1137.html",
    "image": "./87.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1138,
    "title": "疯拳癫腿",
    "year": "1979",
    "region": "中国香港",
    "genre": "动作 / 喜剧",
    "file": "movie-1138.html",
    "image": "./88.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1139,
    "title": "不可说的故事",
    "year": "2024",
    "region": "西班牙",
    "genre": "悬疑, 惊悚",
    "file": "movie-1139.html",
    "image": "./89.jpg",
    "category": "经典精选"
  },
  {
    "id": 1140,
    "title": "金银岛",
    "year": "2026",
    "region": "美国",
    "genre": "科幻冒险",
    "file": "movie-1140.html",
    "image": "./90.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1141,
    "title": "为赛车而生",
    "year": "2019",
    "region": "美国",
    "genre": "动作 / 运动",
    "file": "movie-1141.html",
    "image": "./91.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1142,
    "title": "潘金莲之前世今生",
    "year": "1989",
    "region": "中国香港",
    "genre": "剧情 / 奇幻 / 情色",
    "file": "movie-1142.html",
    "image": "./92.jpg",
    "category": "战争历史"
  },
  {
    "id": 1143,
    "title": "旧神",
    "year": "2026",
    "region": "美国 / 英国",
    "genre": "科幻 / 恐怖 / 神话",
    "file": "movie-1143.html",
    "image": "./93.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1144,
    "title": "永不放弃1997",
    "year": "1997",
    "region": "美国",
    "genre": "励志/运动",
    "file": "movie-1144.html",
    "image": "./94.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1145,
    "title": "真实的勇气",
    "year": "2025",
    "region": "美国",
    "genre": "战争/传记",
    "file": "movie-1145.html",
    "image": "./95.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1146,
    "title": "与森林共舞",
    "year": "2023",
    "region": "巴西",
    "genre": "冒险 / 环保",
    "file": "movie-1146.html",
    "image": "./96.jpg",
    "category": "环球片库"
  },
  {
    "id": 1147,
    "title": "非一般床边故事",
    "year": "2025",
    "region": "中国台湾",
    "genre": "奇幻, 家庭, 悬疑",
    "file": "movie-1147.html",
    "image": "./97.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1148,
    "title": "羞耻第一季",
    "year": "2015",
    "region": "挪威",
    "genre": "青春、剧情、教育",
    "file": "movie-1148.html",
    "image": "./98.jpg",
    "category": "环球片库"
  },
  {
    "id": 1149,
    "title": "女鬼桥2：怨鬼楼",
    "year": "2024",
    "region": "中国台湾",
    "genre": "恐怖, 惊悚",
    "file": "movie-1149.html",
    "image": "./99.jpg",
    "category": "经典精选"
  },
  {
    "id": 1150,
    "title": "第41",
    "year": "2026",
    "region": "俄罗斯",
    "genre": "战争 / 剧情 / 爱情",
    "file": "movie-1150.html",
    "image": "./100.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1151,
    "title": "妖精森林的小不点",
    "year": "2025",
    "region": "日本",
    "genre": "奇幻 / 治愈",
    "file": "movie-1151.html",
    "image": "./101.jpg",
    "category": "经典精选"
  },
  {
    "id": 1152,
    "title": "绝命鸳鸯国语",
    "year": "2024",
    "region": "中国香港 / 中国大陆",
    "genre": "动作 / 爱情",
    "file": "movie-1152.html",
    "image": "./102.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1153,
    "title": "演员旅行中",
    "year": "2024",
    "region": "韩国",
    "genre": "剧情, 公路",
    "file": "movie-1153.html",
    "image": "./103.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1154,
    "title": "恐怖内阁",
    "year": "2025",
    "region": "英国",
    "genre": "政治，惊悚",
    "file": "movie-1154.html",
    "image": "./104.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1155,
    "title": "英国病人",
    "year": "2026",
    "region": "英国",
    "genre": "历史 / 战争 / 爱情",
    "file": "movie-1155.html",
    "image": "./105.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1156,
    "title": "夏普的挑战",
    "year": "2025",
    "region": "英国",
    "genre": "动作 / 历史",
    "file": "movie-1156.html",
    "image": "./106.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1157,
    "title": "失失慌杀人事件",
    "year": "2023",
    "region": "中国香港",
    "genre": "黑色喜剧 / 悬疑",
    "file": "movie-1157.html",
    "image": "./107.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1158,
    "title": "自由",
    "year": "2020",
    "region": "法国",
    "genre": "剧情 / 历史",
    "file": "movie-1158.html",
    "image": "./108.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1159,
    "title": "断桥因果",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情 / 悬疑",
    "file": "movie-1159.html",
    "image": "./109.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1160,
    "title": "偶像星愿第二季",
    "year": "2025",
    "region": "日本",
    "genre": "动画 / 音乐 / 偶像",
    "file": "movie-1160.html",
    "image": "./110.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1161,
    "title": "青楼红杏",
    "year": "1995",
    "region": "中国香港",
    "genre": "剧情/情色",
    "file": "movie-1161.html",
    "image": "./111.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1162,
    "title": "巴黎妓院回忆录",
    "year": "2029",
    "region": "法国",
    "genre": "剧情, 历史",
    "file": "movie-1162.html",
    "image": "./112.jpg",
    "category": "经典精选"
  },
  {
    "id": 1163,
    "title": "万物生灵第一季",
    "year": "2020",
    "region": "英国",
    "genre": "剧情 / 喜剧 / 传记",
    "file": "movie-1163.html",
    "image": "./113.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1164,
    "title": "弗雷德电影版",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧 / 恐怖",
    "file": "movie-1164.html",
    "image": "./114.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1165,
    "title": "冒险乐园",
    "year": "2025",
    "region": "美国",
    "genre": "冒险 / 悬疑 / 奇幻",
    "file": "movie-1165.html",
    "image": "./115.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1166,
    "title": "纸牌人生",
    "year": "2025",
    "region": "美国",
    "genre": "剧情， 运动， 传记",
    "file": "movie-1166.html",
    "image": "./116.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1167,
    "title": "我是杜拉拉",
    "year": "2024",
    "region": "中国大陆",
    "genre": "职场",
    "file": "movie-1167.html",
    "image": "./117.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1168,
    "title": "丛林果汁",
    "year": "2024",
    "region": "巴西",
    "genre": "冒险, 奇幻",
    "file": "movie-1168.html",
    "image": "./118.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1169,
    "title": "小夜曲",
    "year": "2026",
    "region": "奥地利",
    "genre": "剧情, 音乐, 历史",
    "file": "movie-1169.html",
    "image": "./119.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1170,
    "title": "捷京谍影",
    "year": "2027",
    "region": "捷克 / 中国大陆",
    "genre": "动作 / 谍战",
    "file": "movie-1170.html",
    "image": "./120.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1171,
    "title": "幸福吻上我的脸",
    "year": "2025",
    "region": "中国",
    "genre": "都市爱情轻喜剧",
    "file": "movie-1171.html",
    "image": "./121.jpg",
    "category": "环球片库"
  },
  {
    "id": 1172,
    "title": "逆流的色彩",
    "year": "2024",
    "region": "美国",
    "genre": "剧情, 奇幻",
    "file": "movie-1172.html",
    "image": "./122.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1173,
    "title": "浪迹女孩",
    "year": "2024",
    "region": "中国大陆",
    "genre": "公路 / 青春 / 女性",
    "file": "movie-1173.html",
    "image": "./123.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1174,
    "title": "冰雪友情",
    "year": "2022",
    "region": "美国",
    "genre": "动画，家庭，冒险",
    "file": "movie-1174.html",
    "image": "./124.jpg",
    "category": "环球片库"
  },
  {
    "id": 1175,
    "title": "西辛5",
    "year": "2025",
    "region": "中国大陆",
    "genre": "科幻 / 悬疑",
    "file": "movie-1175.html",
    "image": "./125.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1176,
    "title": "颤密",
    "year": "2022",
    "region": "日本",
    "genre": "悬疑 / 犯罪",
    "file": "movie-1176.html",
    "image": "./126.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1177,
    "title": "旋转的黄金",
    "year": "2018",
    "region": "西班牙",
    "genre": "悬疑 / 犯罪",
    "file": "movie-1177.html",
    "image": "./127.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1178,
    "title": "劈腿困境",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧 / 爱情",
    "file": "movie-1178.html",
    "image": "./128.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1179,
    "title": "悄悄跟着我",
    "year": "2022",
    "region": "韩国",
    "genre": "惊悚 / 悬疑",
    "file": "movie-1179.html",
    "image": "./129.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1180,
    "title": "马丁史柯西斯：英伦电影课",
    "year": "2022",
    "region": "英国",
    "genre": "纪录，传记",
    "file": "movie-1180.html",
    "image": "./130.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1181,
    "title": "黄河大侠",
    "year": "2024",
    "region": "中国大陆",
    "genre": "武侠 / 动作 / 历史",
    "file": "movie-1181.html",
    "image": "./131.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1182,
    "title": "真正汉子",
    "year": "2025",
    "region": "中国大陆",
    "genre": "动作 / 励志",
    "file": "movie-1182.html",
    "image": "./132.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1183,
    "title": "甜蜜生活",
    "year": "1998",
    "region": "中国香港",
    "genre": "剧情 / 爱情 / 文艺",
    "file": "movie-1183.html",
    "image": "./133.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1184,
    "title": "花轿泪",
    "year": "1988",
    "region": "中国大陆",
    "genre": "剧情 / 历史",
    "file": "movie-1184.html",
    "image": "./134.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1185,
    "title": "倾城天下",
    "year": "2023",
    "region": "中国大陆",
    "genre": "古装 / 爱情 / 权谋",
    "file": "movie-1185.html",
    "image": "./135.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1186,
    "title": "战神联盟",
    "year": "2027",
    "region": "美国",
    "genre": "动作， 奇幻",
    "file": "movie-1186.html",
    "image": "./136.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1187,
    "title": "他们！",
    "year": "2025",
    "region": "美国 / 韩国",
    "genre": "悬疑 / 惊悚 / 科幻",
    "file": "movie-1187.html",
    "image": "./137.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1188,
    "title": "危情十日",
    "year": "2025",
    "region": "美国",
    "genre": "惊悚 / 悬疑 / 犯罪",
    "file": "movie-1188.html",
    "image": "./138.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1189,
    "title": "伏妖白鱼镇2",
    "year": "2018",
    "region": "中国大陆",
    "genre": "奇幻 / 悬疑 / 惊悚",
    "file": "movie-1189.html",
    "image": "./139.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1190,
    "title": "西力传",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧，科幻，剧情",
    "file": "movie-1190.html",
    "image": "./140.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1191,
    "title": "我们的成长日记第二季",
    "year": "2026",
    "region": "日本",
    "genre": "青春 / 校园 / 剧情",
    "file": "movie-1191.html",
    "image": "./141.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1192,
    "title": "惹鬼回路",
    "year": "2024",
    "region": "日本/美国",
    "genre": "恐怖，科幻",
    "file": "movie-1192.html",
    "image": "./142.jpg",
    "category": "经典精选"
  },
  {
    "id": 1193,
    "title": "特警使命之狙击风暴",
    "year": "2024",
    "region": "中国大陆",
    "genre": "动作, 犯罪, 警匪",
    "file": "movie-1193.html",
    "image": "./143.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1194,
    "title": "上帝阴影下",
    "year": "2024",
    "region": "墨西哥/美国",
    "genre": "悬疑, 奇幻, 惊悚",
    "file": "movie-1194.html",
    "image": "./144.jpg",
    "category": "经典精选"
  },
  {
    "id": 1195,
    "title": "拉明",
    "year": "2025",
    "region": "意大利",
    "genre": "剧情, 悬疑",
    "file": "movie-1195.html",
    "image": "./145.jpg",
    "category": "经典精选"
  },
  {
    "id": 1196,
    "title": "快乐与你相遇",
    "year": "2023",
    "region": "中国台湾",
    "genre": "爱情 / 喜剧 / 奇幻",
    "file": "movie-1196.html",
    "image": "./146.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1197,
    "title": "色情响尾蛇",
    "year": "2024",
    "region": "法国 / 西班牙",
    "genre": "惊悚 / 情色",
    "file": "movie-1197.html",
    "image": "./147.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1198,
    "title": "逆天奇案2粤语",
    "year": "2025",
    "region": "中国香港",
    "genre": "警匪、悬疑、动作",
    "file": "movie-1198.html",
    "image": "./148.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1199,
    "title": "我想藏起来",
    "year": "2024",
    "region": "意大利",
    "genre": "传记, 剧情",
    "file": "movie-1199.html",
    "image": "./149.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1200,
    "title": "女子戏班",
    "year": "2022",
    "region": "中国大陆",
    "genre": "剧情 / 历史",
    "file": "movie-1200.html",
    "image": "./150.jpg",
    "category": "经典精选"
  },
  {
    "id": 1201,
    "title": "陆小凤传奇",
    "year": "2024",
    "region": "中国大陆",
    "genre": "武侠 / 悬疑 / 动作",
    "file": "movie-1201.html",
    "image": "./1.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1202,
    "title": "当恶魔呼喊你的名字时",
    "year": "2026",
    "region": "韩国",
    "genre": "奇幻、惊悚、心理",
    "file": "movie-1202.html",
    "image": "./2.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1203,
    "title": "卧室电台",
    "year": "2024",
    "region": "中国",
    "genre": "音乐， 真人秀",
    "file": "movie-1203.html",
    "image": "./3.jpg",
    "category": "环球片库"
  },
  {
    "id": 1204,
    "title": "当福音再临",
    "year": "2025",
    "region": "美国",
    "genre": "科幻 / 剧情",
    "file": "movie-1204.html",
    "image": "./4.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1205,
    "title": "玩命大临演",
    "year": "2025",
    "region": "美国",
    "genre": "动作/喜剧",
    "file": "movie-1205.html",
    "image": "./5.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1206,
    "title": "龙心战纪",
    "year": "2016",
    "region": "日本, 中国",
    "genre": "奇幻, 冒险",
    "file": "movie-1206.html",
    "image": "./6.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1207,
    "title": "义胆群英",
    "year": "1989",
    "region": "中国香港",
    "genre": "动作, 犯罪, 剧情",
    "file": "movie-1207.html",
    "image": "./7.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1208,
    "title": "截杀任务",
    "year": "2024",
    "region": "香港",
    "genre": "动作, 犯罪, 警匪",
    "file": "movie-1208.html",
    "image": "./8.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1209,
    "title": "方块皇后",
    "year": "2026",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪",
    "file": "movie-1209.html",
    "image": "./9.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1210,
    "title": "欢乐谷",
    "year": "1998",
    "region": "美国",
    "genre": "剧情, 喜剧, 奇幻",
    "file": "movie-1210.html",
    "image": "./10.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1211,
    "title": "昨日杀神",
    "year": "2028",
    "region": "日本",
    "genre": "动作、科幻、赛博朋克",
    "file": "movie-1211.html",
    "image": "./11.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1212,
    "title": "栋笃小天后",
    "year": "2025",
    "region": "中国香港",
    "genre": "喜剧, 音乐",
    "file": "movie-1212.html",
    "image": "./12.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1213,
    "title": "男人四十打功夫粤语",
    "year": "2024",
    "region": "中国香港",
    "genre": "喜剧，动作",
    "file": "movie-1213.html",
    "image": "./13.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1214,
    "title": "斯图尔特·李：龙卷风",
    "year": "2025",
    "region": "英国",
    "genre": "喜剧 / 脱口秀",
    "file": "movie-1214.html",
    "image": "./14.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1215,
    "title": "兰闺飞凤",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧, 爱情, 运动",
    "file": "movie-1215.html",
    "image": "./15.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1216,
    "title": "巫术面具",
    "year": "2026",
    "region": "尼日利亚 / 美国",
    "genre": "恐怖 / 悬疑 / 民俗",
    "file": "movie-1216.html",
    "image": "./16.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1217,
    "title": "恐惧大街2：1978",
    "year": "2021",
    "region": "美国",
    "genre": "恐怖, 惊悚, 悬疑",
    "file": "movie-1217.html",
    "image": "./17.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1218,
    "title": "荒漠干戈",
    "year": "2025",
    "region": "中国",
    "genre": "西部 / 动作",
    "file": "movie-1218.html",
    "image": "./18.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1219,
    "title": "噜噜米与冬日仙境",
    "year": "2024",
    "region": "芬兰",
    "genre": "动画、家庭、奇幻",
    "file": "movie-1219.html",
    "image": "./19.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1220,
    "title": "回望长安",
    "year": "2026",
    "region": "中国",
    "genre": "历史, 剧情",
    "file": "movie-1220.html",
    "image": "./20.jpg",
    "category": "经典精选"
  },
  {
    "id": 1221,
    "title": "女王密使",
    "year": "2025",
    "region": "英国",
    "genre": "悬疑、谍战、剧情",
    "file": "movie-1221.html",
    "image": "./21.jpg",
    "category": "战争历史"
  },
  {
    "id": 1222,
    "title": "勇者行动",
    "year": "2012",
    "region": "美国",
    "genre": "动作，战争，惊悚",
    "file": "movie-1222.html",
    "image": "./22.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1223,
    "title": "恋上纯喫茶2",
    "year": "2024",
    "region": "日本",
    "genre": "日常 / 美食 / 治愈",
    "file": "movie-1223.html",
    "image": "./23.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1224,
    "title": "白头神探2恐怖的气味",
    "year": "2025",
    "region": "美国",
    "genre": "动作喜剧",
    "file": "movie-1224.html",
    "image": "./24.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1225,
    "title": "俏佣与我",
    "year": "2022",
    "region": "中国香港",
    "genre": "剧情 / 家庭",
    "file": "movie-1225.html",
    "image": "./25.jpg",
    "category": "环球片库"
  },
  {
    "id": 1226,
    "title": "美丽的时节",
    "year": "1991",
    "region": "日本",
    "genre": "剧情",
    "file": "movie-1226.html",
    "image": "./26.jpg",
    "category": "战争历史"
  },
  {
    "id": 1227,
    "title": "钢琴家",
    "year": "2022",
    "region": "中国大陆 / 波兰",
    "genre": "剧情 / 音乐 / 历史",
    "file": "movie-1227.html",
    "image": "./27.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1228,
    "title": "恐怖食肉虫",
    "year": "2025",
    "region": "美国",
    "genre": "科幻, 恐怖",
    "file": "movie-1228.html",
    "image": "./28.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1229,
    "title": "双生薄荷",
    "year": "2025",
    "region": "日本",
    "genre": "悬疑 / 同性 / 心理",
    "file": "movie-1229.html",
    "image": "./29.jpg",
    "category": "战争历史"
  },
  {
    "id": 1230,
    "title": "黑道中人",
    "year": "2025",
    "region": "韩国",
    "genre": "犯罪/剧情",
    "file": "movie-1230.html",
    "image": "./30.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1231,
    "title": "黑司祭们",
    "year": "2025",
    "region": "韩国",
    "genre": "悬疑， 惊悚， 犯罪",
    "file": "movie-1231.html",
    "image": "./31.jpg",
    "category": "环球片库"
  },
  {
    "id": 1232,
    "title": "我的行进人生",
    "year": "2019",
    "region": "美国",
    "genre": "剧情，音乐，传记",
    "file": "movie-1232.html",
    "image": "./32.jpg",
    "category": "经典精选"
  },
  {
    "id": 1233,
    "title": "千谎百计粤语",
    "year": "2024",
    "region": "中国香港",
    "genre": "悬疑, 律政, 剧情",
    "file": "movie-1233.html",
    "image": "./33.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1234,
    "title": "哈比人：五军之战",
    "year": "2014",
    "region": "美国 / 新西兰",
    "genre": "奇幻 / 冒险 / 动作",
    "file": "movie-1234.html",
    "image": "./34.jpg",
    "category": "环球片库"
  },
  {
    "id": 1235,
    "title": "勇敢的世界",
    "year": "2018",
    "region": "中国",
    "genre": "真人秀 / 冒险 / 竞技",
    "file": "movie-1235.html",
    "image": "./35.jpg",
    "category": "经典精选"
  },
  {
    "id": 1236,
    "title": "泰壹",
    "year": "2025",
    "region": "韩国",
    "genre": "剧情 / 传记 / 社会",
    "file": "movie-1236.html",
    "image": "./36.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1237,
    "title": "死亡阴影",
    "year": "2026",
    "region": "西班牙",
    "genre": "悬疑/恐怖",
    "file": "movie-1237.html",
    "image": "./37.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1238,
    "title": "我生命中的橄榄树",
    "year": "2024",
    "region": "巴勒斯坦 / 法国",
    "genre": "剧情 / 战争",
    "file": "movie-1238.html",
    "image": "./38.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1239,
    "title": "降世神通：科拉传奇第一季",
    "year": "2012",
    "region": "美国",
    "genre": "动作 / 奇幻 / 冒险",
    "file": "movie-1239.html",
    "image": "./39.jpg",
    "category": "经典精选"
  },
  {
    "id": 1240,
    "title": "加拉哈德爵士历险记",
    "year": "2026",
    "region": "英国",
    "genre": "奇幻冒险",
    "file": "movie-1240.html",
    "image": "./40.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1241,
    "title": "刑事案十号",
    "year": "2024",
    "region": "美国",
    "genre": "犯罪 / 悬疑 / 律政",
    "file": "movie-1241.html",
    "image": "./41.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1242,
    "title": "爱情36计",
    "year": "2024",
    "region": "中国台湾",
    "genre": "爱情，喜剧，职场",
    "file": "movie-1242.html",
    "image": "./42.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1243,
    "title": "一咬钟情",
    "year": "2024",
    "region": "美国 / 法国",
    "genre": "喜剧 / 爱情 / 恐怖",
    "file": "movie-1243.html",
    "image": "./43.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1244,
    "title": "我的野兽",
    "year": "2026",
    "region": "美国",
    "genre": "恐怖，剧情",
    "file": "movie-1244.html",
    "image": "./44.jpg",
    "category": "经典精选"
  },
  {
    "id": 1245,
    "title": "交错卢森堡",
    "year": "2023",
    "region": "卢森堡 / 法国",
    "genre": "剧情 / 科幻 / 爱情",
    "file": "movie-1245.html",
    "image": "./45.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1246,
    "title": "超犀女王",
    "year": "2024",
    "region": "中国香港",
    "genre": "动作 / 喜剧 / 女性",
    "file": "movie-1246.html",
    "image": "./46.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1247,
    "title": "画春功之书中自有颜如玉",
    "year": "2024",
    "region": "中国大陆",
    "genre": "古装 / 奇幻 / 爱情",
    "file": "movie-1247.html",
    "image": "./47.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1248,
    "title": "猛犸复活",
    "year": "2025",
    "region": "美国",
    "genre": "科幻、惊悚",
    "file": "movie-1248.html",
    "image": "./48.jpg",
    "category": "经典精选"
  },
  {
    "id": 1249,
    "title": "蚁人与黄蜂女：量子狂潮",
    "year": "2026",
    "region": "美国",
    "genre": "动作, 科幻, 冒险",
    "file": "movie-1249.html",
    "image": "./49.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1250,
    "title": "众生相",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情、悬疑、犯罪",
    "file": "movie-1250.html",
    "image": "./50.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1251,
    "title": "走尸之谜",
    "year": "1995",
    "region": "中国香港",
    "genre": "恐怖 / 悬疑 / 犯罪",
    "file": "movie-1251.html",
    "image": "./51.jpg",
    "category": "环球片库"
  },
  {
    "id": 1252,
    "title": "阿加莎·瑞森探案",
    "year": "2024",
    "region": "英国",
    "genre": "悬疑，犯罪",
    "file": "movie-1252.html",
    "image": "./52.jpg",
    "category": "环球片库"
  },
  {
    "id": 1253,
    "title": "禁止出售",
    "year": "2025",
    "region": "法国 / 比利时",
    "genre": "喜剧 / 剧情",
    "file": "movie-1253.html",
    "image": "./53.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1254,
    "title": "系统",
    "year": "2026",
    "region": "中国大陆",
    "genre": "科幻悬疑",
    "file": "movie-1254.html",
    "image": "./54.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1255,
    "title": "贫血电影院",
    "year": "2025",
    "region": "法国 / 比利时",
    "genre": "剧情 / 艺术 / 心理",
    "file": "movie-1255.html",
    "image": "./55.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1256,
    "title": "神枪少女第二季",
    "year": "2024",
    "region": "日本",
    "genre": "动作， 剧情， 科幻",
    "file": "movie-1256.html",
    "image": "./56.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1257,
    "title": "爱在旭日初升时",
    "year": "2025",
    "region": "日本",
    "genre": "爱情 / 奇幻 / 灾难",
    "file": "movie-1257.html",
    "image": "./57.jpg",
    "category": "战争历史"
  },
  {
    "id": 1258,
    "title": "甩皮鬼",
    "year": "1992",
    "region": "中国香港",
    "genre": "恐怖 / 惊悚 / 奇幻",
    "file": "movie-1258.html",
    "image": "./58.jpg",
    "category": "战争历史"
  },
  {
    "id": 1259,
    "title": "布鲁塞尔风情画",
    "year": "2023",
    "region": "比利时，法国",
    "genre": "剧情，爱情，文艺",
    "file": "movie-1259.html",
    "image": "./59.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1260,
    "title": "欲望游戏",
    "year": "2026",
    "region": "韩国",
    "genre": "剧情/惊悚",
    "file": "movie-1260.html",
    "image": "./60.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1261,
    "title": "炽爱游戏泰语",
    "year": "2018",
    "region": "泰国",
    "genre": "爱情, 剧情",
    "file": "movie-1261.html",
    "image": "./61.jpg",
    "category": "环球片库"
  },
  {
    "id": 1262,
    "title": "相扑男孩",
    "year": "2022",
    "region": "日本",
    "genre": "剧情 / 运动 / 成长",
    "file": "movie-1262.html",
    "image": "./62.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1263,
    "title": "千王之王重出江湖国语",
    "year": "2024",
    "region": "中国香港",
    "genre": "剧情 / 犯罪",
    "file": "movie-1263.html",
    "image": "./63.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1264,
    "title": "恨锁金瓶粤语",
    "year": "1994",
    "region": "中国香港",
    "genre": "剧情 / 古装",
    "file": "movie-1264.html",
    "image": "./64.jpg",
    "category": "环球片库"
  },
  {
    "id": 1265,
    "title": "关键目击",
    "year": "2025",
    "region": "美国",
    "genre": "犯罪，悬疑",
    "file": "movie-1265.html",
    "image": "./65.jpg",
    "category": "环球片库"
  },
  {
    "id": 1266,
    "title": "荷顿奇遇记",
    "year": "2023",
    "region": "美国",
    "genre": "喜剧、冒险",
    "file": "movie-1266.html",
    "image": "./66.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1267,
    "title": "十六岁之爱",
    "year": "2025",
    "region": "法国",
    "genre": "剧情、爱情",
    "file": "movie-1267.html",
    "image": "./67.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1268,
    "title": "杀戮行动",
    "year": "2023",
    "region": "俄罗斯",
    "genre": "战争 / 动作",
    "file": "movie-1268.html",
    "image": "./68.jpg",
    "category": "环球片库"
  },
  {
    "id": 1269,
    "title": "黑艳凤",
    "year": "2025",
    "region": "中国香港",
    "genre": "犯罪、动作、黑帮",
    "file": "movie-1269.html",
    "image": "./69.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1270,
    "title": "双面女人",
    "year": "2021",
    "region": "韩国",
    "genre": "悬疑 / 爱情 / 复仇",
    "file": "movie-1270.html",
    "image": "./70.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1271,
    "title": "如果太阳没有回来",
    "year": "2006",
    "region": "中国台湾",
    "genre": "爱情，奇幻，悬疑",
    "file": "movie-1271.html",
    "image": "./71.jpg",
    "category": "环球片库"
  },
  {
    "id": 1272,
    "title": "闪电大战车",
    "year": "2024",
    "region": "美国",
    "genre": "动作",
    "file": "movie-1272.html",
    "image": "./72.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1273,
    "title": "教会",
    "year": "2024",
    "region": "巴西 / 葡萄牙",
    "genre": "历史剧情",
    "file": "movie-1273.html",
    "image": "./73.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1274,
    "title": "恐怖列车",
    "year": "2024",
    "region": "西班牙",
    "genre": "恐怖，悬疑，灾难",
    "file": "movie-1274.html",
    "image": "./74.jpg",
    "category": "环球片库"
  },
  {
    "id": 1275,
    "title": "房车",
    "year": "2025",
    "region": "美国",
    "genre": "剧情家庭",
    "file": "movie-1275.html",
    "image": "./75.jpg",
    "category": "经典精选"
  },
  {
    "id": 1276,
    "title": "最佳男友进化论",
    "year": "2024",
    "region": "中国大陆",
    "genre": "爱情, 喜剧",
    "file": "movie-1276.html",
    "image": "./76.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1277,
    "title": "科学怪人",
    "year": "2025",
    "region": "德国",
    "genre": "恐怖 / 科幻 / 剧情",
    "file": "movie-1277.html",
    "image": "./77.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1278,
    "title": "格林兄弟国语",
    "year": "2025",
    "region": "中国大陆",
    "genre": "奇幻、悬疑",
    "file": "movie-1278.html",
    "image": "./78.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1279,
    "title": "老头儿",
    "year": "2019",
    "region": "中国",
    "genre": "剧情 / 家庭",
    "file": "movie-1279.html",
    "image": "./79.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1280,
    "title": "睡衣男异次元空间",
    "year": "2026",
    "region": "日本",
    "genre": "奇幻, 悬疑",
    "file": "movie-1280.html",
    "image": "./80.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1281,
    "title": "女挽狂澜",
    "year": "2024",
    "region": "美国 / 挪威",
    "genre": "传记，冒险，体育",
    "file": "movie-1281.html",
    "image": "./81.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1282,
    "title": "我死之日",
    "year": "2023",
    "region": "韩国",
    "genre": "悬疑, 剧情",
    "file": "movie-1282.html",
    "image": "./82.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1283,
    "title": "乌菲兹美术馆的日与夜",
    "year": "2026",
    "region": "意大利",
    "genre": "悬疑, 历史, 奇幻",
    "file": "movie-1283.html",
    "image": "./83.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1284,
    "title": "孕转心方向",
    "year": "2024",
    "region": "中国香港",
    "genre": "悬疑 / 心理 / 伦理",
    "file": "movie-1284.html",
    "image": "./84.jpg",
    "category": "经典精选"
  },
  {
    "id": 1285,
    "title": "智恵子抄",
    "year": "2026",
    "region": "日本",
    "genre": "剧情 / 传记",
    "file": "movie-1285.html",
    "image": "./85.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1286,
    "title": "白色猎人黑色心",
    "year": "2024",
    "region": "英国",
    "genre": "惊悚 / 剧情 / 冒险",
    "file": "movie-1286.html",
    "image": "./86.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1287,
    "title": "厨房故事",
    "year": "2026",
    "region": "日本",
    "genre": "剧情 / 家庭",
    "file": "movie-1287.html",
    "image": "./87.jpg",
    "category": "战争历史"
  },
  {
    "id": 1288,
    "title": "明日",
    "year": "2023",
    "region": "中国大陆",
    "genre": "科幻 / 灾难",
    "file": "movie-1288.html",
    "image": "./88.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1289,
    "title": "善良的夏吾冬",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 家庭",
    "file": "movie-1289.html",
    "image": "./89.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1290,
    "title": "叛奴",
    "year": "2026",
    "region": "美国",
    "genre": "历史 / 剧情 / 惊悚",
    "file": "movie-1290.html",
    "image": "./90.jpg",
    "category": "经典精选"
  },
  {
    "id": 1291,
    "title": "激进教学",
    "year": "2025",
    "region": "中国",
    "genre": "剧情 / 教育 / 社会",
    "file": "movie-1291.html",
    "image": "./91.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1292,
    "title": "夜深情更深",
    "year": "2010",
    "region": "香港",
    "genre": "爱情 / 剧情 / 都市",
    "file": "movie-1292.html",
    "image": "./92.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1293,
    "title": "精神错乱2020",
    "year": "2020",
    "region": "美国",
    "genre": "惊悚 / 犯罪",
    "file": "movie-1293.html",
    "image": "./93.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1294,
    "title": "猛鬼电王",
    "year": "1998",
    "region": "香港",
    "genre": "恐怖, 动作, 科幻",
    "file": "movie-1294.html",
    "image": "./94.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1295,
    "title": "小大人聊正事",
    "year": "2010",
    "region": "美国",
    "genre": "喜剧 / 真人秀",
    "file": "movie-1295.html",
    "image": "./95.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1296,
    "title": "十年",
    "year": "2026",
    "region": "中国香港",
    "genre": "剧情, 科幻, 悬疑",
    "file": "movie-1296.html",
    "image": "./96.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1297,
    "title": "只因你是女子",
    "year": "2024",
    "region": "印度",
    "genre": "剧情, 社会",
    "file": "movie-1297.html",
    "image": "./97.jpg",
    "category": "战争历史"
  },
  {
    "id": 1298,
    "title": "华装艳舞",
    "year": "2019",
    "region": "美国",
    "genre": "剧情，歌舞",
    "file": "movie-1298.html",
    "image": "./98.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1299,
    "title": "小杜丽",
    "year": "2025",
    "region": "英国",
    "genre": "剧情 / 历史",
    "file": "movie-1299.html",
    "image": "./99.jpg",
    "category": "战争历史"
  },
  {
    "id": 1300,
    "title": "恋爱星期天",
    "year": "2024",
    "region": "日本",
    "genre": "爱情 / 剧情",
    "file": "movie-1300.html",
    "image": "./100.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1301,
    "title": "不可思议的爱情",
    "year": "2021",
    "region": "中国大陆",
    "genre": "爱情 / 喜剧 / 奇幻",
    "file": "movie-1301.html",
    "image": "./101.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1302,
    "title": "岗楼",
    "year": "2025",
    "region": "中国大陆",
    "genre": "犯罪 / 悬疑",
    "file": "movie-1302.html",
    "image": "./102.jpg",
    "category": "环球片库"
  },
  {
    "id": 1303,
    "title": "大滚友",
    "year": "2023",
    "region": "中国香港",
    "genre": "喜剧，青春，校园",
    "file": "movie-1303.html",
    "image": "./103.jpg",
    "category": "战争历史"
  },
  {
    "id": 1304,
    "title": "万渣朝凰第三季",
    "year": "2024",
    "region": "中国大陆",
    "genre": "喜剧 / 奇幻 / 古装",
    "file": "movie-1304.html",
    "image": "./104.jpg",
    "category": "经典精选"
  },
  {
    "id": 1305,
    "title": "开辟",
    "year": "2025",
    "region": "中国大陆",
    "genre": "科幻 / 历史 / 冒险",
    "file": "movie-1305.html",
    "image": "./105.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1306,
    "title": "仿生超极限",
    "year": "2027",
    "region": "美国",
    "genre": "科幻, 动作, 惊悚",
    "file": "movie-1306.html",
    "image": "./106.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1307,
    "title": "神枪杀手",
    "year": "2025",
    "region": "美国",
    "genre": "西部、动作、复仇",
    "file": "movie-1307.html",
    "image": "./107.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1308,
    "title": "回到荒野",
    "year": "2025",
    "region": "英国 / 美国",
    "genre": "冒险 / 家庭",
    "file": "movie-1308.html",
    "image": "./108.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1309,
    "title": "狭路英豪",
    "year": "2025",
    "region": "中国大陆",
    "genre": "动作, 犯罪, 西部",
    "file": "movie-1309.html",
    "image": "./109.jpg",
    "category": "战争历史"
  },
  {
    "id": 1310,
    "title": "接赃",
    "year": "2024",
    "region": "中国香港",
    "genre": "剧情, 犯罪, 悬疑",
    "file": "movie-1310.html",
    "image": "./110.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1311,
    "title": "艾米公主",
    "year": "2015",
    "region": "美国",
    "genre": "剧情/奇幻",
    "file": "movie-1311.html",
    "image": "./111.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1312,
    "title": "小号手",
    "year": "2024",
    "region": "中国",
    "genre": "战争, 儿童",
    "file": "movie-1312.html",
    "image": "./112.jpg",
    "category": "环球片库"
  },
  {
    "id": 1313,
    "title": "哈蜜",
    "year": "2022",
    "region": "中国大陆",
    "genre": "剧情, 家庭",
    "file": "movie-1313.html",
    "image": "./113.jpg",
    "category": "战争历史"
  },
  {
    "id": 1314,
    "title": "越爱越美丽",
    "year": "2022",
    "region": "中国大陆",
    "genre": "家庭 / 喜剧",
    "file": "movie-1314.html",
    "image": "./114.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1315,
    "title": "王胜：香甜多汁",
    "year": "2026",
    "region": "中国大陆",
    "genre": "喜剧/科幻/美食",
    "file": "movie-1315.html",
    "image": "./115.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1316,
    "title": "拉斯维加斯的兔子和厌恶",
    "year": "2021",
    "region": "美国",
    "genre": "喜剧, 黑色幽默",
    "file": "movie-1316.html",
    "image": "./116.jpg",
    "category": "环球片库"
  },
  {
    "id": 1317,
    "title": "神笔奇侠传",
    "year": "2025",
    "region": "中国",
    "genre": "古装 / 奇幻 / 动作",
    "file": "movie-1317.html",
    "image": "./117.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1318,
    "title": "血色罗马",
    "year": "2025",
    "region": "意大利",
    "genre": "历史、犯罪、剧情",
    "file": "movie-1318.html",
    "image": "./118.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1319,
    "title": "埃菲尔铁塔",
    "year": "2021",
    "region": "法国",
    "genre": "爱情 / 历史 / 剧情",
    "file": "movie-1319.html",
    "image": "./119.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1320,
    "title": "疯狂的摄像机",
    "year": "2018",
    "region": "俄罗斯",
    "genre": "喜剧, 剧情",
    "file": "movie-1320.html",
    "image": "./120.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1321,
    "title": "极度重犯",
    "year": "1998",
    "region": "中国香港",
    "genre": "动作，犯罪，惊悚",
    "file": "movie-1321.html",
    "image": "./121.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1322,
    "title": "安娜贝尔3：回家",
    "year": "2019",
    "region": "美国",
    "genre": "恐怖, 惊悚",
    "file": "movie-1322.html",
    "image": "./122.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1323,
    "title": "王蛇帝国",
    "year": "2025",
    "region": "美国",
    "genre": "剧情 / 犯罪",
    "file": "movie-1323.html",
    "image": "./123.jpg",
    "category": "经典精选"
  },
  {
    "id": 1324,
    "title": "爱情不罢工",
    "year": "2021",
    "region": "法国",
    "genre": "喜剧 / 爱情",
    "file": "movie-1324.html",
    "image": "./124.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1325,
    "title": "新古装世界",
    "year": "2023",
    "region": "中国大陆",
    "genre": "喜剧 / 奇幻 / 古装",
    "file": "movie-1325.html",
    "image": "./125.jpg",
    "category": "经典精选"
  },
  {
    "id": 1326,
    "title": "天外横财",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧, 犯罪, 黑色幽默",
    "file": "movie-1326.html",
    "image": "./126.jpg",
    "category": "战争历史"
  },
  {
    "id": 1327,
    "title": "黄金战士",
    "year": "2025",
    "region": "中国大陆",
    "genre": "动作, 战争",
    "file": "movie-1327.html",
    "image": "./127.jpg",
    "category": "环球片库"
  },
  {
    "id": 1328,
    "title": "超凡追击者",
    "year": "2024",
    "region": "中国大陆",
    "genre": "动作 / 科幻",
    "file": "movie-1328.html",
    "image": "./128.jpg",
    "category": "经典精选"
  },
  {
    "id": 1329,
    "title": "鬼娃新娘国语",
    "year": "2025",
    "region": "美国/中国合拍",
    "genre": "恐怖喜剧",
    "file": "movie-1329.html",
    "image": "./129.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1330,
    "title": "窘境",
    "year": "2025",
    "region": "中国大陆",
    "genre": "喜剧 / 剧情",
    "file": "movie-1330.html",
    "image": "./130.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1331,
    "title": "阿里巴巴三根金发",
    "year": "2026",
    "region": "中国大陆",
    "genre": "奇幻、冒险、喜剧",
    "file": "movie-1331.html",
    "image": "./131.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1332,
    "title": "诡老",
    "year": "2021",
    "region": "美国",
    "genre": "恐怖",
    "file": "movie-1332.html",
    "image": "./132.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1333,
    "title": "橄榄树下的情人",
    "year": "2025",
    "region": "伊朗 / 法国",
    "genre": "剧情 / 爱情",
    "file": "movie-1333.html",
    "image": "./133.jpg",
    "category": "环球片库"
  },
  {
    "id": 1334,
    "title": "平方根：海绵宝宝的故事",
    "year": "2022",
    "region": "美国",
    "genre": "动画， 奇幻",
    "file": "movie-1334.html",
    "image": "./134.jpg",
    "category": "战争历史"
  },
  {
    "id": 1335,
    "title": "魔女的考验",
    "year": "2024",
    "region": "日本",
    "genre": "奇幻 / 冒险",
    "file": "movie-1335.html",
    "image": "./135.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1336,
    "title": "效廉出发吧",
    "year": "2022",
    "region": "中国台湾",
    "genre": "剧情 / 公路",
    "file": "movie-1336.html",
    "image": "./136.jpg",
    "category": "环球片库"
  },
  {
    "id": 1337,
    "title": "父职的乐趣",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧家庭",
    "file": "movie-1337.html",
    "image": "./137.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1338,
    "title": "路西法第一季",
    "year": "2016",
    "region": "美国",
    "genre": "奇幻 / 犯罪",
    "file": "movie-1338.html",
    "image": "./138.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1339,
    "title": "孕期惊魂",
    "year": "2026",
    "region": "美国",
    "genre": "恐怖, 悬疑",
    "file": "movie-1339.html",
    "image": "./139.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1340,
    "title": "唐探1900",
    "year": "2026",
    "region": "中国大陆",
    "genre": "悬疑 / 动作 / 喜剧",
    "file": "movie-1340.html",
    "image": "./140.jpg",
    "category": "战争历史"
  },
  {
    "id": 1341,
    "title": "诱饵2019",
    "year": "2019",
    "region": "中国大陆",
    "genre": "犯罪, 悬疑",
    "file": "movie-1341.html",
    "image": "./141.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1342,
    "title": "雅西尔",
    "year": "2024",
    "region": "哈萨克斯坦",
    "genre": "剧情, 西部",
    "file": "movie-1342.html",
    "image": "./142.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1343,
    "title": "独眼将军杰士卡",
    "year": "1960",
    "region": "捷克",
    "genre": "传记, 历史",
    "file": "movie-1343.html",
    "image": "./143.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1344,
    "title": "穿在乳头上的洞",
    "year": "2019",
    "region": "日本",
    "genre": "剧情, 惊悚, 青春",
    "file": "movie-1344.html",
    "image": "./144.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1345,
    "title": "只为你遗憾",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情",
    "file": "movie-1345.html",
    "image": "./145.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1346,
    "title": "杀手的保镖",
    "year": "2025",
    "region": "美国",
    "genre": "动作 / 喜剧 / 犯罪",
    "file": "movie-1346.html",
    "image": "./146.jpg",
    "category": "环球片库"
  },
  {
    "id": 1347,
    "title": "人细多计",
    "year": "1985",
    "region": "中国香港",
    "genre": "喜剧 / 犯罪",
    "file": "movie-1347.html",
    "image": "./147.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1348,
    "title": "龙卷风3：上帝的怒火",
    "year": "2026",
    "region": "美国",
    "genre": "动作 / 灾难 / 科幻",
    "file": "movie-1348.html",
    "image": "./148.jpg",
    "category": "战争历史"
  },
  {
    "id": 1349,
    "title": "人类清除计划4",
    "year": "2026",
    "region": "美国",
    "genre": "科幻、惊悚、动作",
    "file": "movie-1349.html",
    "image": "./149.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1350,
    "title": "等待之城",
    "year": "2018",
    "region": "阿根廷",
    "genre": "剧情 / 奇幻",
    "file": "movie-1350.html",
    "image": "./150.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1351,
    "title": "高地人：复仇之旅",
    "year": "2026",
    "region": "美国 / 英国",
    "genre": "动作, 奇幻",
    "file": "movie-1351.html",
    "image": "./1.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1352,
    "title": "中国合伙人2",
    "year": "2026",
    "region": "中国大陆",
    "genre": "剧情， 创业， 历史",
    "file": "movie-1352.html",
    "image": "./2.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1353,
    "title": "狼人镇",
    "year": "2024",
    "region": "美国",
    "genre": "犯罪 / 奇幻",
    "file": "movie-1353.html",
    "image": "./3.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1354,
    "title": "女神游戏室",
    "year": "2025",
    "region": "韩国",
    "genre": "悬疑 / 惊悚 / 奇幻",
    "file": "movie-1354.html",
    "image": "./4.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1355,
    "title": "桑迪顿第三季",
    "year": "2022",
    "region": "英国",
    "genre": "爱情, 历史",
    "file": "movie-1355.html",
    "image": "./5.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1356,
    "title": "寒刀凛",
    "year": "2025",
    "region": "中国大陆",
    "genre": "武侠, 悬疑",
    "file": "movie-1356.html",
    "image": "./6.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1357,
    "title": "敌对同谋",
    "year": "2027",
    "region": "美国",
    "genre": "谍战 / 惊悚",
    "file": "movie-1357.html",
    "image": "./7.jpg",
    "category": "环球片库"
  },
  {
    "id": 1358,
    "title": "快递超人",
    "year": "2025",
    "region": "中国",
    "genre": "喜剧 / 动作 / 都市奇幻",
    "file": "movie-1358.html",
    "image": "./8.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1359,
    "title": "狐及其友",
    "year": "2019",
    "region": "德国",
    "genre": "剧情 / 同性",
    "file": "movie-1359.html",
    "image": "./9.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1360,
    "title": "芭比姐妹之追逐的小狗",
    "year": "2016",
    "region": "美国",
    "genre": "动画 / 家庭 / 冒险",
    "file": "movie-1360.html",
    "image": "./10.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1361,
    "title": "泪桥",
    "year": "2023",
    "region": "中国大陆",
    "genre": "爱情，剧情",
    "file": "movie-1361.html",
    "image": "./11.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1362,
    "title": "少女多情",
    "year": "1994",
    "region": "中国台湾",
    "genre": "爱情 / 剧情 / 青春",
    "file": "movie-1362.html",
    "image": "./12.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1363,
    "title": "分手信",
    "year": "2024",
    "region": "美国",
    "genre": "爱情 / 剧情",
    "file": "movie-1363.html",
    "image": "./13.jpg",
    "category": "环球片库"
  },
  {
    "id": 1364,
    "title": "神探狄仁杰4",
    "year": "2017",
    "region": "中国大陆",
    "genre": "古装, 悬疑, 推理",
    "file": "movie-1364.html",
    "image": "./14.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1365,
    "title": "圣女丽塔·达·卡西亚",
    "year": "1971",
    "region": "意大利",
    "genre": "剧情 / 传记 / 宗教",
    "file": "movie-1365.html",
    "image": "./15.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1366,
    "title": "失衡生活",
    "year": "2025",
    "region": "中国",
    "genre": "剧情，家庭，伦理",
    "file": "movie-1366.html",
    "image": "./16.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1367,
    "title": "人间至味是清欢",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 美食",
    "file": "movie-1367.html",
    "image": "./17.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1368,
    "title": "安眠杀机",
    "year": "2025",
    "region": "韩国",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "file": "movie-1368.html",
    "image": "./18.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1369,
    "title": "通识教育",
    "year": "2025",
    "region": "中国大陆",
    "genre": "青春 / 校园 / 喜剧",
    "file": "movie-1369.html",
    "image": "./19.jpg",
    "category": "战争历史"
  },
  {
    "id": 1370,
    "title": "武馆",
    "year": "2029",
    "region": "中国香港",
    "genre": "动作, 剧情",
    "file": "movie-1370.html",
    "image": "./20.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1371,
    "title": "小狗就是小狗",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情",
    "file": "movie-1371.html",
    "image": "./21.jpg",
    "category": "经典精选"
  },
  {
    "id": 1372,
    "title": "龙飞凤舞",
    "year": "2023",
    "region": "香港",
    "genre": "动作喜剧",
    "file": "movie-1372.html",
    "image": "./22.jpg",
    "category": "经典精选"
  },
  {
    "id": 1373,
    "title": "爱有多远",
    "year": "2022",
    "region": "中国大陆",
    "genre": "家庭 / 伦理 / 都市",
    "file": "movie-1373.html",
    "image": "./23.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1374,
    "title": "之后2",
    "year": "2022",
    "region": "美国",
    "genre": "爱情, 剧情",
    "file": "movie-1374.html",
    "image": "./24.jpg",
    "category": "环球片库"
  },
  {
    "id": 1375,
    "title": "侏罗纪入侵",
    "year": "2022",
    "region": "美国",
    "genre": "动作, 科幻, 灾难",
    "file": "movie-1375.html",
    "image": "./25.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1376,
    "title": "小不点",
    "year": "2024",
    "region": "法国 / 比利时",
    "genre": "动画 / 家庭",
    "file": "movie-1376.html",
    "image": "./26.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1377,
    "title": "甲方乙方",
    "year": "1997",
    "region": "中国大陆",
    "genre": "喜剧 / 剧情",
    "file": "movie-1377.html",
    "image": "./27.jpg",
    "category": "战争历史"
  },
  {
    "id": 1378,
    "title": "莫斯科离大同不远",
    "year": "2022",
    "region": "中国大陆/俄罗斯",
    "genre": "公路喜剧",
    "file": "movie-1378.html",
    "image": "./28.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1379,
    "title": "三明治俱乐部",
    "year": "2020",
    "region": "美国",
    "genre": "喜剧, 剧情, 生活",
    "file": "movie-1379.html",
    "image": "./29.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1380,
    "title": "慢慢说",
    "year": "2024",
    "region": "中国香港",
    "genre": "爱情， 文艺， 家庭",
    "file": "movie-1380.html",
    "image": "./30.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1381,
    "title": "琉璃",
    "year": "2023",
    "region": "中国",
    "genre": "剧情 / 家庭",
    "file": "movie-1381.html",
    "image": "./31.jpg",
    "category": "环球片库"
  },
  {
    "id": 1382,
    "title": "情深似海",
    "year": "2025",
    "region": "韩国",
    "genre": "家庭伦理",
    "file": "movie-1382.html",
    "image": "./32.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1383,
    "title": "水牛女孩",
    "year": "2024",
    "region": "美国",
    "genre": "剧情 / 西部",
    "file": "movie-1383.html",
    "image": "./33.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1384,
    "title": "雨天的水彩画",
    "year": "2023",
    "region": "日本",
    "genre": "剧情 / 爱情",
    "file": "movie-1384.html",
    "image": "./34.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1385,
    "title": "终于找到他",
    "year": "2022",
    "region": "韩国",
    "genre": "剧情，爱情，奇幻",
    "file": "movie-1385.html",
    "image": "./35.jpg",
    "category": "经典精选"
  },
  {
    "id": 1386,
    "title": "很远很远",
    "year": "2022",
    "region": "中国大陆",
    "genre": "剧情, 公路",
    "file": "movie-1386.html",
    "image": "./36.jpg",
    "category": "战争历史"
  },
  {
    "id": 1387,
    "title": "火燄山恩仇记",
    "year": "2025",
    "region": "中国大陆",
    "genre": "西部，动作，爱情",
    "file": "movie-1387.html",
    "image": "./37.jpg",
    "category": "经典精选"
  },
  {
    "id": 1388,
    "title": "地狱无门",
    "year": "1980",
    "region": "中国香港",
    "genre": "恐怖， 奇幻， 动作",
    "file": "movie-1388.html",
    "image": "./38.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1389,
    "title": "成名机会",
    "year": "2024",
    "region": "英国",
    "genre": "音乐 / 剧情 / 励志",
    "file": "movie-1389.html",
    "image": "./39.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1390,
    "title": "老妈之夜",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧 / 家庭",
    "file": "movie-1390.html",
    "image": "./40.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1391,
    "title": "熄灯追缉令",
    "year": "2025",
    "region": "美国",
    "genre": "动作、惊悚、犯罪",
    "file": "movie-1391.html",
    "image": "./41.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1392,
    "title": "男人不可以穷",
    "year": "2023",
    "region": "中国香港",
    "genre": "剧情 / 喜剧",
    "file": "movie-1392.html",
    "image": "./42.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1393,
    "title": "骗徒艳福",
    "year": "2023",
    "region": "中国香港",
    "genre": "黑色喜剧",
    "file": "movie-1393.html",
    "image": "./43.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1394,
    "title": "开麦拉狂想曲",
    "year": "2022",
    "region": "法国",
    "genre": "喜剧, 剧情",
    "file": "movie-1394.html",
    "image": "./44.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1395,
    "title": "奇男奇女奇情",
    "year": "1992",
    "region": "中国台湾",
    "genre": "剧情, 爱情, 伦理",
    "file": "movie-1395.html",
    "image": "./45.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1396,
    "title": "一人有一点颜色",
    "year": "2024",
    "region": "法国",
    "genre": "奇幻剧情",
    "file": "movie-1396.html",
    "image": "./46.jpg",
    "category": "环球片库"
  },
  {
    "id": 1397,
    "title": "亚当和伊夫",
    "year": "2024",
    "region": "法国",
    "genre": "爱情科幻",
    "file": "movie-1397.html",
    "image": "./47.jpg",
    "category": "环球片库"
  },
  {
    "id": 1398,
    "title": "禁断动画22",
    "year": "2026",
    "region": "日本",
    "genre": "恐怖 / 悬疑 / 惊悚",
    "file": "movie-1398.html",
    "image": "./48.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1399,
    "title": "通行证",
    "year": "2026",
    "region": "美国 / 德国",
    "genre": "历史 / 剧情 / 惊悚",
    "file": "movie-1399.html",
    "image": "./49.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1400,
    "title": "糟糕咨询",
    "year": "2023",
    "region": "美国",
    "genre": "喜剧, 剧情",
    "file": "movie-1400.html",
    "image": "./50.jpg",
    "category": "经典精选"
  },
  {
    "id": 1401,
    "title": "鬼咁够运粤语",
    "year": "1992",
    "region": "中国香港",
    "genre": "喜剧 / 灵异 / 时装",
    "file": "movie-1401.html",
    "image": "./51.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1402,
    "title": "天使的战争",
    "year": "2026",
    "region": "美国",
    "genre": "奇幻， 惊悚",
    "file": "movie-1402.html",
    "image": "./52.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1403,
    "title": "谢谢，晚安：邦·乔维故事",
    "year": "2026",
    "region": "美国",
    "genre": "纪录片， 音乐",
    "file": "movie-1403.html",
    "image": "./53.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1404,
    "title": "家和万事兴之双喜临门",
    "year": "1998",
    "region": "中国香港",
    "genre": "家庭喜剧",
    "file": "movie-1404.html",
    "image": "./54.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1405,
    "title": "爆头",
    "year": "2024",
    "region": "美国",
    "genre": "动作惊悚",
    "file": "movie-1405.html",
    "image": "./55.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1406,
    "title": "万水千山",
    "year": "2025",
    "region": "中国大陆",
    "genre": "家庭 / 年代 / 温情",
    "file": "movie-1406.html",
    "image": "./56.jpg",
    "category": "经典精选"
  },
  {
    "id": 1407,
    "title": "校花的秘密花园",
    "year": "2024",
    "region": "中国大陆",
    "genre": "青春 / 悬疑 / 校园",
    "file": "movie-1407.html",
    "image": "./57.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1408,
    "title": "空屋情人",
    "year": "2004",
    "region": "韩国",
    "genre": "爱情 / 悬疑 / 文艺",
    "file": "movie-1408.html",
    "image": "./58.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1409,
    "title": "再见 美国处男",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧 / 爱情",
    "file": "movie-1409.html",
    "image": "./59.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1410,
    "title": "野火2018",
    "year": "2018",
    "region": "中国大陆",
    "genre": "悬疑，犯罪，黑色电影",
    "file": "movie-1410.html",
    "image": "./60.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1411,
    "title": "芹菜怪物的茎",
    "year": "2024",
    "region": "日本",
    "genre": "恐怖 / 科幻 / 喜剧",
    "file": "movie-1411.html",
    "image": "./61.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1412,
    "title": "大墙无言",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情",
    "file": "movie-1412.html",
    "image": "./62.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1413,
    "title": "危险的追缠",
    "year": "2026",
    "region": "韩国",
    "genre": "悬疑，惊悚，犯罪",
    "file": "movie-1413.html",
    "image": "./63.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1414,
    "title": "共助2",
    "year": "2022",
    "region": "韩国",
    "genre": "动作, 犯罪, 喜剧",
    "file": "movie-1414.html",
    "image": "./64.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1415,
    "title": "冰球之王",
    "year": "2025",
    "region": "加拿大",
    "genre": "运动",
    "file": "movie-1415.html",
    "image": "./65.jpg",
    "category": "环球片库"
  },
  {
    "id": 1416,
    "title": "跟哥哥走玛雅：九把钥匙",
    "year": "2025",
    "region": "中国大陆",
    "genre": "冒险, 悬疑, 奇幻",
    "file": "movie-1416.html",
    "image": "./66.jpg",
    "category": "战争历史"
  },
  {
    "id": 1417,
    "title": "夜车奸杀案",
    "year": "1995",
    "region": "中国大陆",
    "genre": "悬疑",
    "file": "movie-1417.html",
    "image": "./67.jpg",
    "category": "经典精选"
  },
  {
    "id": 1418,
    "title": "无条件为你",
    "year": "2005",
    "region": "日本",
    "genre": "爱情 / 家庭",
    "file": "movie-1418.html",
    "image": "./68.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1419,
    "title": "战地浪漫曲",
    "year": "1983",
    "region": "苏联",
    "genre": "爱情 / 战争",
    "file": "movie-1419.html",
    "image": "./69.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1420,
    "title": "我还从未去过纽约",
    "year": "2023",
    "region": "德国",
    "genre": "剧情 / 家庭 / 公路",
    "file": "movie-1420.html",
    "image": "./70.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1421,
    "title": "红墙外",
    "year": "1992",
    "region": "中国",
    "genre": "剧情，历史，家庭",
    "file": "movie-1421.html",
    "image": "./71.jpg",
    "category": "经典精选"
  },
  {
    "id": 1422,
    "title": "绑架婚姻",
    "year": "2026",
    "region": "印度",
    "genre": "剧情 / 犯罪 / 女性",
    "file": "movie-1422.html",
    "image": "./72.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1423,
    "title": "情义我心知粤语",
    "year": "2026",
    "region": "中国香港",
    "genre": "剧情/犯罪/动作",
    "file": "movie-1423.html",
    "image": "./73.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1424,
    "title": "阴阳画皮",
    "year": "2028",
    "region": "中国",
    "genre": "奇幻, 恐怖, 爱情",
    "file": "movie-1424.html",
    "image": "./74.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1425,
    "title": "性爱野鸳鸯",
    "year": "2024",
    "region": "丹麦",
    "genre": "剧情 / 爱情 / 情色",
    "file": "movie-1425.html",
    "image": "./75.jpg",
    "category": "经典精选"
  },
  {
    "id": 1426,
    "title": "攻壳机动队 新剧场版",
    "year": "2026",
    "region": "日本",
    "genre": "科幻， 动作， 悬疑",
    "file": "movie-1426.html",
    "image": "./76.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1427,
    "title": "金瓶梅2：爱的奴隶",
    "year": "2024",
    "region": "中国香港",
    "genre": "情色 / 剧情",
    "file": "movie-1427.html",
    "image": "./77.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1428,
    "title": "母亲",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 家庭 / 悬疑",
    "file": "movie-1428.html",
    "image": "./78.jpg",
    "category": "经典精选"
  },
  {
    "id": 1429,
    "title": "神兽巴打",
    "year": "2024",
    "region": "中国香港",
    "genre": "喜剧, 奇幻, 家庭",
    "file": "movie-1429.html",
    "image": "./79.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1430,
    "title": "大祠堂",
    "year": "2018",
    "region": "中国大陆",
    "genre": "历史, 家族",
    "file": "movie-1430.html",
    "image": "./80.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1431,
    "title": "穿梭阴阳恋",
    "year": "2026",
    "region": "日本",
    "genre": "奇幻、爱情、悬疑",
    "file": "movie-1431.html",
    "image": "./81.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1432,
    "title": "巴巴里海岸的火焰",
    "year": "2025",
    "region": "美国",
    "genre": "惊悚",
    "file": "movie-1432.html",
    "image": "./82.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1433,
    "title": "法王艳史",
    "year": "1973",
    "region": "法国",
    "genre": "历史，情色",
    "file": "movie-1433.html",
    "image": "./83.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1434,
    "title": "宣告黎明的露之歌",
    "year": "2027",
    "region": "日本",
    "genre": "奇幻, 音乐, 冒险",
    "file": "movie-1434.html",
    "image": "./84.jpg",
    "category": "环球片库"
  },
  {
    "id": 1435,
    "title": "卡罗尔·马蒂厄国语",
    "year": "2020",
    "region": "法国",
    "genre": "悬疑 / 犯罪 / 心理",
    "file": "movie-1435.html",
    "image": "./85.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1436,
    "title": "何塞",
    "year": "2024",
    "region": "西班牙, 中国大陆",
    "genre": "剧情, 传记, 体育",
    "file": "movie-1436.html",
    "image": "./86.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1437,
    "title": "铁路梦影",
    "year": "2015",
    "region": "中国内地",
    "genre": "年代 / 悬疑 / 家族",
    "file": "movie-1437.html",
    "image": "./87.jpg",
    "category": "环球片库"
  },
  {
    "id": 1438,
    "title": "闪灵悍将",
    "year": "2025",
    "region": "美国",
    "genre": "动作, 科幻, 超级英雄",
    "file": "movie-1438.html",
    "image": "./88.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1439,
    "title": "我的女友们",
    "year": "2024",
    "region": "中国大陆",
    "genre": "喜剧 / 爱情 / 奇幻",
    "file": "movie-1439.html",
    "image": "./89.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1440,
    "title": "帕克 国语版",
    "year": "2013",
    "region": "美国 / 中国",
    "genre": "动作, 犯罪, 惊悚",
    "file": "movie-1440.html",
    "image": "./90.jpg",
    "category": "战争历史"
  },
  {
    "id": 1441,
    "title": "若叶女孩",
    "year": "2015",
    "region": "日本",
    "genre": "剧情，青春",
    "file": "movie-1441.html",
    "image": "./91.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1442,
    "title": "东春",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 家庭 / 文艺",
    "file": "movie-1442.html",
    "image": "./92.jpg",
    "category": "战争历史"
  },
  {
    "id": 1443,
    "title": "青春三选一",
    "year": "2024",
    "region": "中国大陆",
    "genre": "爱情 / 悬疑 / 青春",
    "file": "movie-1443.html",
    "image": "./93.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1444,
    "title": "一夜狂欢",
    "year": "2024",
    "region": "英国",
    "genre": "音乐 / 剧情 / 青春",
    "file": "movie-1444.html",
    "image": "./94.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1445,
    "title": "快跑或飞翔",
    "year": "2025",
    "region": "英国",
    "genre": "动作, 科幻, 惊悚",
    "file": "movie-1445.html",
    "image": "./95.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1446,
    "title": "残酷的复仇",
    "year": "2025",
    "region": "韩国",
    "genre": "动作 / 犯罪 / 惊悚",
    "file": "movie-1446.html",
    "image": "./96.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1447,
    "title": "乡村名流",
    "year": "2013",
    "region": "中国大陆",
    "genre": "喜剧，乡村",
    "file": "movie-1447.html",
    "image": "./97.jpg",
    "category": "战争历史"
  },
  {
    "id": 1448,
    "title": "豪斯医生第四季",
    "year": "2024",
    "region": "美国",
    "genre": "剧情 / 悬疑 / 医疗",
    "file": "movie-1448.html",
    "image": "./98.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1449,
    "title": "人质危机",
    "year": "2018",
    "region": "挪威",
    "genre": "剧情, 惊悚",
    "file": "movie-1449.html",
    "image": "./99.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1450,
    "title": "阴错阳差",
    "year": "2024",
    "region": "中国香港",
    "genre": "喜剧 / 奇幻 / 爱情",
    "file": "movie-1450.html",
    "image": "./100.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1451,
    "title": "呼啸在布鲁克林",
    "year": "2023",
    "region": "美国",
    "genre": "剧情 / 犯罪",
    "file": "movie-1451.html",
    "image": "./101.jpg",
    "category": "经典精选"
  },
  {
    "id": 1452,
    "title": "恋爱初歌",
    "year": "2006",
    "region": "中国台湾",
    "genre": "爱情 / 音乐",
    "file": "movie-1452.html",
    "image": "./102.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1453,
    "title": "一闪一闪 扑通扑通",
    "year": "2024",
    "region": "中国大陆",
    "genre": "爱情 / 奇幻 / 青春",
    "file": "movie-1453.html",
    "image": "./103.jpg",
    "category": "环球片库"
  },
  {
    "id": 1454,
    "title": "面包,爱情和梦想",
    "year": "2025",
    "region": "中国台湾",
    "genre": "剧情 / 爱情 / 励志",
    "file": "movie-1454.html",
    "image": "./104.jpg",
    "category": "经典精选"
  },
  {
    "id": 1455,
    "title": "东京残酷警察",
    "year": "2026",
    "region": "日本",
    "genre": "动作",
    "file": "movie-1455.html",
    "image": "./105.jpg",
    "category": "环球片库"
  },
  {
    "id": 1456,
    "title": "甘恩",
    "year": "2021",
    "region": "美国",
    "genre": "剧情, 惊悚, 犯罪",
    "file": "movie-1456.html",
    "image": "./106.jpg",
    "category": "战争历史"
  },
  {
    "id": 1457,
    "title": "再见爱人第二季",
    "year": "2025",
    "region": "中国大陆",
    "genre": "爱情, 剧情",
    "file": "movie-1457.html",
    "image": "./107.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1458,
    "title": "冰山漂浮的地方",
    "year": "2024",
    "region": "冰岛 / 丹麦",
    "genre": "剧情 / 悬疑",
    "file": "movie-1458.html",
    "image": "./108.jpg",
    "category": "经典精选"
  },
  {
    "id": 1459,
    "title": "独一无二",
    "year": "2021",
    "region": "中国台湾",
    "genre": "剧情 / 家庭",
    "file": "movie-1459.html",
    "image": "./109.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1460,
    "title": "女演员大作战",
    "year": "2025",
    "region": "韩国",
    "genre": "喜剧， 剧情",
    "file": "movie-1460.html",
    "image": "./110.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1461,
    "title": "失踪宝贝",
    "year": "2025",
    "region": "英国",
    "genre": "悬疑、犯罪、剧情",
    "file": "movie-1461.html",
    "image": "./111.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1462,
    "title": "颠覆疯云",
    "year": "2021",
    "region": "中国大陆",
    "genre": "喜剧 / 悬疑",
    "file": "movie-1462.html",
    "image": "./112.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1463,
    "title": "分租",
    "year": "2024",
    "region": "中国香港",
    "genre": "惊悚 / 悬疑",
    "file": "movie-1463.html",
    "image": "./113.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1464,
    "title": "老爷保号",
    "year": "2025",
    "region": "中国香港 / 马来西亚",
    "genre": "喜剧 / 剧情 / 民俗",
    "file": "movie-1464.html",
    "image": "./114.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1465,
    "title": "设计",
    "year": "1978",
    "region": "中国香港",
    "genre": "犯罪 / 惊悚",
    "file": "movie-1465.html",
    "image": "./115.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1466,
    "title": "冰火奇缘",
    "year": "2019",
    "region": "中国大陆",
    "genre": "奇幻，爱情，古装",
    "file": "movie-1466.html",
    "image": "./116.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1467,
    "title": "圣洁的艾曼妞",
    "year": "2023",
    "region": "法国",
    "genre": "剧情，情色，心理",
    "file": "movie-1467.html",
    "image": "./117.jpg",
    "category": "环球片库"
  },
  {
    "id": 1468,
    "title": "广告狂人第五季",
    "year": "2023",
    "region": "美国",
    "genre": "剧情 / 职场",
    "file": "movie-1468.html",
    "image": "./118.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1469,
    "title": "剥茧",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑犯罪",
    "file": "movie-1469.html",
    "image": "./119.jpg",
    "category": "战争历史"
  },
  {
    "id": 1470,
    "title": "祖母",
    "year": "2024",
    "region": "西班牙",
    "genre": "恐怖, 悬疑",
    "file": "movie-1470.html",
    "image": "./120.jpg",
    "category": "战争历史"
  },
  {
    "id": 1471,
    "title": "人类之子",
    "year": "2026",
    "region": "英国 / 美国",
    "genre": "科幻 / 灾难 / 剧情",
    "file": "movie-1471.html",
    "image": "./121.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1472,
    "title": "施公奇案2粤语",
    "year": "2010",
    "region": "中国香港",
    "genre": "古装 / 悬疑 / 喜剧",
    "file": "movie-1472.html",
    "image": "./122.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1473,
    "title": "星际过客",
    "year": "2019",
    "region": "美国",
    "genre": "科幻/冒险",
    "file": "movie-1473.html",
    "image": "./123.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1474,
    "title": "若有寒冬遇暖阳",
    "year": "2023",
    "region": "中国大陆",
    "genre": "都市, 爱情",
    "file": "movie-1474.html",
    "image": "./124.jpg",
    "category": "环球片库"
  },
  {
    "id": 1475,
    "title": "惊爆13天",
    "year": "2001",
    "region": "美国",
    "genre": "剧情 / 惊悚 / 历史",
    "file": "movie-1475.html",
    "image": "./125.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1476,
    "title": "36题爱上你",
    "year": "2021",
    "region": "中国台湾",
    "genre": "爱情, 剧情",
    "file": "movie-1476.html",
    "image": "./126.jpg",
    "category": "经典精选"
  },
  {
    "id": 1477,
    "title": "一课一练",
    "year": "2023",
    "region": "日本",
    "genre": "奇幻，校园，动作",
    "file": "movie-1477.html",
    "image": "./127.jpg",
    "category": "战争历史"
  },
  {
    "id": 1478,
    "title": "末日巡逻队第三季",
    "year": "2021",
    "region": "美国",
    "genre": "科幻 / 动作 / 喜剧",
    "file": "movie-1478.html",
    "image": "./128.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1479,
    "title": "临界点",
    "year": "2024",
    "region": "中国大陆",
    "genre": "科幻, 悬疑, 灾难",
    "file": "movie-1479.html",
    "image": "./129.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1480,
    "title": "农场小牛牛",
    "year": "2024",
    "region": "英国",
    "genre": "喜剧、动画、家庭",
    "file": "movie-1480.html",
    "image": "./130.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1481,
    "title": "高中歌剧团☆男子组",
    "year": "2016",
    "region": "日本",
    "genre": "校园 / 音乐 / 喜剧",
    "file": "movie-1481.html",
    "image": "./131.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1482,
    "title": "怪异同床人",
    "year": "2024",
    "region": "韩国",
    "genre": "喜剧, 爱情, 奇幻",
    "file": "movie-1482.html",
    "image": "./132.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1483,
    "title": "借胎杀人",
    "year": "2008",
    "region": "香港",
    "genre": "悬疑惊悚",
    "file": "movie-1483.html",
    "image": "./133.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1484,
    "title": "致命弯道5：血族",
    "year": "2025",
    "region": "美国",
    "genre": "恐怖 / 惊悚 / 奇幻",
    "file": "movie-1484.html",
    "image": "./134.jpg",
    "category": "经典精选"
  },
  {
    "id": 1485,
    "title": "超级英雄必死",
    "year": "2025",
    "region": "美国",
    "genre": "动作 / 惊悚 / 悬疑",
    "file": "movie-1485.html",
    "image": "./135.jpg",
    "category": "环球片库"
  },
  {
    "id": 1486,
    "title": "鬼邮轮：玛丽皇后号",
    "year": "2024",
    "region": "英国",
    "genre": "恐怖、悬疑",
    "file": "movie-1486.html",
    "image": "./136.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1487,
    "title": "歪爱时代第二季",
    "year": "2024",
    "region": "泰国",
    "genre": "爱情 / 同性 / 喜剧",
    "file": "movie-1487.html",
    "image": "./137.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1488,
    "title": "沙胆小子",
    "year": "1991",
    "region": "中国香港",
    "genre": "喜剧, 动作, 犯罪",
    "file": "movie-1488.html",
    "image": "./138.jpg",
    "category": "战争历史"
  },
  {
    "id": 1489,
    "title": "时间之子",
    "year": "2024",
    "region": "中国大陆",
    "genre": "动画, 奇幻, 冒险",
    "file": "movie-1489.html",
    "image": "./139.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1490,
    "title": "外科医生：生命边缘第四季",
    "year": "2023",
    "region": "美国",
    "genre": "剧情 / 医疗",
    "file": "movie-1490.html",
    "image": "./140.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1491,
    "title": "请求庇护",
    "year": "2023",
    "region": "法国 / 德国",
    "genre": "剧情 / 悬疑",
    "file": "movie-1491.html",
    "image": "./141.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1492,
    "title": "触发警报",
    "year": "2025",
    "region": "美国",
    "genre": "科幻悬疑",
    "file": "movie-1492.html",
    "image": "./142.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1493,
    "title": "公众赔偿",
    "year": "2024",
    "region": "日本",
    "genre": "悬疑, 犯罪, 剧情",
    "file": "movie-1493.html",
    "image": "./143.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1494,
    "title": "启航",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 家庭",
    "file": "movie-1494.html",
    "image": "./144.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1495,
    "title": "逃劳三兄弟",
    "year": "2023",
    "region": "中国大陆",
    "genre": "黑色喜剧 / 犯罪",
    "file": "movie-1495.html",
    "image": "./145.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1496,
    "title": "骆驼复仇记",
    "year": "2024",
    "region": "印度",
    "genre": "剧情, 西部",
    "file": "movie-1496.html",
    "image": "./146.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1497,
    "title": "外星入侵",
    "year": "2026",
    "region": "美国",
    "genre": "科幻 / 动作 / 灾难",
    "file": "movie-1497.html",
    "image": "./147.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1498,
    "title": "火星追击",
    "year": "2021",
    "region": "美国",
    "genre": "动作, 科幻, 惊悚",
    "file": "movie-1498.html",
    "image": "./148.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1499,
    "title": "乱世丽人行",
    "year": "2025",
    "region": "中国大陆",
    "genre": "战争 / 女性 / 历史",
    "file": "movie-1499.html",
    "image": "./149.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1500,
    "title": "午夜梦回1959",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 历史 / 奇幻",
    "file": "movie-1500.html",
    "image": "./150.jpg",
    "category": "经典精选"
  },
  {
    "id": 1501,
    "title": "五个女人",
    "year": "2025",
    "region": "日本",
    "genre": "剧情 / 悬疑 / 女性",
    "file": "movie-1501.html",
    "image": "./1.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1502,
    "title": "决战星期天",
    "year": "2024",
    "region": "日本",
    "genre": "剧情, 运动",
    "file": "movie-1502.html",
    "image": "./2.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1503,
    "title": "大梦西游2铁扇公主",
    "year": "2017",
    "region": "中国",
    "genre": "奇幻, 喜剧, 爱情",
    "file": "movie-1503.html",
    "image": "./3.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1504,
    "title": "拿什么让你幸福",
    "year": "2024",
    "region": "中国",
    "genre": "家庭, 剧情",
    "file": "movie-1504.html",
    "image": "./4.jpg",
    "category": "环球片库"
  },
  {
    "id": 1505,
    "title": "少林与咏春 粤语",
    "year": "2025",
    "region": "中国香港",
    "genre": "动作， 历史",
    "file": "movie-1505.html",
    "image": "./5.jpg",
    "category": "战争历史"
  },
  {
    "id": 1506,
    "title": "纽约娃娃",
    "year": "2024",
    "region": "美国",
    "genre": "剧情, 犯罪, 女性",
    "file": "movie-1506.html",
    "image": "./6.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1507,
    "title": "小查与寇弟的顶级冒险",
    "year": "2023",
    "region": "美国",
    "genre": "冒险, 喜剧",
    "file": "movie-1507.html",
    "image": "./7.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1508,
    "title": "快乐寻回犬",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 家庭",
    "file": "movie-1508.html",
    "image": "./8.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1509,
    "title": "与毒共舞",
    "year": "2025",
    "region": "哥伦比亚",
    "genre": "犯罪, 剧情, 动作",
    "file": "movie-1509.html",
    "image": "./9.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1510,
    "title": "傀儡",
    "year": "2024",
    "region": "日本",
    "genre": "科幻, 悬疑",
    "file": "movie-1510.html",
    "image": "./10.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1511,
    "title": "欢乐群英粤语",
    "year": "2024",
    "region": "中国香港",
    "genre": "喜剧、古装、武侠",
    "file": "movie-1511.html",
    "image": "./11.jpg",
    "category": "经典精选"
  },
  {
    "id": 1512,
    "title": "马头",
    "year": "2024",
    "region": "法国 / 比利时",
    "genre": "恐怖 / 奇幻",
    "file": "movie-1512.html",
    "image": "./12.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1513,
    "title": "缘来花开",
    "year": "2023",
    "region": "中国台湾",
    "genre": "爱情, 家庭, 治愈",
    "file": "movie-1513.html",
    "image": "./13.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1514,
    "title": "夏威夷风云",
    "year": "2026",
    "region": "美国",
    "genre": "罪案悬疑",
    "file": "movie-1514.html",
    "image": "./14.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1515,
    "title": "魔宫星战士",
    "year": "2026",
    "region": "美国",
    "genre": "动作/奇幻",
    "file": "movie-1515.html",
    "image": "./15.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1516,
    "title": "昨日欢愉",
    "year": "2023",
    "region": "美国",
    "genre": "剧情 / 爱情 / 音乐",
    "file": "movie-1516.html",
    "image": "./16.jpg",
    "category": "战争历史"
  },
  {
    "id": 1517,
    "title": "单排喜剧大赛",
    "year": "2025",
    "region": "中国大陆",
    "genre": "喜剧 / 真人秀",
    "file": "movie-1517.html",
    "image": "./17.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1518,
    "title": "索西",
    "year": "2024",
    "region": "法国 / 德国",
    "genre": "剧情 / 历史",
    "file": "movie-1518.html",
    "image": "./18.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1519,
    "title": "美得过火",
    "year": "2024",
    "region": "法国",
    "genre": "喜剧, 奇幻, 剧情",
    "file": "movie-1519.html",
    "image": "./19.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1520,
    "title": "难以启齿",
    "year": "2024",
    "region": "中国台湾",
    "genre": "剧情 / 家庭 / 同性",
    "file": "movie-1520.html",
    "image": "./20.jpg",
    "category": "战争历史"
  },
  {
    "id": 1521,
    "title": "不过，我想你",
    "year": "2025",
    "region": "中国大陆",
    "genre": "爱情 / 剧情 / 奇幻",
    "file": "movie-1521.html",
    "image": "./21.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1522,
    "title": "代号021",
    "year": "2024",
    "region": "中国大陆",
    "genre": "谍战, 悬疑",
    "file": "movie-1522.html",
    "image": "./22.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1523,
    "title": "死小子们",
    "year": "2023",
    "region": "韩国",
    "genre": "惊悚 / 悬疑",
    "file": "movie-1523.html",
    "image": "./23.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1524,
    "title": "好日子粤语",
    "year": "2022",
    "region": "中国香港",
    "genre": "剧情 / 年代",
    "file": "movie-1524.html",
    "image": "./24.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1525,
    "title": "花月佳期电影版",
    "year": "1996",
    "region": "中国香港",
    "genre": "爱情, 奇幻",
    "file": "movie-1525.html",
    "image": "./25.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1526,
    "title": "红尘欲望",
    "year": "2024",
    "region": "中国香港",
    "genre": "剧情 / 情色 / 伦理",
    "file": "movie-1526.html",
    "image": "./26.jpg",
    "category": "经典精选"
  },
  {
    "id": 1527,
    "title": "时间之旅",
    "year": "2024",
    "region": "美国",
    "genre": "科幻, 剧情",
    "file": "movie-1527.html",
    "image": "./27.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1528,
    "title": "有形牛仔",
    "year": "2023",
    "region": "美国",
    "genre": "西部/剧情/同性",
    "file": "movie-1528.html",
    "image": "./28.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1529,
    "title": "这个孩子很邪恶",
    "year": "2025",
    "region": "日本",
    "genre": "恐怖 / 心理惊悚",
    "file": "movie-1529.html",
    "image": "./29.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1530,
    "title": "无止境的杀人",
    "year": "2023",
    "region": "日本",
    "genre": "悬疑 / 犯罪 / 心理惊悚",
    "file": "movie-1530.html",
    "image": "./30.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1531,
    "title": "请让一让2000",
    "year": "2000",
    "region": "中国香港",
    "genre": "喜剧、爱情、都市",
    "file": "movie-1531.html",
    "image": "./31.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1532,
    "title": "9号秘事第五季",
    "year": "2024",
    "region": "英国",
    "genre": "悬疑 / 惊悚 / 喜剧",
    "file": "movie-1532.html",
    "image": "./32.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1533,
    "title": "缘之空",
    "year": "2024",
    "region": "日本",
    "genre": "爱情，伦理，治愈",
    "file": "movie-1533.html",
    "image": "./33.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1534,
    "title": "利刃出鞘",
    "year": "2019",
    "region": "美国",
    "genre": "剧情 / 悬疑 / 犯罪",
    "file": "movie-1534.html",
    "image": "./34.jpg",
    "category": "环球片库"
  },
  {
    "id": 1535,
    "title": "他乡的童年",
    "year": "2015",
    "region": "中国大陆",
    "genre": "剧情 / 家庭",
    "file": "movie-1535.html",
    "image": "./35.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1536,
    "title": "四大名捕2004",
    "year": "2004",
    "region": "中国香港",
    "genre": "古装，武侠，悬疑",
    "file": "movie-1536.html",
    "image": "./36.jpg",
    "category": "环球片库"
  },
  {
    "id": 1537,
    "title": "勇探雪沉冤",
    "year": "1982",
    "region": "中国香港",
    "genre": "犯罪，悬疑，动作",
    "file": "movie-1537.html",
    "image": "./37.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1538,
    "title": "美国豚鼠2：血腥冲击",
    "year": "2015",
    "region": "美国",
    "genre": "恐怖 / 虐杀",
    "file": "movie-1538.html",
    "image": "./38.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1539,
    "title": "幽灵人种",
    "year": "2028",
    "region": "英国",
    "genre": "科幻, 恐怖",
    "file": "movie-1539.html",
    "image": "./39.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1540,
    "title": "没出息的阴阳师一家第二季",
    "year": "2020",
    "region": "中国",
    "genre": "喜剧, 奇幻, 日常",
    "file": "movie-1540.html",
    "image": "./40.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1541,
    "title": "黑白姊妹",
    "year": "1998",
    "region": "中国台湾",
    "genre": "剧情 / 家庭",
    "file": "movie-1541.html",
    "image": "./41.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1542,
    "title": "日日夜夜",
    "year": "2019",
    "region": "中国大陆",
    "genre": "生活 / 伦理",
    "file": "movie-1542.html",
    "image": "./42.jpg",
    "category": "环球片库"
  },
  {
    "id": 1543,
    "title": "反诈风暴之情爱迷局",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 犯罪",
    "file": "movie-1543.html",
    "image": "./43.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1544,
    "title": "大酱园国语",
    "year": "2005",
    "region": "中国内地",
    "genre": "家族/年代",
    "file": "movie-1544.html",
    "image": "./44.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1545,
    "title": "罗宾汉的真实故事",
    "year": "2019",
    "region": "英国",
    "genre": "历史 / 犯罪 / 传记",
    "file": "movie-1545.html",
    "image": "./45.jpg",
    "category": "环球片库"
  },
  {
    "id": 1546,
    "title": "盗墓同盟",
    "year": "2024",
    "region": "韩国",
    "genre": "犯罪， 动作， 奇幻",
    "file": "movie-1546.html",
    "image": "./46.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1547,
    "title": "战火中的女神",
    "year": "2024",
    "region": "乌克兰",
    "genre": "战争 / 剧情 / 女性",
    "file": "movie-1547.html",
    "image": "./47.jpg",
    "category": "经典精选"
  },
  {
    "id": 1548,
    "title": "世界爆炸之夜",
    "year": "2020",
    "region": "美国",
    "genre": "喜剧, 爱情, 灾难",
    "file": "movie-1548.html",
    "image": "./48.jpg",
    "category": "环球片库"
  },
  {
    "id": 1549,
    "title": "机器情人之野蛮女管家",
    "year": "2024",
    "region": "中国大陆",
    "genre": "喜剧 / 爱情 / 科幻",
    "file": "movie-1549.html",
    "image": "./49.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1550,
    "title": "单恋双城粤语",
    "year": "2020",
    "region": "中国香港",
    "genre": "爱情 / 都市",
    "file": "movie-1550.html",
    "image": "./50.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1551,
    "title": "冷枪手",
    "year": "2024",
    "region": "中国大陆",
    "genre": "战争 / 动作 / 悬疑",
    "file": "movie-1551.html",
    "image": "./51.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1552,
    "title": "基缘巧合",
    "year": "2014",
    "region": "中国香港",
    "genre": "爱情",
    "file": "movie-1552.html",
    "image": "./52.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1553,
    "title": "富贵黄金屋",
    "year": "1992",
    "region": "中国香港",
    "genre": "喜剧，家庭，剧情",
    "file": "movie-1553.html",
    "image": "./53.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1554,
    "title": "自由的语言",
    "year": "2015",
    "region": "法国",
    "genre": "剧情, 战争, 传记",
    "file": "movie-1554.html",
    "image": "./54.jpg",
    "category": "战争历史"
  },
  {
    "id": 1555,
    "title": "电磁王之霹雳父子",
    "year": "2025",
    "region": "中国香港",
    "genre": "喜剧 / 科幻 / 家庭",
    "file": "movie-1555.html",
    "image": "./55.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1556,
    "title": "逆转裁判",
    "year": "2012",
    "region": "日本",
    "genre": "悬疑 / 犯罪 / 法庭",
    "file": "movie-1556.html",
    "image": "./56.jpg",
    "category": "经典精选"
  },
  {
    "id": 1557,
    "title": "我们是硬汉",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情，动作，家庭",
    "file": "movie-1557.html",
    "image": "./57.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1558,
    "title": "残酷世界续集",
    "year": "2026",
    "region": "美国",
    "genre": "动作 / 科幻 / 惊悚",
    "file": "movie-1558.html",
    "image": "./58.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1559,
    "title": "烈女暴潮",
    "year": "2026",
    "region": "中国大陆",
    "genre": "剧情 / 悬疑 / 灾难",
    "file": "movie-1559.html",
    "image": "./59.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1560,
    "title": "十方武圣",
    "year": "2024",
    "region": "中国大陆",
    "genre": "玄幻 / 热血",
    "file": "movie-1560.html",
    "image": "./60.jpg",
    "category": "环球片库"
  },
  {
    "id": 1561,
    "title": "碧眼花豹",
    "year": "2025",
    "region": "南非",
    "genre": "纪录片，冒险，自然",
    "file": "movie-1561.html",
    "image": "./61.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1562,
    "title": "魅惑人鱼姬",
    "year": "2025",
    "region": "韩国",
    "genre": "奇幻, 爱情, 悬疑, 惊悚",
    "file": "movie-1562.html",
    "image": "./62.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1563,
    "title": "玩具之父盖比特",
    "year": "2023",
    "region": "意大利",
    "genre": "奇幻、剧情、传记",
    "file": "movie-1563.html",
    "image": "./63.jpg",
    "category": "环球片库"
  },
  {
    "id": 1564,
    "title": "地狱峡谷",
    "year": "2026",
    "region": "美国",
    "genre": "冒险 / 恐怖 / 生存",
    "file": "movie-1564.html",
    "image": "./64.jpg",
    "category": "经典精选"
  },
  {
    "id": 1565,
    "title": "带我去月球",
    "year": "2024",
    "region": "中国台湾",
    "genre": "科幻 / 剧情",
    "file": "movie-1565.html",
    "image": "./65.jpg",
    "category": "经典精选"
  },
  {
    "id": 1566,
    "title": "绝地枪王",
    "year": "2014",
    "region": "中国大陆",
    "genre": "战争 / 动作",
    "file": "movie-1566.html",
    "image": "./66.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1567,
    "title": "东海道四谷怪谈",
    "year": "2026",
    "region": "日本",
    "genre": "恐怖 / 古装",
    "file": "movie-1567.html",
    "image": "./67.jpg",
    "category": "战争历史"
  },
  {
    "id": 1568,
    "title": "猎刃",
    "year": "2026",
    "region": "中国大陆",
    "genre": "动作 / 犯罪",
    "file": "movie-1568.html",
    "image": "./68.jpg",
    "category": "经典精选"
  },
  {
    "id": 1569,
    "title": "威尔",
    "year": "2024",
    "region": "英国",
    "genre": "传记, 历史",
    "file": "movie-1569.html",
    "image": "./69.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1570,
    "title": "冠军歌王",
    "year": "2013",
    "region": "马来西亚",
    "genre": "喜剧，音乐，家庭",
    "file": "movie-1570.html",
    "image": "./70.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1571,
    "title": "小逃亡者",
    "year": "2021",
    "region": "法国",
    "genre": "剧情， 儿童， 公路",
    "file": "movie-1571.html",
    "image": "./71.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1572,
    "title": "1982",
    "year": "2022",
    "region": "中国大陆",
    "genre": "剧情 / 家庭",
    "file": "movie-1572.html",
    "image": "./72.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1573,
    "title": "最后的吸血鬼",
    "year": "2025",
    "region": "日本 / 美国",
    "genre": "恐怖动作",
    "file": "movie-1573.html",
    "image": "./73.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1574,
    "title": "铁血雄师",
    "year": "2022",
    "region": "俄罗斯",
    "genre": "战争，动作，历史",
    "file": "movie-1574.html",
    "image": "./74.jpg",
    "category": "战争历史"
  },
  {
    "id": 1575,
    "title": "伟大的国王",
    "year": "2024",
    "region": "英国",
    "genre": "剧情 / 传记 / 历史",
    "file": "movie-1575.html",
    "image": "./75.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1576,
    "title": "窈窕赌女2",
    "year": "2024",
    "region": "中国香港",
    "genre": "喜剧， 动作",
    "file": "movie-1576.html",
    "image": "./76.jpg",
    "category": "环球片库"
  },
  {
    "id": 1577,
    "title": "福禄双霸天2000",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧/音乐/动作",
    "file": "movie-1577.html",
    "image": "./77.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1578,
    "title": "不得不爱第一季",
    "year": "2025",
    "region": "中国大陆",
    "genre": "爱情 / 都市 / 职场",
    "file": "movie-1578.html",
    "image": "./78.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1579,
    "title": "送货员",
    "year": "2023",
    "region": "韩国",
    "genre": "动作，犯罪，黑色幽默",
    "file": "movie-1579.html",
    "image": "./79.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1580,
    "title": "星际特工瓦雷诺：千星之城",
    "year": "2017",
    "region": "法国",
    "genre": "科幻 / 冒险",
    "file": "movie-1580.html",
    "image": "./80.jpg",
    "category": "经典精选"
  },
  {
    "id": 1581,
    "title": "骗徒臭事多",
    "year": "1992",
    "region": "香港",
    "genre": "喜剧， 犯罪",
    "file": "movie-1581.html",
    "image": "./81.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1582,
    "title": "神之塔第二季",
    "year": "2024",
    "region": "日本, 韩国",
    "genre": "奇幻, 动作, 冒险",
    "file": "movie-1582.html",
    "image": "./82.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1583,
    "title": "吉屋出租",
    "year": "2023",
    "region": "中国香港",
    "genre": "惊悚 / 悬疑",
    "file": "movie-1583.html",
    "image": "./83.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1584,
    "title": "哈瓦那三日危情",
    "year": "2024",
    "region": "西班牙 / 古巴",
    "genre": "悬疑, 政治惊悚",
    "file": "movie-1584.html",
    "image": "./84.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1585,
    "title": "无敌少侠第一季",
    "year": "2024",
    "region": "美国",
    "genre": "动画 / 动作 / 科幻 / 冒险",
    "file": "movie-1585.html",
    "image": "./85.jpg",
    "category": "经典精选"
  },
  {
    "id": 1586,
    "title": "与玛格丽特的午后",
    "year": "2010",
    "region": "法国",
    "genre": "喜剧 / 剧情",
    "file": "movie-1586.html",
    "image": "./86.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1587,
    "title": "修女也疯狂",
    "year": "2026",
    "region": "美国",
    "genre": "喜剧 / 音乐 / 动作",
    "file": "movie-1587.html",
    "image": "./87.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1588,
    "title": "霹雳皇龙纪",
    "year": "2026",
    "region": "中国台湾",
    "genre": "武侠 / 奇幻 / 布袋戏",
    "file": "movie-1588.html",
    "image": "./88.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1589,
    "title": "求爱行动",
    "year": "2024",
    "region": "中国台湾",
    "genre": "爱情 / 喜剧",
    "file": "movie-1589.html",
    "image": "./89.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1590,
    "title": "梦比优斯奥特曼&奥特兄弟",
    "year": "2025",
    "region": "日本",
    "genre": "特摄, 动作, 科幻",
    "file": "movie-1590.html",
    "image": "./90.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1591,
    "title": "首付",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情, 家庭",
    "file": "movie-1591.html",
    "image": "./91.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1592,
    "title": "玛莎莎蒂",
    "year": "2023",
    "region": "意大利",
    "genre": "喜剧 / 犯罪",
    "file": "movie-1592.html",
    "image": "./92.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1593,
    "title": "反击第四季",
    "year": "2025",
    "region": "英国 / 美国",
    "genre": "动作 / 战争 / 悬疑",
    "file": "movie-1593.html",
    "image": "./93.jpg",
    "category": "战争历史"
  },
  {
    "id": 1594,
    "title": "靠近我温暖你",
    "year": "2024",
    "region": "中国",
    "genre": "爱情，都市，治愈",
    "file": "movie-1594.html",
    "image": "./94.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1595,
    "title": "扫兴者第二季",
    "year": "2025",
    "region": "美国",
    "genre": "黑色喜剧 / 奇幻",
    "file": "movie-1595.html",
    "image": "./95.jpg",
    "category": "经典精选"
  },
  {
    "id": 1596,
    "title": "岁月神偷",
    "year": "2025",
    "region": "中国香港",
    "genre": "剧情 / 家庭",
    "file": "movie-1596.html",
    "image": "./96.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1597,
    "title": "那孩子出生了……",
    "year": "2022",
    "region": "韩国",
    "genre": "悬疑 / 恐怖",
    "file": "movie-1597.html",
    "image": "./97.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1598,
    "title": "血红街道",
    "year": "2025",
    "region": "美国",
    "genre": "惊悚 / 黑色电影 / 心理",
    "file": "movie-1598.html",
    "image": "./98.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1599,
    "title": "通天塔2006",
    "year": "2024",
    "region": "美国 / 墨西哥 / 日本",
    "genre": "剧情 / 悬疑 / 科幻",
    "file": "movie-1599.html",
    "image": "./99.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1600,
    "title": "槑头槑脑3",
    "year": "2023",
    "region": "中国",
    "genre": "喜剧, 短片",
    "file": "movie-1600.html",
    "image": "./100.jpg",
    "category": "战争历史"
  },
  {
    "id": 1601,
    "title": "耍酷一族",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧, 爱情, 音乐",
    "file": "movie-1601.html",
    "image": "./101.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1602,
    "title": "难题",
    "year": "2023",
    "region": "美国",
    "genre": "科幻, 悬疑",
    "file": "movie-1602.html",
    "image": "./102.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1603,
    "title": "鬼森林",
    "year": "1965",
    "region": "日本",
    "genre": "恐怖, 奇幻",
    "file": "movie-1603.html",
    "image": "./103.jpg",
    "category": "环球片库"
  },
  {
    "id": 1604,
    "title": "流水迢迢",
    "year": "2025",
    "region": "中国大陆",
    "genre": "古装 / 家庭",
    "file": "movie-1604.html",
    "image": "./104.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1605,
    "title": "黑色达摩",
    "year": "2026",
    "region": "韩国",
    "genre": "犯罪/动作",
    "file": "movie-1605.html",
    "image": "./105.jpg",
    "category": "经典精选"
  },
  {
    "id": 1606,
    "title": "一号有轨电车运行了",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情 / 历史",
    "file": "movie-1606.html",
    "image": "./106.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1607,
    "title": "边城生死恋",
    "year": "2021",
    "region": "中国大陆",
    "genre": "爱情 / 剧情 / 历史",
    "file": "movie-1607.html",
    "image": "./107.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1608,
    "title": "嗜血之夜",
    "year": "2023",
    "region": "美国",
    "genre": "恐怖",
    "file": "movie-1608.html",
    "image": "./108.jpg",
    "category": "战争历史"
  },
  {
    "id": 1609,
    "title": "活得比你好",
    "year": "2026",
    "region": "中国香港",
    "genre": "剧情, 都市, 职场",
    "file": "movie-1609.html",
    "image": "./109.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1610,
    "title": "男子的心",
    "year": "2018",
    "region": "韩国",
    "genre": "爱情 / 疗愈",
    "file": "movie-1610.html",
    "image": "./110.jpg",
    "category": "环球片库"
  },
  {
    "id": 1611,
    "title": "限制",
    "year": "2026",
    "region": "韩国",
    "genre": "犯罪 / 动作",
    "file": "movie-1611.html",
    "image": "./111.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1612,
    "title": "星级大改造",
    "year": "2016",
    "region": "日本",
    "genre": "喜剧, 剧情",
    "file": "movie-1612.html",
    "image": "./112.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1613,
    "title": "铃芽之旅",
    "year": "2022",
    "region": "日本",
    "genre": "动画，奇幻",
    "file": "movie-1613.html",
    "image": "./113.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1614,
    "title": "阿金",
    "year": "2025",
    "region": "中国香港",
    "genre": "剧情 / 动作",
    "file": "movie-1614.html",
    "image": "./114.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1615,
    "title": "虚空魔境第二季",
    "year": "2020",
    "region": "日本",
    "genre": "动画，奇幻",
    "file": "movie-1615.html",
    "image": "./115.jpg",
    "category": "环球片库"
  },
  {
    "id": 1616,
    "title": "欲海春潮",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 伦理",
    "file": "movie-1616.html",
    "image": "./116.jpg",
    "category": "战争历史"
  },
  {
    "id": 1617,
    "title": "明亮的心",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 家庭 / 体育",
    "file": "movie-1617.html",
    "image": "./117.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1618,
    "title": "恶毒一族",
    "year": "2019",
    "region": "美国",
    "genre": "喜剧, 悬疑, 犯罪",
    "file": "movie-1618.html",
    "image": "./118.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1619,
    "title": "风暴过后",
    "year": "2016",
    "region": "日本",
    "genre": "剧情 / 灾难",
    "file": "movie-1619.html",
    "image": "./119.jpg",
    "category": "环球片库"
  },
  {
    "id": 1620,
    "title": "东方秃鹰",
    "year": "1987",
    "region": "中国香港",
    "genre": "动作，战争",
    "file": "movie-1620.html",
    "image": "./120.jpg",
    "category": "战争历史"
  },
  {
    "id": 1621,
    "title": "大奥动画版",
    "year": "2024",
    "region": "日本",
    "genre": "历史，奇幻，剧情",
    "file": "movie-1621.html",
    "image": "./121.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1622,
    "title": "翡翠明珠",
    "year": "2020",
    "region": "中国香港",
    "genre": "爱情, 悬疑, 商战",
    "file": "movie-1622.html",
    "image": "./122.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1623,
    "title": "水色明信片",
    "year": "2023",
    "region": "日本",
    "genre": "文艺治愈",
    "file": "movie-1623.html",
    "image": "./123.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1624,
    "title": "女子特案组",
    "year": "2024",
    "region": "中国大陆",
    "genre": "刑侦, 剧情",
    "file": "movie-1624.html",
    "image": "./124.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1625,
    "title": "篮球不说谎",
    "year": "2017",
    "region": "美国",
    "genre": "运动, 剧情, 励志",
    "file": "movie-1625.html",
    "image": "./125.jpg",
    "category": "战争历史"
  },
  {
    "id": 1626,
    "title": "荒林艳骨",
    "year": "2016",
    "region": "中国大陆",
    "genre": "悬疑, 惊悚, 犯罪",
    "file": "movie-1626.html",
    "image": "./126.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1627,
    "title": "真女有形",
    "year": "2002",
    "region": "美国",
    "genre": "剧情 / 喜剧 / 励志",
    "file": "movie-1627.html",
    "image": "./127.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1628,
    "title": "跨越山海2024音乐会",
    "year": "2024",
    "region": "中国",
    "genre": "音乐, 纪实, 舞台",
    "file": "movie-1628.html",
    "image": "./128.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1629,
    "title": "万花天体会",
    "year": "1975",
    "region": "法国",
    "genre": "剧情，情色，艺术",
    "file": "movie-1629.html",
    "image": "./129.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1630,
    "title": "厨子·戏子·痞子",
    "year": "2024",
    "region": "中国",
    "genre": "犯罪",
    "file": "movie-1630.html",
    "image": "./130.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1631,
    "title": "钻石王老五粤语",
    "year": "2025",
    "region": "中国香港",
    "genre": "喜剧 / 爱情 / 职场",
    "file": "movie-1631.html",
    "image": "./131.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1632,
    "title": "野兽男孩的故事",
    "year": "2026",
    "region": "韩国",
    "genre": "剧情 / 动作 / 犯罪",
    "file": "movie-1632.html",
    "image": "./132.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1633,
    "title": "角斗士国语",
    "year": "2016",
    "region": "中国大陆",
    "genre": "动作/历史",
    "file": "movie-1633.html",
    "image": "./133.jpg",
    "category": "经典精选"
  },
  {
    "id": 1634,
    "title": "关键一票",
    "year": "2023",
    "region": "美国",
    "genre": "剧情 / 喜剧",
    "file": "movie-1634.html",
    "image": "./134.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1635,
    "title": "万镒黄金",
    "year": "2026",
    "region": "中国香港",
    "genre": "动作、警匪、冒险",
    "file": "movie-1635.html",
    "image": "./135.jpg",
    "category": "环球片库"
  },
  {
    "id": 1636,
    "title": "再过四年",
    "year": "2025",
    "region": "中国大陆",
    "genre": "科幻，悬疑",
    "file": "movie-1636.html",
    "image": "./136.jpg",
    "category": "战争历史"
  },
  {
    "id": 1637,
    "title": "喵星人的奇思妙想",
    "year": "2023",
    "region": "法国 / 比利时",
    "genre": "动画 / 奇幻",
    "file": "movie-1637.html",
    "image": "./137.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1638,
    "title": "星光云寂",
    "year": "2024",
    "region": "法国",
    "genre": "剧情 / 传记",
    "file": "movie-1638.html",
    "image": "./138.jpg",
    "category": "环球片库"
  },
  {
    "id": 1639,
    "title": "足球女将",
    "year": "2019",
    "region": "中国大陆",
    "genre": "体育 / 青春 / 励志",
    "file": "movie-1639.html",
    "image": "./139.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1640,
    "title": "飘泊灵魂之地",
    "year": "2023",
    "region": "日本",
    "genre": "奇幻 / 家庭",
    "file": "movie-1640.html",
    "image": "./140.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1641,
    "title": "少女与战车",
    "year": "2015",
    "region": "日本",
    "genre": "动作 / 校园 / 军事",
    "file": "movie-1641.html",
    "image": "./141.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1642,
    "title": "前世的谜样旅程",
    "year": "2002",
    "region": "中国台湾",
    "genre": "爱情 / 奇幻 / 悬疑",
    "file": "movie-1642.html",
    "image": "./142.jpg",
    "category": "经典精选"
  },
  {
    "id": 1643,
    "title": "节日的准备",
    "year": "2016",
    "region": "韩国",
    "genre": "剧情 / 家庭",
    "file": "movie-1643.html",
    "image": "./143.jpg",
    "category": "环球片库"
  },
  {
    "id": 1644,
    "title": "人性记录",
    "year": "2025",
    "region": "英国",
    "genre": "悬疑 / 犯罪",
    "file": "movie-1644.html",
    "image": "./144.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1645,
    "title": "超级兵王混农村2古墓传说",
    "year": "2025",
    "region": "中国大陆",
    "genre": "动作, 冒险, 喜剧",
    "file": "movie-1645.html",
    "image": "./145.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1646,
    "title": "咒怨 录像带版国语",
    "year": "2000",
    "region": "日本",
    "genre": "恐怖",
    "file": "movie-1646.html",
    "image": "./146.jpg",
    "category": "环球片库"
  },
  {
    "id": 1647,
    "title": "极品老妈第八季",
    "year": "2026",
    "region": "美国",
    "genre": "喜剧 / 剧情",
    "file": "movie-1647.html",
    "image": "./147.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1648,
    "title": "叫我复仇者",
    "year": "2026",
    "region": "韩国",
    "genre": "动作 / 惊悚 / 复仇",
    "file": "movie-1648.html",
    "image": "./148.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1649,
    "title": "身份流亡",
    "year": "2027",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪",
    "file": "movie-1649.html",
    "image": "./149.jpg",
    "category": "战争历史"
  },
  {
    "id": 1650,
    "title": "我们的父亲2020",
    "year": "2024",
    "region": "意大利 / 法国",
    "genre": "剧情 / 历史 / 战争",
    "file": "movie-1650.html",
    "image": "./150.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1651,
    "title": "紫檀巷",
    "year": "1999",
    "region": "英国",
    "genre": "悬疑， 惊悚， 剧情",
    "file": "movie-1651.html",
    "image": "./1.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1652,
    "title": "性爱调查",
    "year": "2023",
    "region": "日本",
    "genre": "悬疑 / 伦理 / 剧情",
    "file": "movie-1652.html",
    "image": "./2.jpg",
    "category": "环球片库"
  },
  {
    "id": 1653,
    "title": "我真的爱死你",
    "year": "2003",
    "region": "中国香港",
    "genre": "爱情 / 喜剧 / 恐怖",
    "file": "movie-1653.html",
    "image": "./3.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1654,
    "title": "癫凤狂龙",
    "year": "2025",
    "region": "中国香港",
    "genre": "喜剧, 动作, 犯罪",
    "file": "movie-1654.html",
    "image": "./4.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1655,
    "title": "小熊维尼：血染蜂蜜",
    "year": "2024",
    "region": "英国",
    "genre": "恐怖 / 惊悚",
    "file": "movie-1655.html",
    "image": "./5.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1656,
    "title": "飓风营救2",
    "year": "2025",
    "region": "美国",
    "genre": "动作 / 惊悚",
    "file": "movie-1656.html",
    "image": "./6.jpg",
    "category": "环球片库"
  },
  {
    "id": 1657,
    "title": "感动裁判的玉儿",
    "year": "2026",
    "region": "中国大陆",
    "genre": "运动 / 剧情",
    "file": "movie-1657.html",
    "image": "./7.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1658,
    "title": "悟空传",
    "year": "2028",
    "region": "中国大陆",
    "genre": "奇幻, 动作, 剧情",
    "file": "movie-1658.html",
    "image": "./8.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1659,
    "title": "嫁个100分男人",
    "year": "2024",
    "region": "中国香港",
    "genre": "爱情 / 喜剧 / 奇幻",
    "file": "movie-1659.html",
    "image": "./9.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1660,
    "title": "掘泥工人",
    "year": "2023",
    "region": "马来西亚",
    "genre": "剧情 / 劳工",
    "file": "movie-1660.html",
    "image": "./10.jpg",
    "category": "经典精选"
  },
  {
    "id": 1661,
    "title": "春宵一刻值千金",
    "year": "1992",
    "region": "中国香港",
    "genre": "喜剧, 剧情, 爱情",
    "file": "movie-1661.html",
    "image": "./11.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1662,
    "title": "荒江女侠",
    "year": "2025",
    "region": "中国大陆",
    "genre": "武侠、动作、冒险",
    "file": "movie-1662.html",
    "image": "./12.jpg",
    "category": "环球片库"
  },
  {
    "id": 1663,
    "title": "生而被杀",
    "year": "2025",
    "region": "墨西哥 / 美国",
    "genre": "犯罪 / 剧情 / 悬疑",
    "file": "movie-1663.html",
    "image": "./13.jpg",
    "category": "经典精选"
  },
  {
    "id": 1664,
    "title": "皮诺丘的奇幻旅程",
    "year": "2026",
    "region": "意大利",
    "genre": "奇幻 / 冒险",
    "file": "movie-1664.html",
    "image": "./14.jpg",
    "category": "经典精选"
  },
  {
    "id": 1665,
    "title": "森林孤影",
    "year": "2025",
    "region": "中国大陆",
    "genre": "惊悚, 悬疑",
    "file": "movie-1665.html",
    "image": "./15.jpg",
    "category": "战争历史"
  },
  {
    "id": 1666,
    "title": "一念时光第二季",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑, 爱情, 科幻",
    "file": "movie-1666.html",
    "image": "./16.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1667,
    "title": "象宫龙虎斗",
    "year": "1992",
    "region": "中国香港",
    "genre": "动作 / 喜剧 / 犯罪",
    "file": "movie-1667.html",
    "image": "./17.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1668,
    "title": "杰罗姆的时光",
    "year": "2019",
    "region": "法国",
    "genre": "剧情, 奇幻",
    "file": "movie-1668.html",
    "image": "./18.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1669,
    "title": "冰球小子",
    "year": "2022",
    "region": "加拿大",
    "genre": "喜剧 / 家庭 / 运动",
    "file": "movie-1669.html",
    "image": "./19.jpg",
    "category": "经典精选"
  },
  {
    "id": 1670,
    "title": "吾妻十三点粤语",
    "year": "1992",
    "region": "中国香港",
    "genre": "喜剧, 爱情, 家庭",
    "file": "movie-1670.html",
    "image": "./20.jpg",
    "category": "战争历史"
  },
  {
    "id": 1671,
    "title": "土耳其狂欢",
    "year": "1973",
    "region": "荷兰",
    "genre": "爱情、剧情、情色",
    "file": "movie-1671.html",
    "image": "./21.jpg",
    "category": "环球片库"
  },
  {
    "id": 1672,
    "title": "空想的机械们里破坏的发明",
    "year": "2024",
    "region": "日本",
    "genre": "科幻, 冒险",
    "file": "movie-1672.html",
    "image": "./22.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1673,
    "title": "潜行狙击粤语",
    "year": "2024",
    "region": "中国香港",
    "genre": "动作 / 犯罪",
    "file": "movie-1673.html",
    "image": "./23.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1674,
    "title": "我的过错",
    "year": "2023",
    "region": "西班牙",
    "genre": "爱情，剧情",
    "file": "movie-1674.html",
    "image": "./24.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1675,
    "title": "全裸导演第二季",
    "year": "2021",
    "region": "日本",
    "genre": "剧情, 传记, 成人",
    "file": "movie-1675.html",
    "image": "./25.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1676,
    "title": "鲨卷风4：四度觉醒",
    "year": "2020",
    "region": "美国",
    "genre": "喜剧 / 科幻 / 惊悚",
    "file": "movie-1676.html",
    "image": "./26.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1677,
    "title": "工具箱杀手1978",
    "year": "2005",
    "region": "美国",
    "genre": "恐怖，血腥",
    "file": "movie-1677.html",
    "image": "./27.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1678,
    "title": "广告女郎",
    "year": "2024",
    "region": "日本",
    "genre": "职场 / 剧情 / 女性",
    "file": "movie-1678.html",
    "image": "./28.jpg",
    "category": "经典精选"
  },
  {
    "id": 1679,
    "title": "一个拿波里数学家之死",
    "year": "2024",
    "region": "意大利 / 法国",
    "genre": "悬疑 / 传记 / 犯罪",
    "file": "movie-1679.html",
    "image": "./29.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1680,
    "title": "性爱魔法",
    "year": "2021",
    "region": "美国",
    "genre": "喜剧 / 爱情 / 奇幻",
    "file": "movie-1680.html",
    "image": "./30.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1681,
    "title": "死到临头唱生晒",
    "year": "2025",
    "region": "中国香港",
    "genre": "黑色幽默 / 犯罪 / 剧情",
    "file": "movie-1681.html",
    "image": "./31.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1682,
    "title": "越轨追击",
    "year": "2023",
    "region": "法国",
    "genre": "动作 / 惊悚",
    "file": "movie-1682.html",
    "image": "./32.jpg",
    "category": "经典精选"
  },
  {
    "id": 1683,
    "title": "黑鹰追缉令",
    "year": "2026",
    "region": "美国",
    "genre": "动作 / 惊悚",
    "file": "movie-1683.html",
    "image": "./33.jpg",
    "category": "环球片库"
  },
  {
    "id": 1684,
    "title": "俏丽佳人",
    "year": "2023",
    "region": "韩国",
    "genre": "恐怖 / 社会讽刺",
    "file": "movie-1684.html",
    "image": "./34.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1685,
    "title": "异形帝国之灵与欲",
    "year": "1997",
    "region": "美国",
    "genre": "科幻 / 恐怖",
    "file": "movie-1685.html",
    "image": "./35.jpg",
    "category": "战争历史"
  },
  {
    "id": 1686,
    "title": "因为爱情有奇迹",
    "year": "2014",
    "region": "中国大陆",
    "genre": "爱情 / 家庭",
    "file": "movie-1686.html",
    "image": "./36.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1687,
    "title": "倾城之恋国语",
    "year": "2024",
    "region": "中国大陆",
    "genre": "爱情, 剧情, 年代",
    "file": "movie-1687.html",
    "image": "./37.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1688,
    "title": "为你倾情",
    "year": "2001",
    "region": "香港",
    "genre": "爱情, 剧情",
    "file": "movie-1688.html",
    "image": "./38.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1689,
    "title": "欠我十万零五千",
    "year": "2009",
    "region": "中国大陆",
    "genre": "剧情， 喜剧",
    "file": "movie-1689.html",
    "image": "./39.jpg",
    "category": "经典精选"
  },
  {
    "id": 1690,
    "title": "大妙谍",
    "year": "2021",
    "region": "中国大陆",
    "genre": "喜剧",
    "file": "movie-1690.html",
    "image": "./40.jpg",
    "category": "战争历史"
  },
  {
    "id": 1691,
    "title": "流云逝事",
    "year": "2028",
    "region": "中国大陆",
    "genre": "剧情, 家庭",
    "file": "movie-1691.html",
    "image": "./41.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1692,
    "title": "铁面急先锋",
    "year": "2025",
    "region": "法国",
    "genre": "动作 / 犯罪",
    "file": "movie-1692.html",
    "image": "./42.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1693,
    "title": "真情麻吉",
    "year": "2024",
    "region": "中国台湾",
    "genre": "喜剧 / 家庭",
    "file": "movie-1693.html",
    "image": "./43.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1694,
    "title": "缅甸日志",
    "year": "2023",
    "region": "泰国",
    "genre": "悬疑 / 战争 / 历史",
    "file": "movie-1694.html",
    "image": "./44.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1695,
    "title": "傻傻爱你，傻傻爱我",
    "year": "2019",
    "region": "中国台湾",
    "genre": "爱情 / 喜剧",
    "file": "movie-1695.html",
    "image": "./45.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1696,
    "title": "魔鬼与十诫",
    "year": "2025",
    "region": "德国",
    "genre": "剧情 / 奇幻",
    "file": "movie-1696.html",
    "image": "./46.jpg",
    "category": "经典精选"
  },
  {
    "id": 1697,
    "title": "浣熊：新欧洲人",
    "year": "2021",
    "region": "德国 / 波兰",
    "genre": "喜剧, 剧情, 社会",
    "file": "movie-1697.html",
    "image": "./47.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1698,
    "title": "超级富豪异乡人",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情、喜剧",
    "file": "movie-1698.html",
    "image": "./48.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1699,
    "title": "照片里的伴娘",
    "year": "2024",
    "region": "中国",
    "genre": "剧情, 爱情, 奇幻",
    "file": "movie-1699.html",
    "image": "./49.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1700,
    "title": "没礼貌的家伙们",
    "year": "2018",
    "region": "韩国",
    "genre": "喜剧，剧情",
    "file": "movie-1700.html",
    "image": "./50.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1701,
    "title": "苹果核战记2",
    "year": "2024",
    "region": "日本",
    "genre": "科幻, 动作",
    "file": "movie-1701.html",
    "image": "./51.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1702,
    "title": "开膛街第一季",
    "year": "2024",
    "region": "英国",
    "genre": "悬疑, 犯罪, 恐怖",
    "file": "movie-1702.html",
    "image": "./52.jpg",
    "category": "战争历史"
  },
  {
    "id": 1703,
    "title": "叔比狗与女巫之鬼",
    "year": "2024",
    "region": "美国",
    "genre": "动画 / 悬疑 / 喜剧",
    "file": "movie-1703.html",
    "image": "./53.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1704,
    "title": "于洛先生的假期",
    "year": "1953",
    "region": "法国",
    "genre": "喜剧",
    "file": "movie-1704.html",
    "image": "./54.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1705,
    "title": "勾魂战地",
    "year": "2025",
    "region": "美国",
    "genre": "战争 / 恐怖",
    "file": "movie-1705.html",
    "image": "./55.jpg",
    "category": "环球片库"
  },
  {
    "id": 1706,
    "title": "呼我",
    "year": "1998",
    "region": "中国大陆",
    "genre": "剧情 / 爱情",
    "file": "movie-1706.html",
    "image": "./56.jpg",
    "category": "战争历史"
  },
  {
    "id": 1707,
    "title": "消失第三者",
    "year": "2023",
    "region": "日本",
    "genre": "悬疑, 惊悚",
    "file": "movie-1707.html",
    "image": "./57.jpg",
    "category": "战争历史"
  },
  {
    "id": 1708,
    "title": "新乐土",
    "year": "2024",
    "region": "日本",
    "genre": "科幻",
    "file": "movie-1708.html",
    "image": "./58.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1709,
    "title": "吃鸡大作战第三季",
    "year": "2023",
    "region": "中国大陆",
    "genre": "喜剧 / 动画 / 游戏",
    "file": "movie-1709.html",
    "image": "./59.jpg",
    "category": "环球片库"
  },
  {
    "id": 1710,
    "title": "母亲的诅咒",
    "year": "2025",
    "region": "泰国",
    "genre": "恐怖, 民俗",
    "file": "movie-1710.html",
    "image": "./60.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1711,
    "title": "比赛日",
    "year": "2027",
    "region": "美国",
    "genre": "运动, 剧情",
    "file": "movie-1711.html",
    "image": "./61.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1712,
    "title": "走路的风度",
    "year": "2025",
    "region": "法国",
    "genre": "喜剧、剧情、爱情",
    "file": "movie-1712.html",
    "image": "./62.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1713,
    "title": "阿布达比影展",
    "year": "2015",
    "region": "阿联酋",
    "genre": "剧情，文艺",
    "file": "movie-1713.html",
    "image": "./63.jpg",
    "category": "战争历史"
  },
  {
    "id": 1714,
    "title": "幸福骗局",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情，犯罪",
    "file": "movie-1714.html",
    "image": "./64.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1715,
    "title": "曾经。爱是唯一",
    "year": "2007",
    "region": "爱尔兰",
    "genre": "爱情 / 音乐 / 剧情",
    "file": "movie-1715.html",
    "image": "./65.jpg",
    "category": "环球片库"
  },
  {
    "id": 1716,
    "title": "复仇狗联盟",
    "year": "2023",
    "region": "美国",
    "genre": "动作",
    "file": "movie-1716.html",
    "image": "./66.jpg",
    "category": "战争历史"
  },
  {
    "id": 1717,
    "title": "热血街区电影版：极恶王",
    "year": "2019",
    "region": "日本",
    "genre": "动作 / 热血 / 青春",
    "file": "movie-1717.html",
    "image": "./67.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1718,
    "title": "咫尺之间",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑 / 惊悚",
    "file": "movie-1718.html",
    "image": "./68.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1719,
    "title": "蝙蝠侠：红影迷踪",
    "year": "2010",
    "region": "美国",
    "genre": "动作， 犯罪， 超级英雄",
    "file": "movie-1719.html",
    "image": "./69.jpg",
    "category": "战争历史"
  },
  {
    "id": 1720,
    "title": "撕开我的人生",
    "year": "2025",
    "region": "中国台湾",
    "genre": "剧情, 家庭, 悬疑",
    "file": "movie-1720.html",
    "image": "./70.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1721,
    "title": "神女",
    "year": "2026",
    "region": "中国大陆",
    "genre": "剧情 / 历史",
    "file": "movie-1721.html",
    "image": "./71.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1722,
    "title": "修复表面",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 科幻",
    "file": "movie-1722.html",
    "image": "./72.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1723,
    "title": "神奇4侠：银魔现身",
    "year": "2025",
    "region": "美国",
    "genre": "动作 / 科幻 / 冒险",
    "file": "movie-1723.html",
    "image": "./73.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1724,
    "title": "再闯魔域",
    "year": "2026",
    "region": "美国",
    "genre": "动作 / 奇幻 / 恐怖",
    "file": "movie-1724.html",
    "image": "./74.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1725,
    "title": "淘气老顽童",
    "year": "2015",
    "region": "中国台湾",
    "genre": "喜剧 / 家庭",
    "file": "movie-1725.html",
    "image": "./75.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1726,
    "title": "克里夫兰秀第四季",
    "year": "2012",
    "region": "美国",
    "genre": "喜剧 / 动画 / 成人向",
    "file": "movie-1726.html",
    "image": "./76.jpg",
    "category": "战争历史"
  },
  {
    "id": 1727,
    "title": "完美生物",
    "year": "2026",
    "region": "美国",
    "genre": "科幻, 悬疑, 惊悚",
    "file": "movie-1727.html",
    "image": "./77.jpg",
    "category": "环球片库"
  },
  {
    "id": 1728,
    "title": "太虚道人",
    "year": "2025",
    "region": "中国大陆",
    "genre": "奇幻 / 动作",
    "file": "movie-1728.html",
    "image": "./78.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1729,
    "title": "杀绝国语",
    "year": "1978",
    "region": "中国香港",
    "genre": "武侠，动作",
    "file": "movie-1729.html",
    "image": "./79.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1730,
    "title": "我要是有了枪",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 犯罪",
    "file": "movie-1730.html",
    "image": "./80.jpg",
    "category": "战争历史"
  },
  {
    "id": 1731,
    "title": "轻轻第一次",
    "year": "2023",
    "region": "台湾",
    "genre": "爱情 / 剧情",
    "file": "movie-1731.html",
    "image": "./81.jpg",
    "category": "战争历史"
  },
  {
    "id": 1732,
    "title": "艾米丽在巴黎第三季",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧, 爱情",
    "file": "movie-1732.html",
    "image": "./82.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1733,
    "title": "纯真岁月",
    "year": "2024",
    "region": "中国大陆",
    "genre": "年代，家庭，剧情",
    "file": "movie-1733.html",
    "image": "./83.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1734,
    "title": "镰仓物语",
    "year": "2017",
    "region": "日本",
    "genre": "奇幻 / 剧情 / 家庭",
    "file": "movie-1734.html",
    "image": "./84.jpg",
    "category": "经典精选"
  },
  {
    "id": 1735,
    "title": "那个夏天",
    "year": "2025",
    "region": "法国",
    "genre": "青春文艺",
    "file": "movie-1735.html",
    "image": "./85.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1736,
    "title": "将嫁",
    "year": "2024",
    "region": "中国",
    "genre": "古装, 爱情, 权谋",
    "file": "movie-1736.html",
    "image": "./86.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1737,
    "title": "灵异隧道实录",
    "year": "2011",
    "region": "澳大利亚",
    "genre": "恐怖，伪纪录片",
    "file": "movie-1737.html",
    "image": "./87.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1738,
    "title": "地厚天高",
    "year": "2021",
    "region": "中国大陆",
    "genre": "剧情, 纪录片",
    "file": "movie-1738.html",
    "image": "./88.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1739,
    "title": "战地巨蟒",
    "year": "2024",
    "region": "美国",
    "genre": "动作, 惊悚, 战争",
    "file": "movie-1739.html",
    "image": "./89.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1740,
    "title": "厉阴宅2",
    "year": "2016",
    "region": "美国",
    "genre": "恐怖, 惊悚",
    "file": "movie-1740.html",
    "image": "./90.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1741,
    "title": "法网追凶",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪 / 律政",
    "file": "movie-1741.html",
    "image": "./91.jpg",
    "category": "经典精选"
  },
  {
    "id": 1742,
    "title": "我的老板是小猪",
    "year": "2023",
    "region": "中国大陆",
    "genre": "奇幻爱情喜剧",
    "file": "movie-1742.html",
    "image": "./92.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1743,
    "title": "茜色少女",
    "year": "2024",
    "region": "日本",
    "genre": "青春 / 奇幻",
    "file": "movie-1743.html",
    "image": "./93.jpg",
    "category": "战争历史"
  },
  {
    "id": 1744,
    "title": "恶灵07 月光光心慌慌",
    "year": "2007",
    "region": "美国",
    "genre": "恐怖, 惊悚",
    "file": "movie-1744.html",
    "image": "./94.jpg",
    "category": "经典精选"
  },
  {
    "id": 1745,
    "title": "雀斑公主",
    "year": "2024",
    "region": "日本",
    "genre": "动画、奇幻、音乐、青春",
    "file": "movie-1745.html",
    "image": "./95.jpg",
    "category": "环球片库"
  },
  {
    "id": 1746,
    "title": "海狸谷",
    "year": "2024",
    "region": "加拿大",
    "genre": "动画 / 家庭 / 冒险",
    "file": "movie-1746.html",
    "image": "./96.jpg",
    "category": "战争历史"
  },
  {
    "id": 1747,
    "title": "所以，我就推你了",
    "year": "2023",
    "region": "日本",
    "genre": "剧情, 悬疑, 偶像",
    "file": "movie-1747.html",
    "image": "./97.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1748,
    "title": "公诉",
    "year": "2025",
    "region": "中国大陆",
    "genre": "犯罪 / 法律 / 悬疑",
    "file": "movie-1748.html",
    "image": "./98.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1749,
    "title": "鱼之梦",
    "year": "2024",
    "region": "日本",
    "genre": "奇幻 / 治愈 / 家庭",
    "file": "movie-1749.html",
    "image": "./99.jpg",
    "category": "经典精选"
  },
  {
    "id": 1750,
    "title": "燃火的时刻",
    "year": "2023",
    "region": "巴西",
    "genre": "纪录片",
    "file": "movie-1750.html",
    "image": "./100.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1751,
    "title": "女高怪谈5：结伴自杀",
    "year": "2009",
    "region": "韩国",
    "genre": "恐怖 / 惊悚",
    "file": "movie-1751.html",
    "image": "./101.jpg",
    "category": "战争历史"
  },
  {
    "id": 1752,
    "title": "脑海中的橡皮擦",
    "year": "2023",
    "region": "韩国",
    "genre": "爱情 / 剧情 / 奇幻",
    "file": "movie-1752.html",
    "image": "./102.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1753,
    "title": "海贼王女",
    "year": "2021",
    "region": "日本",
    "genre": "动作 / 冒险 / 奇幻",
    "file": "movie-1753.html",
    "image": "./103.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1754,
    "title": "小微风的愿望",
    "year": "2024",
    "region": "中国大陆",
    "genre": "奇幻、治愈",
    "file": "movie-1754.html",
    "image": "./104.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1755,
    "title": "超人梅比斯外传:凶兽重生",
    "year": "2025",
    "region": "日本",
    "genre": "科幻, 动作, 特摄",
    "file": "movie-1755.html",
    "image": "./105.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1756,
    "title": "越策越开心2012",
    "year": "2012",
    "region": "中国大陆",
    "genre": "喜剧",
    "file": "movie-1756.html",
    "image": "./106.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1757,
    "title": "公子何时休2",
    "year": "2022",
    "region": "中国",
    "genre": "古装 / 喜剧 / 爱情",
    "file": "movie-1757.html",
    "image": "./107.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1758,
    "title": "权力界",
    "year": "2025",
    "region": "中国香港",
    "genre": "悬疑 / 商战 / 犯罪",
    "file": "movie-1758.html",
    "image": "./108.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1759,
    "title": "亲爱的戈巴契夫",
    "year": "2020",
    "region": "俄罗斯",
    "genre": "剧情，历史，黑色幽默",
    "file": "movie-1759.html",
    "image": "./109.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1760,
    "title": "割腕者的天堂",
    "year": "2006",
    "region": "美国",
    "genre": "奇幻，剧情，爱情",
    "file": "movie-1760.html",
    "image": "./110.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1761,
    "title": "披头四大全",
    "year": "2023",
    "region": "英国",
    "genre": "纪录片 / 音乐 / 历史",
    "file": "movie-1761.html",
    "image": "./111.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1762,
    "title": "一屋之主",
    "year": "2023",
    "region": "中国香港",
    "genre": "恐怖 / 社会",
    "file": "movie-1762.html",
    "image": "./112.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1763,
    "title": "云淡风轻",
    "year": "2024",
    "region": "中国台湾",
    "genre": "剧情, 家庭, 文艺",
    "file": "movie-1763.html",
    "image": "./113.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1764,
    "title": "圣女贞德的审判",
    "year": "2028",
    "region": "法国",
    "genre": "历史, 剧情",
    "file": "movie-1764.html",
    "image": "./114.jpg",
    "category": "战争历史"
  },
  {
    "id": 1765,
    "title": "22年后的自白",
    "year": "2017",
    "region": "日本",
    "genre": "悬疑 / 犯罪",
    "file": "movie-1765.html",
    "image": "./115.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1766,
    "title": "闪耀的恒星",
    "year": "2025",
    "region": "韩国",
    "genre": "科幻, 悬疑, 青春",
    "file": "movie-1766.html",
    "image": "./116.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1767,
    "title": "美女与野兽1946",
    "year": "1946",
    "region": "法国",
    "genre": "剧情 / 奇幻 / 爱情",
    "file": "movie-1767.html",
    "image": "./117.jpg",
    "category": "战争历史"
  },
  {
    "id": 1768,
    "title": "曼谷风月宝鉴",
    "year": "2025",
    "region": "泰国",
    "genre": "爱情",
    "file": "movie-1768.html",
    "image": "./118.jpg",
    "category": "战争历史"
  },
  {
    "id": 1769,
    "title": "小学鸡起革命",
    "year": "2024",
    "region": "中国香港",
    "genre": "剧情，儿童，家庭",
    "file": "movie-1769.html",
    "image": "./119.jpg",
    "category": "经典精选"
  },
  {
    "id": 1770,
    "title": "不知东方既白",
    "year": "2017",
    "region": "中国台湾",
    "genre": "爱情, 奇幻",
    "file": "movie-1770.html",
    "image": "./120.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1771,
    "title": "迷你特工队之拯救恐龙王",
    "year": "2025",
    "region": "中国大陆",
    "genre": "动画， 科幻",
    "file": "movie-1771.html",
    "image": "./121.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1772,
    "title": "假如你是我",
    "year": "2025",
    "region": "中国台湾",
    "genre": "爱情, 奇幻, 剧情",
    "file": "movie-1772.html",
    "image": "./122.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1773,
    "title": "广告女郎",
    "year": "1998",
    "region": "中国香港",
    "genre": "剧情 / 职场 / 爱情",
    "file": "movie-1773.html",
    "image": "./123.jpg",
    "category": "环球片库"
  },
  {
    "id": 1774,
    "title": "绿门之后",
    "year": "2025",
    "region": "法国",
    "genre": "悬疑， 惊悚， 剧情",
    "file": "movie-1774.html",
    "image": "./124.jpg",
    "category": "战争历史"
  },
  {
    "id": 1775,
    "title": "恐怖幻象",
    "year": "2024",
    "region": "日本",
    "genre": "恐怖，心理，悬疑",
    "file": "movie-1775.html",
    "image": "./125.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1776,
    "title": "狗假死之物",
    "year": "2018",
    "region": "日本",
    "genre": "剧情, 家庭, 悬疑",
    "file": "movie-1776.html",
    "image": "./126.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1777,
    "title": "甜蜜寂寞女孩",
    "year": "2023",
    "region": "中国香港",
    "genre": "爱情 / 剧情 / 都市",
    "file": "movie-1777.html",
    "image": "./127.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1778,
    "title": "怪兽2：史前异种",
    "year": "2024",
    "region": "美国",
    "genre": "动作，科幻，惊悚",
    "file": "movie-1778.html",
    "image": "./128.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1779,
    "title": "附身",
    "year": "2024",
    "region": "泰国",
    "genre": "恐怖, 悬疑",
    "file": "movie-1779.html",
    "image": "./129.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1780,
    "title": "且行且珍惜",
    "year": "2022",
    "region": "中国大陆",
    "genre": "家庭 / 伦理",
    "file": "movie-1780.html",
    "image": "./130.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1781,
    "title": "黑海人妖",
    "year": "2021",
    "region": "乌克兰 / 土耳其",
    "genre": "剧情 / LGBT / 犯罪",
    "file": "movie-1781.html",
    "image": "./131.jpg",
    "category": "经典精选"
  },
  {
    "id": 1782,
    "title": "虹猫蓝兔梦之国历险记",
    "year": "2024",
    "region": "中国大陆",
    "genre": "动画 / 奇幻 / 冒险",
    "file": "movie-1782.html",
    "image": "./132.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1783,
    "title": "兔子和公牛",
    "year": "2009",
    "region": "英国",
    "genre": "喜剧/冒险",
    "file": "movie-1783.html",
    "image": "./133.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1784,
    "title": "报告班长2",
    "year": "2025",
    "region": "中国台湾",
    "genre": "喜剧 / 动作",
    "file": "movie-1784.html",
    "image": "./134.jpg",
    "category": "经典精选"
  },
  {
    "id": 1785,
    "title": "卡米拉",
    "year": "2025",
    "region": "墨西哥, 美国",
    "genre": "悬疑, 剧情",
    "file": "movie-1785.html",
    "image": "./135.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1786,
    "title": "岁月",
    "year": "2025",
    "region": "中国香港",
    "genre": "剧情 / 家庭",
    "file": "movie-1786.html",
    "image": "./136.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1787,
    "title": "囚禁",
    "year": "2019",
    "region": "韩国",
    "genre": "悬疑， 惊悚， 犯罪",
    "file": "movie-1787.html",
    "image": "./137.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1788,
    "title": "铁城奇案",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑、犯罪、年代",
    "file": "movie-1788.html",
    "image": "./138.jpg",
    "category": "环球片库"
  },
  {
    "id": 1789,
    "title": "乘电车旅行的幻想",
    "year": "2020",
    "region": "法国",
    "genre": "奇幻 / 剧情",
    "file": "movie-1789.html",
    "image": "./139.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1790,
    "title": "亲爱的天狐大人",
    "year": "2021",
    "region": "中国大陆",
    "genre": "古装，爱情，奇幻",
    "file": "movie-1790.html",
    "image": "./140.jpg",
    "category": "环球片库"
  },
  {
    "id": 1791,
    "title": "老当益壮",
    "year": "2019",
    "region": "美国",
    "genre": "喜剧 / 动作 / 犯罪",
    "file": "movie-1791.html",
    "image": "./141.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1792,
    "title": "新舞曲大王",
    "year": "2005",
    "region": "美国",
    "genre": "音乐, 剧情",
    "file": "movie-1792.html",
    "image": "./142.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1793,
    "title": "女书：潮起",
    "year": "2024",
    "region": "中国大陆",
    "genre": "历史 / 女性 / 纪实",
    "file": "movie-1793.html",
    "image": "./143.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1794,
    "title": "逆青春",
    "year": "2018",
    "region": "中国大陆",
    "genre": "青春 / 校园 / 运动",
    "file": "movie-1794.html",
    "image": "./144.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1795,
    "title": "超正经乐团的糊涂战争",
    "year": "2023",
    "region": "中国大陆",
    "genre": "喜剧 / 战争 / 音乐",
    "file": "movie-1795.html",
    "image": "./145.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1796,
    "title": "迷失：消失的女人",
    "year": "2024",
    "region": "英国 / 澳大利亚",
    "genre": "悬疑 / 剧情 / 犯罪",
    "file": "movie-1796.html",
    "image": "./146.jpg",
    "category": "环球片库"
  },
  {
    "id": 1797,
    "title": "机器肉鸡第六季",
    "year": "2012",
    "region": "美国",
    "genre": "喜剧, 动画, 科幻",
    "file": "movie-1797.html",
    "image": "./147.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1798,
    "title": "海角红颜",
    "year": "1982",
    "region": "中国台湾",
    "genre": "爱情, 剧情",
    "file": "movie-1798.html",
    "image": "./148.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1799,
    "title": "欢乐好声音",
    "year": "2026",
    "region": "中国大陆",
    "genre": "动画 / 音乐 / 家庭",
    "file": "movie-1799.html",
    "image": "./149.jpg",
    "category": "经典精选"
  },
  {
    "id": 1800,
    "title": "神鬼奇兵：失落的宝藏",
    "year": "2027",
    "region": "美国",
    "genre": "动作 / 冒险 / 奇幻",
    "file": "movie-1800.html",
    "image": "./150.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1801,
    "title": "爱马士",
    "year": "2023",
    "region": "中国大陆",
    "genre": "纪录片 / 人物 / 体育",
    "file": "movie-1801.html",
    "image": "./1.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1802,
    "title": "婚姻故事",
    "year": "2019",
    "region": "美国",
    "genre": "剧情，爱情",
    "file": "movie-1802.html",
    "image": "./2.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1803,
    "title": "关于你的想法",
    "year": "2024",
    "region": "美国",
    "genre": "喜剧 / 爱情 / 音乐",
    "file": "movie-1803.html",
    "image": "./3.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1804,
    "title": "决斗",
    "year": "1971",
    "region": "美国",
    "genre": "惊悚 / 动作",
    "file": "movie-1804.html",
    "image": "./4.jpg",
    "category": "战争历史"
  },
  {
    "id": 1805,
    "title": "听我的电波吧",
    "year": "2024",
    "region": "日本",
    "genre": "剧情 / 职场 / 喜剧",
    "file": "movie-1805.html",
    "image": "./5.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1806,
    "title": "儿女传奇之选美",
    "year": "2012",
    "region": "中国大陆",
    "genre": "剧情，家庭，悬疑",
    "file": "movie-1806.html",
    "image": "./6.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1807,
    "title": "玩命警探2",
    "year": "2024",
    "region": "中国香港",
    "genre": "动作，警匪",
    "file": "movie-1807.html",
    "image": "./7.jpg",
    "category": "经典精选"
  },
  {
    "id": 1808,
    "title": "夹缝中活着，小春",
    "year": "1949",
    "region": "日本",
    "genre": "剧情 / 家庭",
    "file": "movie-1808.html",
    "image": "./8.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1809,
    "title": "小谢尔顿第一季",
    "year": "2026",
    "region": "美国",
    "genre": "喜剧 / 家庭",
    "file": "movie-1809.html",
    "image": "./9.jpg",
    "category": "经典精选"
  },
  {
    "id": 1810,
    "title": "最短的一天",
    "year": "2023",
    "region": "中国大陆",
    "genre": "剧情 / 爱情",
    "file": "movie-1810.html",
    "image": "./10.jpg",
    "category": "战争历史"
  },
  {
    "id": 1811,
    "title": "爱，要呼吸",
    "year": "2025",
    "region": "中国香港",
    "genre": "剧情, 爱情, 灾难",
    "file": "movie-1811.html",
    "image": "./11.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1812,
    "title": "她与她的自画像",
    "year": "2024",
    "region": "西班牙",
    "genre": "剧情/同性",
    "file": "movie-1812.html",
    "image": "./12.jpg",
    "category": "环球片库"
  },
  {
    "id": 1813,
    "title": "最终生还者",
    "year": "2027",
    "region": "美国",
    "genre": "科幻 / 恐怖 / 冒险",
    "file": "movie-1813.html",
    "image": "./13.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1814,
    "title": "反伪先锋",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪 / 单元剧",
    "file": "movie-1814.html",
    "image": "./14.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1815,
    "title": "达格利什 第一季",
    "year": "2024",
    "region": "英国",
    "genre": "悬疑，犯罪",
    "file": "movie-1815.html",
    "image": "./15.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1816,
    "title": "洗冤录国语",
    "year": "2025",
    "region": "中国",
    "genre": "悬疑, 历史, 法医",
    "file": "movie-1816.html",
    "image": "./16.jpg",
    "category": "经典精选"
  },
  {
    "id": 1817,
    "title": "严惩",
    "year": "2024",
    "region": "韩国",
    "genre": "犯罪 / 动作 / 惊悚",
    "file": "movie-1817.html",
    "image": "./17.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1818,
    "title": "我的野兽",
    "year": "2012",
    "region": "法国",
    "genre": "奇幻, 剧情",
    "file": "movie-1818.html",
    "image": "./18.jpg",
    "category": "经典精选"
  },
  {
    "id": 1819,
    "title": "凭火决狱",
    "year": "2018",
    "region": "美国",
    "genre": "犯罪 / 悬疑 / 传记",
    "file": "movie-1819.html",
    "image": "./19.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1820,
    "title": "咸湿特务",
    "year": "2024",
    "region": "中国香港",
    "genre": "喜剧 / 动作",
    "file": "movie-1820.html",
    "image": "./20.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1821,
    "title": "宁基南卡",
    "year": "2007",
    "region": "波兰",
    "genre": "剧情 / 战争 / 历史",
    "file": "movie-1821.html",
    "image": "./21.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1822,
    "title": "王牌特工:特工学院",
    "year": "2014",
    "region": "英国",
    "genre": "动作 / 喜剧 / 冒险",
    "file": "movie-1822.html",
    "image": "./22.jpg",
    "category": "经典精选"
  },
  {
    "id": 1823,
    "title": "激情的爱",
    "year": "2025",
    "region": "法国",
    "genre": "剧情 / 爱情",
    "file": "movie-1823.html",
    "image": "./23.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1824,
    "title": "独立游戏时代",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情 / 青春",
    "file": "movie-1824.html",
    "image": "./24.jpg",
    "category": "经典精选"
  },
  {
    "id": 1825,
    "title": "水底惊魂",
    "year": "2023",
    "region": "美国",
    "genre": "恐怖 / 悬疑",
    "file": "movie-1825.html",
    "image": "./25.jpg",
    "category": "经典精选"
  },
  {
    "id": 1826,
    "title": "父母的婚事",
    "year": "2022",
    "region": "印度",
    "genre": "剧情， 喜剧， 家庭",
    "file": "movie-1826.html",
    "image": "./26.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1827,
    "title": "放牛班快乐颂",
    "year": "2008",
    "region": "法国 / 德国",
    "genre": "喜剧 / 音乐 / 教育",
    "file": "movie-1827.html",
    "image": "./27.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1828,
    "title": "死亡电梯",
    "year": "2024",
    "region": "韩国",
    "genre": "恐怖 / 悬疑",
    "file": "movie-1828.html",
    "image": "./28.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1829,
    "title": "梦魇幻景录",
    "year": "2024",
    "region": "美国",
    "genre": "悬疑 / 恐怖 / 科幻",
    "file": "movie-1829.html",
    "image": "./29.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1830,
    "title": "超能狗兰尼",
    "year": "2025",
    "region": "美国",
    "genre": "喜剧 / 家庭 / 科幻",
    "file": "movie-1830.html",
    "image": "./30.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1831,
    "title": "“岚”孤注一掷演唱会",
    "year": "2024",
    "region": "日本",
    "genre": "音乐 / 纪录 / 情感",
    "file": "movie-1831.html",
    "image": "./31.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1832,
    "title": "妙女儿",
    "year": "2023",
    "region": "中国香港",
    "genre": "悬疑 / 惊悚",
    "file": "movie-1832.html",
    "image": "./32.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1833,
    "title": "杀人唔眨眼",
    "year": "1995",
    "region": "香港",
    "genre": "动作 / 犯罪 / 惊悚",
    "file": "movie-1833.html",
    "image": "./33.jpg",
    "category": "战争历史"
  },
  {
    "id": 1834,
    "title": "爸爸何在",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 悬疑 / 家庭",
    "file": "movie-1834.html",
    "image": "./34.jpg",
    "category": "经典精选"
  },
  {
    "id": 1835,
    "title": "枕边有张脸2",
    "year": "2025",
    "region": "中国大陆",
    "genre": "恐怖, 惊悚",
    "file": "movie-1835.html",
    "image": "./35.jpg",
    "category": "经典精选"
  },
  {
    "id": 1836,
    "title": "单身公寓2",
    "year": "2024",
    "region": "美国",
    "genre": "情景喜剧",
    "file": "movie-1836.html",
    "image": "./36.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1837,
    "title": "好血统",
    "year": "2021",
    "region": "美国",
    "genre": "悬疑犯罪",
    "file": "movie-1837.html",
    "image": "./37.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1838,
    "title": "通行证",
    "year": "2023",
    "region": "韩国",
    "genre": "惊悚，悬疑，科幻",
    "file": "movie-1838.html",
    "image": "./38.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1839,
    "title": "派对搭讪秘诀",
    "year": "2023",
    "region": "英国",
    "genre": "喜剧, 爱情, 科幻",
    "file": "movie-1839.html",
    "image": "./39.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1840,
    "title": "跑道终点",
    "year": "2025",
    "region": "中国香港",
    "genre": "运动 / 剧情",
    "file": "movie-1840.html",
    "image": "./40.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1841,
    "title": "夏夜",
    "year": "2025",
    "region": "中国台湾",
    "genre": "剧情 / 家庭 / 青春",
    "file": "movie-1841.html",
    "image": "./41.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1842,
    "title": "学校风云",
    "year": "1988",
    "region": "中国香港",
    "genre": "剧情 / 犯罪",
    "file": "movie-1842.html",
    "image": "./42.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1843,
    "title": "共生心理分类学",
    "year": "2019",
    "region": "法国 / 比利时",
    "genre": "悬疑 / 科幻",
    "file": "movie-1843.html",
    "image": "./43.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1844,
    "title": "动态漫画·极品家丁",
    "year": "2024",
    "region": "中国大陆",
    "genre": "喜剧 / 古装",
    "file": "movie-1844.html",
    "image": "./44.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1845,
    "title": "欧卡纸牌之记忆迷踪",
    "year": "2018",
    "region": "中国",
    "genre": "悬疑 / 惊悚 / 奇幻",
    "file": "movie-1845.html",
    "image": "./45.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1846,
    "title": "慢性自杀",
    "year": "2024",
    "region": "法国",
    "genre": "剧情 / 心理惊悚",
    "file": "movie-1846.html",
    "image": "./46.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1847,
    "title": "走投无路",
    "year": "2026",
    "region": "韩国",
    "genre": "犯罪, 动作, 悬疑",
    "file": "movie-1847.html",
    "image": "./47.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1848,
    "title": "迫切的任务",
    "year": "2024",
    "region": "美国",
    "genre": "动作、犯罪、剧情",
    "file": "movie-1848.html",
    "image": "./48.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1849,
    "title": "只想爱你",
    "year": "2024",
    "region": "韩国",
    "genre": "爱情 / 喜剧",
    "file": "movie-1849.html",
    "image": "./49.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1850,
    "title": "术士神传",
    "year": "2026",
    "region": "韩国",
    "genre": "奇幻, 动作, 古装",
    "file": "movie-1850.html",
    "image": "./50.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1851,
    "title": "萨拉热窝的孩子",
    "year": "2026",
    "region": "波黑 / 塞尔维亚",
    "genre": "战争 / 剧情",
    "file": "movie-1851.html",
    "image": "./51.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1852,
    "title": "家有辣嫂",
    "year": "2023",
    "region": "中国大陆",
    "genre": "喜剧 / 家庭",
    "file": "movie-1852.html",
    "image": "./52.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1853,
    "title": "掠木行动",
    "year": "2017",
    "region": "加拿大",
    "genre": "惊悚, 犯罪, 动作",
    "file": "movie-1853.html",
    "image": "./53.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1854,
    "title": "乌蒙深处",
    "year": "2026",
    "region": "中国大陆",
    "genre": "剧情，家庭，乡村",
    "file": "movie-1854.html",
    "image": "./54.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1855,
    "title": "八道妓生",
    "year": "2024",
    "region": "韩国",
    "genre": "古装 / 爱情 / 悬疑",
    "file": "movie-1855.html",
    "image": "./55.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1856,
    "title": "裸之大将",
    "year": "2025",
    "region": "日本",
    "genre": "历史喜剧",
    "file": "movie-1856.html",
    "image": "./56.jpg",
    "category": "战争历史"
  },
  {
    "id": 1857,
    "title": "皮诺丘的奇幻旅程",
    "year": "2024",
    "region": "意大利",
    "genre": "奇幻，剧情，家庭",
    "file": "movie-1857.html",
    "image": "./57.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1858,
    "title": "世界之梦",
    "year": "2027",
    "region": "多国合拍",
    "genre": "科幻， 剧情， 悬疑",
    "file": "movie-1858.html",
    "image": "./58.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1859,
    "title": "蜜熊的音乐奇旅",
    "year": "2024",
    "region": "美国",
    "genre": "冒险、音乐、奇幻",
    "file": "movie-1859.html",
    "image": "./59.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1860,
    "title": "开国元勋朱德",
    "year": "2014",
    "region": "中国大陆",
    "genre": "传记，历史，战争",
    "file": "movie-1860.html",
    "image": "./60.jpg",
    "category": "经典精选"
  },
  {
    "id": 1861,
    "title": "麦加朝圣之旅",
    "year": "2019",
    "region": "英国 / 沙特阿拉伯",
    "genre": "纪录片 / 剧情",
    "file": "movie-1861.html",
    "image": "./61.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1862,
    "title": "六指琴魔2004",
    "year": "2004",
    "region": "中国大陆 / 香港",
    "genre": "武侠 / 古装 / 动作",
    "file": "movie-1862.html",
    "image": "./62.jpg",
    "category": "环球片库"
  },
  {
    "id": 1863,
    "title": "英雄交响曲",
    "year": "2003",
    "region": "德国 / 法国",
    "genre": "剧情 / 音乐 / 传记",
    "file": "movie-1863.html",
    "image": "./63.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1864,
    "title": "我的野蛮女教师",
    "year": "2003",
    "region": "韩国",
    "genre": "喜剧",
    "file": "movie-1864.html",
    "image": "./64.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1865,
    "title": "花花世界花家姐粤语",
    "year": "2023",
    "region": "中国香港",
    "genre": "喜剧 / 家庭",
    "file": "movie-1865.html",
    "image": "./65.jpg",
    "category": "战争历史"
  },
  {
    "id": 1866,
    "title": "换伴万万睡",
    "year": "2026",
    "region": "泰国",
    "genre": "爱情, 喜剧",
    "file": "movie-1866.html",
    "image": "./66.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1867,
    "title": "赛小花的远大前程",
    "year": "2024",
    "region": "中国大陆",
    "genre": "剧情、职场、励志",
    "file": "movie-1867.html",
    "image": "./67.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1868,
    "title": "如常",
    "year": "2024",
    "region": "中国台湾",
    "genre": "剧情 / 家庭 / 生活",
    "file": "movie-1868.html",
    "image": "./68.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1869,
    "title": "虹猫蓝兔火凤凰",
    "year": "2010",
    "region": "中国大陆",
    "genre": "动画 / 奇幻",
    "file": "movie-1869.html",
    "image": "./69.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1870,
    "title": "别动我的抽屉",
    "year": "2024",
    "region": "中国大陆",
    "genre": "家庭 / 悬疑 / 都市",
    "file": "movie-1870.html",
    "image": "./70.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1871,
    "title": "爱情失控点",
    "year": "2012",
    "region": "意大利",
    "genre": "喜剧, 爱情",
    "file": "movie-1871.html",
    "image": "./71.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1872,
    "title": "轻松愉快",
    "year": "2026",
    "region": "中国大陆",
    "genre": "喜剧 / 公路",
    "file": "movie-1872.html",
    "image": "./72.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1873,
    "title": "鲁邦三世：巴比伦黄金传说",
    "year": "2023",
    "region": "日本",
    "genre": "动作， 喜剧， 冒险",
    "file": "movie-1873.html",
    "image": "./73.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1874,
    "title": "美丽女孩",
    "year": "2022",
    "region": "美国",
    "genre": "剧情 / 青春",
    "file": "movie-1874.html",
    "image": "./74.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1875,
    "title": "宴会日",
    "year": "2025",
    "region": "墨西哥",
    "genre": "剧情，喜剧",
    "file": "movie-1875.html",
    "image": "./75.jpg",
    "category": "战争历史"
  },
  {
    "id": 1876,
    "title": "一个隐形女孩的自白",
    "year": "2025",
    "region": "巴西",
    "genre": "剧情 / 奇幻",
    "file": "movie-1876.html",
    "image": "./76.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1877,
    "title": "宵禁5分前",
    "year": "2025",
    "region": "日本",
    "genre": "科幻 / 惊悚",
    "file": "movie-1877.html",
    "image": "./77.jpg",
    "category": "环球片库"
  },
  {
    "id": 1878,
    "title": "汉考克与琼恩",
    "year": "2025",
    "region": "美国",
    "genre": "西部 / 冒险",
    "file": "movie-1878.html",
    "image": "./78.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1879,
    "title": "青春创业手册",
    "year": "2025",
    "region": "中国内地",
    "genre": "励志, 职场",
    "file": "movie-1879.html",
    "image": "./79.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1880,
    "title": "人前叫多莉，人后叫凯蒂",
    "year": "2025",
    "region": "美国",
    "genre": "惊悚， 心理， 剧情",
    "file": "movie-1880.html",
    "image": "./80.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1881,
    "title": "何以中国",
    "year": "2023",
    "region": "中国",
    "genre": "历史, 文化",
    "file": "movie-1881.html",
    "image": "./81.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1882,
    "title": "婚姻困境中的米勒",
    "year": "2025",
    "region": "法国",
    "genre": "剧情 / 喜剧 / 爱情",
    "file": "movie-1882.html",
    "image": "./82.jpg",
    "category": "经典精选"
  },
  {
    "id": 1883,
    "title": "夺镖",
    "year": "1996",
    "region": "中国香港",
    "genre": "动作, 武侠, 西部",
    "file": "movie-1883.html",
    "image": "./83.jpg",
    "category": "经典精选"
  },
  {
    "id": 1884,
    "title": "金陵秘事",
    "year": "2023",
    "region": "中国大陆",
    "genre": "悬疑 / 年代 / 谍战",
    "file": "movie-1884.html",
    "image": "./84.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1885,
    "title": "安妮日记",
    "year": "2025",
    "region": "荷兰/美国",
    "genre": "剧情/历史/战争",
    "file": "movie-1885.html",
    "image": "./85.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1886,
    "title": "蓝色马蹄莲",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 犯罪",
    "file": "movie-1886.html",
    "image": "./86.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1887,
    "title": "安娜和狼",
    "year": "2023",
    "region": "俄罗斯",
    "genre": "剧情, 奇幻",
    "file": "movie-1887.html",
    "image": "./87.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1888,
    "title": "中国酒店",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情 / 悬疑 / 社会",
    "file": "movie-1888.html",
    "image": "./88.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1889,
    "title": "编剧情缘",
    "year": "2023",
    "region": "英国",
    "genre": "剧情 / 传记",
    "file": "movie-1889.html",
    "image": "./89.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1890,
    "title": "何必有我",
    "year": "2024",
    "region": "中国香港",
    "genre": "剧情 / 家庭",
    "file": "movie-1890.html",
    "image": "./90.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1891,
    "title": "僵尸之地",
    "year": "2024",
    "region": "韩国",
    "genre": "恐怖 / 喜剧 / 动作",
    "file": "movie-1891.html",
    "image": "./91.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1892,
    "title": "贝蕾妮丝",
    "year": "2024",
    "region": "法国",
    "genre": "爱情恐怖",
    "file": "movie-1892.html",
    "image": "./92.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1893,
    "title": "到底是谁搞的鬼",
    "year": "2022",
    "region": "美国",
    "genre": "悬疑 / 惊悚",
    "file": "movie-1893.html",
    "image": "./93.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1894,
    "title": "返航迷途",
    "year": "2025",
    "region": "中国大陆",
    "genre": "科幻 / 悬疑",
    "file": "movie-1894.html",
    "image": "./94.jpg",
    "category": "战争历史"
  },
  {
    "id": 1895,
    "title": "爱在别乡的季节",
    "year": "2023",
    "region": "中国大陆 / 香港",
    "genre": "剧情 / 爱情",
    "file": "movie-1895.html",
    "image": "./95.jpg",
    "category": "环球片库"
  },
  {
    "id": 1896,
    "title": "怪异同床人",
    "year": "1999",
    "region": "美国",
    "genre": "悬疑， 惊悚",
    "file": "movie-1896.html",
    "image": "./96.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1897,
    "title": "分秒闭睁",
    "year": "2025",
    "region": "韩国",
    "genre": "惊悚, 奇幻",
    "file": "movie-1897.html",
    "image": "./97.jpg",
    "category": "战争历史"
  },
  {
    "id": 1898,
    "title": "失明恋曲",
    "year": "2023",
    "region": "中国大陆",
    "genre": "爱情 / 剧情",
    "file": "movie-1898.html",
    "image": "./98.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1899,
    "title": "风骚坏姊妹",
    "year": "2021",
    "region": "美国",
    "genre": "喜剧， 剧情， 悬疑",
    "file": "movie-1899.html",
    "image": "./99.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1900,
    "title": "春画先生",
    "year": "2025",
    "region": "日本",
    "genre": "剧情， 艺术， 情色",
    "file": "movie-1900.html",
    "image": "./100.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1901,
    "title": "人间魔",
    "year": "2026",
    "region": "中国香港",
    "genre": "恐怖 / 犯罪 / 心理",
    "file": "movie-1901.html",
    "image": "./101.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1902,
    "title": "想飞2014",
    "year": "2014",
    "region": "中国台湾",
    "genre": "剧情, 家庭, 运动",
    "file": "movie-1902.html",
    "image": "./102.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1903,
    "title": "穿越者之异梦空间",
    "year": "2025",
    "region": "中国大陆",
    "genre": "悬疑，科幻，爱情",
    "file": "movie-1903.html",
    "image": "./103.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1904,
    "title": "浮动",
    "year": "2025",
    "region": "英国",
    "genre": "科幻 / 惊悚",
    "file": "movie-1904.html",
    "image": "./104.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1905,
    "title": "我们的歌第六季",
    "year": "2025",
    "region": "中国大陆",
    "genre": "音乐 / 真人秀",
    "file": "movie-1905.html",
    "image": "./105.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1906,
    "title": "寻梦纽约",
    "year": "2023",
    "region": "美国",
    "genre": "爱情/歌舞",
    "file": "movie-1906.html",
    "image": "./106.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1907,
    "title": "美国交响乐：奏出泪汗血",
    "year": "2023",
    "region": "美国",
    "genre": "纪录, 音乐",
    "file": "movie-1907.html",
    "image": "./107.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1908,
    "title": "玉女痴郎",
    "year": "1971",
    "region": "中国台湾",
    "genre": "喜剧， 爱情",
    "file": "movie-1908.html",
    "image": "./108.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1909,
    "title": "不伦恋曲",
    "year": "2018",
    "region": "日本",
    "genre": "爱情, 悬疑",
    "file": "movie-1909.html",
    "image": "./109.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1910,
    "title": "爱情洄游",
    "year": "2025",
    "region": "中国",
    "genre": "奇幻",
    "file": "movie-1910.html",
    "image": "./110.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1911,
    "title": "激情时速",
    "year": "2024",
    "region": "美国",
    "genre": "动作, 犯罪, 赛车",
    "file": "movie-1911.html",
    "image": "./111.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1912,
    "title": "耶稣的哭泣",
    "year": "2018",
    "region": "意大利 / 法国",
    "genre": "剧情 / 宗教",
    "file": "movie-1912.html",
    "image": "./112.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1913,
    "title": "房奴试爱",
    "year": "2025",
    "region": "中国香港",
    "genre": "爱情 / 剧情",
    "file": "movie-1913.html",
    "image": "./113.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1914,
    "title": "智勇急转弯",
    "year": "1991",
    "region": "美国",
    "genre": "喜剧，犯罪",
    "file": "movie-1914.html",
    "image": "./114.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1915,
    "title": "一梦如初2025",
    "year": "2025",
    "region": "中国大陆",
    "genre": "科幻 / 爱情 / 悬疑",
    "file": "movie-1915.html",
    "image": "./115.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1916,
    "title": "白鲸奇遇记",
    "year": "2025",
    "region": "中国大陆",
    "genre": "剧情, 家庭",
    "file": "movie-1916.html",
    "image": "./116.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1917,
    "title": "圣剑使的禁咒咏唱",
    "year": "2015",
    "region": "日本",
    "genre": "动作， 奇幻， 校园",
    "file": "movie-1917.html",
    "image": "./117.jpg",
    "category": "战争历史"
  },
  {
    "id": 1918,
    "title": "没谈过恋爱的我",
    "year": "2024",
    "region": "中国大陆",
    "genre": "爱情、校园、青春",
    "file": "movie-1918.html",
    "image": "./118.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1919,
    "title": "信长的忍者",
    "year": "2024",
    "region": "日本",
    "genre": "历史 / 喜剧 / 动作",
    "file": "movie-1919.html",
    "image": "./119.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1920,
    "title": "炼狱机器",
    "year": "2025",
    "region": "美国",
    "genre": "科幻 / 悬疑 / 惊悚",
    "file": "movie-1920.html",
    "image": "./120.jpg",
    "category": "环球片库"
  },
  {
    "id": 1921,
    "title": "东京怪奇酒",
    "year": "2025",
    "region": "日本",
    "genre": "悬疑、奇幻、美食",
    "file": "movie-1921.html",
    "image": "./121.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1922,
    "title": "雏妓",
    "year": "1999",
    "region": "香港",
    "genre": "剧情 / 犯罪",
    "file": "movie-1922.html",
    "image": "./122.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1923,
    "title": "雪豹坚强岁月",
    "year": "2014",
    "region": "中国大陆",
    "genre": "剧情 / 战争 / 军旅",
    "file": "movie-1923.html",
    "image": "./123.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1924,
    "title": "我的老婆是只猫",
    "year": "2025",
    "region": "中国大陆",
    "genre": "奇幻、爱情、喜剧",
    "file": "movie-1924.html",
    "image": "./124.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1925,
    "title": "溜溜球",
    "year": "2018",
    "region": "韩国",
    "genre": "剧情，家庭，体育",
    "file": "movie-1925.html",
    "image": "./125.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1926,
    "title": "咱可不是猫",
    "year": "2024",
    "region": "中国大陆",
    "genre": "喜剧，冒险",
    "file": "movie-1926.html",
    "image": "./126.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1927,
    "title": "西尔维娅传",
    "year": "1943",
    "region": "美国",
    "genre": "剧情 / 爱情 / 传记",
    "file": "movie-1927.html",
    "image": "./127.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1928,
    "title": "救世者",
    "year": "1985",
    "region": "中国香港",
    "genre": "动作，犯罪",
    "file": "movie-1928.html",
    "image": "./128.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1929,
    "title": "怒潮屠城",
    "year": "2025",
    "region": "日本",
    "genre": "灾难, 动作",
    "file": "movie-1929.html",
    "image": "./129.jpg",
    "category": "环球片库"
  },
  {
    "id": 1930,
    "title": "痴情恨",
    "year": "1994",
    "region": "中国香港",
    "genre": "爱情 / 犯罪 / 剧情",
    "file": "movie-1930.html",
    "image": "./130.jpg",
    "category": "经典精选"
  },
  {
    "id": 1931,
    "title": "江湖子弟国语",
    "year": "1997",
    "region": "中国香港",
    "genre": "动作, 犯罪, 剧情",
    "file": "movie-1931.html",
    "image": "./131.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1932,
    "title": "小镇狂花",
    "year": "2021",
    "region": "中国大陆",
    "genre": "喜剧 / 犯罪 / 女性",
    "file": "movie-1932.html",
    "image": "./132.jpg",
    "category": "环球片库"
  },
  {
    "id": 1933,
    "title": "欲望解析",
    "year": "2027",
    "region": "法国",
    "genre": "剧情，爱情，心理",
    "file": "movie-1933.html",
    "image": "./133.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1934,
    "title": "如来神掌2002",
    "year": "2002",
    "region": "中国香港",
    "genre": "动作 / 奇幻 / 喜剧",
    "file": "movie-1934.html",
    "image": "./134.jpg",
    "category": "经典精选"
  },
  {
    "id": 1935,
    "title": "怪想售",
    "year": "2026",
    "region": "中国大陆",
    "genre": "奇幻, 悬疑, 都市",
    "file": "movie-1935.html",
    "image": "./135.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1936,
    "title": "暗夜魔法使",
    "year": "2024",
    "region": "日本",
    "genre": "奇幻 / 悬疑 / 都市",
    "file": "movie-1936.html",
    "image": "./136.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1937,
    "title": "再见溪谷",
    "year": "2024",
    "region": "日本",
    "genre": "悬疑 / 犯罪 / 家庭",
    "file": "movie-1937.html",
    "image": "./137.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1938,
    "title": "野马少年",
    "year": "2020",
    "region": "中国大陆",
    "genre": "剧情, 运动, 青春",
    "file": "movie-1938.html",
    "image": "./138.jpg",
    "category": "环球片库"
  },
  {
    "id": 1939,
    "title": "古屋怪人",
    "year": "2025",
    "region": "英国",
    "genre": "惊悚、悬疑、哥特",
    "file": "movie-1939.html",
    "image": "./139.jpg",
    "category": "环球片库"
  },
  {
    "id": 1940,
    "title": "玩命关头7",
    "year": "2025",
    "region": "美国",
    "genre": "动作, 犯罪, 惊悚",
    "file": "movie-1940.html",
    "image": "./140.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1941,
    "title": "夺命747",
    "year": "2024",
    "region": "美国",
    "genre": "动作, 灾难, 惊悚",
    "file": "movie-1941.html",
    "image": "./141.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1942,
    "title": "明日重生",
    "year": "2028",
    "region": "中国大陆",
    "genre": "科幻 / 灾难",
    "file": "movie-1942.html",
    "image": "./142.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1943,
    "title": "野兽男孩的故事",
    "year": "2024",
    "region": "美国",
    "genre": "爱情 / 奇幻 / 青春",
    "file": "movie-1943.html",
    "image": "./143.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1944,
    "title": "寂寞的中尉",
    "year": "2027",
    "region": "法国",
    "genre": "剧情, 战争, 同性",
    "file": "movie-1944.html",
    "image": "./144.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1945,
    "title": "拿破仑战争",
    "year": "2023",
    "region": "法国 / 英国 / 俄罗斯",
    "genre": "历史 / 战争 / 传记",
    "file": "movie-1945.html",
    "image": "./145.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1946,
    "title": "幸运女士",
    "year": "2026",
    "region": "美国",
    "genre": "动作, 惊悚",
    "file": "movie-1946.html",
    "image": "./146.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1947,
    "title": "金汤匙",
    "year": "2023",
    "region": "韩国",
    "genre": "奇幻 / 悬疑",
    "file": "movie-1947.html",
    "image": "./147.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1948,
    "title": "第六感泰版",
    "year": "2024",
    "region": "泰国",
    "genre": "恐怖悬疑",
    "file": "movie-1948.html",
    "image": "./148.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1949,
    "title": "胸口",
    "year": "2016",
    "region": "法国",
    "genre": "剧情, 奇幻, 女性",
    "file": "movie-1949.html",
    "image": "./149.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1950,
    "title": "致命错爱",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 爱情 / 犯罪",
    "file": "movie-1950.html",
    "image": "./150.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1951,
    "title": "美国派之昏礼",
    "year": "2023",
    "region": "美国",
    "genre": "喜剧 / 青春",
    "file": "movie-1951.html",
    "image": "./1.jpg",
    "category": "环球片库"
  },
  {
    "id": 1952,
    "title": "香港人在北京粤语",
    "year": "2026",
    "region": "中国香港 / 中国大陆",
    "genre": "剧情、都市、文化碰撞",
    "file": "movie-1952.html",
    "image": "./2.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1953,
    "title": "潜龙",
    "year": "2024",
    "region": "中国大陆",
    "genre": "动作，犯罪，卧底",
    "file": "movie-1953.html",
    "image": "./3.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1954,
    "title": "被单游戏",
    "year": "2024",
    "region": "中国",
    "genre": "家庭 / 喜剧",
    "file": "movie-1954.html",
    "image": "./4.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1955,
    "title": "武林风云",
    "year": "2025",
    "region": "中国台湾",
    "genre": "武侠, 悬疑, 权谋",
    "file": "movie-1955.html",
    "image": "./5.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1956,
    "title": "魔方2008",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑 / 科幻 / 灾难",
    "file": "movie-1956.html",
    "image": "./6.jpg",
    "category": "战争历史"
  },
  {
    "id": 1957,
    "title": "布偶寻踪",
    "year": "2025",
    "region": "美国",
    "genre": "悬疑奇幻",
    "file": "movie-1957.html",
    "image": "./7.jpg",
    "category": "环球片库"
  },
  {
    "id": 1958,
    "title": "小鱼",
    "year": "2028",
    "region": "日本",
    "genre": "剧情 / 家庭 / 治愈",
    "file": "movie-1958.html",
    "image": "./8.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1959,
    "title": "地狱里长",
    "year": "2024",
    "region": "中国台湾",
    "genre": "奇幻、悬疑、犯罪",
    "file": "movie-1959.html",
    "image": "./9.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1960,
    "title": "再见非洲",
    "year": "2026",
    "region": "英国",
    "genre": "剧情, 冒险",
    "file": "movie-1960.html",
    "image": "./10.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1961,
    "title": "回归生活",
    "year": "2019",
    "region": "英国",
    "genre": "喜剧, 生活",
    "file": "movie-1961.html",
    "image": "./11.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1962,
    "title": "离婚好麻吉",
    "year": "2026",
    "region": "中国台湾",
    "genre": "爱情喜剧",
    "file": "movie-1962.html",
    "image": "./12.jpg",
    "category": "环球片库"
  },
  {
    "id": 1963,
    "title": "九州海上牧云记",
    "year": "2026",
    "region": "中国大陆",
    "genre": "奇幻, 古装, 动作",
    "file": "movie-1963.html",
    "image": "./13.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1964,
    "title": "麻烦家族",
    "year": "2016",
    "region": "日本",
    "genre": "喜剧",
    "file": "movie-1964.html",
    "image": "./14.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1965,
    "title": "超级巨人",
    "year": "2020",
    "region": "日本",
    "genre": "科幻，动作，剧情",
    "file": "movie-1965.html",
    "image": "./15.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1966,
    "title": "咬我还是爱我",
    "year": "2024",
    "region": "韩国",
    "genre": "爱情 / 奇幻 / 恐怖",
    "file": "movie-1966.html",
    "image": "./16.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1967,
    "title": "棕榈树森林",
    "year": "2024",
    "region": "韩国",
    "genre": "剧情, 悬疑, 家庭",
    "file": "movie-1967.html",
    "image": "./17.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1968,
    "title": "夜曲2020",
    "year": "2020",
    "region": "英国",
    "genre": "恐怖， 心理惊悚， 音乐",
    "file": "movie-1968.html",
    "image": "./18.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1969,
    "title": "狼女传奇",
    "year": "2022",
    "region": "俄罗斯",
    "genre": "剧情 / 奇幻",
    "file": "movie-1969.html",
    "image": "./19.jpg",
    "category": "动作犯罪"
  },
  {
    "id": 1970,
    "title": "2025青春芒果夜",
    "year": "2025",
    "region": "中国大陆",
    "genre": "音乐 / 真人秀",
    "file": "movie-1970.html",
    "image": "./20.jpg",
    "category": "环球片库"
  },
  {
    "id": 1971,
    "title": "娜娜",
    "year": "2005",
    "region": "日本",
    "genre": "爱情， 音乐",
    "file": "movie-1971.html",
    "image": "./21.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1972,
    "title": "战鸭突击队",
    "year": "2023",
    "region": "美国",
    "genre": "喜剧、动作、冒险",
    "file": "movie-1972.html",
    "image": "./22.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1973,
    "title": "星坠地球",
    "year": "2026",
    "region": "美国",
    "genre": "科幻, 灾难, 动作",
    "file": "movie-1973.html",
    "image": "./23.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1974,
    "title": "海滩派对杀人魔",
    "year": "2021",
    "region": "美国",
    "genre": "恐怖 / 惊悚",
    "file": "movie-1974.html",
    "image": "./24.jpg",
    "category": "经典精选"
  },
  {
    "id": 1975,
    "title": "开玩笑 第二季",
    "year": "2025",
    "region": "美国",
    "genre": "剧情， 喜剧， 黑色幽默",
    "file": "movie-1975.html",
    "image": "./25.jpg",
    "category": "惊悚恐怖"
  },
  {
    "id": 1976,
    "title": "回不去的时光",
    "year": "2021",
    "region": "中国大陆",
    "genre": "剧情 / 家庭 / 文艺",
    "file": "movie-1976.html",
    "image": "./26.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1977,
    "title": "孤山魅影",
    "year": "2024",
    "region": "中国大陆",
    "genre": "悬疑惊悚",
    "file": "movie-1977.html",
    "image": "./27.jpg",
    "category": "经典精选"
  },
  {
    "id": 1978,
    "title": "红心的杰克",
    "year": "2024",
    "region": "英国",
    "genre": "犯罪 / 爱情",
    "file": "movie-1978.html",
    "image": "./28.jpg",
    "category": "环球片库"
  },
  {
    "id": 1979,
    "title": "宇宙门票：82的奇迹",
    "year": "2026",
    "region": "韩国",
    "genre": "科幻 / 剧情",
    "file": "movie-1979.html",
    "image": "./29.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1980,
    "title": "奥黛莎",
    "year": "2026",
    "region": "美国 / 乌克兰",
    "genre": "战争 / 剧情",
    "file": "movie-1980.html",
    "image": "./30.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1981,
    "title": "天网情网",
    "year": "2026",
    "region": "中国大陆",
    "genre": "悬疑, 爱情",
    "file": "movie-1981.html",
    "image": "./31.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1982,
    "title": "良好的条纹",
    "year": "2025",
    "region": "法国",
    "genre": "剧情, 运动, 喜剧",
    "file": "movie-1982.html",
    "image": "./32.jpg",
    "category": "经典精选"
  },
  {
    "id": 1983,
    "title": "公私恋事多粤语",
    "year": "2024",
    "region": "中国香港",
    "genre": "剧情 / 爱情 / 职场",
    "file": "movie-1983.html",
    "image": "./33.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1984,
    "title": "魔域战记",
    "year": "2024",
    "region": "日本",
    "genre": "奇幻，冒险，战斗",
    "file": "movie-1984.html",
    "image": "./34.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1985,
    "title": "昨天再见",
    "year": "2026",
    "region": "中国大陆",
    "genre": "剧情 / 奇幻 / 家庭",
    "file": "movie-1985.html",
    "image": "./35.jpg",
    "category": "环球片库"
  },
  {
    "id": 1986,
    "title": "卢克索",
    "year": "2024",
    "region": "埃及",
    "genre": "剧情, 爱情",
    "file": "movie-1986.html",
    "image": "./36.jpg",
    "category": "经典精选"
  },
  {
    "id": 1987,
    "title": "屌丝女士第二季",
    "year": "2014",
    "region": "德国",
    "genre": "喜剧",
    "file": "movie-1987.html",
    "image": "./37.jpg",
    "category": "环球片库"
  },
  {
    "id": 1988,
    "title": "喂，太宰",
    "year": "2024",
    "region": "日本",
    "genre": "剧情 / 传记 / 文艺",
    "file": "movie-1988.html",
    "image": "./38.jpg",
    "category": "爱情剧情"
  },
  {
    "id": 1989,
    "title": "晒尸体",
    "year": "2017",
    "region": "法国 / 西班牙",
    "genre": "犯罪、惊悚、黑色幽默",
    "file": "movie-1989.html",
    "image": "./39.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1990,
    "title": "盖世霸王",
    "year": "2028",
    "region": "中国大陆",
    "genre": "古装 / 历史",
    "file": "movie-1990.html",
    "image": "./40.jpg",
    "category": "欧美佳片"
  },
  {
    "id": 1991,
    "title": "星辰变第一季",
    "year": "2018",
    "region": "中国大陆",
    "genre": "奇幻 / 修仙 / 战斗",
    "file": "movie-1991.html",
    "image": "./41.jpg",
    "category": "环球片库"
  },
  {
    "id": 1992,
    "title": "希德姐妹帮",
    "year": "1988",
    "region": "美国",
    "genre": "喜剧, 犯罪",
    "file": "movie-1992.html",
    "image": "./42.jpg",
    "category": "经典精选"
  },
  {
    "id": 1993,
    "title": "十一点",
    "year": "2018",
    "region": "中国台湾",
    "genre": "恐怖惊悚",
    "file": "movie-1993.html",
    "image": "./43.jpg",
    "category": "战争历史"
  },
  {
    "id": 1994,
    "title": "聪明的顺溜第二季",
    "year": "2018",
    "region": "中国大陆",
    "genre": "军事, 儿童, 喜剧",
    "file": "movie-1994.html",
    "image": "./44.jpg",
    "category": "战争历史"
  },
  {
    "id": 1995,
    "title": "东宫毒",
    "year": "2025",
    "region": "中国大陆",
    "genre": "古装 / 悬疑 / 权谋",
    "file": "movie-1995.html",
    "image": "./45.jpg",
    "category": "悬疑推理"
  },
  {
    "id": 1996,
    "title": "沧月绘",
    "year": "2025",
    "region": "中国大陆",
    "genre": "古装 / 奇幻",
    "file": "movie-1996.html",
    "image": "./46.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 1997,
    "title": "寒武纪",
    "year": "2025",
    "region": "中国",
    "genre": "悬疑, 科幻",
    "file": "movie-1997.html",
    "image": "./47.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1998,
    "title": "末日巡逻队第三季",
    "year": "2024",
    "region": "美国",
    "genre": "科幻, 动作, 喜剧",
    "file": "movie-1998.html",
    "image": "./48.jpg",
    "category": "动画冒险"
  },
  {
    "id": 1999,
    "title": "蓝月",
    "year": "2024",
    "region": "美国",
    "genre": "科幻 / 爱情 / 灾难",
    "file": "movie-1999.html",
    "image": "./49.jpg",
    "category": "科幻奇幻"
  },
  {
    "id": 2000,
    "title": "老爸，向前冲",
    "year": "2025",
    "region": "中国大陆",
    "genre": "喜剧 / 运动",
    "file": "movie-2000.html",
    "image": "./50.jpg",
    "category": "动画冒险"
  }
];

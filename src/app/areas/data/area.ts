export interface AreaDetail {
    slug: string;
    title: string;
    banner: string;
    description: string[];
    gallery: { src: string; title: string; info: string }[];
    related: { slug: string; title: string; img: string }[];
}

export const AREAS: AreaDetail[] = [
    {
        slug: 'Alfheim',
        title: '阿爾夫海姆',
        banner: '/img/Alfheim.png',
        description: [
            '亞爾夫海姆是一片光與魔法交織的國度，漂浮的島嶼點綴於蔚藍的天空之中，銀白色的森林在陽光下閃爍著奇異的光輝。光精靈居住在這片純淨而神秘的土地上，他們優雅而聰慧，擁有操控光與自然能量的力量。這裡的湖泊如鏡面般清澈，倒映著星辰與月光，夜晚的天空中閃耀著無數星辰，與精靈的宮殿交相輝映，使亞爾夫海姆宛如夢境一般。',
            '作為精靈之王的領地，亞爾夫海姆受弗雷的統治，他的存在為這片土地帶來了和平與繁榮。然而，這裡的和平並非不受威脅，黑暗精靈與其他勢力時常企圖入侵，試圖奪取光精靈的力量。儘管亞爾夫海姆遠離戰爭，但當世界陷入混亂時，這片美麗的國度亦難獨善其身。許多傳說中提到，亞爾夫海姆隱藏著能照亮黑暗、驅散邪惡的強大寶物，只有最純潔的靈魂才能找到它們的蹤跡。',
        ],
        gallery: [
            { src: '/img/FairysHome.png', title: '精靈之城', info: '' },
            { src: '/img/FairysParty.png', title: '星光下的儀式', info: '' },
            { src: '/img/StarLake.png', title: '星輝湖', info: '' },
        ],
        related: [
            { slug: 'Vanaheim', title: '華納海姆', img: '/img/Vanaheim.png' },
            { slug: 'Asgard', title: '阿斯嘉', img: '/img/Asgard.png' },
        ],
    },
    {
        slug: 'Asgard',
        title: '阿斯嘉',
        banner: '/img/Asgard.png',
        description: [
            '阿斯嘉是阿薩神族的家園，一個矗立在九界之巔的輝煌國度。奧丁親手建造了這片領土，並以彩虹橋比弗羅斯特連接其他世界。這裡是力量與智慧的象徵，居住著眾多傳奇的神祇，如奧丁、索爾、弗麗嘉和巴德爾。',
            '阿斯嘉有著高聳的宮殿與廣闊的平原，其中最著名的是瓦爾哈拉——英勇戰死者的歸宿之地。在瓦爾哈拉，戰士們日夜訓練，準備迎接諸神黃昏。他們的榮耀彷彿永無止境，但命運的預言卻在陰影中悄然籠罩著阿斯嘉。',
            '阿斯嘉不僅是一個國度，更是諸神力量的中心。儘管它屢次在戰爭中受創，神族始終重建家園，誓言守護這片聖域。然而，這座輝煌之城注定將在末日之戰中毀滅，成為歷史的遺跡。',
        ],
        gallery: [
            {
                src: '/img/Valhala.png',
                title: '瓦爾哈拉',
                info: '又稱英靈殿，是奧丁的神殿，英勇戰死的亡靈將在此戰鬥和暢飲。',
            },
            {
                src: '/img/OdinChair.png',
                title: '奧丁的寶座',
                info: '位於奧丁的宮殿內，傳說中，坐在上面可以看到九界的一切事物。',
            },
            {
                src: '/img/Tower.png',
                title: '瞭望塔',
                info: '海姆達爾平時站哨的地方，從塔中可以看清整個阿斯嘉。',
            },
        ],
        related: [
            { slug: 'Alfheim', title: '阿爾夫海姆', img: '/img/Alfheim.png' },
            { slug: 'Helheim', title: '赫爾海姆', img: '/img/Helheim.png' },
        ],
    },
    {
        slug: 'Helheim',
        title: '赫爾海姆',
        banner: '/img/Helheim.png',
        description: [
            '赫爾海姆，是亡靈的國度，一片陰森而寒冷的世界。這裡沒有陽光，也沒有溫暖，只有灰色的霧氣瀰漫在冰冷的大地上。死者的靈魂在此遊蕩，等待著永恆的審判。那些死於疾病、老邁或懦弱戰敗的人，無法進入瓦爾哈拉，只能步入這座黑暗的國度，成為海拉的子民。',
            '海拉是這片世界的統治者，她是洛基與巨人安格爾波達的女兒，一半美麗，一半腐爛，象徵著生與死的交界。她坐鎮在赫爾宮中，冷漠地審視著來到她國度的亡者，決定他們的命運。赫爾海姆的深處，有一座名為「伊格之門」的巨大城門，一旦亡者進入，便再也無法離開。只有少數例外，如奧丁派出的赫爾莫德曾試圖進入此地，尋找巴德爾的靈魂，但他最終只能帶回無望的消息。',
            '在諸神黃昏之時，海拉將釋放她的亡者軍團，與洛基、芬里爾、耶夢加得一起向阿斯嘉進軍。屆時，死者將重返人間，世界將被黑暗與絕望籠罩，直至戰爭結束，萬物歸於沉寂。',
        ],
        gallery: [
            { src: '/img/GateOfHelheim.webp', title: '冥界大門', info: '' },
            {
                src: '/img/Modgud’s Bridge.webp',
                title: '莫德古德之橋',
                info: '橫跨著通往赫爾海姆的河流，莫德古德在此審視所有前來赫爾海姆的亡靈。',
            },
            {
                src: '/img/Hel’s palace.webp',
                title: '海拉之殿',
                info: '赫爾海姆的中心是海拉的宮殿，這座殿堂陰暗寒冷，其內部環境令人毛骨悚然。',
            },
        ],
        related: [
            { slug: 'Asgard', title: '阿斯嘉', img: '/img/Asgard.png' },
            { slug: 'Jotunheim', title: '約頓海姆', img: '/img/Jotunheim.png' },
        ],
    },
    {
        slug: 'Jotunheim',
        title: '約頓海姆',
        banner: '/img/Jotunheim.png',
        description: [
            '約頓海姆是一片充滿危機的荒野，群山高聳，峽谷幽深，冰雪與風暴肆虐不止。在這片寒冷而狂野的土地上，冰霜巨人與山巨人盤踞於深谷與山巒之間，他們的要塞建於陡峭的峭壁之上，遠離凡人與諸神的世界。這裡的天空長年籠罩著冰冷的雲層，狂風怒吼，時常捲起雪幕，遮蔽視線。即便是最強大的戰士，若無神祇的庇佑，也難以在此生存。',
            '約頓海姆的巨人們性格多變，有的殘暴無情，視戰爭與掠奪為榮耀；有的則聰慧睿智，擁有深厚的魔法知識。洛基便出生於此，他的血脈融合了巨人與神的特質，使他在阿斯嘉與約頓海姆之間遊走，成為一個不可預測的存在。儘管阿薩神族與巨人們世代為敵，兩者之間的關係卻錯綜複雜，有時敵對，有時結盟。據說，當諸神黃昏降臨時，約頓海姆的巨人們將舉兵進攻阿斯嘉，掀起最終的戰爭，決定世界的存亡。',
        ],
        gallery: [
            { src: '/img/FrostPlace.webp', title: '嚴酷寒冬', info: '' },
            { src: '/img/GiantHome.webp', title: '巨人族棲地', info: '' },
            {
                src: '/img/Battleground.png',
                title: '戰場',
                info: '神族與巨人之間不斷的爭鬥，讓這片大地變得更加惡劣。',
            },
        ],
        related: [
            { slug: 'Helheim', title: '赫爾海姆', img: '/img/Helheim.png' },
            { slug: 'Midgard', title: '米德加爾德', img: '/img/Midgard.png' },
        ],
    },
    {
        slug: 'Midgard',
        title: '米德加爾德',
        banner: '/img/Midgard.png',
        description: [
            '米德加爾德，是人類的國度，也是九界中最為平衡的一環。這片大地既充滿生機，又危機四伏，戰爭、探索、愛與悲劇在此交織，塑造了無數英雄與傳說。米德加德四周環繞著無垠的海洋，而世界之蛇耶夢加得便潛伏於其中，無聲地環抱著這片世界，它的存在既象徵著保護，也預示著災難的來臨。',
            '阿薩神族對米德加德有著深厚的影響，他們時常降臨凡間，選擇英雄，改變王國的命運。瓦爾哈拉的大門向戰死的勇士敞開，而那些死於疾病或懦弱的人則將墮入海拉之境。傳說，當諸神黃昏降臨，人類的世界將陷入戰火，英雄與怪物將在此展開最後的較量，決定九界的未來。',
        ],
        gallery: [
            {
                src: '/img/Snake.png',
                title: '耶夢加德',
                info: '身形極為龐大的巨蛇，環繞著米德加爾德。',
            },
            {
                src: '/img/RainbowBridge.png',
                title: '比弗羅斯特',
                info: '連接阿斯嘉與米德加爾德的彩虹橋，眾神時不時會藉著彩虹橋到來。',
            },
            { src: '/img/RootOfTree.png', title: '世界樹的根部', info: '連結九界的世界樹根部。' },
        ],
        related: [
            { slug: 'Jotunheim', title: '約頓海姆', img: '/img/Jotunheim.png' },
            { slug: 'Muspelheim', title: '穆斯貝爾海姆', img: '/img/Muspelheim.png' },
        ],
    },
    {
        slug: 'Muspelheim',
        title: '穆斯貝爾海姆',
        banner: '/img/Muspelheim.png',
        description: [
            '穆斯貝爾海姆是火焰的國度，一個永遠燃燒不息、熾熱無比的世界。這裡的大地被熔岩覆蓋，天空被烈焰映照成橘紅色，沒有任何水源，也沒有生命能在此存活。狂風捲起炙熱的火星，使整個世界宛如一座無盡燃燒的熔爐。在這片燃燒的大地之上，火焰巨人們統治著一切，而他們的首領——蘇爾特爾，則握著一柄燃燒著不滅火焰的巨劍，他等待著世界末日的來臨，準備引燃天地，將九界化為灰燼。',
            '傳說中，當世界尚未形成時，穆斯貝爾海姆的火焰與尼福爾海姆的極寒相遇，造就了最初的生命。然而，如今的穆斯貝爾海姆只剩下毀滅的預兆，當蘇爾特與他的火焰軍團跨越彩虹橋，攻入阿斯嘉時，世界將迎來最終的戰爭。烈焰將吞噬九界，神族與人類的文明都將被火焰焚燒殆盡，迎接混沌的歸來。',
        ],
        gallery: [
            {
                src: '/img/Ginnungagap.webp',
                title: '金輪加鴻溝',
                info: '處於尼福爾海姆與穆斯貝爾海姆的交界，傳說中最初的生命誕生於此。',
            },
            {
                src: '/img/Surtur.png',
                title: '蘇爾特爾',
                info: '傳說中，當諸神黃昏來臨，他將會跨越彩虹橋，毀滅世界。',
            },
            { src: "/img/Surtr's fortress.webp", title: '蘇爾特爾的要塞', info: '' },
        ],
        related: [
            { slug: 'Midgard', title: '米德加爾德', img: '/img/Midgard.png' },
            { slug: 'Niflheim', title: '尼福爾海姆', img: '/img/Niflheim.png' },
        ],
    },
    {
        slug: 'Niflheim',
        title: '尼福爾海姆',
        banner: '/img/Niflheim.png',
        description: [
            '尼福爾海姆是一片終年不見天日的寒冰世界，濃霧籠罩著大地，冰川與毒河交織成一片荒涼的地獄。這裡是死亡的源頭，十一條劇毒之河從世界深處流淌而出，它們的源頭赫瓦格密爾漩渦翻湧，釋放著死寂與毀滅的氣息。惡龍尼德霍格在此啃噬亡者的靈魂，永不滿足。',
            '傳說，當世界初生時，正是尼福爾海姆的冰霜與穆斯貝爾海姆的火焰交融，創造了最初的生命。然而，這片土地從未見過溫暖，只有永恆的黑暗與嚴寒。在諸神黃昏之時，尼福爾海姆的霧氣將吞噬世界，帶來最終的終結。',
        ],
        gallery: [
            {
                src: '/img/Ginnungagap.webp',
                title: '金輪加鴻溝',
                info: '處於尼福爾海姆與穆스펠海姆的交界，傳說中最初的生命誕生於此。',
            },
            {
                src: '/img/GateOfHelheim.webp',
                title: '冥府之門',
                info: '通往亡者的住所，沒能光榮戰死而錯失英靈殿的死者都歸於此地。',
            },
            {
                src: '/img/Nidhogg.webp',
                title: '尼德霍格',
                info: '這條龍不斷啃噬世界之樹伊格德拉西爾的根部，使樹木受損。',
            },
        ],
        related: [
            { slug: 'Muspelheim', title: '穆스貝爾海姆', img: '/img/Muspelheim.png' },
            { slug: 'Svartalfheim', title: '斯瓦塔爾法海姆', img: '/img/Svartalfheim.png' },
        ],
    },
    {
        slug: 'Svartalfheim',
        title: '斯瓦塔爾法海姆',
        banner: '/img/Svartalfheim.png',
        description: [
            '斯瓦塔爾法海姆，也被稱為尼德威阿爾，是矮人與黑暗精靈的家園，一個位於地底深處的世界。這裡的洞窟錯綜複雜，熔爐的火焰終日不滅，無數鍛造場與工坊藏身於岩壁之中。矮人是九界中最偉大的工匠，他們精通金屬與魔法的結合，打造了虎尔的妙爾尼爾、奧丁的岡尼爾長矛，以及無數神器與傳奇裝備。',
            '雖然矮人們以鍛造與發明聞名，但他們性格孤僻，極少與外界交流。他們的王國深藏於大地之下，被無數的隧道與暗河包圍，只有極少數人能夠踏入其中。黑暗精靈則是這裡的另一支勢力，他們比光精靈更具狡詐與侵略性，時常與矮人發生衝突。據說，尼德威阿爾的最深處藏有古老的秘密，那裡的火焰比太陽還要炙熱，而矮人們正在鍛造一件足以改變世界的武器。',
        ],
        gallery: [{ src: '/img/ForgePlace.png', title: '矮人們的鍛造場', info: '' }],
        related: [
            { slug: 'Niflheim', title: '尼福爾海姆', img: '/img/Niflheim.png' },
            { slug: 'Vanaheim', title: '華納海姆', img: '/img/Vanaheim.png' },
        ],
    },
    {
        slug: 'Vanaheim',
        title: '華納海姆',
        banner: '/img/Vanaheim.png',
        description: [
            '華納海姆是一片富饒的樂土，被廣闊的森林、流淌的河流與綠意盎然的山谷所環繞。這裡的氣候溫和，四季分明，土地肥沃，萬物欣欣向榮。華納神族統御著這片天地，他們與自然緊密相連，擅長魔法、占卜與操控豐饒之力。當豐收的季節來臨，華納海姆的神祇舉行盛大的祭典，向天地祈求恩賜，使萬物生生不息。',
            '華納神族的統治者尼約德，以及他的子女弗雷與芙蕾雅，曾在這裡度過他們的歲月。在與阿薩神族的戰爭結束後，這三位神祇來到了阿斯嘉，成為阿薩神族的一員，締結了兩大神族之間的和平。儘管如此，華納海姆仍然保有自己的神秘氣息，與阿斯嘉不同，這裡更崇尚和諧與自然的平衡，而非純粹的戰爭與榮耀。許多人相信，在九界之中，華納海姆藏有最古老的魔法與預知未來的秘密，只待有緣人去發掘。',
        ],
        gallery: [
            {
                src: '/img/WeddingIsland.png',
                title: '巴里島',
                info: '隱密且美麗的小島，傳說中弗雷與葛德在此結婚。',
            },
        ],
        related: [
            { slug: 'Svartalfheim', title: '斯瓦塔爾法海姆', img: '/img/Svartalfheim.png' },
            { slug: 'Alfheim', title: '阿爾夫海姆', img: '/img/Alfheim.png' },
        ],
    },
];

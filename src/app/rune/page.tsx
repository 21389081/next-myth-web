// components/RunePage.tsx
'use client';

// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function RunePage() {
    return (
        <main>
            {/* 英雄區塊 */}
            <Container
                fluid
                className='area-background py-5 d-flex align-items-center justify-content-center'
            >
                <div>
                    <h1 className='title fw-bold text-center fade-in'>盧恩符文</h1>
                    <p className='title-info fs-4 fst-italic text-center fade-in'>
                        「刻劃於命運之石上的神秘符號，蘊含著知識、力量與預言，它們既可帶來智慧，也能引導毀滅。」
                    </p>
                </div>
            </Container>

            {/* 介紹 */}
            <Container className='hidden'>
                <h1 className='section-title text-center fw-bold pt-5'>介紹</h1>
                <hr className='info-hr' />
                <p className='section-text'>
                    盧恩字母，又稱路尼字母、如尼字母或北歐字母，在占卜和電子遊戲領域則更多的稱之為「盧恩符文」，是一類已滅絕的字母，諸多北歐民族都使用過它來記錄資訊，其中尤其以維京人最具代表性。
                </p>
                <p className='section-text'>
                    它的使用範圍廣泛遍佈於斯堪地那維亞半島與不列顛群島。斯堪地那維亞半島所用的盧恩文字被稱作弗薩克文，不列顛島所用的盧恩文字被稱作弗托克文，來源自其字母表前六個字母。
                </p>
                <p className='section-text'>
                    到了中世紀晚期的歐洲，北歐的語言和文字都被嚴重的拉丁字母化，盧恩字母喪失了日常溝通的功能之後，反而更加往神秘學的方向發展，盧恩符文作為占卜、祭祀用的符咒功能被一直保留，在基督教霸權不太嚴重的北歐國家中依然被頻繁使用。即使到了現代，這種符咒化的文字也被大量運用在和北歐、維京人主體相關的各類電影影集和電子遊戲中。此外歷史上納粹德國黨衛隊曾根據盧恩字母編造神秘符文，至今依舊在新納粹團體中流行。
                </p>

                <Row className='hidden'>
                    <Col className='text-center info'>
                        <img src='/img/rune.jpeg' alt='盧恩字母' className='img-fluid' />
                        <br />
                        <p>
                            <i className='bi bi-caret-up-fill' /> 盧恩字母
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* 起源 */}
            <Container className='hidden'>
                <h1 className='section-title text-center fw-bold pt-5'>起源</h1>
                <hr className='info-hr' />
                <p className='section-text'>
                    盧恩（rune）來自日耳曼語（rūn），希臘語的意義爲「秘密」，實際上是一種咒文。它的來源和北歐神話中的奧丁息息相關。
                </p>
                <p className='section-text'>
                    傳說，奧丁是智慧知識之神，他曾經倒吊在世界之樹上九天九夜，《賢者之歌》中記到：
                </p>
                <p className='list fst-italic fw-bold' style={{ color: '#c89b3c' }}>
                    「九夜吊在狂風飄搖的樹上，身受長矛刺傷；我被當作奧丁的祭品，自己獻祭給自己，在無人知曉的大樹上！沒有麵包充飢，沒有滴水解渴。我往下看，拾取盧恩文字，邊拾邊喊，由樹上掉落。」
                </p>
                <p className='section-text'>
                    於是，奧丁取得了盧恩文字（Runes）的智慧和奧秘。盧恩是一種咒文，只要將它刻在木、石、金屬甚或任何材料上就能得到無窮的威力。諾倫三女神（Norns）把這種文字記載的命運刻在黃金寶盾上。
                </p>
            </Container>

            {/* 歷史 */}
            <Container className='hidden'>
                <h1 className='section-title text-center fw-bold pt-5'>歷史</h1>
                <hr className='info-hr' />
                <p className='section-text'>
                    至今發現最早的盧恩文字定期為西元二世紀左右，隨著基督教傳入北歐，盧恩字母逐漸被拉丁字母取代。公元六世紀左右，盧恩字母在中歐消失；公元十一世紀左右也在斯堪地那維亞半島消失，但在斯堪地那維亞半島，盧恩字母還常常被用在裝飾圖案上。盧恩符文曾是古老歐洲民族如維京、日耳曼、塞爾特、和盎格魯薩克遜所廣泛使用的字母。盧恩已存在數千年之久，有些古老符文曾出現在世界上的古代洞穴壁畫中。
                </p>
                <p className='list'>三種最著名的盧恩字母是：</p>
                <ul className='list'>
                    <li className='list'>古弗薩克文（約150年至800年）</li>
                    <li className='list'>盎格魯撒克遜弗托克文（400年至1100年）</li>
                    <li className='list'>後弗薩克文（800年至1100年）</li>
                </ul>
                <p className='list'>後弗薩克文進一步被分成</p>
                <ul className='list'>
                    <li className='list'>丹麥語弗薩克字體</li>
                    <li className='list'>瑞典語–挪威語盧恩字體</li>
                    <li className='list'>Hälsinge Runes（不屬於任何國家的盧恩文）</li>
                </ul>
            </Container>

            {/* 占卜 */}
            <Container className='hidden'>
                <h1 className='section-title text-center fw-bold pt-5'>占卜</h1>
                <hr className='info-hr' />
                <p className='section-text'>
                    以古早傳下來的，將刻上了盧恩字母的石頭、樹、金屬、玻璃等物件，全部擲出之後挑出一個並且唸咒的方式。不過，現今一般的作法，改以將全部的盧恩字母放在袋中，一邊默想問題，一邊抓出一個盧恩字母來作為回答。另外，近來也常出現抽取印製在紙上的字母卡這種方式。
                </p>
            </Container>
        </main>
    );
}

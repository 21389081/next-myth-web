'use client';

// import img from 'next/img';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main>
            <div className='area-background py-5 d-flex align-items-center justify-content-center'>
                <div>
                    <h1 className='title fw-bold text-center fade-in'>北歐神話</h1>
                    <p className='title-info fs-4 fst-italic text-center fade-in'>
                        從創世之初到諸神的黃昏，帶你一窺北歐神話的壯麗史詩。
                    </p>
                </div>
            </div>

            {/* 北歐神話起源 */}
            <div className='container hidden'>
                {/* 標題 */}
                <h1 className='section-title text-center fw-bold pt-5'>起源</h1>
                <hr className='info-hr' />

                {/* 內文 */}
                <p className='section-text'>
                    北歐神話是北歐地區的古老傳說，起源於今日的挪威、瑞典和丹麥，
                    並隨著維京人的征服而擴展至英格蘭、愛爾蘭及蘇格蘭等地。它是維京人用來解釋
                    自然現象和生命奧秘的重要信仰體系，最早，這些故事以口述形式流傳於民間，直到 13
                    世紀才被記錄於 <span className='fst-italic'>《詩歌埃達》</span> 和
                    <span className='fst-italic'>《散文埃達》</span>{' '}
                    中。隨著基督教的傳播，北歐神話逐漸
                    淡出信仰，但其豐富的故事仍以詩歌、民間傳說的形式保存下來。近代以來，北歐神話重新
                    受到文學、電影和遊戲的青睞，成為現代文化的重要靈感來源。
                </p>

                {/* 附圖 */}
                <div className='container hidden'>
                    <div className='row'>
                        <div className='text-center col info'>
                            <img src='/img/Edda.jpg' alt='散文埃達封面' className='img-fluid' />
                            <br />
                            <Link
                                href='https://zh.wikipedia.org/zh-tw/%E6%95%A3%E6%96%87%E5%9F%83%E9%81%94'
                                className='info-img-link'
                            >
                                <i className='bi bi-caret-up-fill' /> 散文埃達
                            </Link>
                        </div>
                        <div className='text-center col info'>
                            <img src='/img/Edda2.jpg' alt='詩體埃達封面' className='img-fluid' />
                            <br />
                            <Link
                                href='https://zh.wikipedia.org/zh-tw/%E8%A9%A9%E9%AB%94%E5%9F%83%E9%81%94'
                                className='info-img-link'
                            >
                                <i className='bi bi-caret-up-fill' /> 詩體埃達
                            </Link>
                        </div>
                        <div className='text-center col info'>
                            <img
                                src='/img/Rökstenen.jpg'
                                alt='沃克符文石刻'
                                className='img-fluid'
                            />
                            <br />
                            <Link
                                href='https://zh.wikipedia.org/wiki/%E7%9B%A7%E6%81%A9%E5%AD%97%E6%AF%8D'
                                className='info-img-link'
                            >
                                <i className='bi bi-caret-up-fill' />{' '}
                                位於瑞典東約特蘭省沃克符文石刻，上面以新弗薩
                                克盧恩文字記載了與北歐神話相關的內容。
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 區域卡片 */}
            <div className='container hidden'>
                <h1 className='section-title text-center pt-5'>九大世界與宇宙觀</h1>
                <hr className='info-hr' />
                <p className='section-text'>
                    在北歐神話中，世界的結構由一棵巨大的世界之樹——
                    <strong>伊格德拉西爾</strong>{' '}
                    支撐著。這棵神樹的枝葉覆蓋整個宇宙，將九個世界彼此連結。
                    伊格德拉西爾的根系深入三大泉源，每個泉源象徵著不同的命運與力量。九大世界分佈在不同層次的
                    宇宙，神祇、巨人、人類、矮人與精靈在這些世界中各自生活，演繹出無數傳奇故事。
                </p>
                <p className='list'>九大世界可以分成三層：</p>
                <ul className='list'>
                    <li className='list'>
                        高層世界：諸神與光明生靈的家園，包含阿斯嘉、阿爾夫海姆、華納海姆。
                    </li>
                    <li className='list'>
                        中層世界：人類及巨人居住之地，包含米德加爾德、約頓海姆、斯瓦塔爾法海姆。
                    </li>
                    <li className='list'>
                        底層世界：黑暗、死亡與火焰的國度，包含尼福爾海姆、穆斯貝爾海姆、赫爾海姆。
                    </li>
                </ul>
                <div className='container hidden'>
                    <div className='row'>
                        {[
                            {
                                href: '/areas/Midgard',
                                img: '/img/Midgard.png',
                                title: '米德加爾德',
                            },
                            {
                                href: '/areas/Asgard',
                                img: '/img/asgard.png',
                                title: '阿斯嘉',
                            },
                            {
                                href: '/areas/Niflheim',
                                img: '/img/Niflheim.png',
                                title: '尼福爾海姆',
                            },
                        ].map(({ href, img, title }) => (
                            <div className='col mb-3' key={title}>
                                <Link href={href} className='text-decoration-none'>
                                    <div className='card area-card'>
                                        <img
                                            src={img}
                                            alt={title}
                                            className='card-img area-card-img'
                                        />
                                        <div className='card-body text-center area-card-text position-absolute bottom-0 w-100'>
                                            <h3 className='card-text fw-bold'>{title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                {/* 區域查看更多 */}
                <div className='container text-center hidden'>
                    <Link href='/areas' className='text-decoration-none section-more fs-5'>
                        查看更多 <i className='bi bi-arrow-right-circle' />
                    </Link>
                </div>
            </div>

            {/* 角色卡片 */}
            <div className='container hidden'>
                <h1 className='section-title text-center pt-5'>北歐神話中的神明</h1>
                <hr className='info-hr' />
                <p className='section-text'>
                    北歐神話的神明起源於混沌之初的冰與火交會之地，最早的生命是巨人尤彌爾與神聖巨牛歐德姆布拉，
                    隨著世界的創造，三位主要神祇——<strong>奧丁、威利、菲</strong>{' '}
                    殺死了尤彌爾，並用他的身體創造了大地、 海洋與天空，從此展開了神明與世界的故事。
                </p>
                <p className='list'>
                    北歐神話中的神明分為 <strong>阿薩神族</strong> 與 <strong>華納神族</strong>{' '}
                    兩個主要家族：
                </p>
                <ul className='list'>
                    <li className='list'>
                        <strong>阿薩神族</strong>{' '}
                        以戰爭、智慧與力量為核心，代表秩序與王權，主要成員有奧丁、索爾和洛基。
                    </li>
                    <li className='list'>
                        <strong>華納神族</strong>{' '}
                        則與自然、豐收和和平相關，代表繁榮與生命力，芙蕾雅和弗雷是華納神族的重要神祇，
                        後來與阿薩神族締結和平。
                    </li>
                </ul>
                <p className='list'>
                    雖然神明擁有強大力量，但他們並非不朽之身，在神話中，神明的最終歸宿是諸神黃昏，這場末日之戰象徵著世界的毀滅與重生。
                </p>
                <div className='container hidden'>
                    <div className='row'>
                        {[
                            { href: '/heros/thor', img: '/img/thor.png', title: '索爾' },
                            { href: '/heros/odin', img: '/img/Odin.webp', title: '奧丁' },
                            { href: '/heros/loki', img: '/img/Loki.png', title: '洛基' },
                        ].map(({ href, img, title }) => (
                            <div className='col mb-3' key={title}>
                                <Link href={href} className='text-decoration-none'>
                                    <div className='card heros-card'>
                                        <img
                                            src={img}
                                            alt={title}
                                            className='card-img heros-card-img'
                                        />
                                        <div className='card-body text-center heros-card-text position-absolute bottom-0 w-100'>
                                            <h3 className='card-text fw-bold'>{title}</h3>
                                            <p className='card-text-p'>查看更多</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                {/* 人物查看更多 */}
                <div className='container text-center pb-5'>
                    <Link href='/heros' className='text-decoration-none section-more fs-5'>
                        查看更多 <i className='bi bi-arrow-right-circle' />
                    </Link>
                </div>
            </div>

            {/* 用戶反饋表單 */}
            <section className='container my-5 feedback-section'>
                <h2 className='text-center mb-4'>許願池</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='userName' className='form-label'>
                            您的名字
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='userName'
                            placeholder='請輸入您的名字'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='userFeedback' className='form-label'>
                            您希望更新的內容
                        </label>
                        <textarea
                            className='form-control'
                            id='userFeedback'
                            rows={3}
                            placeholder='請描述您希望更新或添加的內容'
                        />
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn btn-primary'>
                            送出
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}

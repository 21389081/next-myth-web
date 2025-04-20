'use client';

// import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AreaIndex() {
    const areas = [
        { href: '/areas/Midgard', img: '/img/Midgard.png', title: '米德加爾德' },
        { href: '/areas/Asgard', img: '/img/Asgard.png', title: '阿斯嘉' },
        { href: '/areas/Alfheim', img: '/img/Alfheim.png', title: '阿爾夫海姆' },
        { href: '/areas/Helheim', img: '/img/Helheim.png', title: '赫爾海姆' },
        { href: '/areas/Vanaheim', img: '/img/Vanaheim.png', title: '華納海姆' },
        {
            href: '/areas/Svartalfheim',
            img: '/img/Svartalfheim.png',
            title: '斯瓦塔爾法海姆',
        },
        { href: '/areas/Niflheim', img: '/img/Niflheim.png', title: '尼福爾海姆' },
        { href: '/areas/Jotunheim', img: '/img/Jotunheim.png', title: '約頓海姆' },
        { href: '/areas/Muspelheim', img: '/img/Muspelheim.png', title: '穆斯貝爾海姆' },
    ];

    return (
        <main>
            {/* 頁面說明 */}
            <Container className='page-info py-5 fade-in text-center'>
                <div className='pt-5 pb-2'>
                    <h1 className='title fw-bold'>區域</h1>
                    <p className='title-info fs-4 fst-italic pt-2'>
                        當奧丁等人將尤彌爾的身體化作世界後，他們在大地中央埋下一顆神秘的種子。
                        這顆種子源於宇宙最初的霜與火，吸收著天地間的神力，緩緩地生長，
                        最終，它強韌的根將連結整個宇宙。
                    </p>
                </div>
                <hr className='info-hr' />
            </Container>

            {/* 區域卡片網格 */}
            <Container className='fade-in'>
                <Row xs={1} sm={2} md={3} className='g-5 mb-5'>
                    {areas.map(({ href, img, title }) => (
                        <Col key={title}>
                            <Card
                                as='a'
                                href={href}
                                className='area-card text-decoration-none position-relative'
                            >
                                <Card.Img
                                    variant='top'
                                    src={img}
                                    alt={title}
                                    className='area-card-img'
                                />
                                <Card.Body className='text-center area-card-text position-absolute bottom-0 w-100'>
                                    <Card.Title className='fw-bold card-text'>
                                        <h3>{title}</h3>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
    );
}

'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Area() {
    const heroes = [
        { href: './heros/thor', img: '/img/thor.png', title: '索爾' },
        { href: './heros/balder', img: '/img/Baldr.webp', title: '巴德爾' },
        { href: './heros/freyja', img: '/img/Freya.webp', title: '芙雷雅' },
        { href: './heros/frigga', img: '/img/Frigg.png', title: '芙麗嘉' },
        { href: './heros/freyr', img: '/img/Freyr.png', title: '弗雷' },
        { href: './heros/heimdallr', img: '/img/Heimdall.png', title: '海姆達爾' },
        { href: './heros/loki', img: '/img/Loki.png', title: '洛基' },
        { href: './heros/odin', img: '/img/Odin.webp', title: '奧丁' },
        { href: './heros/tyr', img: '/img/tyr.png', title: '提爾' },
    ];

    return (
        <main>
            {/* 頁面說明 */}
            <Container className='page-info py-5 fade-in text-center'>
                <div className='pt-5 pb-2'>
                    <h1 className='title fw-bold'>英雄</h1>
                    <p className='title-info fs-4 fst-italic pt-2'>
                        正如預言所述，隨著光明之神的殞落，命運的齒輪開始轉動。奧丁號召眾神與英靈，
                        迎向命運之戰，諸神黃昏的烈焰即將吞沒天地。這將是終結，亦是重生之始。當世界在
                        烈火與洪流中被洗滌，新生的大地將再次展開序幕，生命之樹下，萬物循環不息。
                    </p>
                </div>
                <hr className='info-hr' />
            </Container>

            {/* 英雄卡片網格 */}
            <Container className='fade-in'>
                <Row xs={2} sm={2} md={3} lg={5} className='g-2 mb-5'>
                    {heroes.map(({ href, img, title }) => (
                        <Col key={title} className='mb-5'>
                            <Card
                                as='a'
                                href={href}
                                className='heros-card text-decoration-none position-relative'
                            >
                                <Card.Img
                                    variant='top'
                                    src={img}
                                    alt={title}
                                    className='heros-card-img'
                                />
                                <Card.Body className='text-center heros-card-text position-absolute bottom-0 w-100'>
                                    <h3 className='fw-bold card-text'>{title}</h3>
                                    <Card.Text className='card-text-p'>查看更多</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
    );
}

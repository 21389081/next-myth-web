'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { AreaDetail } from '../data/area';

interface DetailClientProps {
    area: AreaDetail;
}

export default function Client({ area }: DetailClientProps) {
    return (
        <main>
            {/* 橫幅圖片 */}
            <Container fluid className='p-0 barImg fade-in'>
                <img src={area.banner} alt={`${area.title} 橫幅`} className='w-100' />
            </Container>
            {/* 標題與敘述 */}
            <Container className='py-5 fade-in'>
                <h1
                    className='fw-bold text-center story-title position-relative'
                    style={{ marginTop: -100 }}
                >
                    {area.title}
                </h1>
                <hr className='info-hr' />

                {/* description 為字串陣列，一段<p>對應一個陣列元素 */}
                {area.description.map((text, idx) => (
                    <p
                        key={idx}
                        className={idx === 0 ? 'story-info first-text pt-5' : 'story-info mt-3'}
                    >
                        {text}
                    </p>
                ))}
            </Container>
            {/* 該區域特點（如果有額外特點可以再加條件顯示） */}
            <Container className='pb-5 hidden more-info'>
                <span>特點</span>
            </Container>
            <Container className='gallery-container hidden'>
                <div className='gallery-grid'>
                    {area.gallery.map(({ src, title, info }, idx) => (
                        <div
                            key={idx}
                            className='gallery-item position-relative d-flex align-items-center justify-content-center text-center'
                        >
                            <img src={src} alt={title} className='w-100 h-100' />
                            <div className='gallery-item-textbox d-flex align-items-center justify-content-center text-center position-absolute'>
                                <div className='w-100 gallery-item-textbox-text'>
                                    <h3 className='fw-bold'>{title}</h3>
                                    {info && (
                                        <>
                                            <div className='gallery-item-textbox-hr my-3' />
                                            <p className='gallery-item-textbox-text-info'>{info}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            {/* 其他區域 */}
            <Container className='py-5 more-info text-center'>
                <span>其他區域</span>
            </Container>
            <Container className='more-area'>
                <Row xs={1} sm={2} className='g-4'>
                    {area.related.map(({ slug: relSlug, title, img }) => (
                        <Col key={relSlug} className='mb-3'>
                            <Card
                                as='a'
                                href={`/areas/${relSlug}`}
                                className='area-card text-decoration-none position-relative'
                            >
                                <Card.Img src={img} alt={title} className='area-card-img' />
                                <Card.Body className='text-center area-card-text position-absolute bottom-0 w-100'>
                                    <Card.Title>
                                        <h3 className='fw-bold card-text'>{title}</h3>
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

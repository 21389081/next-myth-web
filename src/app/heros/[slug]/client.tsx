// client.tsx
'use client';

import React from 'react';
import { HeroDetail } from '../data/hero';

interface ClientProps {
    hero: HeroDetail;
}

export default function Client({ hero }: ClientProps) {
    const { title, tagline, sections } = hero;

    return (
        <main>
            {/* 標題區 - 完全保留原生 class */}
            <div className='area-background py-5 d-flex align-items-center justify-content-center'>
                <div>
                    <h1 className='title fw-bold text-center fade-in'>{title}</h1>
                    <p className='title-info fs-4 fst-italic text-center fade-in'>{tagline}</p>
                </div>
            </div>

            {/* 章節區 - 每個 section 都使用原生 .container.hidden 結構 */}
            {sections.map((section, idx) => (
                <div className='container hidden' key={idx}>
                    <h1 className='section-title text-center fw-bold pt-5'>{section.title}</h1>
                    <hr className='info-hr' />

                    {section.paragraphs.map((text, i) => (
                        <p className='section-text' key={i}>
                            {text}
                        </p>
                    ))}

                    {section.gallery && (
                        <div className='container hidden'>
                            <div className='row'>
                                {section.gallery.map((img, j) => (
                                    <div className='text-center col info' key={j}>
                                        <img
                                            src={img.src}
                                            className='img-fluid'
                                            alt={img.caption}
                                        />
                                        <br />
                                        <p>
                                            <i className='bi bi-caret-up-fill' /> {img.caption}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* 回到英雄頁面 */}
            <div className='container text-center hidden pb-3'>
                <a href='../index_heros.html' className='text-decoration-none section-more fs-5'>
                    <i className='bi bi-arrow-left' /> 回到英雄頁面
                </a>
            </div>
        </main>
    );
}

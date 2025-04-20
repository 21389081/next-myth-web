'use client';
import { useEffect } from 'react';

export default function Animation() {
    useEffect(() => {
        const sections = document.querySelectorAll('.hidden, .fade-in');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible', 'visible-no-move');
                    observer.unobserve(entry.target); // 只執行一次
                }
            });
        });

        sections.forEach((section) => observer.observe(section));

        // cleanup: 元件卸載時斷開 observer
        return () => {
            observer.disconnect();
        };
    }, []);
    return null;
}

'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Animation() {
    const pathname = usePathname();
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
    }, [pathname]);
    return null;
}

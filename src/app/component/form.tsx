'use client';
import { useEffect } from 'react';
export default function Form() {
    useEffect(() => {
        // 新增的表單提交處理代碼
        const form = document.querySelector<HTMLFormElement>('form');
        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault(); // 防止表單提交刷新頁面

                const userName = document.getElementById('userName') as HTMLInputElement;
                const userFeedback = document.getElementById('userFeedback') as HTMLTextAreaElement;

                console.log('用戶名稱:', userName.value);
                console.log('希望更新的內容:', userFeedback.value);

                // 清空表單
                form.reset();
            });
        }
    }, []);
    return null;
}

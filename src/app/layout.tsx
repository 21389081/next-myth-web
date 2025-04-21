import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import NavBar from './component/navBar';
import Footer from './component/footer';
import Animation from './component/animation';
import Form from './component/form';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: '北歐神話',
    description: 'made by VincentChen',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Animation />
                <NavBar />
                {children}
                <Footer />
                <Form />
            </body>
        </html>
    );
}

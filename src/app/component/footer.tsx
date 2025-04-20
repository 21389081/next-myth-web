'use client';
import { Container } from 'react-bootstrap';
export default function Footer() {
    return (
        <footer className='text-muted py-5'>
            <Container>
                <p className=' mb-1 d-flex justify-content-center align-items-center'>
                    <a href='#' className='text-decoration-none '>
                        回到最上方
                    </a>
                </p>
                <br />
                <p
                    className='mb-1  d-flex justify-content-center align-items-center '
                    style={{ color: '#6c757d' }}
                >
                    Made by &copy; VincentChen
                </p>
            </Container>
        </footer>
    );
}

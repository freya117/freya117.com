import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'CV',
}

export default async function CV() {
    return (
        <iframe src='/static/cv.pdf' className='w-full max-h-screen min-h-screen' />
    )
}
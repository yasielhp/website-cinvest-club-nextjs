import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const poppins = localFont({
  src: [
    {
      path: '/fonts/poppins-thin.ttf',
      style: 'normal',
      weight: '100',
    },
    {
      path: '/fonts/poppins-thinitalic.ttf',
      style: 'italic',
      weight: '100',
    },
    {
      path: '/fonts/poppins-extralight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: '/fonts/poppins-extralightitalic.ttf',
      style: 'italic',
      weight: '200',
    },
    {
      path: '/fonts/poppins-light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '/fonts/poppins-lightitalic.ttf',
      style: 'italic',
      weight: '300',
    },
    {
      path: '/fonts/poppins-regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '/fonts/poppins-italic.ttf',
      style: 'italic',
      weight: '400',
    },
    {
      path: '/fonts/poppins-medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '/fonts/poppins-mediumitalic.ttf',
      style: 'italic',
      weight: '500',
    },
    {
      path: '/fonts/poppins-semibold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '/fonts/poppins-semibolditalic.ttf',
      style: 'italic',
      weight: '600',
    },
    {
      path: '/fonts/poppins-bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '/fonts/poppins-bolditalic.ttf',
      style: 'italic',
      weight: '700',
    },
    {
      path: '/fonts/poppins-extrabold.ttf',
      style: 'normal',
      weight: '800',
    },
    {
      path: '/fonts/poppins-extrabolditalic.ttf',
      style: 'italic',
      weight: '800',
    },
    {
      path: '/fonts/poppins-black.ttf',
      style: 'normal',
      weight: '900',
    },
    {
      path: '/fonts/poppins-blackitalic.ttf',
      style: 'italic',
      weight: '900',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Cinvest Club - Comunidad de habla hispana',
  description:
    'No importa si eres un principiante o un experto, todos son bienvenidos. Descubre, conecta y aprende junto a nosotros en un ambiente amigable.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Poppins, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
})

export const metadata: Metadata = {
  title: 'Eduarda Santana Advocacia | Direito Civil e Família',
  description:
    'Escritório especializado em Direito Civil e Direito de Família. Atendimento personalizado e estratégias jurídicas sob medida para cada cliente.',
  generator: 'v0.app',
  keywords: [
    'advogada',
    'direito civil',
    'direito de família',
    'divórcio',
    'inventário',
    'guarda',
    'contratos',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body
        className={`${poppins.variable} ${cinzel.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

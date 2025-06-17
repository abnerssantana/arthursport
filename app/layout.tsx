import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arthur Sport - Transformação Física e Artes Marciais',
  description: 'Desperte o herói que existe em você. Consultoria física personalizada, Kung Fu tradicional, Sanda e combate urbano. Transforme seu corpo e mente com Arthur Sport.',
  keywords: 'arthur sport, transformação física, kung fu, sanda, artes marciais, consultoria fitness, defesa pessoal, combate urbano',
  authors: [{ name: 'Arthur Sport' }],
  openGraph: {
    title: 'Arthur Sport - Transformação Física e Artes Marciais',
    description: 'Desperte o herói que existe em você. Consultoria física personalizada, Kung Fu tradicional, Sanda e combate urbano.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

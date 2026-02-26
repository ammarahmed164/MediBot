import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MediBot - Your AI-Powered Smart Health Assistant',
  description: 'Get instant health guidance with AI-powered symptom analysis, disease prediction, and personalized health recommendations. Available 24/7 for your health needs.',
  keywords: 'health, AI, chatbot, symptom checker, medical assistant, healthcare, telemedicine',
  authors: [{ name: 'MediBot Team' }],
  openGraph: {
    title: 'MediBot - Your AI-Powered Smart Health Assistant',
    description: 'Get instant health guidance with AI-powered symptom analysis',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

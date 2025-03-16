import type { Metadata } from "next"
import Link from "next/link"
import { Inter } from "next/font/google"
import "./globals.css"
import "./barber-animations.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/context/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kapsalon Stars Hair Salon",
  description: "Premium hair salon services for all hair types and styles at Kapsalon Stars",
  generator: 'v0.dev'
}

// Add Content Security Policy to allow YouTube embedding
export const headers = {
  'Content-Security-Policy': 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://s.ytimg.com; " +
    "frame-src https://www.youtube.com; " +
    "img-src 'self' https://i.ytimg.com https://s.ytimg.com data:; " +
    "connect-src 'self'; " +
    "style-src 'self' 'unsafe-inline';"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add preconnect links for YouTube */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
      </head>
      <body className={inter.className} style={{isolation:"isolate"}} suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
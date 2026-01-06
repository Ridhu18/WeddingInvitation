import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "amishawedsnishit",
  description: "You are cordially invited to celebrate the wedding of Amisha and Nishit.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/wedding-icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/wedding-icon.svg",
        sizes: "any",
      },
    ],
    apple: "/wedding-icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

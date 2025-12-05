import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bravemind Enterprise - Professional Solar Panel Installation",
  description:
    "Power your future with clean solar energy. Professional solar panel installation for homes, businesses, and communities across Nigeria.",
  keywords: ["solar panels", "solar installation", "renewable energy", "Nigeria", "solar battery", "green energy"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1B4965",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

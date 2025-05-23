import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N-Hans AI - Transforming Education with AI",
  description:
    "N-Hans AI provides AI-powered solutions for educational institutions, making information accessible, instant, and multilingual for students worldwide.",
  icons: {
    icon: "/nhansai-mini.svg",
  },
  openGraph: {
    images: ["/nhansai-mini.svg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* <div className="container bg-red-500 text-white p-8">Test Tailwind</div> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

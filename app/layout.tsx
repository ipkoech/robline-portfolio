import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Robline Kipkoech Yegon | Full Stack Developer",
  description:
    "Portfolio of Robline Kipkoech Yegon, Co-founder & Lead Developer at NoteBook+. Full Stack Developer and Technical Leader specializing in Python, PHP, JavaScript, Ruby, AI technologies, and cloud platforms including AWS, GCP, and Azure.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem={true} 
          disableTransitionOnChange={false}
        >
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
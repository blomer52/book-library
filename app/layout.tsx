import './globals.css'
import localFont from 'next/font/local'

const geistSans = localFont({
  src: './fonts/Geist-Regular.woff2',
  variable: '--font-geist-sans',
  weight: '400',
})

const geistMono = localFont({
  src: './fonts/GeistMono-Regular.woff2',
  variable: '--font-geist-mono',
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-gray-100 p-4 shadow-sm">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-blue-600">
              Book Library
            </a>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

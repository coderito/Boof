import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'books.dev - 10 books for life',
  description: 'Discover the 10 essential books that you must read in your life. Immerse yourself in captivating stories, deep insights, and transformative perspectives spanning different literary genres. Get ready for an enriching literary journey.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

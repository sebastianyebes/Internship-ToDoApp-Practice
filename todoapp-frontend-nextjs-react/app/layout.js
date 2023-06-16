import './globals.css'

export const metadata = {
  title: 'Todo App',
  description: 'Practice',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}

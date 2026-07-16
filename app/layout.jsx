import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'Dr. Solomon | Family Medicine & General Practice',
  description: 'Achieve the best version of your health. Compassionate, comprehensive care from Dr. Solomon. Book your appointment today.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script dangerouslySetInnerHTML={{ __html: `
          const io = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
          }, { threshold: 0.1 });
          document.querySelectorAll('section').forEach(s => io.observe(s));
        `}} />
      </body>
    </html>
  )
}

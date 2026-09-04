import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { getSettings } from '../../sanity/lib/client'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings()
  return {
    title: settings?.title || 'Columbia Gorge Humane Society',
    description: settings?.description || 'Rescue, care, and rehome cats and dogs across the United States.',
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSettings()

  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --ink-950: #7D7847;
            --ink-900: #726D40;
            --ink-800: #8B8653;
            --ink-700: #696339;
            --ink-600: #9A9569;
            --ink-500: #ABA680;
            --cyan-50: #FFF7EA;
            --cyan-100: #FFEBD1;
            --cyan-200: #FFD9A6;
            --cyan-300: #FFDCA8;
            --cyan-400: #FFB13D;
            --cyan-500: #FF9E0A;
            --cyan-600: #EE8B00;
            --cyan-700: #A96200;
            --cyan-800: #7E4900;
            --cyan-900: #5F5B33;
            --slate-300: #F2F0E5;
            --slate-400: #E8E5D6;
            --border-default: #E6E2D4;
            --border-strong: #D3CFBD;
            --surface-page: #FAF8F2;
            --surface-card: #FFFFFF;
            --surface-sunken: #F2EFE4;
            --text-primary: #141414;
            --text-secondary: #5C5A4E;
            --text-tertiary: #8E8A78;
            --text-link: var(--cyan-700);
          }
          body {
            margin: 0;
            background: var(--surface-page);
            color: var(--text-primary);
            font-family: system-ui, -apple-system, sans-serif;
          }
          a {
            color: var(--cyan-700);
            text-decoration: none;
          }
          a:hover {
            color: var(--cyan-800);
            text-decoration: underline;
          }
        `}</style>
      </head>
      <body>
        <div className="min-h-screen flex flex-col bg-[var(--surface-page)]">
          <Header settings={settings} />
          <main className="flex-1">
            {children}
          </main>
          <Footer settings={settings} />
        </div>
      </body>
    </html>
  )
}

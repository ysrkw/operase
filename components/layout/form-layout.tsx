import Link from 'next/link'

import { Copyright } from './parts/copyright'
import { Logo } from './parts/logo'

export function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid place-items-center min-h-screen">
      <header className="flex items-center justify-center min-h-16">
        <Link href="/">
          <Logo />
        </Link>
      </header>
      <article className="w-full max-w-md px-4 md:px-0 py-4">
        {children}
      </article>
      <footer className="flex items-center justify-center min-h-16">
        <Copyright />
      </footer>
    </main>
  )
}
